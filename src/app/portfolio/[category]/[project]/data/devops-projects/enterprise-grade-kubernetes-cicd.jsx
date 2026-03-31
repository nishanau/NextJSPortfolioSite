import styles from "../../page.module.css";

const data = {
  title: "Enterprise-Grade Kubernetes CI/CD System",
  image: "/enterprise_cicd_k8s/banner_cicd.png",
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
        <pre><code>{`name: Dev CI (App + Manifests + GitOps Bump)

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

  resolve-branch:
    runs-on: ubuntu-latest
    outputs:
      target_branch: \${{ steps.resolve.outputs.target_branch }}
    steps:
      - id: resolve
        run: |
          TARGET_BRANCH="\${{ github.event.pull_request.base.ref || github.ref_name }}"
          echo "target_branch=$TARGET_BRANCH" >> $GITHUB_OUTPUT

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

  manifests-ci:
    needs: [changes, resolve-branch]
    if: \${{ needs.changes.outputs.manifests == 'true' }}
    uses: nishanau/ci-cd-templates/.github/workflows/ci-manifests.yml@main
    with:
      overlay_path: manifests/overlays/\${{ needs.resolve-branch.outputs.target_branch }}
      policies_path: policy
      kubeconform_flags: "--strict --ignore-missing-schemas"
    secrets: inherit

  bump-gitops:
    needs: [app-ci, manifests-ci, resolve-branch]
    uses: nishanau/ci-cd-templates/.github/workflows/ci-gitops-bump.yml@main
    with:
      gitops_repo: nishanau/NextJSPortfolioSite
      gitops_path: manifests/overlays/\${{ needs.resolve-branch.outputs.target_branch }}/kustomization.yaml
      image_name: docker.io/nishans0/next-portfolio
    secrets:
      gitops_pat: \${{ secrets.GITOPS_PAT }}`}</code></pre>
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
      <ul>
        <li>Runs linting and unit tests for code quality</li>
        <li>Builds multi-stage Docker image with optimizations</li>
        <li>Performs security vulnerability scanning</li>
        <li>Pushes image to Docker Hub with SHA-based tag (<code>sha-{"{"}commit{"}"}</code>)</li>
        <li><strong>Environment:</strong> Primarily runs on <code>dev</code> branch</li>
      </ul>

      <h4>Job 2: Manifests CI (Infrastructure Validation)</h4>
      <ul>
        <li>YAML linting for syntax validation</li>
        <li>Kubeconform schema validation against Kubernetes API</li>
        <li>Conftest policy enforcement (custom OPA/Rego rules)</li>
        <li>Kube-score best practices analysis</li>
        <li>Checkov IaC security scanning with SARIF output</li>
        <li><strong>Environment:</strong> Runs on all branches</li>
      </ul>

      <h4>Job 3: Tag Resolution & GitOps Bump</h4>
      <ul>
        <li><strong>Dev:</strong> Uses current commit SHA after successful app build</li>
        <li><strong>Stage:</strong> Copies verified tag from dev overlay (promotion flow)</li>
        <li><strong>Prod:</strong> Copies validated tag from stage overlay</li>
        <li>Commits tag change to trigger ArgoCD sync</li>
      </ul>

      <h3 id="environment-specific-behavior">Environment-Specific Behavior</h3>

      <div className={styles.codeContainer}>
        <h4>Development (dev branch)</h4>
        <ul>
          <li><strong>Trigger:</strong> Push to <code>dev</code></li>
          <li><strong>Tag Format:</strong> <code>sha-&#123;commit-hash&#125;</code></li>
          <li><strong>Purpose:</strong> Rapid iteration and testing</li>
        </ul>
      </div>

      <div className={styles.codeContainer}>
        <h4>Staging (stage branch)</h4>
        <ul>
          <li><strong>Trigger:</strong> Merge from <code>dev</code></li>
          <li><strong>Tag Source:</strong> Latest tag from <code>dev</code> overlay</li>
          <li><strong>Purpose:</strong> Pre-production testing with stable builds</li>
        </ul>
      </div>

      <div className={styles.codeContainer}>
        <h4>Production (prod branch)</h4>
        <ul>
          <li><strong>Trigger:</strong> Merge from <code>stage</code></li>
          <li><strong>Tag Source:</strong> Latest tag from <code>stage</code> overlay</li>
          <li><strong>Purpose:</strong> Production deployment with battle-tested images</li>
        </ul>
      </div>

      <h3 id="tag-bump-decision-matrix">Tag Bump Decision Matrix</h3>

      <h4>Dev Branch</h4>
      <ul>
        <li><strong>App code only:</strong> ✅ Builds → ✅ Updates tag → ✅ Deploys</li>
        <li><strong>Manifests only:</strong> ✅ Validates → ❌ No tag update</li>
        <li><strong>App build failed:</strong> ❌ No tag update → ❌ No deploy</li>
      </ul>

      <h4>Stage / Prod Branch</h4>
      <ul>
        <li><strong>Promotion:</strong> ✅ Copies upstream tag → ✅ Deploys</li>
        <li><strong>Policy validation failed:</strong> ❌ Blocks deploy</li>
        <li><strong>Emergency rollback:</strong> Manual tag edit → ArgoCD auto-syncs</li>
      </ul>

      <h3 id="key-workflow-characteristics">Key Workflow Characteristics</h3>
      <ul>
        <li><strong>Immutable Images:</strong> Once built in dev, same image promotes through environments</li>
        <li><strong>Fail-Safe Design:</strong> Any validation failure blocks deployment</li>
        <li><strong>Audit Trail:</strong> Git history tracks all tag changes and deployments</li>
        <li><strong>Rollback Support:</strong> Manual tag edits enable instant rollbacks via ArgoCD</li>
        <li><strong>Zero Downtime:</strong> Rolling updates ensure continuous availability</li>
      </ul>

      <h3 id="gitops-tag-propagation">GitOps Tag Propagation Flow</h3>
      <div className={styles.codeContainer}>
        <pre><code>{`# Development → Staging → Production
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

✨ Same image (sha-abc123) deployed across all environments`}</code></pre>
      </div>

      <h2 id="implementation-details">Implementation Details</h2>

      <h3 id="cluster-setup">Cluster Setup</h3>
      <ul>
        <li>Disabled swap and configured kernel parameters</li>
        <li>Installed containerd as container runtime</li>
        <li>Configured systemd cgroup driver for compatibility</li>
        <li>Initialized control plane with custom pod network CIDR</li>
        <li>Deployed Flannel CNI for pod networking</li>
        <li>Joined worker nodes using secure tokens</li>
      </ul>

      <h3 id="gitops-argocd">GitOps with ArgoCD</h3>
      <ul>
        <li>Automated sync policies for hands-off deployments</li>
        <li>Multi-environment management (dev/stage/prod namespaces)</li>
        <li>Self-healing capabilities for drift detection</li>
        <li>Rollback support for failed deployments</li>
        <li>Health status monitoring and notifications</li>
      </ul>

      <h3 id="multi-environment">Multi-Environment Architecture</h3>
      <div className={styles.codeContainer}>
        <pre><code>{`manifests/
├── base/              # Base resources
│   ├── deployment.yaml
│   ├── service.yaml
│   ├── pdb.yaml
│   └── sa.yaml
└── overlays/
    ├── dev/          # Development environment
    ├── stage/        # Staging environment
    └── prod/         # Production environment`}</code></pre>
      </div>

      <h3 id="reusable-ci">Reusable CI Workflows</h3>
      <ul>
        <li><strong>Validation:</strong> YAML linting, schema validation</li>
        <li><strong>Testing:</strong> Policy checks with Conftest</li>
        <li><strong>Building:</strong> Docker multi-stage builds</li>
        <li><strong>Publishing:</strong> Tagged images to Docker Hub</li>
        <li><strong>Deployment:</strong> ArgoCD sync triggers</li>
      </ul>

      <h3 id="security-implementation">Security Implementation</h3>
      <ul>
        <li>Pod security contexts (non-root, read-only FS)</li>
        <li>Network policies for traffic control</li>
        <li>RBAC with least-privilege service accounts</li>
        <li>Automated policy enforcement with Conftest</li>
        <li>Image scanning in CI pipeline</li>
        <li>Secret management best practices</li>
      </ul>

      <h3 id="validation-pipeline">Validation Pipeline</h3>
      <div className={styles.codeContainer}>
        <pre><code>{`# YAML Lint
yamllint manifests/

# Schema Validation
kustomize build overlays/dev | kubeconform --strict

# Policy Testing
kustomize build overlays/dev | conftest test -

# Best Practices Check
kustomize build overlays/dev | kube-score score -`}</code></pre>
      </div>

      <h3 id="cloudflare-tunnel">Cloudflare Tunnel Integration</h3>
      <ul>
        <li>Cloudflared deployed as sidecar container</li>
        <li>Automatic DNS management</li>
        <li>Zero-trust security model</li>
        <li>No firewall rule changes needed</li>
        <li>DDoS protection included</li>
      </ul>

      <h2 id="key-learnings">Key Learnings & Evolution</h2>
      <ul>
        <li><strong>Before:</strong> Quick deployments, minimal validation</li>
        <li><strong>Now:</strong> Comprehensive testing, policy enforcement</li>
        <li><strong>Result:</strong> Confidence in production deployments with full auditability</li>
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
        <a href="https://portfolio.nishdevops.org" target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
          <span className={styles.linkIcon}>🌐</span>
          <div className={styles.linkContent}>
            <span className={styles.linkLabel}>Live Website</span>
            <span className={styles.linkUrl}>portfolio.nishdevops.org</span>
          </div>
        </a>
        <a href="https://github.com/nishanau/NextJSPortfolioSite/blob/prod/technical_guide_and_learning_logs.md" target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
          <span className={styles.linkIcon}>📖</span>
          <div className={styles.linkContent}>
            <span className={styles.linkLabel}>Technical Guide</span>
            <span className={styles.linkUrl}>View on GitHub</span>
          </div>
        </a>
        <a href="https://github.com/nishanau/NextJSPortfolioSite" target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
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
};

export default data;
