const data = {
  title: "Power Automate & Microsoft Lists — Compliance Tracking System",
  image: "/automation/compliance-tracking-lists/banner.png",
  sections: [
    { id: "overview", title: "Overview", level: 2 },
    { id: "problem", title: "Problem Being Solved", level: 2 },
    { id: "solution", title: "Solution Architecture", level: 2 },
    { id: "lists-structure", title: "Microsoft Lists Structure", level: 3 },
    { id: "automation-flows", title: "Power Automate Flows", level: 3 },
    { id: "cross-store-reporting", title: "Cross-store Reporting", level: 3 },
    { id: "outcome", title: "Outcome & Impact", level: 2 },
    { id: "skills", title: "Skills & Tools Used", level: 2 },
  ],
  content: (
    <>
      <h2 id="overview">Overview</h2>
      <p>
        Replaced a fragile, version-conflict-prone Excel task system with a structured
        Power Automate + Microsoft Lists solution for compliance tracking across multiple stores.
        The migration delivered real-time, auditable compliance records, automated task assignment
        and escalation, and consolidated cross-store reporting — all without any third-party tools.
      </p>

      <h2 id="problem">Problem Being Solved</h2>
      <p>
        The previous system used shared Excel files to track compliance tasks across 12 stores.
        Staff frequently overwrote each other&apos;s changes, version history was unreliable,
        and there was no visibility into overdue tasks or escalation paths. Management had to
        manually chase each store for status updates.
      </p>

      <h2 id="solution">Solution Architecture</h2>

      <h3 id="lists-structure">Microsoft Lists Structure</h3>
      <ul>
        <li>A single list with separate views for each store created per store for local task ownership and clear permissions</li>
        <li>Columns defined for: task name, assigned staff, due date, status, store, priority, and completion evidence</li>
        <li>Choice and person columns enforce data consistency — no free-text status fields</li>
        <li>Views configured per role: staff see only their tasks; managers see all store tasks</li>
        <li>Version history enabled on all lists for a full audit trail of changes</li>
      </ul>

      <h3 id="automation-flows">Power Automate Flows</h3>
      <ul>
        <li><strong>Task Creation Flow:</strong> Automatically creates tasks in the correct store list when a new compliance requirement is logged</li>
        <li><strong>Due Date Reminder:</strong> Sends email reminders to assigned staff 3 days and 1 day before due date</li>
        <li><strong>Escalation Flow:</strong> If a task is not marked complete by the due date, automatically notifies the store manager</li>
        <li><strong>Completion Notification:</strong> Triggers a confirmation email to the requester when a task is marked complete</li>
        <li><strong>Status Change Audit:</strong> Logs every status change with timestamp and user to a separate audit list</li>
      </ul>

      <h3 id="cross-store-reporting">Cross-store Reporting</h3>
      <ul>
        <li>A scheduled Power Automate flow runs weekly, querying all store lists via SharePoint REST API</li>
        <li>Aggregated data is written to a central &quot;Compliance Summary&quot; SharePoint list</li>
        <li>Summary list feeds a Power BI report (or Excel PivotTable) accessible to management</li>
        <li>Report shows: overdue tasks by store, completion rates, upcoming deadlines, and escalation history</li>
        <li>Management gets a single consolidated view without contacting individual stores</li>
      </ul>

      <h2 id="outcome">Outcome & Impact</h2>
      <ul>
        <li>Eliminated version conflict issues — concurrent edits are handled natively by SharePoint</li>
        <li>Real-time visibility into compliance status across all 12 stores</li>
        <li>Automated escalation means no tasks fall through the cracks silently</li>
        <li>Full audit trail for every task — who changed what, and when</li>
        <li>Management reporting time reduced from manual weekly collation to zero</li>
        <li>Staff adoption was high due to familiar Microsoft 365 interface</li>
      </ul>

      <h2 id="skills">Skills & Tools Used</h2>
      <ul>
        <li>Microsoft Lists — list design, permissions, views, and column types</li>
        <li>Power Automate — scheduled flows, approval actions, SharePoint connectors, HTTP requests</li>
        <li>SharePoint REST API — querying lists across store collections</li>
        <li>Microsoft 365 — permissions model, group management, and sharing configuration</li>
        <li>Process design — mapping existing manual workflows into automated equivalents</li>
      </ul>
    </>
  ),
};

export default data;
