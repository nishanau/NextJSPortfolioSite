# Base: lightweight Ubuntu with basic utilities
FROM ubuntu:22.04

# Prevent prompts
ENV DEBIAN_FRONTEND=noninteractive
WORKDIR /tools

# Install dependencies
RUN apt-get update -y && \
    apt-get install -y curl jq wget tar gzip ca-certificates python3-pip && \
    pip install yamllint && \
    rm -rf /var/lib/apt/lists/*

# ---------- kubectl ----------
ARG KUBECTL_VERSION=v1.30.3
RUN curl -sL https://dl.k8s.io/release/${KUBECTL_VERSION}/bin/linux/amd64/kubectl -o /usr/local/bin/kubectl && \
    chmod +x /usr/local/bin/kubectl

# ---------- kustomize ----------
ARG KUSTOMIZE_VERSION=v5.4.3
RUN curl -sL https://github.com/kubernetes-sigs/kustomize/releases/download/kustomize%2F${KUSTOMIZE_VERSION}/kustomize_${KUSTOMIZE_VERSION}_linux_amd64.tar.gz \
    -o /tmp/kustomize.tar.gz && \
    tar -xzf /tmp/kustomize.tar.gz -C /usr/local/bin && \
    rm /tmp/kustomize.tar.gz

# ---------- kubeconform ----------
ARG KUBECONFORM_VERSION=v0.6.7
RUN curl -sL https://github.com/yannh/kubeconform/releases/download/${KUBECONFORM_VERSION}/kubeconform-linux-amd64.tar.gz \
    -o /tmp/kubeconform.tar.gz && \
    tar -xzf /tmp/kubeconform.tar.gz -C /usr/local/bin && \
    rm /tmp/kubeconform.tar.gz

# ---------- conftest ----------
ARG CONFTEST_VERSION=v0.57.0
RUN set -eux; \
    V="${CONFTEST_VERSION#v}"; \
    curl -fsSL "https://github.com/open-policy-agent/conftest/releases/download/${CONFTEST_VERSION}/conftest_${V}_Linux_x86_64.tar.gz" \
      -o /tmp/conftest.tgz; \
    tar -xzf /tmp/conftest.tgz -C /usr/local/bin; \
    rm /tmp/conftest.tgz; \
    conftest --version

# ---------- kube-score ----------
ARG KUBE_SCORE_VERSION=v1.18.0
RUN curl -sL https://github.com/zegl/kube-score/releases/download/${KUBE_SCORE_VERSION}/kube-score_ubuntu_amd64 -o /usr/local/bin/kube-score && \
    chmod +x /usr/local/bin/kube-score

# ---------- yq ----------
ARG YQ_VERSION=v4.44.2
RUN curl -sL https://github.com/mikefarah/yq/releases/download/${YQ_VERSION}/yq_linux_amd64 -o /usr/local/bin/yq && \
    chmod +x /usr/local/bin/yq

# ---------- Trivy ----------
ARG TRIVY_VERSION=v0.55.2
RUN curl -sfL https://raw.githubusercontent.com/aquasecurity/trivy/main/contrib/install.sh | sh -s -- -b /usr/local/bin ${TRIVY_VERSION}

# ---------- Clean up ----------
RUN apt-get clean && rm -rf /tmp/* /var/tmp/*

# Set default command
CMD ["bash"]
