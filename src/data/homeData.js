export const technologyProducts = [
  { id: 'erp', title: 'Enterprise ERP', description: 'Unified operations, finance, and supply chain.', tags: ['React', 'Node.js', 'PostgreSQL'], device: 'macbook', screen: 'erp' },
  { id: 'hr', title: 'HR System', description: 'Payroll, attendance, and workforce management.', tags: ['Vue', 'Laravel', 'MySQL'], device: 'monitor', screen: 'hr' },
  { id: 'hospital', title: 'Hospital Management', description: 'Patient records, appointments, and billing.', tags: ['React', 'Python', 'FHIR'], device: 'tablet', screen: 'hospital' },
  { id: 'school', title: 'School Platform', description: 'Enrollment, grades, and parent portals.', tags: ['Next.js', 'Supabase'], device: 'laptop', screen: 'school' },
  { id: 'pos', title: 'POS System', description: 'Retail checkout and inventory sync.', tags: ['React Native', 'Stripe'], device: 'tablet', screen: 'pos' },
  { id: 'inventory', title: 'Inventory Platform', description: 'Warehouse tracking and procurement.', tags: ['Angular', '.NET'], device: 'monitor', screen: 'inventory' },
  { id: 'loan', title: 'Loan Management', description: 'Credit scoring and disbursement workflows.', tags: ['Java', 'Spring', 'Kafka'], device: 'macbook', screen: 'loan' },
  { id: 'insurance', title: 'Insurance Platform', description: 'Policy lifecycle and claims processing.', tags: ['React', 'GraphQL'], device: 'laptop', screen: 'insurance' },
  { id: 'banking', title: 'Mobile Banking', description: 'Transfers, savings, and digital wallets.', tags: ['Flutter', 'Firebase'], device: 'iphone', screen: 'banking' },
  { id: 'delivery', title: 'Delivery Platform', description: 'Real-time routing and fleet coordination.', tags: ['React', 'Maps API'], device: 'iphone', screen: 'delivery' },
  { id: 'booking', title: 'Booking Platform', description: 'Reservations, payments, and scheduling.', tags: ['Next.js', 'Prisma'], device: 'tablet', screen: 'booking' },
  { id: 'fleet', title: 'Fleet Management', description: 'GPS tracking and maintenance alerts.', tags: ['IoT', 'Node.js'], device: 'monitor', screen: 'fleet' },
];

export const galleryProducts = [
  { title: 'Business Dashboard', screen: 'dashboard-business', label: 'Enterprise Analytics' },
  { title: 'Hospital Dashboard', screen: 'dashboard-hospital', label: 'Healthcare Operations' },
  { title: 'Banking Dashboard', screen: 'dashboard-banking', label: 'Financial Services' },
  { title: 'E-commerce Dashboard', screen: 'dashboard-ecommerce', label: 'Retail Commerce' },
  { title: 'School Dashboard', screen: 'dashboard-school', label: 'Education Platform' },
  { title: 'Government Portal', screen: 'dashboard-government', label: 'Public Sector' },
  { title: 'Analytics Dashboard', screen: 'dashboard-analytics', label: 'Data Intelligence' },
];

export const capabilities = [
  { id: 'dev', title: 'Software Development', description: 'Full-stack applications built for scale.', screen: 'erp' },
  { id: 'cloud', title: 'Cloud', description: 'Resilient cloud-native architecture.', screen: 'cloud' },
  { id: 'security', title: 'Cybersecurity', description: 'Threat monitoring and compliance.', screen: 'security' },
  { id: 'ai', title: 'AI', description: 'Intelligent automation and assistants.', screen: 'ai' },
  { id: 'data', title: 'Data Analytics', description: 'Real-time insights and reporting.', screen: 'dashboard-analytics' },
  { id: 'network', title: 'Networking', description: 'Enterprise infrastructure design.', screen: 'networking' },
];

export const caseStudies = [
  {
    company: 'Akazuba Florist',
    industry: 'E-commerce',
    problem: 'Needed a professional online store to sell flowers and cosmetics across Rwanda.',
    solution: 'Built a full e-commerce platform with inventory, payments, and mobile-responsive design.',
    impact: 'Significant sales growth and expanded customer reach nationwide.',
    metrics: [{ value: '3×', label: 'Sales growth' }, { value: '24/7', label: 'Online sales' }, { value: '100%', label: 'Mobile ready' }],
    screen: 'dashboard-ecommerce',
    device: 'macbook',
    reverse: false,
  },
  {
    company: 'Regional Health Network',
    industry: 'Healthcare',
    problem: 'Fragmented patient records across multiple clinics slowed care delivery.',
    solution: 'Deployed a unified hospital management system with electronic health records.',
    impact: 'Faster patient intake and coordinated care across facilities.',
    metrics: [{ value: '60%', label: 'Faster intake' }, { value: '5', label: 'Clinics connected' }, { value: '99.9%', label: 'Uptime' }],
    screen: 'dashboard-hospital',
    device: 'monitor',
    reverse: true,
  },
  {
    company: 'East Africa Fintech',
    industry: 'Finance',
    problem: 'Legacy systems blocked mobile banking expansion to underserved markets.',
    solution: 'Engineered a secure mobile banking app with real-time transactions.',
    impact: 'Enabled digital financial access for thousands of new users.',
    metrics: [{ value: '10K+', label: 'Active users' }, { value: '<2s', label: 'Transaction time' }, { value: '256-bit', label: 'Encryption' }],
    screen: 'banking',
    device: 'iphone',
    reverse: false,
  },
];

export const processSteps = [
  { title: 'Client Idea', screen: 'idea' },
  { title: 'UX Design', screen: 'design' },
  { title: 'Development', screen: 'dev' },
  { title: 'Testing', screen: 'testing' },
  { title: 'Deployment', screen: 'deploy' },
  { title: 'Support', screen: 'support' },
];

export const whyVisuals = [
  { title: 'Engineering Team', description: 'Senior developers building production-grade systems.', image: 'team', screen: 'erp' },
  { title: 'Live Products', description: 'Software running in hospitals, banks, and enterprises.', image: 'screens', screen: 'dashboard-business' },
  { title: 'Collaboration', description: 'Close partnership from discovery to deployment.', image: 'meeting', screen: 'dashboard-analytics' },
  { title: 'Infrastructure', description: 'Cloud architecture built for reliability at scale.', image: 'infra', screen: 'cloud' },
];

export const heroDevices = [
  { screen: 'erp', device: 'macbook', className: 'hero-device--erp' },
  { screen: 'banking', device: 'iphone', className: 'hero-device--banking' },
  { screen: 'dashboard-hospital', device: 'tablet', className: 'hero-device--hospital' },
  { screen: 'dashboard-analytics', device: 'monitor', className: 'hero-device--analytics' },
  { screen: 'school', device: 'laptop', className: 'hero-device--school' },
  { screen: 'delivery', device: 'iphone', className: 'hero-device--delivery' },
  { screen: 'dashboard-business', device: 'monitor', className: 'hero-device--business' },
  { screen: 'fleet', device: 'tablet', className: 'hero-device--fleet' },
];
