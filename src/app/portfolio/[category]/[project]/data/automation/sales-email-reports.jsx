const data = {
  title: "Automated Weekly Sales & Operations Email Reports",
  image: "/automation/sales-email-reports/banner.png",
  sections: [
    { id: "overview", title: "Overview", level: 2 },
    { id: "problem", title: "Problem Being Solved", level: 2 },
    { id: "reports", title: "Reports Automated", level: 2 },
    { id: "weekly-sales", title: "Weekly Sales Performance", level: 3 },
    { id: "discount-report", title: "Product Discount Report", level: 3 },
    { id: "damage-report", title: "Product Damage Report", level: 3 },
    { id: "returns-report", title: "Returns Report", level: 3 },
    { id: "architecture", title: "Technical Architecture", level: 2 },
    { id: "outcome", title: "Outcome & Impact", level: 2 },
    { id: "skills", title: "Skills & Tools Used", level: 2 },
  ],
  content: (
    <>
      <h2 id="overview">Overview</h2>
      <p>
        Built a suite of scheduled Power Automate flows that automatically pull sales and operations data
        and deliver tailored email reports to relevant stakeholders every week. Reports cover weekly sales
        performance, product discount breakdowns, product damage summaries, and customer returns —
        replacing hours of manual data extraction and report building with fully automated delivery.
      </p>

      <h2 id="problem">Problem Being Solved</h2>
      <p>
        Management required weekly visibility into sales performance and operational metrics across
        multiple stores. Previously, staff manually extracted data from the POS/sales system, compiled
        it in Excel, and emailed reports — a process that took hours each week and was often delayed
        or inconsistently formatted. Automation was needed to ensure timely, consistent, and accurate reporting.
      </p>

      <h2 id="reports">Reports Automated</h2>

      <h3 id="weekly-sales">Weekly Sales Performance Report</h3>
      <ul>
        <li>Total sales revenue per store for the week</li>
        <li>Top-performing product categories</li>
        <li>Transaction count and average basket value</li>
        <li>Delivered every Monday morning covering the previous week</li>
      </ul>

      <h3 id="discount-report">Product Discount Report</h3>
      <ul>
        <li>Detailed breakdown of all discounts applied during the week</li>
        <li>Discount by product, discount type, and store</li>
        <li>Total discount value vs total sales — discount rate calculation</li>
        <li>Flags unusually high discount rates for management review</li>
        <li>Helps identify misuse of discount codes or pricing anomalies</li>
      </ul>

      <h3 id="damage-report">Product Damage Report</h3>
      <ul>
        <li>Summary of all products written off as damaged during the week</li>
        <li>Broken down by store, product category, and individual SKU</li>
        <li>Total cost of damaged goods for the week</li>
        <li>Trend comparison to prior weeks to identify patterns</li>
        <li>Enables proactive action on stores with unusually high damage rates</li>
      </ul>

      <h3 id="returns-report">Returns Report</h3>
      <ul>
        <li>Weekly summary of all customer returns and refunds processed</li>
        <li>Broken down by product, return reason, and store</li>
        <li>Return rate as a percentage of total sales</li>
        <li>High-return products flagged for quality or supplier review</li>
      </ul>

      <h2 id="architecture">Technical Architecture</h2>
      <ul>
        <li>Python Scripts as cron jobs stored in a Django server. </li>
        <li>Gets data source from database server and user prepared reports. </li>
        <li>Data is processed and aggregated within the flow using expressions and variables</li>
        <li>HTML email body is dynamically constructed with formatted tables using Power Automate HTML/CSS</li>
        <li>Report sent via email using outlook account app code instead of password.</li>
        <li>Each report type has its own flow — independent scheduling, failure isolation, and easy maintenance</li>
      </ul>

      <h2 id="outcome">Outcome & Impact</h2>
      <ul>
        <li>Hours of manual weekly report preparation eliminated entirely</li>
        <li>Reports delivered consistently every week on schedule — no delays or missed weeks</li>
        <li>Consistent format and data accuracy — no human transcription errors</li>
        <li>Management has reliable data to act on at the start of each week</li>
        <li>Operational issues (high damage, unusual discounts) surfaced proactively rather than reactively</li>
        <li>Easy to extend — adding a new report is a new flow, not a new manual process</li>
      </ul>

      <h2 id="skills">Skills & Tools Used</h2>
      <ul>
        <li>Power Automate — scheduled flows, data queries, expressions, variables, HTML email construction</li>
        <li>Microsoft 365 Outlook — automated email delivery to distribution groups</li>
        <li>SharePoint / SQL / REST API — data source integration depending on system</li>
        <li>Data aggregation and reporting logic using Power Automate expressions</li>
        <li>Process design — defining report structure, metrics, and stakeholder distribution</li>
      </ul>
    </>
  ),
};

export default data;
