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
| `echo -e "overlay\nbr_netfilter" \| sudo tee /etc/modules-load.d/containerd.conf`| Load `overlay` & `br_netfilter` | Needed for networking | `lsmod | grep br_netfilter` |
| `sudo modprobe overlay && sudo modprobe br_netfilter` | Load kernel modules | Needed for container networking and filesystems | `lsmod | grep br_netfilter` |
| `echo -e "net.bridge.bridge-nf-call-iptables = 1\nnet.bridge.bridge-nf-call-ip6tables = 1\nnet.ipv4.ip_forward = 1" \| sudo tee /etc/sysctl.d/99-kubernetes-cri.conf` | Enable iptables, IPv6, and forwarding | Needed for services and routing | `sysctl net.ipv4.ip_forward` = 1 |
| `sudo sysctl --system ` | Apply sysctl settings | Enable ip_forward and bridge netfilter | `sysctl net.ipv4.ip_forward` = 1 |
| `sudo apt install -y containerd` | Install container runtime | Required for Pods | `systemctl status containerd` |
| `ssudo mkdir -p /etc/containerd && containerd config default \| sudo tee /etc/containerd/config.toml >/dev/null  ` | Create default config for containerd and put it in config.toml | Configuration for containerd to run | cat config.toml should have configurations sudo |
| Edit `/etc/containerd/config.toml` and set `SystemdCgroup=true` | Align cgroup drivers | Kubelet & containerd must use same cgroup driver | `grep SystemdCgroup /etc/containerd/config.toml` |
| `sudo systemctl restart/enable containerd` | Restart containderd and enable it so it runs automatically | Need containerd to run automatically for kubernetes to function properly | Systemctl status containerd shoud show enabled and active |

**Tip:** Use `grep –nF 'pattern' filename` to find line numbers.

---

## 2. Install Kubernetes Tools (All Nodes)
Install `kubelet`, `kubeadm`, and `kubectl`. These form the core of Kubernetes.

**Reflection:** Installing GPG keys and repositories reinforces package security principles.

| Command | Purpose | Why Necessary | Verification |
|----------|----------|----------------|---------------|
| `sudo apt install -y apt-transport-https ca-certificates curl gpg` | Install prereqs | Enable HTTPS repos and key management | `curl --version`, `gpg --version` |
| `sudo mkdir -p /etc/apt/keyrings`<br>`curl -fsSL https://pkgs.k8s.io/core:/stable:/v1.30/deb/Release.key \| sudo gpg --dearmor -o /etc/apt/keyrings/kubernetes-apt-keyring.gpg` | Add Kubernetes repo key | Verify and trust Kubernetes packages | `ls /etc/apt/keyrings/` |
| `echo "deb [signed-by=/etc/apt/keyrings/kubernetes-apt-keyring.gpg] https://pkgs.k8s.io/core:/stable:/v1.30/deb/ /" \| sudo tee /etc/apt/sources.list.d/kubernetes.list` | Add Kubernetes apt repo | Source for kubeadm, kubelet, kubectl | `cat /etc/apt/sources.list.d/kubernetes.list` |
| `sudo apt update && sudo apt install -y kubelet kubeadm kubectl` | Install Kubernetes tools | Needed to bootstrap and manage cluster | `kubeadm version`, `kubectl version --client` |
| `sudo apt-mark hold kubelet kubeadm kubectl` | Prevent auto-updates | Avoid version mismatches across nodes | `apt-mark showhold` |


---

## 3. Control Plane Initialization
Initialize control-plane and configure networking.

**Reflection:** Similar to promoting a domain controller — defines the cluster brain.

