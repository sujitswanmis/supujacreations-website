export const projects = [
  {
    id: 'proj-1',
    category: 'hardware',
    title: 'GPS-Based Smart Attendance System',
    subtitle: 'Geofenced Mobile Attendance with Photo Capture & Sheet Backend',
    challenge: 'Manual attendance suffered from proxy punches, lack of location verification, and delayed compilation into payroll.',
    solution: 'Engineered an interactive web-based attendance terminal featuring live GPS geofencing (distance calculation vs office coordinates), front camera photo capture with mirrored preview, strict 1-Check-in/1-Check-out per day logic, and direct Google Sheets live logging.',
    stack: ['HTML5/JS', 'GPS Geolocation API', 'WebRTC Camera', 'Google Apps Script', 'Google Sheets DB'],
    impact: '100% proxy elimination, real-time employee tracking, and zero manual consolidation time.',
    metrics: [
      { label: 'Proxy Punches', value: '0%' },
      { label: 'Sync Latency', value: '< 2 sec' },
      { label: 'Monthly Time Saved', value: '45+ hrs' }
    ],
    highlights: [
      'Office coordinates geofenced with dynamic distance calculation',
      'Live selfie capture ensuring physical presence',
      'Auto-prevents double check-ins on the same calendar date',
      'One-click instant HR export for payroll computation'
    ]
  },
  {
    id: 'proj-2',
    category: 'fms',
    title: 'Automated 85-Step Manufacturing & Purchase FMS',
    subtitle: 'Multi-Stage Production Workflow & Bottleneck Escalation System',
    challenge: 'A heavy machinery manufacturing plant faced severe delivery delays, untracked component shortages, and zero visibility into job-work stages.',
    solution: 'Mapped and digitized an 85-step multi-stage manufacturing & procurement FMS (S00 to S85) covering raw material requisition, BOM breakdown, machine shop stages, vendor job-work, assembly, testing, paint shop, and final dispatch with automated Turnaround Time (TAT) and escalation alerts.',
    stack: ['Google Sheets Advanced', 'Google Apps Script', 'SOP Documentation', 'Automated Email Triggers', 'Status Dashboard'],
    impact: 'Reduced production turnaround time by 32% and provided management with instant visibility into pending bottleneck stages.',
    metrics: [
      { label: 'TAT Reduction', value: '32%' },
      { label: 'Stages Digitized', value: '85 Steps' },
      { label: 'Bottleneck Detection', value: 'Real-time' }
    ],
    highlights: [
      'Granular S00 to S85 sequence mapping every machine and vendor stage',
      'Dynamic planned vs actual TAT calculation in minutes',
      'Automated email escalations sent when deadlines breach SLA',
      'BOM-level material requirement and inventory status sync'
    ]
  },
  {
    id: 'proj-3',
    category: 'api',
    title: 'TrackOlap Attendance REST API Integration',
    subtitle: 'Automated Daily Sync & Employee Attendance Transformation',
    challenge: 'Attendance data trapped inside TrackOlap portal required daily manual exports and tedious formatting for reporting.',
    solution: 'Developed an automated Google Apps Script pipeline that executes scheduled GET requests to TrackOlap REST APIs, parses nested JSON responses with pagination, processes check-in/out timestamps, and synchronizes clean employee attendance records directly into master sheets.',
    stack: ['REST API', 'OAuth / Auth Headers', 'JSON Parsing', 'Time Triggers', 'Error Logging'],
    impact: 'Saved 2+ hours of daily manual MIS effort with 100% automated scheduled synchronization.',
    metrics: [
      { label: 'Daily Time Saved', value: '2+ hrs' },
      { label: 'Data Accuracy', value: '99.9%' },
      { label: 'Automated Runs', value: 'Daily 6 AM' }
    ],
    highlights: [
      'Automated token handling and bearer authorization',
      'Pagination loop handling thousands of employee records',
      'Failsafe retry mechanism with notification on error',
      'Direct aggregation into department-wise monthly summaries'
    ]
  },
  {
    id: 'proj-4',
    category: 'automation',
    title: 'WhatsApp Marketing & Dealer Notification Engine',
    subtitle: 'Personalized Batch Broadcast with Duplicate Prevention & Retry',
    challenge: 'Broadcasting operational notices, payment reminders, and marketing updates to 500+ dealers manually on WhatsApp was error-prone and time-consuming.',
    solution: 'Built a custom WhatsApp automation engine utilizing AiSensy / Meta Webhook APIs. Features include personalized contact variables, short URL tracking, duplicate message guards, failed delivery auto-retry queues, and detailed transmission status logging.',
    stack: ['AiSensy API', 'Google Apps Script', 'Insprl URL Shortener', 'JSON Webhooks', 'Batch Queue Manager'],
    impact: 'Enabled 1-click personalized dispatches to 500+ dealers with complete delivery and click verification.',
    metrics: [
      { label: 'Broadcast Speed', value: '500+ / 10 min' },
      { label: 'Duplicate Rate', value: '0%' },
      { label: 'Click Tracking', value: 'Enabled' }
    ],
    highlights: [
      'Dynamic variable replacement for customized dealer notices',
      'Short URL generator attached to track user engagement',
      'Automated anti-spam queue control preventing WhatsApp blocks',
      'Live transmission audit log with delivery callbacks'
    ]
  },
  {
    id: 'proj-5',
    category: 'web',
    title: 'Dynamic Purchase Order & O2D Web Forms',
    subtitle: 'Responsive Multi-Item Entry with LocalStorage Draft Recovery',
    challenge: 'Sales reps and purchase officers made frequent formatting errors when submitting multi-line orders from mobile devices.',
    solution: 'Created a responsive web app with dynamic line-item addition/removal, searchable vendor dropdowns, auto-calculated totals, LocalStorage draft preservation (recovering unsaved work on browser reload), print preview, and instant PDF generation upon backend submission.',
    stack: ['Vanilla HTML/CSS/JS', 'LocalStorage API', 'PDF Generation', 'Google Apps Script Web App', 'Google Sheets'],
    impact: 'Zero data loss during field orders, standardized PO formats, and direct real-time database recording.',
    metrics: [
      { label: 'Data Entry Errors', value: '-85%' },
      { label: 'Draft Recovery', value: '100%' },
      { label: 'Device Support', value: 'Mobile/Tablet/PC' }
    ],
    highlights: [
      'Dynamic row addition & deletion with real-time tax/discount math',
      'LocalStorage auto-save preventing accidental loss on mobile reload',
      'Instant print-ready PDF export generated on submit',
      'Direct live sync with Google Sheets central purchase ledger'
    ]
  },
  {
    id: 'proj-6',
    category: 'automation',
    title: 'Google Drive File Management & Cataloging System',
    subtitle: 'Automated Folder Scanning, Metadata Indexing & Playback Links',
    challenge: 'Thousands of technical drawings, customer voice logs, and product videos scattered across Drive without unified indexing.',
    solution: 'Engineered a recursive Google Apps Script scanner that traverses deep Drive folder hierarchies, extracts metadata (file size, mime type, last modified, owner), generates direct playback/preview URLs, and maintains a clean, searchable sheet catalog with duplicate elimination.',
    stack: ['Google Drive API', 'Google Apps Script', 'MIME Type Filtering', 'Recursive Directory Traversal'],
    impact: 'Instant searchability across 10,000+ files and automated catalog maintenance.',
    metrics: [
      { label: 'Files Indexed', value: '10,000+' },
      { label: 'Search Speed', value: '< 1 sec' },
      { label: 'Auto Scan', value: 'Weekly' }
    ],
    highlights: [
      'Recursive directory traversal handling deep multi-tier folder trees',
      'MIME-type detection and clean URL link generation',
      'Duplicate file detection based on name and hash/size comparison',
      'Automated sheet sync providing team-wide search interface'
    ]
  },
  {
    id: 'proj-7',
    category: 'api',
    title: 'Custom URL Shortener & Click Tracking Gateway',
    subtitle: 'API-Driven Custom Domain Links for WhatsApp & SMS Campaigns',
    challenge: 'Long spreadsheet links caused high SMS character costs and looked unprofessional in dealer communications.',
    solution: 'Integrated the Insprl URL Shortener API into automated dispatch workflows. Generates branded short links dynamically, logs short codes with destination mapping, and implements fallback handling if the API is momentarily unavailable.',
    stack: ['Insprl REST API', 'POST Request Automation', 'Fallback Handlers', 'Campaign Analytics'],
    impact: 'Reduced SMS character consumption by 45% and enabled granular click-through tracking on dealer broadcasts.',
    metrics: [
      { label: 'SMS Cost Reduction', value: '45%' },
      { label: 'Link Generation', value: 'Automated' },
      { label: 'Analytics', value: 'Per-link clicks' }
    ],
    highlights: [
      'Automated short code generation on sheet row creation',
      'Branded domain links increasing dealer trust and click-rates',
      'Graceful fallback to original URL if service timeout occurs',
      'Full click tracking history stored in central database'
    ]
  },
  {
    id: 'proj-8',
    category: 'dashboards',
    title: 'Employee KPI, Task Delegation & Compliance Dashboard',
    subtitle: 'Real-Time Task Monitoring, Checklist Compliance & Executive Review',
    challenge: 'Management lacked a single pane of glass to review daily delegated tasks, pending checklist submissions, and team performance.',
    solution: 'Designed an executive KPI dashboard in Google Sheets & Looker Studio. Aggregates live task delegation data, tracks planned vs actual completion dates, calculates compliance percentages, and highlights overdue tasks by department.',
    stack: ['Looker Studio', 'Advanced Pivot Tables', 'QUERY / IMPORTRANGE', 'Conditional Visual Alerts'],
    impact: 'Increased on-time task completion rate from 68% to 94% across cross-functional departments.',
    metrics: [
      { label: 'On-Time Completion', value: '94%' },
      { label: 'Department Views', value: '8 Depts' },
      { label: 'Review Frequency', value: 'Daily / Weekly' }
    ],
    highlights: [
      'Interactive executive scorecard with departmental drill-downs',
      'Dynamic color-coded status pills for immediate overdue spotting',
      'Employee compliance score calculation and accountability grading',
      'Automated weekly email summaries to directors and department heads'
    ]
  }
];
