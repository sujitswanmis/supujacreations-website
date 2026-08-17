export const skillCategories = [
  {
    id: 'advanced',
    title: 'Strong / Advanced Skills',
    accentColor: '#22c55e',
    badgeClass: 'skill-badge-advanced',
    desc: 'Core everyday specializations backed by over a decade of hands-on enterprise production usage.',
    skills: [
      { name: 'Google Sheets Advanced', level: '10+ yrs', detail: 'Complex multi-sheet models, ARRAYFORMULA, dynamic ranges, master data architectures.' },
      { name: 'Microsoft Excel & VBA', level: '10+ yrs', detail: 'Advanced macros, PivotTables, Power Query, automated financial reconciliation.' },
      { name: 'Google Apps Script', level: '7+ yrs', detail: 'Enterprise automation, scheduled triggers, PDF compilation, API integrations, Web Apps.' },
      { name: 'MIS Architecture & Reporting', level: '10+ yrs', detail: 'Executive reports, departmental KPI scorecards, multi-tier data pipelines.' },
      { name: 'Business Process Automation', level: '8+ yrs', detail: 'End-to-end digitization of manual sales, purchase, production, and audit workflows.' },
      { name: 'FMS & Workflow Engineering', level: '7+ yrs', detail: 'Multi-stage flow control (S00..S85), step ownership, turnaround time (TAT), escalations.' },
      { name: 'Data Cleaning & Master Data', level: '10+ yrs', detail: 'Deduplication, schema normalization, single source of truth data structures.' },
      { name: 'Looker Studio Dashboards', level: '5+ yrs', detail: 'Interactive executive visual dashboards, real-time data sync, multi-page reports.' },
      { name: 'Manufacturing Operations Digitization', level: '6+ yrs', detail: 'BOM tracking, rotavator/agri machinery shop floor workflows, vendor job-work.' },
      { name: 'SOP & Process Documentation', level: '9+ yrs', detail: 'Standard Operating Procedures, Gemba observations, team training manuals.' }
    ]
  },
  {
    id: 'working',
    title: 'Practical Working Skills',
    accentColor: '#38bdf8',
    badgeClass: 'skill-badge-working',
    desc: 'Technologies actively used for frontend apps, system integrations, and automation pipelines.',
    skills: [
      { name: 'REST API & Webhooks', level: 'Production', detail: 'Bi-directional data sync with third-party software (TrackOlap, ESSL, Meta WhatsApp).' },
      { name: 'HTML5 & CSS3', level: 'Production', detail: 'Clean, responsive UI design, mobile-first layouts, responsive data tables.' },
      { name: 'JavaScript (ES6+)', level: 'Production', detail: 'DOM manipulation, async/await, fetch API, LocalStorage persistence, regex parsing.' },
      { name: 'JSON Data Processing', level: 'Production', detail: 'Nested JSON parsing, flattening, schema transformation, and error recovery.' },
      { name: 'WhatsApp Cloud / Meta API', level: 'Production', detail: 'AiSensy & Meta webhook integration, automated templates, broadcast queuing.' },
      { name: 'GPS Geolocation & Geofencing', level: 'Production', detail: 'Browser geolocation API, coordinate distance calculations, boundary fencing.' },
      { name: 'Camera WebRTC Integration', level: 'Production', detail: 'Live selfie capture, canvas image processing, mirrored camera preview.' },
      { name: 'URL Shortener Integration', level: 'Production', detail: 'Insprl API connectivity, click analytics, SMS character optimization.' }
    ]
  },
  {
    id: 'developing',
    title: 'Modern Stack & Active Proficiencies',
    accentColor: '#fbbf24',
    badgeClass: 'skill-badge-developing',
    desc: 'Modern web and backend tools actively deployed in scalable production environments.',
    skills: [
      { name: 'Next.js & React 19', level: 'Active Stack', detail: 'App router, Server Actions, modern component architecture, SSR/SSG.' },
      { name: 'Supabase & PostgreSQL', level: 'Active Stack', detail: 'Relational database schema design, Row-Level Security (RLS), real-time tables.' },
      { name: 'Vercel Deployment & CI/CD', level: 'Active Stack', detail: 'Production web deployments, environment secrets, custom domain routing.' },
      { name: 'Git & GitHub', level: 'Active Stack', detail: 'Version control, repository management, continuous feature iteration.' },
      { name: 'Node.js Backend APIs', level: 'Active Stack', detail: 'Next.js API route handlers, JSON endpoints, server-side data processing.' },
      { name: 'AI & Chatbot Integration', level: 'Active Stack', detail: 'LLM API integration, prompt engineering for business automation workflows.' }
    ]
  }
];

