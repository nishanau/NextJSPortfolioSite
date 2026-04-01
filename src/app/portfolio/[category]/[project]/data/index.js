/**
 * Project Data Registry
 *
 * To add a new project:
 *  1. Create a new file in the matching category subfolder:
 *     data/devops-projects/your-slug.jsx
 *     data/automation/your-slug.jsx
 *     data/websites/your-slug.jsx
 *     data/ui-ux-designs/your-slug.jsx
 *  2. Export a default object with: { title, image, sections?, content }
 *  3. Add one line here: "your-project-slug": () => import("./category/your-slug")
 *
 * That's it. No changes needed to page.jsx.
 */

const registry = {
  // DevOps Projects
  "enterprise-grade-kubernetes-cicd": () =>
    import("./devops-projects/enterprise-grade-kubernetes-cicd"),
  "cicd-dockerized-app-deployment-aws": () =>
    import("./devops-projects/cicd-dockerized-app-deployment-aws"),
  "cicd-kubernetes-app-deployment": () =>
    import("./devops-projects/cicd-kubernetes-app-deployment"),

  // Websites
  "ca-firm-website": () => import("./websites/ca-firm-website"),

  // UI/UX Designs
  "bushfire-info-app": () => import("./ui-ux-designs/bushfire-info-app"),

  // Automation
  "jotform-excel-reporting": () =>
    import("./automation/jotform-excel-reporting"),
  "compliance-tracking-lists": () =>
    import("./automation/compliance-tracking-lists"),
  "jotform-approval-workflows": () =>
    import("./automation/jotform-approval-workflows"),
  "sales-email-reports": () => import("./automation/sales-email-reports"),
  "gpo-domain-governance": () => import("./automation/gpo-domain-governance"),
};

export default registry;
