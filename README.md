# Kubernetes GitOps CI/CD Platform – Overview

This project implements a **production-grade, fully automated CI/CD + GitOps pipeline** for deploying containerized applications (Next.js portfolio as the reference app) into a **Kubernetes cluster** using:

- **Kubeadm-built cluster (multi-node)**
- **Flannel** as the CNI
- **MetalLB** for load balancing
- **Argo CD** for GitOps
- **GitHub Actions** for CI + image builds + GitOps bumps
- **Kustomize overlays** for environment separation
- **Reusable workflows** and a **pre-deploy tooling container**
- **Secure container practices** (non-root, read-only FS, probes, resource limits)

The aim is a reproducible, secure, automation-friendly workflow aligned with industry standards.

---

## 1. Cluster Setup (High-Level)

### Node Preparation
- Swap disabled  
- `ip_forward` + `br_netfilter` enabled  
- Containerd installed (`SystemdCgroup=true`)  
- Kubernetes tools: `kubeadm`, `kubelet`, `kubectl`

### Control Plane
```bash
kubeadm init   --apiserver-advertise-address=<control-plane-ip>   --pod-network-cidr=10.244.0.0/16
```

### Networking
- Flannel for cluster networking  
- MetalLB configured with an IP pool for LoadBalancer services  

### Health Checks
- Pod-to-pod ping  
- Service routing  
- DNS resolution via CoreDNS  

---

## 2. Application Architecture

### Next.js Portfolio App
- Multi-stage Dockerfile using **Node 20-alpine**
- Builds using `npm ci` + `npm run build`
- Runs as non-root on port 3000
- Uses `.next/standalone` for efficient production runtime

### Container Security
- Non-root user (UID/GID)
- Read-only root filesystem
- Privilege escalation disabled
- Resource requests/limits
- Startup & liveness probes

---

## 3. GitOps Repository Structure

```txt
manifests/
  base/
    deployment.yaml
    service.yaml
    pdb.yaml
    sa.yaml
    kustomization.yaml
  dev/
    ingress.yaml
    kustomization.yaml     # newTag = edge
  stage/
    ingress.yaml
    kustomization.yaml     # newTag comes from dev
  prod/
    ingress.yaml
    kustomization.yaml     # newTag comes from stage
```

### Responsibilities
- **Base** contains shared configuration  
- **Overlays** override namespace, ingress, and image tag per environment  
- **Argo CD** syncs each overlay independently  
- **Image tag in overlay kustomization is the deployment trigger**

---

## 4. Argo CD Integration

- Deployed via official manifests
- Exposed using MetalLB LoadBalancer IP
- One Argo CD Application per environment
- Auto-sync + prune + self-heal enabled
- Namespaces restricted to: `dev`, `stage`, `prod`

---

## 5. Pre-Deploy Validation Pipeline

Validation is performed inside a **custom pre-deploy tools container** that includes:

- `kustomize`
- `kubeconform` (schema validation)
- `yamllint`
- `kube-score` (best-practice analysis)
- `checkov` (IaC security scanning)
- `conftest` (Rego policies)

### Validation Stages
1. YAML lint  
2. Kustomize build  
3. OpenAPI schema validation  
4. Rego policy enforcement  
5. kube-score best-practices  
6. Checkov security scan  
7. SARIF results uploaded to GitHub Security  

---

## 6. CI/CD Architecture

![CI/CD + GitOps Architecture](./public/enterprise_cicd_k8s/cicd_flow.svg)

### Reusable CI Workflows (in `ci-cd-templates`)
1. **ci-app.yml**  
   - Lint + test  
   - Build Docker image  
   - Push to Docker Hub  
   - Trivy vulnerability scan  

2. **ci-manifests.yml**  
   - Lint + schema validation  
   - Policy checks  
   - Best-practice checks  
   - Security scans  
   - SARIF upload  

3. **ci-gitops-bump.yml**  
   - Updates `newTag` in environment overlays  
   - Commits the bump  
   - Triggers new sync in Argo CD  

---

## 7. App Workflow (`dev-ci.yml`)

### Step 1: Change Detection
- App changes → run **App CI**
- Manifest/policy changes → run **Manifests CI**

### Step 2: Build/Validate
- Dev builds new Docker image  
- Manifests validated for any environment  

### Step 3: Determine Tag Source
- **dev**: Use current commit SHA  
- **stage**: Use the tag from dev overlay  
- **prod**: Use the tag from stage overlay  

### Step 4: GitOps Bump
Runs only if all required CI steps succeed.

---

## 8. Tag Bump Logic Summary

| Environment | Source Tag | Auto Build? | Behavior |
|------------|------------|-------------|----------|
| **dev** | `sha-${ commit }` | Yes | Every push builds and deploys |
| **stage** | Tag from dev | No | Controlled promotion stage |
| **prod** | Tag from stage | No | Production promotion |
| **Manual** | Any tag | No | Argo CD triggers rollback |

---

## 9. Architecture Diagram

Place your CI/CD flow diagram here:

```
./flow-1.svg
```

---

## 10. Key Features

- Kubernetes cluster via kubeadm  
- GitOps deployment with Argo CD  
- Secure container images  
- Dedicated CI for app + manifests  
- Pre-deploy validation using best practices and policy enforcement  
- Environment-based promotion (dev → stage → prod)  
- Automatic rollbacks through GitOps  
- Centralized reusable CI templates  

---

## 11. Future Improvements

- RBAC hardening  
- Centralized monitoring stack (Prometheus + Grafana + Loki)  
- SBOM generation  
- Argo Rollouts for canary / blue-green deployments  
- Extended policy coverage  
