const data = {
  title: "JotForm Digital Forms & Approval Workflows — Paperless Process Automation",
  image: "/automation/jotform-approval-workflows/banner.png",
  sections: [
    { id: "overview", title: "Overview", level: 2 },
    { id: "problem", title: "Problem Being Solved", level: 2 },
    { id: "forms-digitalised", title: "Forms Digitalised", level: 2 },
    { id: "solution", title: "How JotForm Streamlined Everything", level: 2 },
    { id: "form-design", title: "Form Design & Structure", level: 3 },
    { id: "jotform-workflows", title: "JotForm Approval Workflows", level: 3 },
    { id: "notifications", title: "Automated Notifications & Task Management", level: 3 },
    { id: "archiving", title: "Digital Archiving & Record Keeping", level: 3 },
    { id: "outcome", title: "Outcome & Impact", level: 2 },
    { id: "skills", title: "Skills & Tools Used", level: 2 },
  ],
  content: (
    <>
      <h2 id="overview">Overview</h2>
      <p>
        Digitalised a wide range of manual, paper-based business processes across 12 stores entirely within
        JotForm — using its built-in form builder, workflow engine, approval routing, automated emails, and
        task management. What was previously handled through paper forms, manual emails, and physical
        archives is now a fully digital, auditable, and automated process — all without any third-party
        automation tools.
      </p>

      <h2 id="problem">Problem Being Solved</h2>
      <p>
        Across 12 stores, staff relied on paper forms and manual emails to handle everyday processes like
        leave requests, incident reports, uniform orders, and purchase approvals. Forms were physically
        passed between staff and managers, frequently lost or delayed, and archived in folders with no
        searchability. There was no consistent process, no audit trail, and compliance reporting required
        manually hunting through paper records.
      </p>

      <h2 id="forms-digitalised">Forms Digitalised</h2>
      <ul>
        <li>Leave requests</li>
        <li>Incident and injury reports</li>
        <li>Uniform and equipment orders</li>
        <li>Roster change requests</li>
        <li>Purchase and expense approvals</li>
        <li>Product return and damage reports</li>
        <li>Store compliance checklists</li>
        <li>New starter onboarding forms</li>
      </ul>

      <h2 id="solution">How JotForm Streamlined Everything</h2>

      <h3 id="form-design">Form Design & Structure</h3>
      <ul>
        <li>Each process got its own dedicated JotForm with clearly structured fields, required validation, and conditional logic to show or hide sections based on selections</li>
        <li>File upload fields added where supporting documentation is needed (e.g., medical certificates, photos of damage)</li>
        <li>Forms are mobile-friendly — staff can submit from the shop floor on any device</li>
        <li>Dropdown fields pre-populated with store names, departments, and roles to enforce consistent data entry</li>
        <li>Submission confirmation shown to the submitter immediately after completing the form</li>
      </ul>

      <h3 id="jotform-workflows">JotForm Approval Workflows</h3>
      <ul>
        <li>JotForm&apos;s built-in <strong>Workflow</strong> feature used to define the approval chain for each form type — no external tools required</li>
        <li>Workflows route submissions to the correct approver(s) automatically based on form data (e.g., store, request type, value)</li>
        <li>Approvers receive a structured email with all submission details and can <strong>Approve</strong> or <strong>Reject</strong> directly from the email</li>
        <li>Multi-stage approvals configured where needed — e.g., line manager approves first, then a second approver is notified</li>
        <li>Conditional branching in the workflow handles different paths based on the approver&apos;s decision</li>
        <li>Automatic escalation or follow-up if an approver does not respond within a set timeframe</li>
      </ul>

      <h3 id="notifications">Automated Notifications & Task Management</h3>
      <ul>
        <li>Automated email notifications sent at every stage — submission received, under review, approved, or rejected</li>
        <li>Rejection notifications include the approver&apos;s comments so the requestor knows why and what to do next</li>
        <li>JotForm Tasks used to assign follow-up actions to specific people as part of the workflow (e.g., HR to process leave, warehouse to fulfil uniform order)</li>
        <li>Task assignees are notified automatically and can mark tasks complete within JotForm</li>
        <li>Relevant parties (e.g., store managers, HR, finance) are CC&apos;d on notifications relevant to them</li>
      </ul>

      <h3 id="archiving">Digital Archiving & Record Keeping</h3>
      <ul>
        <li>Every submission is permanently stored in JotForm with full details, timestamps, and approval history</li>
        <li>Submissions searchable and filterable by store, date, form type, and status — replacing physical folder archives</li>
        <li>Approved and rejected submissions both retained with the full decision trail intact</li>
        <li>Uploaded files (e.g., certificates, photos) stored alongside the submission record</li>
        <li>Management can pull up any historical submission instantly for compliance audits or HR reviews</li>
      </ul>

      <h2 id="outcome">Outcome & Impact</h2>
      <ul>
        <li>Paper forms completely eliminated across all 12 stores for the covered processes</li>
        <li>Approval turnaround times significantly reduced — approvers act from email, no chasing or hand-delivering forms</li>
        <li>Zero lost submissions — every form digitally tracked from creation through to final decision</li>
        <li>Full audit trail instantly available for any submission — no more searching through physical archives</li>
        <li>Consistent process enforced across all stores regardless of location or staff turnover</li>
        <li>Follow-up tasks automatically assigned, reducing the chance of actions falling through the cracks</li>
        <li>Staff adoption high — JotForm&apos;s mobile-friendly interface requires no training beyond filling in a form</li>
      </ul>

      <h2 id="skills">Skills & Tools Used</h2>
      <ul>
        <li>JotForm — form builder, conditional logic, file uploads, mobile-responsive design</li>
        <li>JotForm Workflows — approval routing, multi-stage approvals, conditional branching, escalation</li>
        <li>JotForm Tasks — follow-up task assignment and completion tracking within workflows</li>
        <li>JotForm Notifications — automated email configuration for submitters, approvers, and stakeholders</li>
        <li>Process analysis — mapping existing manual processes into structured digital equivalents</li>
      </ul>
    </>
  ),
};

export default data;
