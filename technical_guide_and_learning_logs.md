# Kubernetes Cluster Setup – Technical Guide and Log

## 1. Boilerplate Setup (All Nodes)
Prepare all nodes with consistent OS settings, disable swap, apply sysctl parameters, and install containerd.

**Reflection:** Swap must be disabled for accurate memory accounting. `ip_forward` and `br_netfilter` enable Pod networking across nodes.

### Commands and Purpose
| Command | Purpose | Why Necessary | Verification |
|----------|----------|----------------|---------------|
| `sudo apt update && sudo apt -y upgrade` | Update packages | Ensure OS is patched | `apt list --upgradable` |
| `sudo swapoff -a` | Disable swap temporarily | Scheduler needs no swap | `free -h` shows 0 swap |
| `sudo sed -i '/ swap / s/^/#/' /etc/fstab` | Disable swap permanently by commenting the swap line in /etc/fstab file | Prevent swap after reboot | `cat /etc/fstab` |
| `cat <<EOF \| sudo tee /etc/modules-load.d/containerd.conf 
overlay 
br_netfilter 
EOF` | Load `overlay` & `br_netfilter` | Needed for networking | `lsmod | grep br_netfilter` |
| `/etc/sysctl.d/99-kubernetes-cri.conf` | Enable iptables, IPv6, and forwarding | Needed for services and routing | `sysctl net.ipv4.ip_forward` = 1 |
| `sudo apt install -y containerd` | Install container runtime | Required for Pods | `systemctl status containerd` |

Edit `/etc/containerd/config.toml`: set `SystemdCgroup=true`. Restart and enable containerd.

**Tip:** Use `grep –nF 'pattern' filename` to find line numbers.

---

## 2. Install Kubernetes Tools (All Nodes)
Install `kubelet`, `kubeadm`, and `kubectl`. These form the core of Kubernetes.

**Reflection:** Installing GPG keys and repositories reinforces package security principles.

```bash
sudo mkdir -p /etc/apt/keyrings
curl -fsSL https://pkgs.k8s.io/core:/stable:/v1.30/deb/Release.key | sudo gpg --dearmor -o /etc/apt/keyrings/kubernetes-apt-keyring.gpg
echo "deb [signed-by=/etc/apt/keyrings/kubernetes-apt-keyring.gpg] https://pkgs.k8s.io/core:/stable:/v1.30/deb/ /" | sudo tee /etc/apt/sources.list.d/kubernetes.list
sudo apt update && sudo apt install -y kubelet kubeadm kubectl
sudo apt-mark hold kubelet kubeadm kubectl
```

---

## 3. Control Plane Initialization
Initialize control-plane and configure networking.

```bash
sudo kubeadm init --apiserver-advertise-address=192.168.101.89 --pod-network-cidr=10.244.0.0/16
```

**Reflection:** Similar to promoting a domain controller — defines the cluster brain.

Configure kubectl:
```bash
mkdir -p $HOME/.kube
sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
sudo chown $(id -u):$(id -g) $HOME/.kube/config
```

Deploy Flannel:
```bash
kubectl apply -f https://raw.githubusercontent.com/flannel-io/flannel/master/Documentation/kube-flannel.yml
```

Verify node readiness:
```bash
kubectl get nodes
```

---

## 4. Cluster Health and Sanity Checks
Test inter-pod connectivity and DNS resolution.

```bash
kubectl exec -it podA -- ping -c3 <podB_IP>
kubectl exec -it <pod> -- nslookup kubernetes.default
kubectl create deploy echo --image=hashicorp/http-echo -- /http-echo -text="ok"
kubectl expose deploy echo --port=5678
kubectl exec -it <pod> -- wget -qO- http://echo:5678
```

All tests should succeed (ping, DNS, service routing).

---

## 5. Infrastructure Installation
Install essential tools.

### Metrics Server
```bash
kubectl apply -f https://github.com/kubernetes-sigs/metrics-server/releases/latest/download/components.yaml
kubectl -n kube-system patch deployment metrics-server --type='json' -p='[{"op":"add","path":"/spec/template/spec/containers/0/args/-","value":"--kubelet-insecure-tls"}]'
```

