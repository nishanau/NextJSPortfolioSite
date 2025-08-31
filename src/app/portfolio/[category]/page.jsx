import React from "react";
import styles from "./page.module.css";
import Projectcard from "@/components/ProjectCard/Projectcard";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";

const uiux = [
  {
    id: 1,
    title: "Bushfire Info & Management App",
    description:
      "Created UI/UX design for a critical Bushfire Info & Management App, incorporating PACT (People, Activities, Context, Technologies) analysis. From low-fidelity to high-fidelity, I tailored the interface based on user personas and scenarios, ensuring an intuitive design for efficient bushfire information dissemination and management, aligning with PACT components.",
    image: "/uiux.png",
    category: "ui-ux-designs",
    slug: "bushfire-info-app",
  },
];

const devops = [
  {
    id: 1,
    title: "CI/CD Dockerized App Deployment on AWS",
    description:
      "Built a production-grade DevOps pipeline deploying my Next.js portfolio from GitHub to AWS EC2 using Docker, Nginx, and GitHub Actions. It automates multi-stage Docker builds, pushes to Docker Hub, and deploys with automatic container restarts. Configured Nginx with Certbot for HTTPS, provisioned EC2 with Docker, and set up Prometheus and Grafana for monitoring container health and resource usage. Gained skills in Docker optimization, CI/CD automation, secure deployment, AWS management, and production-grade observability.",
    image: "/cicd_dockercompose.png",
    category: "devops-projects",
    slug: "cicd-dockerized-app-deployment-aws",
  },
  {
    id: 2,
    title: "CI/CD Kubernetes App Deployment via Minikube & Cloudflare Tunnel",
    description:
      "Deployed my NextJS portfolio apps inside a private Kubernetes cluster using Minikube on a Hyper-V Ubuntu VM, with secure public access via a persistent Cloudflare Tunnel linked to a custom domain. The fully automated CI/CD pipeline leverages GitHub Actions with a self-hosted runner on the VM to build, push Docker images, and redeploy the app using Kubernetes Deployments, Services, and NGINX Ingress. I configured systemd services for auto-start of Minikube and the Cloudflare Tunnel, gaining hands-on experience with Kubernetes orchestration, Cloudflare’s Zero Trust tunneling, self-hosted runners, and production-grade automation and DNS management.",
    image: "/cicd_kubernetes.png",
    category: "devops-projects",
    slug: "cicd-kubernetes-app-deployment",
  },
];

const websites = [
  {
    id: 1,
    title: "Chartered Accountant Firm Website",
    description:
      "Developed a modern, professional website for my brother's Chartered Accountant firm using Next.js and TypeScript. The site features responsive design, contact form with email integration, team showcases, and service descriptions. Implemented a centralized settings file for easy content management without requiring a backend or admin portal, allowing my brother to update firm details, services, and team information by modifying a single configuration file.",
    image: "/websites.jpg",
    category: "websites",
    slug: "ca-firm-website",
  },
  {
    id: 2,
    title: "CI/CD Dockerized App Deployment on AWS",
    description:
      "Built a production-grade DevOps pipeline deploying my Next.js portfolio from GitHub to AWS EC2 using Docker, Nginx, and GitHub Actions. It automates multi-stage Docker builds, pushes to Docker Hub, and deploys with automatic container restarts. Configured Nginx with Certbot for HTTPS, provisioned EC2 with Docker, and set up Prometheus and Grafana for monitoring container health and resource usage. Gained skills in Docker optimization, CI/CD automation, secure deployment, AWS management, and production-grade observability.",
    image: "/cicd_dockercompose.png",
    category: "websites",
    slug: "cicd-dockerized-app-deployment-aws",
  }
];
const automation = [{
      id: 1,
    title: "CI/CD Dockerized App Deployment on AWS",
    description:
      "Built a production-grade DevOps pipeline deploying my Next.js portfolio from GitHub to AWS EC2 using Docker, Nginx, and GitHub Actions. It automates multi-stage Docker builds, pushes to Docker Hub, and deploys with automatic container restarts. Configured Nginx with Certbot for HTTPS, provisioned EC2 with Docker, and set up Prometheus and Grafana for monitoring container health and resource usage. Gained skills in Docker optimization, CI/CD automation, secure deployment, AWS management, and production-grade observability.",
    image: "/cicd_dockercompose.png",
    category: "automation",
    slug: "cicd-dockerized-app-deployment-aws",
}];

const Category = async ({ params }) => {
  const {category} = await params || '';

  if (category === "devops-projects") {
    return (
      <div className={styles.container}>
        <Breadcrumb 
          items={[
            { label: "Portfolio", href: "/portfolio" },
            { label: "DevOps Projects", href: "/portfolio/devops-projects" }
          ]} 
        />
        <h2>Devops Projects</h2>
        {devops.map((project) => (
          <Projectcard key={project.id} project={project} />
        ))}
      </div>
    );
  } else if (category === "ui-ux-designs") {
    return (
      <div className={styles.container}>
        <Breadcrumb 
          items={[
            { label: "Portfolio", href: "/portfolio" },
            { label: "UI/UX Designs", href: "/portfolio/ui-ux-designs" }
          ]} 
        />
        <h2>UI UX Projects</h2>
        {uiux.map((project) => (
          <Projectcard key={project.id} project={project} />
        ))}
      </div>
    );
  } else if (category === "automation") {
    return (
      <div className={styles.container}>
        <Breadcrumb 
          items={[
            { label: "Portfolio", href: "/portfolio" },
            { label: "Automation", href: "/portfolio/automation" }
          ]} 
        />
        <h2>Automation</h2>
        {automation.map((project) => (
          <Projectcard key={project.id} project={project} />
        ))}
      </div>
    );
  } else if (category === "websites") {
    return (
      <div className={styles.container}>
        <Breadcrumb 
          items={[
            { label: "Portfolio", href: "/portfolio" },
            { label: "Websites", href: "/portfolio/websites" }
          ]} 
        />
        <h2>Websites</h2>
        {websites.map((project) => (
          <Projectcard key={project.id} project={project} />
        ))}
      </div>
    );
  }
};

export default Category;
