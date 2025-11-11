import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import TableOfContents from "@/components/TableOfContents/TableOfContents";

// Utility function to format category name for display
const formatCategoryName = (category) => {
  const categoryMap = {
    "devops-projects": "DevOps Projects",
    "ui-ux-designs": "UI/UX Designs",
    websites: "Websites",
    automation: "Automation",
  };

  return (
    categoryMap[category] ||
    category.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())
  );
};

// Project data
const projectsData = {
  "enterprise-grade-kubernetes-cicd": {
    title: "Enterprise-Grade Kubernetes CI/CD System",
    sections: [
      { id: "overview", title: "Overview", level: 2 },
      { id: "project-philosophy", title: "Project Philosophy", level: 2 },
      { id: "key-highlights", title: "Key Highlights", level: 2 },
      { id: "architecture-components", title: "Architecture Components", level: 2 },
      { id: "infrastructure-layer", title: "Infrastructure Layer", level: 3 },
      { id: "cicd-layer", title: "CI/CD Layer", level: 3 },
      { id: "security-layer", title: "Security Layer", level: 3 },
      { id: "deployment-strategy", title: "Deployment Strategy", level: 3 },
      { id: "complete-cicd-flow", title: "Complete CI/CD Flow", level: 2 },
      { id: "ci-workflow-details", title: "CI Workflow Details", level: 2 },
      { id: "intelligent-ci-pipeline", title: "Intelligent CI Pipeline Orchestration", level: 3 },
      { id: "workflow-jobs-breakdown", title: "Workflow Jobs Breakdown", level: 3 },
      { id: "environment-specific-behavior", title: "Environment-Specific Behavior", level: 3 },
      { id: "tag-bump-decision-matrix", title: "Tag Bump Decision Matrix", level: 3 },
      { id: "key-workflow-characteristics", title: "Key Workflow Characteristics", level: 3 },
      { id: "gitops-tag-propagation", title: "GitOps Tag Propagation Flow", level: 3 },
      { id: "implementation-details", title: "Implementation Details", level: 2 },
      { id: "cluster-setup", title: "Cluster Setup", level: 3 },
      { id: "gitops-argocd", title: "GitOps with ArgoCD", level: 3 },
      { id: "multi-environment", title: "Multi-Environment Architecture", level: 3 },
      { id: "reusable-ci", title: "Reusable CI Workflows", level: 3 },
      { id: "security-implementation", title: "Security Implementation", level: 3 },
      { id: "validation-pipeline", title: "Validation Pipeline", level: 3 },
      { id: "cloudflare-tunnel", title: "Cloudflare Tunnel Integration", level: 3 },
      { id: "key-learnings", title: "Key Learnings & Evolution", level: 2 },
      { id: "technical-skills", title: "Technical Skills Demonstrated", level: 2 },
      { id: "live-deployment", title: "Live Deployment", level: 2 },
      { id: "future-enhancements", title: "Future Enhancements", level: 2 },
    ],
    content: (
      <>
        <h2 id="overview">Overview</h2>
        <p>
          Built a production-ready Kubernetes CI/CD pipeline from scratch using industry best practices.
          This comprehensive project demonstrates the evolution from rapid prototyping to enterprise-grade
          infrastructure that is scalable, secure, and maintainable for multi-application deployments.
        </p>

        <h2 id="project-philosophy">Project Philosophy</h2>
        <p>
          Unlike my previous two projects which were rapid prototypes focused on "build fast, break things, learn",
          this project follows a <strong>gradual, iterative approach</strong> that <strong>simulates</strong> professional working environments,
          focusing on systematic improvements and best practices at each stage.
        </p>

        <h2 id="key-highlights">Key Highlights</h2>
        <ul>
          <li>3-node bare-metal Kubernetes cluster (1 control plane, 2 workers)</li>
          <li>GitOps workflow with ArgoCD for declarative continuous delivery</li>
          <li>Multi-environment architecture (dev, staging, production)</li>
          <li>Reusable GitHub Actions CI workflow templates</li>
          <li>Comprehensive security policies and enforcement</li>
          <li>Cloudflare Tunnel integration for secure public access</li>
          <li>Complete infrastructure validation pipeline</li>
        </ul>

        <h2 id="architecture-components">Architecture Components</h2>

        <h3 id="infrastructure-layer">Infrastructure Layer</h3>
        <ul>
          <li><strong>Kubernetes Cluster:</strong> 3-node bare-metal setup with Flannel CNI</li>
          <li><strong>Load Balancer:</strong> MetalLB for external IP allocation</li>
          <li><strong>Ingress Controller:</strong> Nginx for traffic routing</li>
          <li><strong>Container Runtime:</strong> Containerd with systemd cgroup driver</li>
          <li><strong>Cloudflared:</strong> Cloudflare Tunnel integration for secure public access</li>
        </ul>

        <h3 id="cicd-layer">CI/CD Layer</h3>
        <ul>
          <li><strong>Source Control:</strong> GitHub with branch protection</li>
          <li><strong>CI Pipeline:</strong> GitHub Actions with reusable workflows</li>
          <li><strong>CD Pipeline:</strong> ArgoCD with automated sync policies</li>
          <li><strong>Container Registry:</strong> Docker Hub for image storage</li>
        </ul>

        <h3 id="security-layer">Security Layer</h3>
        <ul>
          <li><strong>Pod Security:</strong> Non-root containers, read-only filesystems</li>
          <li><strong>Network Policies:</strong> Restricted pod-to-pod communication</li>
          <li><strong>RBAC:</strong> Role-based access control for service accounts</li>
          <li><strong>Policy Enforcement:</strong> Conftest with custom OPA policies</li>
        </ul>

        <h3 id="deployment-strategy">Deployment Strategy</h3>
        <ul>
          <li><strong>Configuration Management:</strong> Kustomize overlays for environment-specific configs</li>
          <li><strong>Service Mesh:</strong> Multi-environment namespace isolation</li>
          <li><strong>Public Access:</strong> Cloudflare Tunnel (cloudflared sidecar)</li>
          <li><strong>Zero Downtime:</strong> Rolling updates with pod disruption budgets</li>
        </ul>

        <h2 id="complete-cicd-flow">Complete CI/CD Flow</h2>
        <div className={styles.imageContainer}>
          <img 
            src="/enterprise_cicd_k8s/cicd_flow.svg" 
            alt="Complete CI/CD Flow Diagram" 
            className={styles.flowDiagram}
          />
          <p className={styles.imageCaption}>
            End-to-end CI/CD flow from code commit to production deployment
          </p>
        </div>

        <h2 id="ci-workflow-details">CI Workflow Details</h2>
        <div className={styles.imageContainer}>
          <img 
            src="/enterprise_cicd_k8s/ci_workflow_github.png" 
            alt="GitHub Actions CI Workflow" 
            className={styles.flowDiagram}
          />
          <p className={styles.imageCaption}>
            GitHub Actions CI workflow with validation, testing, and deployment stages
          </p>
        </div>

        <h3 id="intelligent-ci-pipeline">Intelligent CI Pipeline Orchestration</h3>
        <p>
          The CI workflow automatically detects changed files and executes appropriate workflows based on the type of changes.
          This app-specific workflow (<code>dev-ci.yml</code>) orchestrates calls to reusable workflows, ensuring efficient
          resource usage and fast feedback loops.
        </p>

        <div className={styles.codeContainer}>
          <h4>Complete Workflow Code (dev-ci.yml)</h4>
          <pre>
            <code>{`name: Dev CI (App + Manifests + GitOps Bump)

on:
  push:
    branches: [ "dev", "stage", "prod" ]
    paths:
      - "src/**"
      - "public/**"
      - "package.json"
      - "Dockerfile"
      - "manifests/**"
      - "policy/**"
      
  pull_request:
    branches: [ "stage", "prod" ]
    paths:
      - "manifests/**"
      - "policy/**"

permissions:
  contents: write
  packages: write
  security-events: write

jobs:
  # =============================================
  #  JOB 0: DETECT CHANGED FILES
  # =============================================
  changes:
    runs-on: ubuntu-latest
    outputs:
      app: \${{ steps.filter.outputs.app }}
      manifests: \${{ steps.filter.outputs.manifests }}
    steps:
      - uses: actions/checkout@v4
      - uses: dorny/paths-filter@v3
        id: filter
        with:
          filters: |
            app:
              - 'src/**'
              - 'Dockerfile'
              - 'package.json'
            manifests:
              - 'manifests/**'
              - 'policy/**'

  # =============================================
  #  JOB 1: RESOLVE TARGET BRANCH
  # =============================================
  resolve-branch:
    runs-on: ubuntu-latest
    outputs:
      target_branch: \${{ steps.resolve.outputs.target_branch }}
    steps:
      - id: resolve
        run: |
          TARGET_BRANCH="\${{ github.event.pull_request.base.ref || github.ref_name }}"
          echo "target_branch=$TARGET_BRANCH" >> $GITHUB_OUTPUT

  # =============================================
  #  JOB 2: APP CI (only dev)
  # =============================================
  app-ci:
    needs: [changes, resolve-branch]
    if: \${{ needs.changes.outputs.app == 'true' && 
            needs.resolve-branch.outputs.target_branch == 'dev' }}
    uses: nishanau/ci-cd-templates/.github/workflows/ci-app.yml@main
    with:
      image_name: nishans0/next-portfolio
      context: .
      dockerfile: ./Dockerfile
      push_image: true
      run_tests: true
    secrets:
      DOCKERHUB_USERNAME: \${{ secrets.DOCKERHUB_USERNAME }}
      DOCKERHUB_TOKEN: \${{ secrets.DOCKERHUB_TOKEN }}

  # =============================================
  #  JOB 3: MANIFESTS CI
  # =============================================
  manifests-ci:
    needs: [changes, resolve-branch]
    if: \${{ needs.changes.outputs.manifests == 'true' }}
    uses: nishanau/ci-cd-templates/.github/workflows/ci-manifests.yml@main
    with:
      overlay_path: manifests/overlays/\${{ needs.resolve-branch.outputs.target_branch }}
      policies_path: policy
      kubeconform_flags: "--strict --ignore-missing-schemas"
    secrets: inherit

  # =============================================
  #  JOB 4: RESOLVE IMAGE TAG
  # =============================================
  resolve-tag:
    runs-on: ubuntu-latest
    needs: [app-ci, manifests-ci, resolve-branch]
    if: \${{ always() && (
      (needs.resolve-branch.outputs.target_branch == 'dev' && 
       needs.app-ci.result == 'success') ||
      (needs.resolve-branch.outputs.target_branch != 'dev' &&
       (needs.app-ci.result == 'success' || needs.app-ci.result == 'skipped') &&
       (needs.manifests-ci.result == 'success' || needs.manifests-ci.result == 'skipped'))
    ) }}
    outputs:
      tag: \${{ steps.resolve_tag.outputs.tag }}
    steps:
      - uses: actions/checkout@v4
      - id: resolve_tag
        run: |
          TARGET_BRANCH="\${{ needs.resolve-branch.outputs.target_branch }}"
          if [[ "$TARGET_BRANCH" == "dev" ]]; then
            TAG="sha-\${{ github.sha }}"
          elif [[ "$TARGET_BRANCH" == "stage" ]]; then
            TAG=$(yq e '.images[] | select(.name=="docker.io/nishans0/next-portfolio") | .newTag' \\
              manifests/overlays/dev/kustomization.yaml)
          elif [[ "$TARGET_BRANCH" == "prod" ]]; then
            TAG=$(yq e '.images[] | select(.name=="docker.io/nishans0/next-portfolio") | .newTag' \\
              manifests/overlays/stage/kustomization.yaml)
          fi
          echo "tag=$TAG" >> $GITHUB_OUTPUT

  # =============================================
  #  JOB 5: GITOPS BUMP
  # =============================================
  bump-gitops:
    needs: [app-ci, manifests-ci, resolve-tag, resolve-branch]
    if: \${{ always() && github.event_name == 'push' && (
      (needs.resolve-branch.outputs.target_branch == 'dev' && 
       needs.app-ci.result == 'success') ||
      (needs.resolve-branch.outputs.target_branch != 'dev' &&
       (needs.manifests-ci.result == 'success' || needs.manifests-ci.result == 'skipped'))
    ) }}
    uses: nishanau/ci-cd-templates/.github/workflows/ci-gitops-bump.yml@main
    with:
      gitops_repo: nishanau/NextJSPortfolioSite
      gitops_path: manifests/overlays/\${{ needs.resolve-branch.outputs.target_branch }}/kustomization.yaml
      image_name: docker.io/nishans0/next-portfolio
      image_tag: \${{ needs.resolve-tag.outputs.tag }}
    secrets:
      gitops_pat: \${{ secrets.GITOPS_PAT }}`}</code>
          </pre>
        </div>

        <h3 id="workflow-jobs-breakdown">Workflow Jobs Breakdown</h3>

        <h4>Job 0: Change Detection</h4>
        <p>First step analyzes the commit to determine which workflows need to run:</p>
        <ul>
          <li><strong>App Changes:</strong> Detects modifications to <code>src/**</code>, <code>Dockerfile</code>, <code>package.json</code></li>
          <li><strong>Manifest Changes:</strong> Detects changes to <code>manifests/**</code>, <code>policy/**</code></li>
          <li><strong>Smart Execution:</strong> Only runs necessary workflows, skipping irrelevant checks</li>
        </ul>

        <h4>Job 1: App CI (Build & Publish)</h4>
        <p>Triggered when app code changes, executes comprehensive build pipeline:</p>
        <ul>
          <li>Runs linting and unit tests for code quality</li>
          <li>Builds multi-stage Docker image with optimizations</li>
          <li>Performs security vulnerability scanning</li>
          <li>Pushes image to Docker Hub with SHA-based tag (<code>sha-{"{"}commit{"}"}</code>)</li>
          <li><strong>Environment:</strong> Primarily runs on <code>dev</code> branch</li>
        </ul>

        <h4>Job 2: Manifests CI (Infrastructure Validation)</h4>
        <p>Triggered when manifest or policy files change:</p>
        <ul>
          <li>YAML linting for syntax validation</li>
          <li>Kubeconform schema validation against Kubernetes API</li>
          <li>Conftest policy enforcement (custom OPA/Rego rules)</li>
          <li>Kube-score best practices analysis</li>
          <li>Checkov IaC security scanning with SARIF output</li>
          <li><strong>Environment:</strong> Runs on all branches (<code>dev</code>, <code>stage</code>, <code>prod</code>)</li>
        </ul>

        <h4>Job 3: Tag Resolution & GitOps Bump</h4>
        <p>Conditionally updates manifest image tags based on environment and results:</p>
        <ul>
          <li><strong>Dev:</strong> Uses current commit SHA after successful app build</li>
          <li><strong>Stage:</strong> Copies verified tag from dev overlay (promotion flow)</li>
          <li><strong>Prod:</strong> Copies validated tag from stage overlay (production promotion)</li>
          <li>Commits tag change to trigger ArgoCD sync</li>
        </ul>

        <h3 id="environment-specific-behavior">Environment-Specific Behavior</h3>

        <div className={styles.codeContainer}>
          <h4>Development Environment (dev branch)</h4>
          <ul>
            <li><strong>Trigger:</strong> Push to <code>dev</code> branch</li>
            <li><strong>Build:</strong> Always rebuilds app on code changes</li>
            <li><strong>Tag Format:</strong> <code>sha-&#123;commit-hash&#125;</code></li>
            <li><strong>Deployment:</strong> Immediate after successful CI</li>
            <li><strong>Purpose:</strong> Rapid iteration and testing</li>
          </ul>
        </div>

        <div className={styles.codeContainer}>
          <h4>Staging Environment (stage branch)</h4>
          <ul>
            <li><strong>Trigger:</strong> Merge from <code>dev</code> or direct push</li>
            <li><strong>Build:</strong> No rebuild - promotes dev image</li>
            <li><strong>Tag Source:</strong> Latest tag from <code>dev</code> overlay</li>
            <li><strong>Deployment:</strong> After manifest validation passes</li>
            <li><strong>Purpose:</strong> Pre-production testing with stable builds</li>
          </ul>
        </div>

        <div className={styles.codeContainer}>
          <h4>Production Environment (prod/master branch)</h4>
          <ul>
            <li><strong>Trigger:</strong> Merge from <code>stage</code></li>
            <li><strong>Build:</strong> No rebuild - promotes stage image</li>
            <li><strong>Tag Source:</strong> Latest tag from <code>stage</code> overlay</li>
            <li><strong>Deployment:</strong> After all validations pass</li>
            <li><strong>Purpose:</strong> Production deployment with battle-tested images</li>
          </ul>
        </div>

        <h3 id="tag-bump-decision-matrix">Tag Bump Decision Matrix</h3>
        <p>
          The workflow implements intelligent logic to determine when tag updates should occur.
          This prevents unnecessary deployments and ensures environment integrity:
        </p>

        <h4>Development Branch Scenarios</h4>
        <ul>
          <li><strong>App code only:</strong> ✅ Builds new image → ✅ Updates tag → ✅ Deploys</li>
          <li><strong>App + manifests:</strong> ✅ Builds + validates → ✅ Updates tag → ✅ Deploys</li>
          <li><strong>Manifests only:</strong> ⚠️ No build → ✅ Validates → ❌ No tag update</li>
          <li><strong>App build failed:</strong> ❌ Failed build → ❌ No tag update → ❌ No deploy</li>
          <li><strong>Manual rollback:</strong> Validates existing manifests → ArgoCD syncs to specified tag</li>
        </ul>

        <h4>Staging Branch Scenarios</h4>
        <ul>
          <li><strong>Promotion from dev:</strong> ⚠️ No build → ✅ Copies dev tag → ✅ Deploys dev image</li>
          <li><strong>Manifest changes:</strong> ⚠️ No build → ✅ Validates → ✅ Uses dev tag → ✅ Deploys</li>
          <li><strong>Policy validation failed:</strong> ❌ Failed validation → ❌ No tag update → ❌ Blocks deploy</li>
          <li><strong>No changes:</strong> Uses last known good image from dev</li>
        </ul>

        <h4>Production Branch Scenarios</h4>
        <ul>
          <li><strong>Promotion from stage:</strong> ⚠️ No build → ✅ Copies stage tag → ✅ Deploys stage image</li>
          <li><strong>Manifest validation:</strong> Must pass all checks before tag update</li>
          <li><strong>Emergency rollback:</strong> Manual tag edit → ArgoCD auto-syncs to previous version</li>
          <li><strong>Direct build (anti-pattern):</strong> Technically works but violates GitOps principles</li>
        </ul>

        <h3 id="key-workflow-characteristics">Key Workflow Characteristics</h3>
        <ul>
          <li><strong>Immutable Images:</strong> Once built in dev, same image promotes through environments</li>
          <li><strong>Environment Isolation:</strong> Each overlay maintains its own tag independently</li>
          <li><strong>Fail-Safe Design:</strong> Any validation failure blocks deployment</li>
          <li><strong>Audit Trail:</strong> Git history tracks all tag changes and deployments</li>
          <li><strong>Rollback Support:</strong> Manual tag edits enable instant rollbacks via ArgoCD</li>
          <li><strong>Zero Downtime:</strong> Rolling updates ensure continuous availability</li>
        </ul>

        <h3 id="gitops-tag-propagation">GitOps Tag Propagation Flow</h3>
        <div className={styles.codeContainer}>
          <pre>
            <code>{`# Development → Staging → Production
1. Dev: Build new image
   - Tag: sha-abc123
   - Push to Docker Hub
   - Update: manifests/overlays/dev/kustomization.yaml

2. Stage: Promote verified build
   - Read tag from: manifests/overlays/dev/kustomization.yaml
   - Copy tag: sha-abc123
   - Update: manifests/overlays/stage/kustomization.yaml

3. Prod: Deploy battle-tested image
   - Read tag from: manifests/overlays/stage/kustomization.yaml
   - Copy tag: sha-abc123
   - Update: manifests/overlays/prod/kustomization.yaml
   
✨ Same image (sha-abc123) deployed across all environments
✨ Tested in dev, validated in stage, confident in prod`}</code>
          </pre>
        </div>

        <h2 id="implementation-details">Implementation Details</h2>

        <h3 id="cluster-setup">Cluster Setup</h3>
        <p>Built from scratch following Kubernetes best practices:</p>
        <ul>
          <li>Disabled swap and configured kernel parameters</li>
          <li>Installed containerd as container runtime</li>
          <li>Configured systemd cgroup driver for compatibility</li>
          <li>Initialized control plane with custom pod network CIDR</li>
          <li>Deployed Flannel CNI for pod networking</li>
          <li>Joined worker nodes using secure tokens</li>
        </ul>

        <h3 id="gitops-argocd">GitOps with ArgoCD</h3>
        <p>Declarative continuous delivery implementation:</p>
        <ul>
          <li>Automated sync policies for hands-off deployments</li>
          <li>Multi-environment management (dev/stage/prod namespaces)</li>
          <li>Self-healing capabilities for drift detection</li>
          <li>Rollback support for failed deployments</li>
          <li>Health status monitoring and notifications</li>
        </ul>

        <h3 id="multi-environment">Multi-Environment Architecture</h3>
        <p>Kustomize-based configuration management:</p>
        <div className={styles.codeContainer}>
          <pre>
            <code>{`manifests/
├── base/              # Base resources
│   ├── deployment.yaml
│   ├── service.yaml
│   ├── pdb.yaml
│   └── sa.yaml
└── overlays/
    ├── dev/          # Development environment
    ├── stage/        # Staging environment
    └── prod/         # Production environment`}</code>
          </pre>
        </div>

        <h3 id="reusable-ci">Reusable CI Workflows</h3>
        <p>Modular GitHub Actions templates for consistency:</p>
        <ul>
          <li><strong>Validation:</strong> YAML linting, schema validation</li>
          <li><strong>Testing:</strong> Policy checks with Conftest</li>
          <li><strong>Building:</strong> Docker multi-stage builds</li>
          <li><strong>Publishing:</strong> Tagged images to Docker Hub</li>
          <li><strong>Deployment:</strong> ArgoCD sync triggers</li>
        </ul>

        <h3 id="security-implementation">Security Implementation</h3>
        <p>Comprehensive security measures at every layer:</p>
        <ul>
          <li>Pod security contexts (non-root, read-only FS)</li>
          <li>Network policies for traffic control</li>
          <li>RBAC with least-privilege service accounts</li>
          <li>Automated policy enforcement with Conftest</li>
          <li>Image scanning in CI pipeline</li>
          <li>Secret management best practices</li>
        </ul>

        <h3 id="validation-pipeline">Validation Pipeline</h3>
        <p>Pre-deployment checks ensure quality:</p>
        <div className={styles.codeContainer}>
          <pre>
            <code>{`# YAML Lint
yamllint manifests/

# Schema Validation
kustomize build overlays/dev | kubeconform --strict

# Policy Testing
kustomize build overlays/dev | conftest test -

# Best Practices Check
kustomize build overlays/dev | kube-score score -`}</code>
          </pre>
        </div>

        <h3 id="cloudflare-tunnel">Cloudflare Tunnel Integration</h3>
        <p>Secure public access without port forwarding:</p>
        <ul>
          <li>Cloudflared deployed as sidecar container</li>
          <li>Automatic DNS management</li>
          <li>Zero-trust security model</li>
          <li>No firewall rule changes needed</li>
          <li>DDoS protection included</li>
        </ul>

        <h2 id="key-learnings">Key Learnings & Evolution</h2>

        <h3>From Rapid Prototyping to Production</h3>
        <ul>
          <li><strong>Before:</strong> Quick deployments, minimal validation</li>
          <li><strong>Now:</strong> Comprehensive testing, policy enforcement</li>
          <li><strong>Result:</strong> Confidence in production deployments</li>
        </ul>

        <h3>Infrastructure as Code</h3>
        <ul>
          <li>All infrastructure declaratively defined</li>
          <li>Version controlled and reviewable</li>
          <li>Reproducible across environments</li>
          <li>Auditable change history</li>
        </ul>

        <h3>GitOps Principles</h3>
        <ul>
          <li>Git as single source of truth</li>
          <li>Declarative infrastructure and applications</li>
          <li>Automated synchronization</li>
          <li>Observable and auditable</li>
        </ul>

        <h2 id="technical-skills">Technical Skills Demonstrated</h2>
        <ul>
          <li>Kubernetes cluster administration</li>
          <li>Container orchestration and networking</li>
          <li>GitOps and declarative deployment</li>
          <li>CI/CD pipeline design and implementation</li>
          <li>Security policy creation and enforcement</li>
          <li>Infrastructure validation and testing</li>
          <li>Multi-environment configuration management</li>
          <li>Monitoring and observability setup</li>
        </ul>

        <h2 id="live-deployment">Live Deployment</h2>
        <div className={styles.linksContainer}>
          <a 
            href="https://portfolio.nishdevops.org" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.projectLink}
          >
            <span className={styles.linkIcon}>🌐</span>
            <div className={styles.linkContent}>
              <span className={styles.linkLabel}>Live Website</span>
              <span className={styles.linkUrl}>portfolio.nishdevops.org</span>
            </div>
          </a>
          <a 
            href="https://github.com/nishanau/NextJSPortfolioSite/blob/prod/technical_guide_and_learning_logs.md" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.projectLink}
          >
            <span className={styles.linkIcon}>📖</span>
            <div className={styles.linkContent}>
              <span className={styles.linkLabel}>Technical Guide</span>
              <span className={styles.linkUrl}>View on GitHub</span>
            </div>
          </a>
          <a 
            href="https://github.com/nishanau/NextJSPortfolioSite" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.projectLink}
          >
            <span className={styles.linkIcon}>💻</span>
            <div className={styles.linkContent}>
              <span className={styles.linkLabel}>Source Code</span>
              <span className={styles.linkUrl}>GitHub Repository</span>
            </div>
          </a>
        </div>

        <h2 id="future-enhancements">Future Enhancements</h2>
        <ul>
          <li>Prometheus & Grafana for monitoring</li>
          <li>EFK Stack for centralized logging</li>
          <li>Helm charts for package management</li>
          <li>Terraform for infrastructure automation</li>
          <li>Multi-cluster federation</li>
          <li>Service mesh (Istio/Linkerd) integration</li>
        </ul>
      </>
    ),
  },
  "cicd-dockerized-app-deployment-aws": {
    title: "CI/CD Dockerized App Deployment on AWS",
    content: (
      <>
        <h2>Overview</h2>
        <p>
          This portfolio website is a DevOps project deployed on an AWS EC2
          instance using Docker, Docker Compose, and Nginx. It supports HTTPS
          via Let's Encrypt and automates deployments with GitHub Actions CI/CD.
        </p>

        <h2>Highlights</h2>
        <ul>
          <li>Dockerized React frontend using a multi-stage build</li>
          <li>Nginx reverse proxy with Certbot for HTTPS</li>
          <li>Container orchestration via Docker Compose</li>
          <li>Hosted on an Ubuntu EC2 instance</li>
          <li>Domain mapping via No-IP for stable access</li>
        </ul>

        <h2>Architecture Components</h2>
        <ul>
          <li>
            <strong>React App</strong>: Built using{" "}
            <code>create-react-app</code> and containerized.
          </li>
          <li>
            <strong>Nginx</strong>: Serves app and handles SSL termination.
          </li>
          <li>
            <strong>Certbot</strong>: Automatically issues and renews SSL certs.
          </li>
          <li>
            <strong>Docker Compose</strong>: Manages service orchestration.
          </li>
          <li>
            <strong>AWS EC2</strong>: Host environment with Ubuntu and Docker
            installed.
          </li>
        </ul>

        <h2>Directory Structure</h2>
        <div className={styles.codeContainer}>
          <pre>
            <code>{`my-portfolio/
├── app/                    # React app and Dockerfile
│   ├── Dockerfile
│   ├── src/
│   └── public/
├── reverse-proxy/         # Nginx + SSL setup
│   ├── nginx.conf
│   └── init-letsencrypt.sh
├── docker-compose.yml     # Container orchestration`}</code>
          </pre>
        </div>

        <h2>Network Flow</h2>
        <div className={styles.codeContainer}>
          <pre>
            <code>{`[User]
  ↓ HTTPS
[my-portfolio.zapto.org]
  ↓ DNS
[EC2 Ubuntu Instance]
  ↓ Reverse Proxy
[Nginx → React Container]`}</code>
          </pre>
        </div>

        <h2>CI/CD Flow</h2>
        <div className={styles.codeContainer}>
          <pre>
            <code>{`[GitHub Push to main]
  ↓
[GitHub Actions Workflow]
  ↓
[Docker Build → Push Image to Docker Hub]
  ↓
[SSH into EC2 → Pull & Restart Container]`}</code>
          </pre>
        </div>

        <h2>Deployment Steps</h2>

        <h3>1. React App Dockerization</h3>
        <div className={styles.codeContainer}>
          <pre>
            <code>{`FROM node:18 as builder
WORKDIR /app
COPY . .
RUN npm ci && PUBLIC_URL=/ npm run build

FROM nginx:alpine
COPY --from=builder /app/build /usr/share/nginx/html`}</code>
          </pre>
        </div>

        <h3>2. Docker Compose Configuration</h3>
        <div className={styles.codeContainer}>
          <pre>
            <code>{`services:
  app:
    build: ./app
    container_name: react-app
    expose:
      - "80"

  nginx:
    image: nginx:latest
    container_name: nginx-proxy
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./reverse-proxy/nginx.conf:/etc/nginx/conf.d/default.conf
      - certbot-etc:/etc/letsencrypt
      - certbot-var:/var/lib/letsencrypt
    depends_on:
      - app

  certbot:
    image: certbot/certbot
    container_name: certbot
    volumes:
      - certbot-etc:/etc/letsencrypt
      - certbot-var:/var/lib/letsencrypt
    entrypoint: sh -c
    command: >
      "certbot certonly --webroot
      --webroot-path=/var/lib/letsencrypt
      --email nishanau83@gmail.com
      --agree-tos
      --no-eff-email
      -d my-portfolio.zapto.org
      --rsa-key-size 4096"

volumes:
  certbot-etc:
  certbot-var:`}</code>
          </pre>
        </div>

        <h3>3. Nginx Proxy Configuration</h3>
        <div className={styles.codeContainer}>
          <pre>
            <code>{`server {
  listen 80;
  server_name my-portfolio.zapto.org;
  location /.well-known/acme-challenge/ {
    root /var/lib/letsencrypt;
  }
  location / {
    return 301 https://$host$request_uri;
  }
}

server {
  listen 443 ssl;
  server_name my-portfolio.zapto.org;

  ssl_certificate /etc/letsencrypt/live/my-portfolio.zapto.org/fullchain.pem;
  ssl_certificate_key /etc/letsencrypt/live/my-portfolio.zapto.org/privkey.pem;

  location / {
    proxy_pass http://react-app:80;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
  }
}`}</code>
          </pre>
        </div>

        <h3>4. Certbot Initialization</h3>
        <ul>
          <li>
            Start <code>nginx</code> to respond to challenges
          </li>
          <li>Run Certbot to generate cert</li>
          <li>Mount cert volume to Nginx container</li>
        </ul>

        <h3>5. GitHub Actions CI/CD</h3>
        <p>
          Pipeline defined in <code>.github/workflows/main.yml</code> (not
          shown) builds, pushes, and deploys the container automatically.
        </p>

        <h3>6. Access</h3>
        <p>
          Live app at: <code>https://my-portfolio.zapto.org</code>
        </p>

        <h2>Skills Gained</h2>
        <ul>
          <li>Docker image building and orchestration with Compose</li>
          <li>SSL automation using Certbot and Nginx</li>
          <li>Domain management via dynamic DNS</li>
          <li>CI/CD implementation using GitHub Actions</li>
          <li>Server automation on AWS EC2</li>
        </ul>
      </>
    ),
  },
  "cicd-kubernetes-app-deployment": {
    title: "CI/CD Kubernetes App Deployment via Minikube & Cloudflare Tunnel",
    content: (
      <>
        <h2>Overview</h2>
        <p>
          Deployed a NextJS portfolio application inside a private Kubernetes
          cluster using Minikube on a Hyper-V Ubuntu VM with secure public
          access via a persistent Cloudflare Tunnel.
        </p>

        <h2>Key Components</h2>
        <ul>
          <li>Kubernetes with Minikube on Ubuntu VM</li>
          <li>Cloudflare Zero Trust Tunnel for secure public access</li>
          <li>GitHub Actions with self-hosted runner for CI/CD</li>
          <li>NGINX Ingress Controller for in-cluster routing</li>
        </ul>

        {/* Add more content for this project */}
      </>
    ),
  },
  "ca-firm-website": {
    title: "Chartered Accountant Firm Website",
    content: (
      <>
        <h2>Overview</h2>
        <p>
          Developed a modern, professional website for my brother's Chartered
          Accountant firm using Next.js and TypeScript. The site presents the
          firm's services, team members, and contact information in a clean,
          professional interface designed to build trust and convert visitors
          into clients.
        </p>

        <h2>Project Goals</h2>
        <ul>
          <li>
            Create a professional online presence for my brother's CA practice
          </li>
          <li>
            Highlight services and expertise in accounting and financial
            services
          </li>
          <li>Showcase team members to build trust and credibility</li>
          <li>Provide easy contact options for potential clients</li>
          <li>Implement responsive design for all devices</li>
          <li>
            Create a maintainable solution that my brother could easily update
          </li>
        </ul>

        <h2>Technologies Used</h2>
        <ul>
          <li>
            <strong>Frontend Framework:</strong> Next.js with TypeScript
          </li>
          <li>
            <strong>Styling:</strong> CSS Modules with responsive design
          </li>
          <li>
            <strong>Maps Integration:</strong> Google Maps API
          </li>
          <li>
            <strong>Form Handling:</strong> Custom email service integration
          </li>
          <li>
            <strong>Content Management:</strong> Centralized settings file
            approach
          </li>
          <li>
            <strong>Deployment:</strong> Static site generation on GitHub Pages
          </li>
          <li>
            <strong>SEO:</strong> Meta tags, semantic HTML, optimized content
          </li>
        </ul>
        <h2>Live At:</h2>
        <p>
          View the site at:{" "}
          <a
            style={{
              color: "skyblue",
              textDecoration: "underline",
              cursor: "pointer",
            }}
            href="https://nishanau.github.io/ca_firm_site/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://nishanau.github.io/ca_firm_site/
          </a>
        </p>

        <h2>Key Features</h2>

        <h3>1. Centralized Settings Management</h3>
        <ul>
          <li>
            Created a comprehensive <code>siteSettings.ts</code> configuration
            file
          </li>
          <li>
            All firm details, services, team members, and contact info stored in
            one place
          </li>
          <li>Enables my brother to update content without coding knowledge</li>
          <li>
            Changes to the settings file automatically propagate throughout the
            site
          </li>
          <li>No backend or admin portal needed for content updates</li>
        </ul>

        <h3>2. Home Page</h3>
        <ul>
          <li>Hero section with firm value proposition</li>
          <li>Service highlights with visual elements</li>
          <li>Testimonials carousel from satisfied clients</li>
          <li>Call-to-action buttons for contact and services</li>
        </ul>

        <h3>3. Services Section</h3>
        <ul>
          <li>Detailed descriptions of accounting and financial services</li>
          <li>Clear categorization of service offerings</li>
          <li>Visual icons representing each service type</li>
          <li>Service-specific contact options</li>
        </ul>

        <h3>4. Team Member Showcase</h3>
        <ul>
          <li>Professional profiles of my brother and his team</li>
          <li>Credentials and specializations highlighted</li>
          <li>Professional photographs with consistent styling</li>
          <li>Contact information for direct reach-out</li>
        </ul>

        <h3>5. Contact Page</h3>
        <ul>
          <li>Interactive contact form with validation</li>
          <li>Google Maps integration showing office location</li>
          <li>Multiple contact channels (phone, email, location)</li>
          <li>Form submission with confirmation</li>
        </ul>

        <h2>Implementation Details</h2>

        <h3>Settings-Based Architecture</h3>
        <p>The site uses a unique settings-based architecture consisting of:</p>
        <ul>
          <li>
            <strong>siteSettings.ts</strong> - Central configuration file with
            all content
          </li>
          <li>
            <strong>settingsUtils.ts</strong> - Utility functions to access and
            format settings
          </li>
          <li>
            <strong>types.ts</strong> - TypeScript interfaces ensuring data
            integrity
          </li>
          <li>React components that consume settings via custom hooks</li>
        </ul>

        <p>This architecture allows my brother to:</p>
        <ul>
          <li>Update services by modifying a simple JSON-like structure</li>
          <li>Add/remove team members without touching component code</li>
          <li>
            Change contact details, office hours, or firm information in one
            place
          </li>
          <li>Modify testimonials by editing a single array</li>
        </ul>

        <h3>Component Architecture</h3>
        <p>The site is built with reusable React components, including:</p>
        <ul>
          <li>ContactForm - Handles user inquiries with validation</li>
          <li>GoogleMap - Displays office location using Google Maps API</li>
          <li>TeamMembers - Renders team profiles with consistent styling</li>
          <li>Services - Displays service categories and descriptions</li>
          <li>Testimonials - Carousel of client feedback</li>
        </ul>

        <h3>Performance Optimization</h3>
        <ul>
          <li>Static site generation for fast loading</li>
          <li>Image optimization for reduced bandwidth</li>
          <li>Code splitting for improved initial load time</li>
          <li>Minimal JavaScript footprint</li>
        </ul>

        <h3>Responsive Design</h3>
        <p>The site is fully responsive with breakpoints for:</p>
        <ul>
          <li>Mobile devices (320px+)</li>
          <li>Tablets (768px+)</li>
          <li>Desktops (1024px+)</li>
          <li>Large screens (1440px+)</li>
        </ul>

        <h2>Results & Impact</h2>
        <ul>
          <li>
            Professional online presence established for my brother's CA firm
          </li>
          <li>Improved client acquisition through online inquiries</li>
          <li>Enhanced brand credibility with professional design</li>
          <li>Streamlined client communication process</li>
          <li>
            Empowered my brother to maintain and update the site independently
          </li>
          <li>Excellent performance scores in Google PageSpeed Insights</li>
        </ul>

        <h2>Personal Significance</h2>
        <p>
          This project was especially meaningful as it allowed me to support my
          brother's professional practice with my development skills. By
          creating a solution that he could easily maintain, I was able to
          provide long-term value rather than just a one-time website build.
        </p>
      </>
    ),
  },
  "bushfire-info-app": {
    title: "Bushfire Info & Management App",
    content: (
      <>
        <h2>Overview</h2>
        <p>
          Created UI/UX design for a critical Bushfire Info & Management App,
          incorporating PACT (People, Activities, Context, Technologies)
          analysis.
        </p>

        <h2>Design Process</h2>
        <ul>
          <li>User research and persona development</li>
          <li>Low-fidelity wireframes</li>
          <li>High-fidelity mockups</li>
          <li>Usability testing and refinement</li>
        </ul>

        {/* Add more content for this project */}
      </>
    ),
  },
  // Add more projects as needed
};

