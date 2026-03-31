import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import TableOfContents from "@/components/TableOfContents/TableOfContents";
import registry from "./data/index";

// Utility: format category slug → display name
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

// Load project data from the registry
const getProjectData = async (slug) => {
  const loader = registry[slug];
  if (!loader) {
    return {
      title: "Project Not Found",
      image: "/hero.png",
      content: <p>The requested project could not be found.</p>,
    };
  }
  const mod = await loader();
  return mod.default;
};

const ProjectPage = async ({ params }) => {
  const { category, project } = (await params) || {};
  const categoryDisplay = formatCategoryName(category);
  const projectData = await getProjectData(project);

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
