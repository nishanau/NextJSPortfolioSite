const data = {
  title: "CI/CD Kubernetes App Deployment via Minikube & Cloudflare Tunnel",
  image: "/cicd_kubernetes.png",
  sections: [
    { id: "overview", title: "Overview", level: 2 },
    { id: "key-components", title: "Key Components", level: 2 },
    { id: "architecture", title: "Architecture", level: 2 },
    { id: "cicd-flow", title: "CI/CD Flow", level: 2 },
    { id: "skills-gained", title: "Skills Gained", level: 2 },
  ],
  content: (
    <>
      <h2 id="overview">Overview</h2>
      <p>
        Deployed a NextJS portfolio application inside a private Kubernetes cluster using Minikube on a Hyper-V Ubuntu VM,
        with secure public access via a persistent Cloudflare Tunnel linked to a custom domain. This was an early Kubernetes
        experiment that validated the core concept before the later enterprise-grade system.
      </p>

      <h2 id="key-components">Key Components</h2>
      <ul>
        <li><strong>Kubernetes:</strong> Minikube running on a Hyper-V Ubuntu VM</li>
        <li><strong>Ingress:</strong> NGINX Ingress Controller for in-cluster routing</li>
        <li><strong>Public Access:</strong> Cloudflare Zero Trust Tunnel (no port forwarding required)</li>
        <li><strong>CI/CD:</strong> GitHub Actions with a self-hosted runner on the VM</li>
        <li><strong>Persistence:</strong> systemd services for auto-start of Minikube and Cloudflare Tunnel</li>
      </ul>

      <h2 id="architecture">Architecture</h2>
      <ul>
        <li>NextJS app containerized and pushed to Docker Hub via GitHub Actions</li>
        <li>Kubernetes Deployment and Service resources manage the app pods</li>
        <li>NGINX Ingress routes traffic from the cluster to the app service</li>
        <li>Cloudflare Tunnel terminates public HTTPS traffic and forwards to the Ingress</li>
        <li>Custom domain mapped via Cloudflare DNS — no public IP exposure</li>
      </ul>

      <h2 id="cicd-flow">CI/CD Flow</h2>
      <ul>
        <li>Push to GitHub triggers the Actions workflow</li>
        <li>Self-hosted runner on the Ubuntu VM builds and pushes the Docker image</li>
        <li>Runner then applies updated Kubernetes manifests using <code>kubectl</code></li>
        <li>Kubernetes performs a rolling update — zero downtime deployment</li>
      </ul>

      <h2 id="skills-gained">Skills Gained</h2>
      <ul>
        <li>Kubernetes orchestration with Minikube on a local VM</li>
        <li>NGINX Ingress configuration and path-based routing</li>
        <li>Cloudflare Zero Trust tunneling and DNS management</li>
        <li>Self-hosted GitHub Actions runner setup and management</li>
        <li>systemd service configuration for reliable process management</li>
        <li>End-to-end CI/CD automation without cloud infrastructure costs</li>
      </ul>
    </>
  ),
};

export default data;
