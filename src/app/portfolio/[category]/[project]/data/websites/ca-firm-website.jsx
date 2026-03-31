const data = {
  title: "Chartered Accountant Firm Website",
  image: "/websites.jpg",
  sections: [
    { id: "overview", title: "Overview", level: 2 },
    { id: "project-goals", title: "Project Goals", level: 2 },
    { id: "technologies", title: "Technologies Used", level: 2 },
    { id: "key-features", title: "Key Features", level: 2 },
    { id: "home-page", title: "Home Page", level: 3 },
    { id: "services", title: "Services Section", level: 3 },
    { id: "team", title: "Team Member Showcase", level: 3 },
    { id: "contact", title: "Contact Page", level: 3 },
    { id: "implementation", title: "Implementation Details", level: 2 },
    { id: "settings-architecture", title: "Settings-Based Architecture", level: 3 },
    { id: "component-architecture", title: "Component Architecture", level: 3 },
    { id: "performance", title: "Performance Optimization", level: 3 },
    { id: "results", title: "Results & Impact", level: 2 },
    { id: "live", title: "Live At", level: 2 },
  ],
  content: (
    <>
      <h2 id="overview">Overview</h2>
      <p>
        Developed a modern, professional website for my brother&apos;s Chartered Accountant firm using Next.js and TypeScript.
        The site presents the firm&apos;s services, team members, and contact information in a clean, professional interface
        designed to build trust and convert visitors into clients.
      </p>

      <h2 id="project-goals">Project Goals</h2>
      <ul>
        <li>Create a professional online presence for the CA practice</li>
        <li>Highlight services and expertise in accounting and financial services</li>
        <li>Showcase team members to build trust and credibility</li>
        <li>Provide easy contact options for potential clients</li>
        <li>Implement responsive design for all devices</li>
        <li>Create a maintainable solution that my brother could easily update himself</li>
      </ul>

      <h2 id="technologies">Technologies Used</h2>
      <ul>
        <li><strong>Frontend Framework:</strong> Next.js with TypeScript</li>
        <li><strong>Styling:</strong> CSS Modules with responsive design</li>
        <li><strong>Maps Integration:</strong> Google Maps API</li>
        <li><strong>Form Handling:</strong> Custom email service integration</li>
        <li><strong>Content Management:</strong> Centralized settings file approach</li>
        <li><strong>Deployment:</strong> Static site generation on GitHub Pages</li>
        <li><strong>SEO:</strong> Meta tags, semantic HTML, optimized content</li>
      </ul>

      <h2 id="key-features">Key Features</h2>

      <h3 id="home-page">Home Page</h3>
      <ul>
        <li>Hero section with firm value proposition</li>
        <li>Service highlights with visual elements</li>
        <li>Testimonials carousel from satisfied clients</li>
        <li>Call-to-action buttons for contact and services</li>
      </ul>

      <h3 id="services">Services Section</h3>
      <ul>
        <li>Detailed descriptions of accounting and financial services</li>
        <li>Clear categorization of service offerings</li>
        <li>Visual icons representing each service type</li>
        <li>Service-specific contact options</li>
      </ul>

      <h3 id="team">Team Member Showcase</h3>
      <ul>
        <li>Professional profiles with credentials and specializations highlighted</li>
        <li>Professional photographs with consistent styling</li>
        <li>Contact information for direct reach-out</li>
      </ul>

      <h3 id="contact">Contact Page</h3>
      <ul>
        <li>Interactive contact form with validation</li>
        <li>Google Maps integration showing office location</li>
        <li>Multiple contact channels (phone, email, location)</li>
        <li>Form submission with confirmation</li>
      </ul>

      <h2 id="implementation">Implementation Details</h2>

      <h3 id="settings-architecture">Settings-Based Architecture</h3>
      <p>The site uses a unique settings-based architecture:</p>
      <ul>
        <li><strong>siteSettings.ts</strong> — Central configuration file with all content</li>
        <li><strong>settingsUtils.ts</strong> — Utility functions to access and format settings</li>
        <li><strong>types.ts</strong> — TypeScript interfaces ensuring data integrity</li>
        <li>React components that consume settings via custom hooks</li>
      </ul>
      <p>This allows my brother to update services, team members, contact details, and testimonials by editing a single file — no coding knowledge needed.</p>

      <h3 id="component-architecture">Component Architecture</h3>
      <ul>
        <li><strong>ContactForm</strong> — Handles user inquiries with validation</li>
        <li><strong>GoogleMap</strong> — Displays office location</li>
        <li><strong>TeamMembers</strong> — Renders team profiles with consistent styling</li>
        <li><strong>Services</strong> — Displays service categories and descriptions</li>
        <li><strong>Testimonials</strong> — Carousel of client feedback</li>
      </ul>

      <h3 id="performance">Performance Optimization</h3>
      <ul>
        <li>Static site generation for fast loading</li>
        <li>Image optimization for reduced bandwidth</li>
        <li>Code splitting for improved initial load time</li>
        <li>Responsive breakpoints: 320px, 768px, 1024px, 1440px+</li>
      </ul>

      <h2 id="results">Results & Impact</h2>
      <ul>
        <li>Professional online presence established for the CA firm</li>
        <li>Improved client acquisition through online inquiries</li>
        <li>Enhanced brand credibility with professional design</li>
        <li>Empowered my brother to maintain and update the site independently</li>
        <li>Excellent performance scores in Google PageSpeed Insights</li>
      </ul>

      <h2 id="live">Live At</h2>
      <p>
        View the site at:{" "}
        <a
          style={{ color: "skyblue", textDecoration: "underline" }}
          href="https://nishanau.github.io/ca_firm_site/"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://nishanau.github.io/ca_firm_site/
        </a>
      </p>
    </>
  ),
};

export default data;
