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
    title: "Enterprise-Grade Kubernetes CI/CD System",
    description:
      "Built a production-ready Kubernetes CI/CD pipeline from scratch on a 3-node bare-metal cluster with GitOps principles using ArgoCD, multi-environment architecture (dev/staging/production), and comprehensive security policies. Implemented reusable GitHub Actions workflows, Kustomize-based configuration management, Cloudflare Tunnel integration for secure public access, and automated infrastructure validation with policy enforcement. This enterprise-grade system demonstrates the evolution from rapid prototyping to scalable, secure, and maintainable infrastructure following industry best practices.",
    image: "/enterprise_cicd_k8s/banner_cicd.png",
    category: "devops-projects",
    slug: "enterprise-grade-kubernetes-cicd",
  },
  {
    id: 2,
    title: "CI/CD Dockerized App Deployment on AWS",
    description:
      "Built a production-grade DevOps pipeline deploying my Next.js portfolio from GitHub to AWS EC2 using Docker, Nginx, and GitHub Actions. It automates multi-stage Docker builds, pushes to Docker Hub, and deploys with automatic container restarts. Configured Nginx with Certbot for HTTPS, provisioned EC2 with Docker, and set up Prometheus and Grafana for monitoring container health and resource usage. Gained skills in Docker optimization, CI/CD automation, secure deployment, AWS management, and production-grade observability.",
    image: "/cicd_dockercompose.png",
    category: "devops-projects",
    slug: "cicd-dockerized-app-deployment-aws",
  },
  {
    id: 3,
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
const automation = [
  {
    id: 1,
    title: "JotForm → Excel Automated Reporting Dashboard",
    description:
      "Integrated JotForm with Microsoft Excel via Power Automate webhooks so that every form submission is instantly appended to a live spreadsheet. Layered in Excel formulae to normalise and structure the incoming data into clean tables, then built dynamic charts and visualisations that update automatically with each new submission — turning raw form responses into a real-time reporting dashboard with zero manual effort.",
    image: "/automation/jotform-excel-reporting/banner.png",
    category: "automation",
    slug: "jotform-excel-reporting",
  },
  {
    id: 2,
    title: "Power Automate & Microsoft Lists — Compliance Tracking System",
    description:
      "Replaced a fragile Excel-based task system with a structured Power Automate + Microsoft Lists solution. Automated compliance tracking workflows assign, escalate, and resolve tasks across multiple sites, while cross-site reporting flows aggregate data into a single view for management. The migration eliminated version-conflict issues and gave the team a real-time, auditable compliance record across the organisation.",
    image: "/automation/compliance-tracking-lists/banner.png",
    category: "automation",
    slug: "compliance-tracking-lists",
  },
  {
    id: 3,
    title: "JotForm Digital Forms & Approval Workflows — Paperless Process Automation",
    description:
      "Digitalised a wide range of manual, paper-based processes across 12 stores entirely within JotForm — using its built-in form builder, workflow engine, multi-stage approval routing, automated email notifications, and task management. Leave requests, incident reports, purchase approvals, uniform orders, and more are now fully digital, auditable, and archived automatically — replacing paper forms, manual emails, and physical folders.",
    image: "/automation/jotform-approval-workflows/banner.png",
    category: "automation",
    slug: "jotform-approval-workflows",
  },
  {
    id: 4,
    title: "Automated Weekly Sales & Operations Email Reports",
    description:
      "Built a suite of scheduled Power Automate flows that pull sales data and deliver tailored email reports every week — covering weekly sales performance, detailed product discount breakdowns, product damage summaries, and customer returns. Each report is automatically generated and distributed to relevant stakeholders on schedule, replacing manual data extraction and saving hours of weekly admin time.",
    image: "/automation/sales-email-reports/banner.png",
    category: "automation",
    slug: "sales-email-reports",
  },
  {
    id: 5,
    title: "Group Policy (GPO) — Domain Governance & Configuration Management",
    description:
      "Designed and deployed a comprehensive suite of Group Policy Objects to enforce consistent governance across all domain-joined office and POS computers. Policies include managed Edge bookmarks for standardised browser configurations, scheduled weekly auto-restarts to maintain system health, custom logon script execution for app installations and environment setup, and domain-wide firewall rules enforced centrally — ensuring security, consistency, and compliance across all 12 sites without manual intervention.",
    image: "/automation/gpo-domain-governance/banner.png",
    category: "automation",
    slug: "gpo-domain-governance",
  },
];

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
