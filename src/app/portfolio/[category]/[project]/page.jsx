import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";

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

        <h2>Live At:</h2>
        <p>
          View the site at:{" "}
          <a
            style={{ color: "skyblue", textDecoration: "underline", cursor: "pointer" }}
            href="https://nishanau.github.io/ca_firm_site/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://nishanau.github.io/ca_firm_site/
          </a>
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
        title: "CI/CD Dockerized App Deployment on AWS",
        description:
          "Built a production-grade DevOps pipeline deploying my Next.js portfolio from GitHub to AWS EC2 using Docker, Nginx, and GitHub Actions.",
        image: "/cicd_dockercompose.png",
        category: "devops-projects",
        slug: "cicd-dockerized-app-deployment-aws",
      },
      {
        id: 2,
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
  );
};

export default ProjectPage;