| Command | Purpose | Why Necessary | Verification |
|----------|----------|----------------|---------------|
| `sudo kubeadm init --apiserver-advertise-address=192.168.101.89 --pod-network-cidr=10.244.0.0/16` | Initialize the control-plane node and set up cluster core components | Bootstraps the control plane by creating the API server, etcd, controller manager, scheduler, and certificates. It also installs core add-ons like DNS and kube-proxy. Without initialization, worker nodes cannot join and the cluster cannot function. | `kubectl get nodes` after setup should show the control-plane node in `NotReady` state until networking is applied. |
| `kubeadm join 192.168.101.89:6443 --token <token> --discovery-token-ca-cert-hash <hash>` | Join worker nodes to the cluster | Connects a node to the control-plane using a secure token and CA hash, allowing it to register as a worker and start running workloads. | `kubectl get nodes` should show the new node after a few minutes. Use `kubeadm token list` to check tokens or `kubeadm token create --print-join-command` to generate a new one if expired. |
| `mkdir -p $HOME/.kube`<br>`sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config`<br>`sudo chown $(id -u):$(id -g) $HOME/.kube/config` | Configure `kubectl` for the current user | Copies the admin kubeconfig to the user’s home directory and adjusts ownership so `kubectl` commands can be executed without `sudo`. Without this, you’d need elevated privileges for every command. | `kubectl get nodes` should return the cluster’s nodes successfully without `sudo`. |
| `kubectl apply -f https://raw.githubusercontent.com/flannel-io/flannel/refs/heads/master/Documentation/kube-flannel.yml` | Deploy the Flannel CNI plugin (Pod network) | Installs a Container Network Interface (CNI) to enable pod-to-pod communication across nodes. Without it, pods cannot communicate between nodes, keeping nodes in `NotReady` state. | `kubectl -n kube-system get pods -o wide` should show `flannel` pods running, and `kubectl get nodes` should show nodes as `Ready`. |

###At this point, all the nodes should be in the cluster connected. 

Verify node readiness:
```bash
kubectl get nodes
```

---

## 4. Cluster Health and Sanity Checks
Test inter-pod connectivity and DNS resolution.

```markdown
| Command | Purpose | Why Necessary | Verification |
|----------|----------|----------------|---------------|
| `Pod_a=<pod_name> in node1`<br>`Pod_b_ip=<pod_ip> of pod in node2`<br>`kubectl exec -it $Pod_a -- ping -c3 $Pod_b_ip` | Test Pod-to-Pod cross-node connectivity | Verifies that the cluster network (CNI) correctly routes traffic between pods on different nodes. Confirms that the network overlay (e.g., Flannel, Calico) is functioning. | Ping should succeed with no packet loss, proving cross-node communication works. |
| `POD=$(kubectl get pod -l app=netshoot -o jsonpath='{.items[0].metadata.name}')`<br>`kubectl exec -it $POD -- nslookup kubernetes.default` | Verify DNS resolution inside the cluster | Confirms that CoreDNS is operational and that pods can resolve internal service names to ClusterIPs. Without functional DNS, services cannot communicate by name. | Should resolve `kubernetes.default` to a ClusterIP, confirming DNS health. |
| `kubectl create deploy echo --image=hashicorp/http-echo -- /http-echo -text="ok"`<br>`kubectl expose deploy echo --port=5678`<br>`kubectl exec -it $POD -- wget -qO- http://echo:5678` | Validate Service-to-Pod routing | Ensures that Kubernetes Services correctly route traffic to backend pods using cluster networking and kube-proxy. Validates internal load balancing. | Output should return `ok`, confirming service routing and pod reachability. |
```

All tests should succeed (ping, DNS, service routing).

---

## 5. Infrastructure Installation
Install essential tools.

| Command | Purpose | Why Necessary | Verification |
|----------|----------|----------------|---------------|
| `Pod_a=<pod_name> in node1`<br>`Pod_b_ip=<pod_ip> of pod in node2`<br>`kubectl exec -it $Pod_a -- ping -c3 $Pod_b_ip` | Test Pod-to-Pod cross-node connectivity | Verifies that the cluster network (CNI) correctly routes traffic between pods on different nodes. Confirms that the network overlay (e.g., Flannel, Calico) is functioning. | Ping should succeed with no packet loss, proving cross-node communication works. |
| `POD=$(kubectl get pod -l app=netshoot -o jsonpath='{.items[0].metadata.name}')`<br>`kubectl exec -it $POD -- nslookup kubernetes.default` | Verify DNS resolution inside the cluster | Confirms that CoreDNS is operational and that pods can resolve internal service names to ClusterIPs. Without functional DNS, services cannot communicate by name. | Should resolve `kubernetes.default` to a ClusterIP, confirming DNS health. |
| `kubectl create deploy echo --image=hashicorp/http-echo -- /http-echo -text="ok"`<br>`kubectl expose deploy echo --port=5678`<br>`kubectl exec -it $POD -- wget -qO- http://echo:5678` | Validate Service-to-Pod routing | Ensures that Kubernetes Services correctly route traffic to backend pods using cluster networking and kube-proxy. Validates internal load balancing. | Output should return `ok`, confirming service routing and pod reachability. |


