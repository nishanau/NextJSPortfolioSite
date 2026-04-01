import styles from "../../page.module.css";

const data = {
  title: "CI/CD Dockerized App Deployment on AWS",
  image: "/cicd_dockercompose.png",
  sections: [
    { id: "overview", title: "Overview", level: 2 },
    { id: "highlights", title: "Highlights", level: 2 },
    { id: "architecture", title: "Architecture Components", level: 2 },
    { id: "directory-structure", title: "Directory Structure", level: 2 },
    { id: "network-flow", title: "Network Flow", level: 2 },
    { id: "cicd-flow", title: "CI/CD Flow", level: 2 },
    { id: "deployment-steps", title: "Deployment Steps", level: 2 },
    { id: "dockerization", title: "React App Dockerization", level: 3 },
    { id: "docker-compose", title: "Docker Compose Configuration", level: 3 },
    { id: "nginx-config", title: "Nginx Proxy Configuration", level: 3 },
    { id: "certbot", title: "Certbot Initialization", level: 3 },
    { id: "github-actions", title: "GitHub Actions CI/CD", level: 3 },
    { id: "skills-gained", title: "Skills Gained", level: 2 },
  ],
  content: (
    <>
      <h2 id="overview">Overview</h2>
      <p>
        This portfolio website is a DevOps project deployed on an AWS EC2 instance using Docker, Docker Compose,
        and Nginx. It supports HTTPS via Let&apos;s Encrypt and automates deployments with GitHub Actions CI/CD.
      </p>

      <h2 id="highlights">Highlights</h2>
      <ul>
        <li>Dockerized React frontend using a multi-stage build</li>
        <li>Nginx reverse proxy with Certbot for HTTPS</li>
        <li>Container orchestration via Docker Compose</li>
        <li>Hosted on an Ubuntu EC2 instance</li>
        <li>Domain mapping via No-IP for stable access</li>
      </ul>

      <h2 id="architecture">Architecture Components</h2>
      <ul>
        <li><strong>React App:</strong> Built using <code>create-react-app</code> and containerized</li>
        <li><strong>Nginx:</strong> Serves app and handles SSL termination</li>
        <li><strong>Certbot:</strong> Automatically issues and renews SSL certificates</li>
        <li><strong>Docker Compose:</strong> Manages service orchestration</li>
        <li><strong>AWS EC2:</strong> Host environment with Ubuntu and Docker installed</li>
      </ul>

      <h2 id="directory-structure">Directory Structure</h2>
      <div className={styles.codeContainer}>
        <pre><code>{`my-portfolio/
├── app/                    # React app and Dockerfile
│   ├── Dockerfile
│   ├── src/
│   └── public/
├── reverse-proxy/         # Nginx + SSL setup
│   ├── nginx.conf
│   └── init-letsencrypt.sh
├── docker-compose.yml     # Container orchestration`}</code></pre>
      </div>

      <h2 id="network-flow">Network Flow</h2>
      <div className={styles.codeContainer}>
        <pre><code>{`[User]
  ↓ HTTPS
[my-portfolio.zapto.org]
  ↓ DNS
[EC2 Ubuntu Instance]
  ↓ Reverse Proxy
[Nginx → React Container]`}</code></pre>
      </div>

      <h2 id="cicd-flow">CI/CD Flow</h2>
      <div className={styles.codeContainer}>
        <pre><code>{`[GitHub Push to main]
  ↓
[GitHub Actions Workflow]
  ↓
[Docker Build → Push Image to Docker Hub]
  ↓
[SSH into EC2 → Pull & Restart Container]`}</code></pre>
      </div>

      <h2 id="deployment-steps">Deployment Steps</h2>

      <h3 id="dockerization">1. React App Dockerization</h3>
      <div className={styles.codeContainer}>
        <pre><code>{`FROM node:18 as builder
WORKDIR /app
COPY . .
RUN npm ci && PUBLIC_URL=/ npm run build

FROM nginx:alpine
COPY --from=builder /app/build /usr/share/nginx/html`}</code></pre>
      </div>

      <h3 id="docker-compose">2. Docker Compose Configuration</h3>
      <div className={styles.codeContainer}>
        <pre><code>{`services:
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
    depends_on:
      - app

  certbot:
    image: certbot/certbot
    container_name: certbot
    entrypoint: sh -c
    command: >
      "certbot certonly --webroot
      --webroot-path=/var/lib/letsencrypt
      --email nishanau83@gmail.com
      --agree-tos
      -d my-portfolio.zapto.org"

volumes:
  certbot-etc:
  certbot-var:`}</code></pre>
      </div>

      <h3 id="nginx-config">3. Nginx Proxy Configuration</h3>
      <div className={styles.codeContainer}>
        <pre><code>{`server {
  listen 80;
  server_name my-portfolio.zapto.org;
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
}`}</code></pre>
      </div>

      <h3 id="certbot">4. Certbot Initialization</h3>
      <ul>
        <li>Start <code>nginx</code> to respond to ACME challenges</li>
        <li>Run Certbot to generate certificate</li>
        <li>Mount cert volume to Nginx container</li>
      </ul>

      <h3 id="github-actions">5. GitHub Actions CI/CD</h3>
      <p>
        Pipeline defined in <code>.github/workflows/main.yml</code> builds, pushes to Docker Hub,
        and deploys to EC2 automatically on every push to <code>main</code>.
      </p>

      <h2 id="skills-gained">Skills Gained</h2>
      <ul>
        <li>Docker image building and orchestration with Compose</li>
        <li>SSL automation using Certbot and Nginx</li>
        <li>Domain management via dynamic DNS</li>
        <li>CI/CD implementation using GitHub Actions</li>
        <li>Server automation on AWS EC2</li>
      </ul>
    </>
  ),
};

export default data;
