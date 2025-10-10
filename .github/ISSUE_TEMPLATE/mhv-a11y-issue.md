---
name: "MHV Accessibility Issue Ticket"
description: "Please use this form to report or create an accessibility issue ticket for MHV"
title: "[a11y-defect-x]: MHV:[Product]: [Issue description]"
labels: ["accessibility", "a11y-testing", "needs-refinement"]
projects: ["department-of-veterans-affairs/1748"]
assignees: ["steveg-IAT", "sarahhortonadhoc"]
---
<!--
Note: Please search to see if an issue already exists for the bug you encountered.
-->
# MHV Accessibility Issue Ticket

- **Possible tasks**:
  - [ ] Review, refine and acknowledge feedback.
  - [ ] Update ticket information (assignee, labels, project(s), etc.)
  - [ ] Fix and/or document decisions made.
  - [ ] Product manager to move ticket in their respective product board to 'QA/A11y Review' after reviewing documented decisions / validating fix.
  - [ ] Accessibility specialist will close ticket after reviewing documented decisions / validating fix.

- **Point of contact**:
`The person who wrote or is responsible for this ticket. Usually an a11y specialist.`
`Name (GitHub ID) - steveg-IAT | sarahhortonadhoc`

- **Severity level**
`Don't forget to add a corresponding label to this ticket once it's created (a11y-defect-0, a11y-defect-1, etc.)`
  - 0, Launchblocker. Potentially Harmful. Must be fixed immediately.
  - 1, Launchblocker. Critical. Must be fixed before launch.
  - 2, Serious. Should be fixed in 1-2 sprints post-launch.
  - 3, Moderate. Should be fixed in 1-3 sprints post-launch.
  - 4, Minor. Consider fixing or exploring in 2-4 sprints post-launch.


    
- **User story or problem statement**
`description: "Illustrate how the defect affects users. If you have a screenshot or video, add those here and/or to the attachements field after the ticket is created.`
`placeholder: As a [user role], I am trying to [action] so that [goal], but [what is happening]`
...

- type: textarea
  id: repro
  attributes:
    label: Reproduction steps
    description: "How do you trigger this issue? Please walk us through it step by step. Include test user and any relevant device, browser, and assistive technology."
    value: |
      1.
      2.
      3.
      ...
  validations:
    required: true

- type: textarea
  id: evidence
  attributes:
    label: Supporting screenshots or videos
    description: "Attach any supporting material. An annotated picture is worth a 1,000 meetings."

- type: textarea
  id: solution
  attributes:
    label: Proposed solution or next steps
    description: "If there is an easy HTML, CSS, or JavaScript markup fix, add it after creating this ticket. If it is a longer fix or you do not have a ready solution, provide next steps."
    value: |
      ...

- type: textarea
  id: references
  attributes:
    label: References, articles, or WCAG support
    description: "Provide any relevant documentation, VADS component, or other evidence as to why this is an issue or how to fix it. Don't forget to add a corresponding label(s) to this ticket once it's created. (wcag-1.1.1, 508-issue-cognition, etc)."
    value: |
      1.
      2.
      3.
      ...

- type: checkboxes
  id: type
  attributes:
    label: Type of issue
    description: "You may select more than one. Don't forget to add a corresponding label(s) to this ticket once it's created. (wcag-1.1.1, 508-issue-cognition, etc).."
    options:
      - label: Axe-core | Lighthouse | WAVE
      - label: Perceivable
      - label: Operable
      - label: Understandable
      - label: Robust
      - label: Screenreader | assistive tech & device support
      - label: Keyboard
      - label: Voice command
      - label: Zoom
      - label: Color, typography, & visual elements
      - label: Components and pattern standards
      - label: Content organization
      - label: Focus
      - label: Headings
      - label: Form
      - label: Link and button labels
      - label: Semantic HTML
      - label: Markup and metadata
      - label: Non-text content and media
      - label: Overall user experience
      - label: Cognitive | confusing flow or content
      - label: Something else

- type: markdown
  attributes:
    value: |
      ---
      
- type: markdown
  attributes:
    value: "### Acceptance criteria"
    
- type: markdown
  attributes:
    value: |
      1. [ ] TBD.

- type: markdown
  attributes:
    value: |
      ---
    
- type: markdown
  attributes:
    value: "### General Reference Materials:"
    
- type: markdown
  attributes:
    value: |
      - USWDS Docs: [USWDS Documentation](https://designsystem.digital.gov/)
      - VADS Docs: [VADS Experience Standards](https://design.va.gov/about/experience-standards/)
      - VADS Docs: [VADS Components Documentation](https://design.va.gov/components/)
      - VADS Docs: [VADS Components Storybook](https://design.va.gov/storybook/?path=/docs/about-introduction--docs)
      - VA Platform Docs: [Accessibility defect severity rubric](https://depo-platform-documentation.scrollhelp.site/developer-docs/accessibility-defect-severity-rubric)
      - VA Github Docs: [List of common issue tickets](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/platform/accessibility/common-issues) you can reference, copy, and add to.
      - W3C Docs: [Web Content Accessibility Guidelines (WCAG) 2.2](https://www.w3.org/TR/WCAG22/)
      - W3C Docs: [WCAG 2.2 Understanding Docs](https://www.w3.org/WAI/WCAG22/Understanding/)