// Function to find project data from the category page data arrays
const getProjectData = (category, projectSlug) => {
  // Import the category data dynamically
  let categoryData;

  if (category === "devops-projects") {
    const devops = [
      {
        id: 1,
        title: "Enterprise-Grade Kubernetes CI/CD System",
        description:
          "Built a production-ready Kubernetes CI/CD pipeline from scratch with GitOps, multi-environment architecture, and comprehensive security policies.",
        image: "/enterprise_cicd_k8s/banner_cicd.png",
        category: "devops-projects",
        slug: "enterprise-grade-kubernetes-cicd",
      },
      {
        id: 2,
        title: "CI/CD Dockerized App Deployment on AWS",
        description:
          "Built a production-grade DevOps pipeline deploying my Next.js portfolio from GitHub to AWS EC2 using Docker, Nginx, and GitHub Actions.",
        image: "/cicd_dockercompose.png",
        category: "devops-projects",
        slug: "cicd-dockerized-app-deployment-aws",
      },
      {
        id: 3,
        title:
          "CI/CD Kubernetes App Deployment via Minikube & Cloudflare Tunnel",
        description:
          "Deployed my NextJS portfolio apps inside a private Kubernetes cluster using Minikube on a Hyper-V Ubuntu VM.",
        image: "/cicd_kubernetes.png",
        category: "devops-projects",
        slug: "cicd-kubernetes-app-deployment",
      },
    ];
    categoryData = devops;
  } else if (category === "ui-ux-designs") {
    const uiux = [
      {
        id: 1,
        title: "Bushfire Info & Management App",
        description:
          "Created UI/UX design for a critical Bushfire Info & Management App.",
        image: "/uiux.png",
        category: "ui-ux-designs",
        slug: "bushfire-info-app",
      },
    ];
    categoryData = uiux;
  } else if (category === "websites") {
    const websites = [
      {
        id: 1,
        title: "Chartered Accountant Firm Website",
        description:
          "Developed a modern, professional website for my brother's Chartered Accountant firm using Next.js and TypeScript.",
        image: "/websites.jpg",
        category: "websites",
        slug: "ca-firm-website",
      },
      {
        id: 2,
        title: "Portfolio Website",
        description: "A modern Next.js portfolio site with dynamic content.",
        image: "/hero.png",
        category: "websites",
        slug: "portfolio-website",
      },
    ];
    categoryData = websites;
  } else if (category === "automation") {
    const automation = [
      {
        id: 1,
        title: "Automation Project",
        description: "Various automation tools and scripts.",
        image: "/automation.jpg",
        category: "automation",
        slug: "automation-project",
      },
    ];
    categoryData = automation;
  }

  // Find the project in the category data
  const projectFromData = categoryData?.find((p) => p.slug === projectSlug);

  // First check our static projectsData object
  if (projectsData[projectSlug]) {
    return {
      ...projectsData[projectSlug],
      image: projectFromData?.image || "/hero.png",
    };
  }

  // If not found, return a default response
  return {
    title: "Project Not Found",
    content: <p>The requested project could not be found.</p>,
    image: "/hero.png",
  };
};

const ProjectPage = async ({ params }) => {
  // Make sure params is properly defined and has the expected properties
  const { category, project } = (await params) || {};

  // Get the formatted category name for display
  const categoryDisplay = formatCategoryName(category);

  // Get project data
  const projectData = getProjectData(category, project);

  return (
    <div className={styles.container}>
      <Breadcrumb
        items={[
          { label: "Portfolio", href: "/portfolio" },
          { label: categoryDisplay, href: `/portfolio/${category}` },
          {
            label: projectData.title,
            href: `/portfolio/${category}/${project}`,
          },
        ]}
      />

      {/* Table of Contents - only show if sections exist */}
      {projectData.sections && (
        <TableOfContents sections={projectData.sections} />
      )}

      <div className={styles.pageWrapper}>
        <div className={styles.mainContent}>
          <div className={styles.header}>
            <h1 className={styles.title}>{projectData.title}</h1>
            <div className={styles.imageContainer}>
              <Image
                src={projectData.image}
                fill
                alt={projectData.title}
                className={styles.image}
                priority
              />
            </div>
          </div>

          <div className={styles.content}>{projectData.content}</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