export const masteredFormulas = [
  {
    formula: '=QUERY()',
    category: 'Data Aggregation & Filtering',
    description: 'Executes Google Visualization API SQL queries directly over spreadsheet ranges. Enables multi-condition filtering, sorting, column selection, and dynamic aggregations without modifying raw data.',
    example: '=QUERY(SalesData!A1:Z, "SELECT B, SUM(E) WHERE C = \'Completed\' GROUP BY B ORDER BY SUM(E) DESC LABEL SUM(E) \'Total Revenue\'", 1)'
  },
  {
    formula: '=IMPORTRANGE()',
    category: 'Multi-Sheet Architecture',
    description: 'Securely pulls live datasets across separate Google Sheets files with automated permission management. Foundation for multi-department master data segregation.',
    example: '=IMPORTRANGE("https://docs.google.com/spreadsheets/d/FILE_ID", "MasterDB!A2:H")'
  },
  {
    formula: '=ARRAYFORMULA()',
    category: 'Dynamic Formula Expansion',
    description: 'Applies a formula down an entire column dynamically. Eliminates the need to drag formulas manually, preventing accidental deletion and formula inconsistencies.',
    example: '=ARRAYFORMULA(IF(A2:A="", "", IF(D2:D="Yes", E2:E*1.18, E2:E)))'
  },
  {
    formula: '=XLOOKUP()',
    category: 'Lookup & Reference',
    description: 'Modern two-way exact/approximate matching with built-in default fallback, replacing fragile VLOOKUP indices and complex INDEX/MATCH boilerplate.',
    example: '=XLOOKUP(A2, Employees!A:A, Employees!D:D, "Not Found", 0)'
  },
  {
    formula: '=FILTER()',
    category: 'Dynamic Filtering',
    description: 'Returns filtered array results satisfying single or compound Boolean conditions without altering original rows.',
    example: '=FILTER(Orders!A2:G, (Orders!C2:C="Pending") * (Orders!E2:E<=TODAY()))'
  },
  {
    formula: '=UNIQUE()',
    category: 'Data Normalization',
    description: 'Extracts distinct values from a range, removing duplicates dynamically for dropdown lists and validation sources.',
    example: '=SORT(UNIQUE(FILTER(MasterItems!B2:B, MasterItems!B2:B<>"")))'
  },
  {
    formula: '=LAMBDA() & =MAP()',
    category: 'Functional Google Sheets',
    description: 'Creates custom reusable lambda functions mapped across row arrays, enabling advanced calculations and multi-step data pipelines natively.',
    example: '=MAP(A2:A, B2:B, LAMBDA(start, end, IF(start="", "", WORKDAY.INTL(start, end, 1))))'
  },
  {
    formula: '=REGEXEXTRACT()',
    category: 'Text & String Parsing',
    description: 'Extracts phone numbers, order IDs, invoice codes, or GST numbers from unstructured text fields using regular expressions.',
    example: '=REGEXEXTRACT(A2, "[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}")'
  },
  {
    formula: '=WORKDAY.INTL()',
    category: 'TAT & Schedule Math',
    description: 'Calculates business day turnaround times excluding weekend rules and custom corporate holidays for accurate FMS SLA tracking.',
    example: '=WORKDAY.INTL(C2, D2, 1, Holidays!A2:A)'
  },
  {
    formula: '=CHOOSEROWS() & =CHOOSECOLS()',
    category: 'Matrix Manipulation',
    description: 'Extracts specific rows or columns from a dynamic array without nested queries, optimizing dashboard reload speed.',
    example: '=CHOOSECOLS(SORT(Sales!A2:K, 5, FALSE), 1, 2, 5)'
  }
];
