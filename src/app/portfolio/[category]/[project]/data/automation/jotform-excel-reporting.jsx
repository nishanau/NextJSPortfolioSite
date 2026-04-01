const data = {
  title: "JotForm → Excel Automated Reporting Dashboard",
  image: "/automation/jotform-excel-reporting/banner.png",
  sections: [
    { id: "overview", title: "Overview", level: 2 },
    { id: "problem", title: "Problem Being Solved", level: 2 },
    { id: "solution", title: "Solution Architecture", level: 2 },
    { id: "webhook-flow", title: "Webhook & Power Automate Flow", level: 3 },
    { id: "excel-layer", title: "Excel Data Layer", level: 3 },
    { id: "visualisation", title: "Charts & Visualisation", level: 3 },
    { id: "outcome", title: "Outcome & Impact", level: 2 },
    { id: "skills", title: "Skills & Tools Used", level: 2 },
  ],
  content: (
    <>
      <h2 id="overview">Overview</h2>
      <p>
        Built an automated reporting pipeline that connects JotForm submissions directly to a live Microsoft Excel
        dashboard via Power Automate webhooks. Every time a form is submitted, the data is instantly appended to
        a structured spreadsheet, and dynamic Excel charts update automatically — turning raw form responses into
        a real-time reporting dashboard with zero manual effort.
      </p>

      <h2 id="problem">Problem Being Solved</h2>
      <p>
        The business had staff manually copying JotForm submission data into spreadsheets, then rebuilding
        charts and reports each time. This was time-consuming, error-prone, and meant reports were always
        out of date. A fully automated pipeline was needed.
      </p>

      <h2 id="solution">Solution Architecture</h2>

      <h3 id="webhook-flow">Webhook & Power Automate Flow</h3>
      <ul>
        <li>JotForm webhook configured to fire an HTTP POST on every form submission</li>
        <li>Power Automate HTTP trigger receives the payload and parses the JSON fields</li>
        <li>Flow maps each form field to the correct Excel column</li>
        <li>New row is appended to the Excel table stored in SharePoint/OneDrive</li>
        <li>Timestamp and submission metadata are automatically added alongside form data</li>
      </ul>

      <h3 id="excel-layer">Excel Data Layer</h3>
      <ul>
        <li>Excel Table (not just a range) used as the data source — enables dynamic expansion</li>
        <li>Structured columns defined for each form field with consistent data types</li>
        <li>Lookup formulae (<code>XLOOKUP</code>, <code>SUMIF</code>, <code>COUNTIF</code>) aggregate data into summary tables</li>
        <li>Conditional formatting applied to highlight anomalies or threshold breaches</li>
        <li>PivotTables built on top of the raw data for flexible slicing and filtering</li>
      </ul>

      <h3 id="visualisation">Charts & Visualisation</h3>
      <ul>
        <li>Charts bound to Excel Tables — they extend automatically as new rows are added</li>
        <li>Bar and line charts for trend analysis over time</li>
        <li>Pie/donut charts for categorical breakdowns</li>
        <li>Dashboard sheet with all key visuals consolidated for management reporting</li>
        <li>No manual refresh needed — opening the file shows the latest data</li>
      </ul>

      <h2 id="outcome">Outcome & Impact</h2>
      <ul>
        <li>Eliminated hours of weekly manual data entry across the team</li>
        <li>Reports are always current — updated within seconds of each submission</li>
        <li>Reduced risk of human error in data transcription</li>
        <li>Management can access live dashboard at any time without requesting a report</li>
        <li>Scalable — adding new form fields requires only a column addition and formula update</li>
      </ul>

      <h2 id="skills">Skills & Tools Used</h2>
      <ul>
        <li>Power Automate — HTTP trigger, JSON parsing, SharePoint/Excel connector</li>
        <li>JotForm — Webhook configuration and payload structure</li>
        <li>Microsoft Excel — Tables, PivotTables, dynamic charts, advanced formulae</li>
        <li>SharePoint / OneDrive — File hosting for real-time Excel access</li>
        <li>JSON data mapping and field transformation in Power Automate</li>
      </ul>
    </>
  ),
};

export default data;
