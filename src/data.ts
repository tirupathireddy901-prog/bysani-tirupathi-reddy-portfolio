export const profile = {
  name: 'Bysani Tirupathi Reddy',
  title: 'NetSuite Functional Consultant',
  location: 'Hyderabad, India',
  phone: '+91 7671975460',
  email: 'tirupathireddy901@gmail.com',
  linkedin: 'https://www.linkedin.com/in/bysani-tirupathi-reddy-54b63b257/',
  github: 'https://github.com/tirupathireddy901-prog',
  resume: `${import.meta.env.BASE_URL}Bysani_Tirupathi_Reddy_Resume.pdf`,
}

export const stats = [
  { v: '10+', l: 'stakeholders supported', d: 'Across 4 business units' },
  { v: '25+', l: 'Saved Searches and Workflows', d: 'Configured and maintained' },
  { v: '5,000+', l: 'records imported', d: 'Through CSV Import, 99% data accuracy' },
  { v: '15+', l: 'SuiteAnalytics reports', d: 'Reduced manual reporting time by 30%' },
]

export const duties = [
  'Analyzed business requirements and documented functional specifications for Order-to-Cash, Procure-to-Pay, Record-to-Report and CRM processes.',
  'Prepared and maintained functional documentation, process flows and requirement traceability for consistent business-process configuration.',
  'Supported CSV Import activities for data management and migration-related tasks.',
  'Analyzed functional process issues, documented findings and coordinated with stakeholders on resolution and process improvements.',
  'Collaborated with business and technical stakeholders through the requirements and implementation lifecycle, using Microsoft Excel for tracking and analysis.',
]

export const skills = [
  { t: 'ERP modules and business processes', i: ['Oracle NetSuite ERP', 'Order-to-Cash (O2C)', 'Procure-to-Pay (P2P)', 'Record-to-Report (R2R)', 'Customer Relationship Management (CRM)'] },
  { t: 'Functional consulting', i: ['Requirements Gathering', 'Business Requirements Analysis', 'Functional Requirements Analysis', 'Business Process Analysis', 'Process Mapping', 'Functional Specifications', 'Functional Documentation', 'Requirement Traceability', 'Stakeholder Communication'] },
  { t: 'NetSuite configuration and reporting', i: ['Saved Searches', 'Workflows', 'CSV Import', 'SuiteAnalytics', 'SuiteAnalytics Reporting', 'Data Management', 'Reporting', 'Data Validation'] },
  { t: 'Business productivity tools', i: ['Microsoft Excel', 'Microsoft Office Suite', 'Jira'] },
]

export const processes = [
  { k: 'O2C', n: 'Order-to-Cash', flow: ['Sales Order', 'Fulfillment', 'Invoice', 'Customer Payment'],
    p: ['Sales order processing, fulfillment, invoicing and customer payments.', 'Process mapping of each transaction hand-off.', 'Functional requirements per stage, plus reporting on the cycle.'] },
  { k: 'P2P', n: 'Procure-to-Pay', flow: ['Purchase Order', 'Item Receipt', 'Vendor Bill', 'Vendor Payment'],
    p: ['Purchase orders, receipt flow, vendor bills and vendor payments.', 'Transaction processing and approval points.', 'Business process analysis and procurement process documentation.'] },
  { k: 'R2R', n: 'Record-to-Report', flow: ['Transactions Recorded', 'Accounting Entries', 'Period Review', 'Financial Reporting'],
    p: ['Finance-process understanding from recorded transactions to reports.', 'Financial reporting needs captured as requirements.', 'Functional documentation of the reporting lifecycle.'] },
  { k: 'CRM', n: 'Customer Relationship Management', flow: ['Customer Record', 'Requirements Analysis', 'Functional Documentation'],
    p: ['Customer-related business processes inside NetSuite.', 'Requirements analysis with business stakeholders.', 'Functional documentation to support consistent configuration.'] },
]

export const projects = [
  { t: 'NetSuite ERP Functional Process Project', tag: 'End-to-end functional consulting project',
    d: 'An end-to-end project covering O2C, P2P, R2R and CRM, from requirements gathering through process configuration and documentation.',
    obj: 'Show how a business need becomes a documented, configured and validated NetSuite process.',
    c: ['Mapped 12 end-to-end business processes and their transaction touchpoints and hand-offs.', 'Documented functional requirements as specifications and process-flow diagrams.', 'Configured Saved Searches, Workflows and CSV Import routines; validated the functional configuration.'],
    m: ['O2C', 'P2P', 'R2R', 'CRM'], s: ['Saved Searches', 'Workflows', 'CSV Import', 'Process Mapping'],
    art: ['Requirements', 'Specifications', 'Configuration', 'Validation'], stat: '12 processes mapped' },
  { t: 'Order-to-Cash and Procure-to-Pay Analysis', tag: 'Transaction-cycle analysis exercise',
    d: 'Analysis of transaction lifecycles from sales or purchase order creation through fulfillment, billing, receipt and payment.',
    obj: 'Find configuration and documentation gaps by following transactions end to end.',
    c: ['Reviewed O2C and P2P flows across 50+ sample transactions.', 'Captured requirements per stage, including approval points, role dependencies and data hand-offs.', 'Created process maps and identified process and documentation gaps.'],
    m: ['O2C', 'P2P'], s: ['Business Process Analysis', 'Process Mapping', 'Requirements Gathering'],
    art: ['Sales Order', 'Fulfillment', 'Invoice', 'Payment'], stat: '50+ transactions reviewed' },
  { t: 'SuiteAnalytics and Saved Search Reporting', tag: 'Reporting build exercise',
    d: 'A reporting-focused exercise building Saved Searches and SuiteAnalytics datasets against defined business reporting requirements.',
    obj: 'Turn sales, procurement and finance reporting needs into validated, documented reports.',
    c: ['Prepared 20 report specifications from sales, procurement and finance scenarios.', 'Built Saved Searches and SuiteAnalytics reports and datasets with filters, criteria and summary fields.', 'Validated report outputs across 30 scenarios and documented logic and handover notes.'],
    m: ['O2C', 'P2P', 'R2R'], s: ['Saved Searches', 'SuiteAnalytics', 'Data Validation', 'Excel'],
    art: ['Report Spec', 'Saved Search', 'Dataset', 'Validated Output'], stat: '30 scenarios validated' },
]

export const certs = ['NetSuite Certified BI and Reporting Associate', 'NetSuite Certified Financial Associate']

export const strengths = ['Analytical Thinking', 'Business Process Understanding', 'Requirements Analysis', 'Functional Documentation', 'Stakeholder Communication', 'Problem Solving', 'Attention to Detail', 'Continuous NetSuite Learning']
