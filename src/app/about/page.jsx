'use client'
import React, { useEffect, useRef } from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '@/components/Button/Button'
// export const metadata = {
//   title: "About",
//   description: "About Page",
// };
export const About = () => {
    const tooltipRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        const updateTooltipPosition = () => {
            if (!tooltipRef.current || !contentRef.current) return;

            const contentBox = contentRef.current.getBoundingClientRect();
            const viewportHeight = window.innerHeight;

            // Calculate the visible portion of the content box
            const visibleTop = Math.max(0, contentBox.top);
            const visibleBottom = Math.min(viewportHeight, contentBox.bottom);
            const visibleHeight = visibleBottom - visibleTop;

            // Center the tooltip in the visible portion
            if (visibleHeight > 0) {
                const offset = visibleTop - contentBox.top;
                const centerOffset = offset + (visibleHeight / 2) - (tooltipRef.current.offsetHeight / 2);
                tooltipRef.current.style.top = `${Math.max(0, centerOffset)}px`;
            }
        };

        const handleScroll = () => {
            if (contentRef.current && contentRef.current.matches(':hover')) {
                updateTooltipPosition();
            }
        };

        const handleMouseEnter = () => {
            updateTooltipPosition();
        };

        const content = contentRef.current;
        if (content) {
            content.addEventListener('mouseenter', handleMouseEnter);
            window.addEventListener('scroll', handleScroll, true);
        }

        return () => {
            if (content) {
                content.removeEventListener('mouseenter', handleMouseEnter);
            }
            window.removeEventListener('scroll', handleScroll, true);
        };
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image src="https://images.pexels.com/photos/735911/pexels-photo-735911.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    // fill={true}
                    fill={true}
                    className={styles.img}
                    alt='image of person"s hand on a keyboard'
                />
                <div className={styles.imgText}>
                    <h2>
                        Zeal, Consistency, Persistence.
                    </h2>
                </div>
            </div>

            <div className={styles.textContainer}>
                <h1 className={styles.sectionTitle}>About Me</h1>
                <div className={styles.aboutContent}>
                    <p>
                        I currently work at Shiploads Pty Ltd as an ICT Support Technician, managing all aspects of IT infrastructure.
                        When I first started, I wasn&apos;t entirely sure where my career would lead, but as I immersed myself in the role,
                        I discovered a genuine passion for automation and infrastructure management.
                    </p>
                    <p>
                        Throughout my work, I&apos;ve automated and streamlined numerous processes using Power Automate, Bash, Python,
                        and custom monitoring scripts. I&apos;ve built cross-integration solutions that fetch data from APIs and integrate
                        with in-house servers, implemented cron jobs for Django applications, and much more. This hands-on experience
                        opened my eyes to the power of automation.
                    </p>
                    <p>
                        Beyond automation, I&apos;ve developed a strong foundation in infrastructure and cloud management—maintaining Active Directory
                        Domain Services, administering Microsoft 365 environments, managing user accounts, permissions, and ensuring robust
                        security practices. I recently validated this expertise by passing the <strong>Microsoft AZ-104 (Azure Administrator Associate)</strong> exam.
                        This blend of hands-on experience across diverse IT domains naturally drew me toward <strong>DevOps</strong>, <strong>Cloud Engineering</strong>,
                        and <strong>Infrastructure</strong>—roles that let me operate across the full spectrum of modern IT.
                    </p>
                </div>
                <Button route="/portfolio" name="Check Out My Work" />
            </div>

            <div className={styles.journeySection}>
                <h1 className={styles.sectionTitle}>My Journey</h1>
                <div className={styles.timeline}>

                    <div className={styles.timelineItem}>
                        <div className={styles.timelineDate}>July 2024</div>
                        <div className={styles.timelineContent}>
                            <h3>Master of IT - UTAS</h3>
                            <p>Graduated from the University of Tasmania with a Master&apos;s degree in Information Technology,
                                building a strong theoretical foundation in computing and systems.</p>
                        </div>
                    </div>

                    <div className={styles.timelineItem}>
                        <div className={styles.timelineDate}>November 2024</div>
                        <div className={styles.timelineContent}>
                            <h3>ICT Support Technician - Shiploads</h3>
                            <p>Began my professional journey at Shiploads, taking responsibility for comprehensive IT infrastructure
                                management and discovering my passion for practical problem-solving.</p>
                        </div>
                    </div>

                    <div className={styles.timelineItem}>
                        <div className={styles.timelineDate}>March - April 2025</div>
                        <div className={styles.timelineContent}>
                            <h3>Automation & Infrastructure Discovery</h3>
                            <p>Unlocked my passion for automation through hands-on work with Power Automate, Python, Bash scripting,
                                API integrations, and infrastructure management including Active Directory and Microsoft 365 administration.</p>
                        </div>
                    </div>

                    <div className={styles.timelineItem}>
                        <div className={styles.timelineDate}>April 2025</div>
                        <div className={styles.timelineContent}>
                            <h3>DevOps & Cloud Exploration</h3>
                            <p>Discovered the world of DevOps and cloud engineering, diving deep into CI/CD pipelines, containerization with Docker,
                                and modern deployment strategies. This marked the beginning of my journey toward roles in DevOps, Cloud, and Infrastructure engineering.</p>
                        </div>
                    </div>

                    <div className={styles.timelineItem}>
                        <div className={styles.timelineDate}>April 2025</div>
                        <div className={styles.timelineContent}>
                            <h3>First CI/CD Deployment</h3>
                            <p>Built and deployed my first production-ready DevOps project on AWS EC2 using Docker, Docker Compose,
                                and Nginx with HTTPS via Let&apos;s Encrypt. Implemented automated deployments through GitHub Actions CI/CD.</p>
                            <div className={styles.projectLinks}>
                                <a href="http://my-portfolio.zapto.org" target="_blank" rel="noopener noreferrer">
                                    Live Project →
                                </a>
                                <a href="https://github.com/nishanau/my-portfolio/commits/main" target="_blank" rel="noopener noreferrer">
                                    View Commits →
                                </a>
                                <a href="/portfolio/devops-projects/cicd-dockerized-app-deployment-aws">
                                    More Details →
                                </a>
                            </div>
                            <p className={styles.principle}>
                                <strong>Operating Principle:</strong> Build fast, break things, learn faster.
                            </p>
                        </div>
                    </div>

                    <div className={styles.timelineItem}>
                        <div className={styles.timelineDate}>May 2025</div>
                        <div className={styles.timelineContent}>
                            <h3>Kubernetes Deployment Experiment</h3>
                            <p>Deployed a NextJS portfolio application in a private Kubernetes cluster using Minikube on a Hyper-V Ubuntu VM.
                                Configured secure public access via a persistent Cloudflare Tunnel. Successfully tested the same portfolio app
                                in a containerized Kubernetes environment.</p>
                            <div className={styles.projectLinks}>
                                <a href="/portfolio/devops-projects/cicd-kubernetes-app-deployment">
                                    More Details →
                                </a>
                            </div>
                            <p className={styles.principle}>
                                <strong>Operating Principle:</strong> Build fast, break things, learn faster.
                            </p>
                            <span className={styles.retired}>Currently Retired</span>
                        </div>
                    </div>

                    <div className={styles.timelineItem}>
                        <div className={styles.timelineDate}>September 2025 - Present</div>
                        <div className={styles.timelineContent} ref={contentRef}>
                            <h3>Enterprise-Grade Kubernetes CI/CD System</h3>
                            <p className={styles.mobileHighlight}>
                                <em>While the older two projects were rapid prototypes, this one is built using a gradual, iterative approach
                                    that simulates professional working environments, focusing on systematic improvements and best practices
                                    at each stage.</em>
                            </p>
                            <p>Currently building a production-ready Kubernetes CI/CD pipeline from the ground up using industry best practices.
                                This comprehensive project includes:</p>
                            <ul>
                                <li><strong>Bare-Metal Kubernetes Cluster:</strong> Built a 3-node cluster from scratch (1 control plane, 2 workers)
                                    with complete networking, storage, and security configuration</li>
                                <li><strong>GitOps with ArgoCD:</strong> Implementing declarative continuous delivery with automated sync policies
                                    and multi-environment management</li>
                                <li><strong>Multi-Environment Architecture:</strong> Separate dev, staging, and production environments using
                                    Kustomize overlays for configuration management</li>
                                <li><strong>Reusable CI Workflows:</strong> Created modular GitHub Actions templates for linting, testing,
                                    building, and deploying containerized applications</li>
                                <li><strong>Security-First Approach:</strong> Implemented pod security policies, network policies, RBAC,
                                    non-root containers, and automated policy enforcement using Conftest</li>
                                <li><strong>Infrastructure as Code:</strong> All infrastructure defined declaratively with proper versioning,
                                    validation (kubeval, kube-score), and documentation</li>
                                <li><strong>Service Mesh & Networking:</strong> Configured MetalLB for load balancing, Nginx Ingress controllers,
                                    and Flannel CNI for pod networking</li>
                                <li><strong>Cloudflare Tunnel Integration:</strong> Deployed Cloudflared as a sidecar container for secure public
                                    access to cluster applications without exposing ports, with automated DNS management and zero-trust security</li>
                                <li><strong>Comprehensive Testing:</strong> Pre-deployment validation pipeline including YAML linting, schema validation,
                                    policy testing, and security scanning</li>
                            </ul>
                            <div className={styles.hoverInfo} ref={tooltipRef}>
                                <p className={styles.highlight}>
                                    While the older two projects were rapid prototypes, this one is built using a gradual, iterative approach
                                    that simulates professional working environments, focusing on systematic improvements and best practices
                                    at each stage.
                                </p>
                            </div>
                            <div className={styles.projectLinks}>
                                <a href="https://portfolio.nishdevops.org" target="_blank" rel="noopener noreferrer">
                                    Live Site →
                                </a>
                                <a href="https://github.com/nishanau/NextJSPortfolioSite/blob/prod/technical_guide_and_learning_logs.md" target="_blank" rel="noopener noreferrer">
                                    Technical Guide →
                                </a>
                                <a href="https://github.com/nishanau/NextJSPortfolioSite/commits" target="_blank" rel="noopener noreferrer">
                                    View Commits →
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className={styles.timelineItem}>
                        <div className={styles.timelineDate}>February 2026</div>
                        <div className={styles.timelineContent}>
                            <h3>Security Baseline Report & Risk Assessment</h3>
                            <p>Conducted a comprehensive security baseline assessment for Shiploads&apos; IT environment, closely aligned with the
                                NIST Cybersecurity Framework (CSF) 2.0. Evaluated the organisation&apos;s security posture across people, processes,
                                and technology — identifying gaps and prioritising remediation efforts.</p>
                            <ul>
                                <li><strong>CSF 2.0 Alignment:</strong> Mapped existing controls and practices against the six CSF 2.0 core functions —
                                    Govern, Identify, Protect, Detect, Respond, and Recover</li>
                                <li><strong>Risk Register:</strong> Developed a structured risk register cataloguing identified vulnerabilities,
                                    threat likelihood, business impact, and current control effectiveness</li>
                                <li><strong>Remediation Plan:</strong> Created a prioritised remediation roadmap with actionable steps, ownership
                                    assignments, and timelines to address critical and high-risk findings</li>
                            </ul>
                        </div>
                    </div>

                    <div className={styles.timelineItem}>
                        <div className={styles.timelineDate}>March 2026</div>
                        <div className={styles.timelineContent}>
                            <h3>Microsoft Certified: Azure Administrator Associate (AZ-104)</h3>
                            <p>Passed the AZ-104 exam, becoming a certified Microsoft Azure Administrator Associate. This certification
                                validates hands-on expertise in managing Azure identities, governance, storage, compute, and networking—
                                reinforcing a cloud-first mindset alongside existing on-premises infrastructure experience.</p>
                            <p className={styles.principle}>
                                <strong>What this means:</strong> Real-world Azure skills bridging on-premises and cloud, accelerating the path toward Cloud and Infrastructure engineering roles.
                            </p>
                        </div>
                    </div>

                </div>
            </div>

            <div className={styles.roadmapSection}>
                <h1 className={styles.sectionTitle}>What I&apos;m Working On</h1>

                <div className={styles.roadmapGrid}>
                    <div className={styles.roadmapColumn}>
                        <h2>🔨 Currently In Progress</h2>
                        <ul className={styles.roadmapList}>
                            <li>
                                <strong>Domain Redesign & Hierarchy:</strong> Redesigning the Active Directory domain structure and OU hierarchy
                                to better reflect the organisation&apos;s operational model and enable cleaner policy scoping
                            </li>
                            <li>
                                <strong>Shiploads Website Revamp:</strong> Designing and developing a modern, revamped Shiploads website
                                with a fresh look, improved UX, and up-to-date content
                            </li>
                            <li>
                                <strong>AZ-305 Preparation:</strong> Studying for the Microsoft Azure Solutions Architect Expert (AZ-305)
                                certification to deepen cloud architecture knowledge and move toward senior cloud roles
                            </li>
                            <li>
                                <strong>Inventory & Asset Tracking System:</strong> Developing a full-featured inventory and asset tracking
                                system using Microsoft Power Apps, Dataverse, and Power Automate — replacing manual tracking with a
                                structured, automated solution across all sites
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About