### Ingress Controller
```bash
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/main/deploy/static/provider/baremetal/deploy.yaml
```

### Reset Cluster (if needed)
```bash
sudo kubeadm reset -f
sudo systemctl stop kubelet containerd
sudo rm -rf /etc/cni/net.d /var/lib/cni/ /var/lib/kubelet /etc/kubernetes /var/lib/etcd
sudo ip link delete cni0
sudo ip link delete flannel.1
```

---

## 6. Containerizing Applications
### 6.1 Dockerfile Summary
Multi-stage build using `node:20-alpine`:
- Stage 1: Build → install dependencies, run `npm run build`.
- Stage 2: Runtime → copy build artifacts, run `node server.js`.
- Non-root user, port 3000 exposed.

### 6.2 Argo CD Setup
Install via [official guide](https://argo-cd.readthedocs.io/en/stable/getting_started/). Convert `argocd-server` service to LoadBalancer and use MetalLB IP range `192.168.101.220–230`.

Extract admin password:
```bash
kubectl -n argocd get secret argocd-initial-admin-secret -o jsonpath='{.data.password}' | base64 -d && echo
```

**Repo Structure**
```
manifests/
  base/
    deployment.yaml
    service.yaml
    kustomization.yaml
  dev/
    ingress.yaml
    kustomization.yaml
  stage/
    ingress.yaml
    kustomization.yaml
  prod/
    ingress.yaml
    kustomization.yaml
```

### 6.3 Example Deployment (next-portfolio)
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: next-portfolio
spec:
  replicas: 2
  strategy:
    type: RollingUpdate
    rollingUpdate:
      maxUnavailable: 1
      maxSurge: 1
  selector:
    matchLabels:
      app: next-portfolio
  template:
    metadata:
      labels:
        app: next-portfolio
      annotations:
        prometheus.io/scrape: "true"
        prometheus.io/port: "3000"
    spec:
      serviceAccountName: next-portfolio-sa
      securityContext:
        runAsNonRoot: true
        runAsUser: 10001
        runAsGroup: 30001
      containers:
        - name: next-portfolio
          image: docker.io/nishans0/next-portfolio:v0.0.1
          ports:
            - containerPort: 3000
          resources:
            requests:
              cpu: "250m"
              memory: "256Mi"
            limits:
              cpu: "500m"
              memory: "512Mi"
```

### 6.4 Pre-Deploy Tests
#### YAML Lint
```bash
yamllint manifests/
```
#### Render Check
```bash
kustomize build manifests/overlays/dev >/dev/null
```
#### Schema Validation
```bash
kustomize build manifests/overlays/dev | kubeconform --strict --ignore-missing-schemas
```
#### Policy Tests
```bash
kustomize build manifests/overlays/dev | conftest test -
```
Policies enforced:
- No `latest` tag
- Must have `app` label
- No default namespace
- Resource limits required
- Non-privileged containers only

---

## 7. Argo CD Apps
Example app manifest:
```yaml
project: portfolio-apps
source:
  repoURL: https://github.com/nishanau/NextJSPortfolioSite.git
  path: manifests/overlays/dev
  targetRevision: HEAD
destination:
  server: https://kubernetes.default.svc
  namespace: dev
syncPolicy:
  automated:
    prune: true
    selfHeal: true
  syncOptions:
    - ApplyOutOfSyncOnly=true
    - CreateNamespace=true
```

---

## 8. GitHub Actions (CI/CD)
Initially combined, later split into:
- **CI:** Lint, validate, build, and push Docker image.
- **CD:** Sync updated image tag via ArgoCD.

Each flow runs pre-deploy tests (yamllint, kubeconform, conftest) before deployment.

---

### Final Notes
- Add version pinning and RBAC in future iterations.
- Implement centralized monitoring and alerting.
- Include full CI workflow YAML for completeness.

---

**Outcome:**
A reproducible, security-conscious, and automation-ready Kubernetes deployment pipeline aligning with industry standards.
