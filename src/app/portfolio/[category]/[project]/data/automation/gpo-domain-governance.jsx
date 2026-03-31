const data = {
  title: "Group Policy (GPO) — Domain Governance & Configuration Management",
  image: "/automation/gpo-domain-governance/banner.png",
  sections: [
    { id: "overview", title: "Overview", level: 2 },
    { id: "problem", title: "Problem Being Solved", level: 2 },
    { id: "policies", title: "Policies Implemented", level: 2 },
    { id: "managed-bookmarks", title: "Managed Edge Bookmarks", level: 3 },
    { id: "auto-restart", title: "Scheduled Auto-Restart", level: 3 },
    { id: "script-execution", title: "Logon Script Execution & App Installation", level: 3 },
    { id: "firewall", title: "Domain-Wide Firewall Rules", level: 3 },
    { id: "additional-policies", title: "Additional Governance Policies", level: 3 },
    { id: "dsc-task-scheduler", title: "Desired State Config via Task Scheduler", level: 3 },
    { id: "architecture", title: "GPO Architecture", level: 2 },
    { id: "outcome", title: "Outcome & Impact", level: 2 },
    { id: "skills", title: "Skills & Tools Used", level: 2 },
  ],
  content: (
    <>
      <h2 id="overview">Overview</h2>
      <p>
        Designed and deployed a comprehensive suite of Group Policy Objects (GPOs) to enforce consistent
        governance, security, and configuration management across all domain-joined office and POS computers
        at 12 sites. Policies are centrally managed via Active Directory and applied automatically —
        ensuring every machine is configured correctly without manual intervention at individual sites.
      </p>

      <h2 id="problem">Problem Being Solved</h2>
      <p>
        With 12 sites and over a hundred machines, manual configuration was not scalable. Computers had
        inconsistent browser bookmarks, irregular restart schedules leading to performance degradation,
        ad-hoc software installation without governance, and inconsistent firewall configurations creating
        security gaps. A centralised policy management approach was needed to enforce standards at scale.
      </p>

      <h2 id="policies">Policies Implemented</h2>

      <h3 id="managed-bookmarks">Managed Edge Bookmarks</h3>
      <ul>
        <li>GPO deployed to push a standardised set of managed bookmarks to Microsoft Edge on all machines</li>
        <li>Bookmarks include links to internal systems, SharePoint portals, supplier login pages, and key tools</li>
        <li>Managed bookmarks appear in a dedicated &quot;Company&quot; folder in Edge — users cannot delete them</li>
        <li>Updates to the bookmark list automatically propagate to all machines on next policy refresh</li>
        <li>Ensures all staff have consistent, quick access to key resources without IT support tickets</li>
      </ul>

      <h3 id="auto-restart">Scheduled Auto-Restart</h3>
      <ul>
        <li>GPO configured to schedule automatic restarts for all office and POS computers every week</li>
        <li>Restarts timed for low-activity periods (e.g., Sunday 2 AM) to avoid business disruption</li>
        <li>Ensures machines apply pending Windows updates, clear memory leaks, and start fresh each week</li>
        <li>Reduces IT support calls related to slow machines, software hangs, and update-related issues</li>
        <li>Notification shown to users before restart to save work if logged in outside scheduled hours</li>
      </ul>

      <h3 id="script-execution">Logon Script Execution & App Installation</h3>
      <ul>
        <li>GPO assigns logon and startup scripts that run automatically when users log in or machines start</li>
        <li>Scripts handle: drive mapping, printer mapping by site, environment variable setup, and silent app installations</li>
        <li>Applications deployed via GPO software installation (MSI packages) or script-driven installers</li>
        <li>Ensures required tools are present on every machine without manual IT visits to each site</li>
        <li>Scripts conditionally check whether software is already installed — idempotent execution prevents reinstalls</li>
      </ul>

      <h3 id="firewall">Domain-Wide Firewall Rules</h3>
      <ul>
        <li>GPO used to enforce Windows Defender Firewall rules consistently across all domain computers</li>
        <li>Rules define which inbound/outbound ports and applications are allowed or blocked by default</li>
        <li>Business-critical application ports explicitly whitelisted; all unnecessary inbound traffic blocked</li>
        <li>Firewall profiles (Domain, Private, Public) configured appropriately for each machine class</li>
        <li>Centralised rules prevent individual users or local admins from disabling firewall protection</li>
        <li>Audit logging enabled for blocked connections to detect potential intrusion attempts</li>
      </ul>

      <h3 id="additional-policies">Additional Governance Policies</h3>
      <ul>
        <li><strong>Password Policy:</strong> Enforced minimum length, complexity, and rotation requirements domain-wide</li>
        <li><strong>Screen Lock:</strong> Automatic screen lock after inactivity threshold on all machines</li>
        <li><strong>USB Restrictions:</strong> Removable storage restricted on POS machines to reduce data exfiltration risk</li>
        <li><strong>Software Restriction:</strong> Blocked execution of unauthorised executables from temp directories</li>
        <li><strong>Windows Update:</strong> WSUS/update settings managed via GPO to control patch deployment timing</li>
      </ul>

      <h3 id="dsc-task-scheduler">Desired State Configuration via Task Scheduler</h3>
      <ul>
        <li>Built a custom Desired State Configuration (DSC) system using Windows Task Scheduler and PowerShell scripts deployed via GPO</li>
        <li>Scheduled task runs every 30 minutes on all POS machines — checking whether required POS applications are running</li>
        <li>Script enumerates a defined list of critical POS processes; if any are not running, it automatically relaunches them</li>
        <li>Handles edge cases: detects crashed processes, hung instances, and services that failed to start after a restart</li>
        <li>Operates silently in the background — no user interaction required; store staff are unaffected</li>
        <li>Significantly reduces POS downtime and eliminates the need for staff to call IT when an app closes unexpectedly</li>
        <li>Task and script deployed centrally via GPO — any new POS machine joining the domain receives it automatically</li>
      </ul>

      <h2 id="architecture">GPO Architecture</h2>
      <ul>
        <li>GPOs organised in Active Directory using an OU (Organisational Unit) hierarchy: Company → Sites → Roles</li>
        <li>Policies scoped by OU to ensure site-specific and role-specific configurations where needed</li>
        <li>GPO inheritance and blocking used deliberately to handle exceptions (e.g., IT admin workstations)</li>
        <li>Security filtering applied to target specific machine groups without affecting unintended OUs</li>
        <li>All GPOs documented with naming conventions and purpose descriptions for maintainability</li>
        <li><code>gpresult</code> and Group Policy Management Console used for verification and troubleshooting</li>
      </ul>

      <h2 id="outcome">Outcome & Impact</h2>
      <ul>
        <li>Consistent configuration enforced across all 12 sites and dozens of machines — no manual per-machine setup</li>
        <li>Security posture improved significantly with standardised firewall rules, password policies, and USB restrictions</li>
        <li>IT support tickets reduced — bookmarks, printers, and drives are always correctly configured</li>
        <li>Machines perform better week-to-week thanks to regular scheduled restarts and update enforcement</li>
        <li>Scalable — new machines joining the domain automatically receive all policies</li>
        <li>Audit capability improved — central logging and policy enforcement provides a clear compliance record</li>
      </ul>

      <h2 id="skills">Skills & Tools Used</h2>
      <ul>
        <li>Active Directory — OU design, GPO linking, security filtering, and inheritance management</li>
        <li>Group Policy Management Console (GPMC) — GPO creation, editing, and troubleshooting</li>
        <li>Windows Defender Firewall — inbound/outbound rule design via GPO</li>
        <li>PowerShell / Batch scripting — logon scripts, startup scripts, conditional app installation</li>
        <li>Microsoft Edge administrative templates — managed bookmarks, browser policy enforcement</li>
        <li>Windows Server — WSUS integration, DNS, and domain services administration</li>
        <li>Security hardening — CIS benchmark principles applied to domain policy design</li>
      </ul>
    </>
  ),
};

export default data;
