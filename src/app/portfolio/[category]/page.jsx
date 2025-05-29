import React from "react";
import styles from "./page.module.css";
import Button from "@/components/Button/Button";
import Image from "next/image";
import Projectcard from "@/components/ProjectCard/Projectcard";

const uiux = [
  {
    id: 1,
    title: "Bushfire Info & Management App",
    description:
      "Created UI/UX design for a critical Bushfire Info & Management App, incorporating PACT (People, Activities, Context, Technologies) analysis. From low-fidelity to high-fidelity, I tailored the interface based on user personas and scenarios, ensuring an intuitive design for efficient bushfire information dissemination and management, aligning with PACT components.",
    image: "/uiux.png",
  },
];

const devops = [
  {
    id: 1,
    title: "CI/CD Dockerized App Deployment on AWS",
    description:
      "Built a production-grade DevOps pipeline deploying my Next.js portfolio from GitHub to AWS EC2 using Docker, Nginx, and GitHub Actions. It automates multi-stage Docker builds, pushes to Docker Hub, and deploys with automatic container restarts. Configured Nginx with Certbot for HTTPS, provisioned EC2 with Docker, and set up Prometheus and Grafana for monitoring container health and resource usage. Gained skills in Docker optimization, CI/CD automation, secure deployment, AWS management, and production-grade observability.",
    image: "/cicd_dockercompose.png",
  },
  {
    id: 2,
    title: "CI/CD Kubernetes App Deployment via Minikube & Cloudflare Tunnel",
    description:
      "Deployed my NextJS portfolio apps inside a private Kubernetes cluster using Minikube on a Hyper-V Ubuntu VM, with secure public access via a persistent Cloudflare Tunnel linked to a custom domain. The fully automated CI/CD pipeline leverages GitHub Actions with a self-hosted runner on the VM to build, push Docker images, and redeploy the app using Kubernetes Deployments, Services, and NGINX Ingress. I configured systemd services for auto-start of Minikube and the Cloudflare Tunnel, gaining hands-on experience with Kubernetes orchestration, Cloudflare’s Zero Trust tunneling, self-hosted runners, and production-grade automation and DNS management.",
    image: "/cicd_kubernetes.png",
  },
];

const websites = [{
      id: 1,
    title: "CI/CD Dockerized App Deployment on AWS",
    description:
      "Built a production-grade DevOps pipeline deploying my Next.js portfolio from GitHub to AWS EC2 using Docker, Nginx, and GitHub Actions. It automates multi-stage Docker builds, pushes to Docker Hub, and deploys with automatic container restarts. Configured Nginx with Certbot for HTTPS, provisioned EC2 with Docker, and set up Prometheus and Grafana for monitoring container health and resource usage. Gained skills in Docker optimization, CI/CD automation, secure deployment, AWS management, and production-grade observability.",
    image: "/cicd_dockercompose.png",
}];
const automation = [{
      id: 1,
    title: "CI/CD Dockerized App Deployment on AWS",
    description:
      "Built a production-grade DevOps pipeline deploying my Next.js portfolio from GitHub to AWS EC2 using Docker, Nginx, and GitHub Actions. It automates multi-stage Docker builds, pushes to Docker Hub, and deploys with automatic container restarts. Configured Nginx with Certbot for HTTPS, provisioned EC2 with Docker, and set up Prometheus and Grafana for monitoring container health and resource usage. Gained skills in Docker optimization, CI/CD automation, secure deployment, AWS management, and production-grade observability.",
    image: "/cicd_dockercompose.png",
}];

const Category = async ({ params }) => {
  const { category } = await params;

  if (category === "devops-projects") {
    return (
      <div className={styles.container}>
        <h2>Devops Projects</h2>
        {devops.map((project) => (
          <Projectcard key={project.id} project={project} />
        ))}
      </div>
    );
  } else if (category === "ui-ux-designs") {
    return (
      <div className={styles.container}>
        <h2>UI UX Projects</h2>
        {uiux.map((project) => (
          <Projectcard key={project.id} project={project} />
        ))}
      </div>
    );
  } else if (category === "automation") {
    return (
      <div className={styles.container}>
        <h2>Automation</h2>
        {automation.map((project) => (
          <Projectcard key={project.id} project={project} />
        ))}
      </div>
    );
  } else if (category === "websites") {
    return (
      <div className={styles.container}>
        <h2>Websites</h2>
        {websites.map((project) => (
          <Projectcard key={project.id} project={project} />
        ))}
      </div>
    );
  }
};

export default Category;