### Reset Cluster (if needed or you mess up something, for example the external ip of the nodes changed which I tried fixing and messed up whole lot of things)
```bash
sudo kubeadm reset -f
sudo systemctl stop kubelet containerd
sudo rm -rf /etc/cni/net.d /var/lib/cni/ /var/lib/kubelet /etc/kubernetes /var/lib/etcd
sudo ip link delete cni0
sudo ip link delete flannel.1
```

---

## 6. Containerizing the Apps

### 6.1 Writing Dockerfiles

A **Dockerfile** is a blueprint for creating a container image.  
For my portfolio app, I used two separate **Node:20-alpine** images — one for **build** and one for **runtime**.

1. In the **build stage**, I copied the `package*.json` files into `/app` and ran `npm ci` to perform a clean installation of dependencies.  
   Using `npm ci` instead of `npm install` ensures reproducible builds and faster installs when `package-lock.json` is present.

2. I then used `COPY . .` to copy the full source code (excluding files in `.dockerignore`) and ran `npm run build`, which created the production build of the app.

3. In the **runtime stage**, I used another **Node:20-alpine** image for a lightweight environment.  
   I copied only the compiled output — static, public, and standalone files — into the new image.  
   This minimizes image size and attack surface.

4. Permissions were set using:
   ```bash
   RUN mkdir -p .next/cache && chown -R node:node .next
   ```
5. I used the **USER node** directive for security (to avoid running as root) and exposed port 3000.
6. Finally, the container runs the app using:
   ```bash
   CMD ["node", "server.js"]
   ```

**Dockerfile for our NextPortfolio App**
```bash
# Build stage
FROM node:20-alpine AS build
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm ci

# Copy all files and build
COPY . .
RUN npm run build

# Production stage
FROM node:20-alpine
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3000

# Copy only necessary files from build stage
COPY --from=build /app/.next/standalone ./
COPY --from=build /app/.next/static ./.next/static
COPY --from=build /app/public ./public

# Give permission to node user
RUN mkdir -p .next/cache && chown -R node:node .next

# Run as non-root user
USER node
EXPOSE 3000

# Start application
CMD ["node", "server.js"]

```
   
### 6.2 Argo CD Setup
Install via [official guide](https://argo-cd.readthedocs.io/en/stable/getting_started/). Convert `argocd-server` service to LoadBalancer (`kubectl –n argocd edit svc argocd-server`) and allocate some MetalLB IP range for example, `192.168.101.220–230`.

**MetalLB Configuration (metallb-pool.yaml)**
```yaml
# metallb-pool.yaml

apiVersion: metallb.io/v1beta1
kind: IPAddressPool
metadata:
  name: lb-pool
  namespace: metallb-system
spec:
  addresses:
    - 192.168.101.200-192.168.101.210  # make sure these are UNUSED

---
apiVersion: metallb.io/v1beta1
kind: L2Advertisement
metadata:
  name: l2
  namespace: metallb-system
```

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
