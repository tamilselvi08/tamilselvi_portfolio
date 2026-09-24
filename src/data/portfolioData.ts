import {
  SkillItem,
  Internship,
  Project,
  Certification,
  Education,
  InterestArea,
  LearningItem,
} from '../types';

export const personalData = {
  name: 'Tamil Selvi S',
  shortName: 'Tamil Selvi',
  degree: 'B.E. Electronics & Communication Engineering',
  college: 'V.S.B College of Engineering Technical Campus',
  cgpa: '8.33',
  location: 'Tamil Nadu, India',
  email: 'Tamilselvism08@gmail.com',
  phone: '+91 9342722349',
  linkedin: 'https://www.linkedin.com/in/tamil-selvi-b709862b5/',
  github: 'https://github.com/tamilselvi08',
  resumePath: '/resume/TamilSelvi_Resume.pdf',
  
  headline: "Electronics & Communication Engineering Student",
  subheadline: "Frontend Web Development | Java | Embedded Systems",
  
  heroDescription:
    "Motivated and detail-oriented ECE student with hands-on internship experience in frontend web development and embedded systems. Passionate about building user-centric digital solutions and hardware-software integrated systems.",
    
  careerObjective:
    "Motivated and detail-oriented Electronics & Communication Engineering student with a strong CGPA of 8.33, backed by hands-on internship experience in both frontend web development and embedded systems. Proficient in HTML, CSS, JavaScript, Bootstrap, Java, SQL, and Embedded C. Passionate about building user-centric digital solutions and hardware-software integrated systems. Seeking a challenging fresher position to apply academic knowledge and practical skills in a professional environment.",

  aboutBio:
    "I am an Electronics and Communication Engineering student with a strong academic background and hands-on experience in frontend web development and embedded systems. I enjoy building responsive web interfaces, working with embedded systems and exploring how hardware and software can work together to solve practical problems.",

  stats: [
    { label: 'CGPA', value: '8.33', detail: 'V.S.B Engineering College' },
    { label: 'Internship Experiences', value: '2', detail: 'Web Dev & Embedded Systems' },
    { label: 'Major Projects', value: '2', detail: 'Hardware & Software Built' },
  ],
};

export const journeyTimeline = [
  {
    step: '01',
    title: 'ECE Student',
    period: '2023 - Present',
    description: 'Built a solid foundation in electronics, circuit analysis, digital logic, and communication engineering principles.',
    tag: 'Core Foundation',
    nodeType: 'ece',
  },
  {
    step: '02',
    title: 'Embedded Systems',
    period: 'Hands-on Lab & Firmware',
    description: 'Worked with microcontrollers, sensors and actuators using Embedded C to write low-level control code.',
    tag: 'Hardware Interface',
    nodeType: 'embedded',
  },
  {
    step: '03',
    title: 'Frontend Development',
    period: 'Web Architecture',
    description: 'Built responsive websites using HTML, CSS, JavaScript and Bootstrap with clean UI structure and dynamic scripts.',
    tag: 'Client-Side Software',
    nodeType: 'web',
  },
  {
    step: '04',
    title: 'Internship Experience',
    period: '2025 - 2026',
    description: 'Gained practical exposure to real-world web development at Qbatzclay and embedded systems at Emglitz Technologies.',
    tag: 'Industry Exposure',
    nodeType: 'internship',
  },
  {
    step: '05',
    title: 'Real-World Projects',
    period: 'E-Commerce & Accessibility',
    description: 'Built a Grocery Website and Voice-Controlled Wheelchair, bridging digital interfaces with physical actuators.',
    tag: 'System Integration',
    nodeType: 'projects',
  },
  {
    step: '06',
    title: 'Aspiring Software Professional',
    period: 'Target: Fresher Roles',
    description: 'Ready to contribute academic discipline, cross-disciplinary curiosity, and rapid execution to high-impact teams.',
    tag: 'Career Ready',
    nodeType: 'future',
  },
];

export const skillsData: {
  categoryTitle: string;
  categoryKey: 'programming' | 'web' | 'database' | 'embedded' | 'interests';
  badge: string;
  items: SkillItem[];
}[] = [
  {
    categoryTitle: 'JAVA & PROGRAMMING',
    categoryKey: 'programming',
    badge: 'Core Languages',
    items: [
      {
        name: 'Java',
        category: 'programming',
        tag: 'OOP / Fundamentals',
        description: 'Object-oriented programming, class design, data types, and core algorithmic problem solving.',
        iconName: 'Coffee',
        specs: 'JDK, OOP Architecture, Clean Syntax',
      },
      {
        name: 'JavaScript',
        category: 'programming',
        tag: 'ES6+ / Web Logic',
        description: 'Client-side scripting, DOM manipulation, event handling, dynamic UI updates, and asynchronous interactions.',
        iconName: 'FileCode',
        specs: 'DOM Engine, Event Listeners, State Handling',
      },
      {
        name: 'Embedded C',
        category: 'programming',
        tag: 'Firmware / Low-Level',
        description: 'Writing memory-efficient firmware, hardware registers manipulation, interrupt service routines, and microcontroller control.',
        iconName: 'Cpu',
        specs: 'Bitwise Ops, Port Registers, ISRs',
      },
    ],
  },
  {
    categoryTitle: 'WEB DEVELOPMENT',
    categoryKey: 'web',
    badge: 'Frontend UI',
    items: [
      {
        name: 'HTML',
        category: 'web',
        tag: 'Structure',
        description: 'Semantic markup, accessible page layout, forms, meta tags, and structured document hierarchy.',
        iconName: 'Code2',
        specs: 'HTML5 Semantic Elements, Form Validation',
      },
      {
        name: 'CSS',
        category: 'web',
        tag: 'Styling',
        description: 'Responsive styling, Flexbox, CSS Grid layouts, media queries, keyframe animations, and custom UI theming.',
        iconName: 'Palette',
        specs: 'Grid, Flexbox, Media Queries, Transitions',
      },
      {
        name: 'Bootstrap',
        category: 'web',
        tag: 'Framework',
        description: 'Grid systems, responsive utilities, navigation bars, cards, modals, carousels, and rapid UI development.',
        iconName: 'LayoutGrid',
        specs: '12-Column Grid, Responsive Breakpoints, UI Kits',
      },
    ],
  },
  {
    categoryTitle: 'DATABASE',
    categoryKey: 'database',
    badge: 'Relational Data',
    items: [
      {
        name: 'SQL',
        category: 'database',
        tag: 'RDBMS',
        description: 'Writing relational database queries, table structures, SELECT, INSERT, UPDATE, JOINs, and data filtering.',
        iconName: 'Database',
        specs: 'CRUD Operations, Table Relations, Schema Design',
      },
    ],
  },
  {
    categoryTitle: 'EMBEDDED SYSTEMS',
    categoryKey: 'embedded',
    badge: 'Hardware & Controls',
    items: [
      {
        name: 'Microcontrollers',
        category: 'embedded',
        tag: 'Architecture',
        description: 'Configuring I/O pins, timer modules, ADC conversion, and flashing firmware on target microcontroller boards.',
        iconName: 'Binary',
        specs: 'GPIO, Timers, ADC, UART Serial',
      },
      {
        name: 'Sensors',
        category: 'embedded',
        tag: 'Data Acquisition',
        description: 'Interfacing analog and digital sensors to gather physical parameters like voice, proximity, and temperature.',
        iconName: 'Radio',
        specs: 'Analog/Digital Read, Signal Conditioning',
      },
      {
        name: 'Actuators',
        category: 'embedded',
        tag: 'Physical Output',
        description: 'Driving motors, relays, and indicators based on logic processed by the microcontroller.',
        iconName: 'Zap',
        specs: 'PWM Control, Mechanical Actuation',
      },
      {
        name: 'Voice Recognition Module',
        category: 'embedded',
        tag: 'Input Processing',
        description: 'Training and processing voice commands to produce serial/digital triggers for hands-free assistive hardware.',
        iconName: 'Mic',
        specs: 'Voice Pattern Match, Serial Output Trigger',
      },
      {
        name: 'Motor Drivers',
        category: 'embedded',
        tag: 'Power Driver',
        description: 'Interfacing H-bridge motor driver circuits (e.g. L293D / L298N) for bi-directional DC motor control.',
        iconName: 'Gauge',
        specs: 'H-Bridge Logic, Speed & Direction Control',
      },
    ],
  },
  {
    categoryTitle: 'CORE INTERESTS',
    categoryKey: 'interests',
    badge: 'Passions & Exploration',
    items: [
      {
        name: 'Internet of Things (IoT)',
        category: 'interests',
        tag: 'Connected Devices',
        description: 'Connecting physical microcontroller endpoints with communication protocols to build smart systems.',
        iconName: 'Wifi',
        specs: 'Smart Nodes, Telemetry, Sensor Feeds',
      },
      {
        name: 'Edge Computing',
        category: 'interests',
        tag: 'Distributed Processing',
        description: 'Running localized data filtering and quick decisions directly on microcontrollers to reduce latency.',
        iconName: 'Server',
        specs: 'Low-latency Local Logic, Device-Level Rules',
      },
      {
        name: 'Wireless Communications',
        category: 'interests',
        tag: '4G / 5G / Protocols',
        description: 'Fundamentals of cellular standards (4G/5G), signal propagation, modulation, and wireless data exchange.',
        iconName: 'Antenna',
        specs: '4G/5G Standards, RF Basics, Modulation',
      },
      {
        name: 'UI/UX Design',
        category: 'interests',
        tag: 'User Experience',
        description: 'Designing intuitive user interfaces, visual hierarchy, responsive typography, and frictionless digital journeys.',
        iconName: 'Layout',
        specs: 'Visual Rhythm, Accessibility, Clean Spacing',
      },
      {
        name: 'AI/ML Fundamentals',
        category: 'interests',
        tag: 'Intelligence',
        description: 'Understanding core artificial intelligence principles, decision models, and their applications in automation.',
        iconName: 'Sparkles',
        specs: 'Classification Basics, Automated Reasoning',
      },
    ],
  },
];

export const internshipsData: Internship[] = [
  {
    id: 'qbatzclay',
    role: 'Software Web Development Intern',
    company: 'Qbatzclay',
    period: 'March 2026',
    type: 'Software',
    badge: 'Web & UI Engineering',
    responsibilities: [
      'Built responsive frontend web pages using HTML, CSS, JavaScript, and Bootstrap for real client-facing websites.',
      'Implemented interactive UI components — dropdown menus, modal dialogs, carousels — improving user engagement.',
      'Optimized page performance by minimizing CSS/JS files and improving load time across devices.',
      'Collaborated with team members to maintain consistent design language and code quality standards.',
    ],
    flow: ['DESIGN', 'DEVELOP', 'OPTIMIZE', 'COLLABORATE'],
    techStack: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
  },
  {
    id: 'emglitz',
    role: 'Embedded Systems Intern',
    company: 'Emglitz Technologies',
    period: '2025',
    type: 'Embedded',
    badge: 'Firmware & Hardware Testing',
    responsibilities: [
      'Developed real-time embedded applications using microcontrollers, interfacing sensors and actuators via Embedded C.',
      'Performed systematic circuit testing, hardware debugging, and troubleshooting of embedded device prototypes.',
      'Documented system behaviour and test results, contributing to project reports and technical documentation.',
    ],
    flow: ['SENSOR', 'MICROCONTROLLER', 'PROCESS', 'ACTUATOR'],
    techStack: ['Embedded C', 'Microcontrollers', 'Sensors', 'Actuators', 'Hardware Debugging'],
  },
];

export const projectsData: Project[] = [
  {
    id: 'grocery-website',
    title: 'Grocery Website',
    subtitle: 'Responsive E-Commerce Web Application',
    period: 'March 2026',
    category: 'Web Development',
    description:
      'A responsive e-commerce style grocery website designed to provide a simple and user-friendly online shopping experience with interactive filtering and cart management.',
    features: [
      'Dynamic product listing with rich visual cards',
      'Instant category filtering (Fruits, Vegetables, Dairy, Bakery, Essentials)',
      'Interactive shopping cart with item quantity adjustments',
      'Real-time item count and total price calculation updates',
      'Responsive grid layout optimized for mobile, tablet, and desktop',
      'Cross-browser and cross-device compatibility via clean CSS media queries',
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    githubUrl: 'https://github.com/tamilselvi08',
    flow: ['UI WIREFRAME', 'DYNAMIC DOM RENDERING', 'CART LOGIC', 'RESPONSIVE TESTING'],
    modalDetails: {
      problem:
        'Local shoppers and daily consumers require a frictionless, clean, and responsive digital storefront to browse fresh grocery items, filter categories quickly, and manage their purchase cart without complicated multi-page reloads.',
      idea:
        'Design a lightweight, fast-loading, pure JavaScript-powered storefront prioritizing visual clarity, dynamic catalog filtering, instant price calculation, and accessible UI controls.',
      implementation:
        'Structured semantic HTML5 containers styled with custom CSS and Bootstrap utility grids. Implemented DOM manipulation in vanilla JavaScript to handle live item filtering, shopping cart array updates, quantity modifications, and badge count state.',
      testing:
        'Conducted thorough cross-browser compatibility testing on Chrome, Firefox, and Edge. Validated responsive viewport breakpoints across mobile (375px), tablet (768px), and full HD desktop (1920px).',
      whatILearned: [
        'Responsive web design and layout mathematics',
        'Frontend development workflows and DOM manipulation',
        'JavaScript event handling and real-time state calculation',
        'UI component development and user-centered design patterns',
      ],
    },
  },
  {
    id: 'voice-wheelchair',
    title: 'Voice-Controlled Wheelchair',
    subtitle: 'Embedded Systems & Assistive Mobility Solution',
    category: 'Embedded Systems & Accessibility',
    description:
      'A hands-free mobility solution designed to help differently-abled individuals control wheelchair movement intuitively using calibrated voice commands.',
    features: [
      'Dedicated voice recognition module for acoustic pattern processing',
      'Precise Forward command execution with safety bounds',
      'Backward command reverse motion logic',
      'Left turn command with differential wheel control',
      'Right turn command with synchronized steering',
      'Immediate Emergency Stop command execution',
      'High-current motor driver circuit interface',
      'Real-time, deterministic low-latency hardware response',
    ],
    technologies: [
      'Embedded C',
      'Microcontroller',
      'Voice Recognition Module',
      'Motor Driver',
      'DC Motors',
    ],
    githubUrl: 'https://github.com/tamilselvi08',
    flow: [
      'VOICE COMMAND',
      'VOICE RECOGNITION',
      'MICROCONTROLLER',
      'COMMAND LOGIC',
      'MOTOR DRIVER',
      'WHEELCHAIR MOVEMENT',
    ],
    pipelineDetails: [
      { step: '01. Voice Command', description: 'User speaks navigation cues (Forward, Back, Left, Right, Stop)' },
      { step: '02. Voice Recognition', description: 'Acoustic pattern matched against pre-trained speaker models' },
      { step: '03. Microcontroller', description: 'Microcontroller receives serial packet and triggers ISR logic' },
      { step: '04. Command Logic', description: 'Embedded C state machine translates voice code to motor pin states' },
      { step: '05. Motor Driver', description: 'H-bridge IC amplifies 5V logic signals to 12V motor driving currents' },
      { step: '06. Wheelchair Movement', description: 'Independent left/right geared DC motors execute physical navigation' },
    ],
    modalDetails: {
      problem:
        'Individuals with severe physical motor impairments or paralysis in upper extremities struggle to operate traditional joystick-driven wheelchairs independently, resulting in reduced mobility and autonomy.',
      idea:
        'Engineer a reliable, cost-effective, real-time voice-activated assistive wheelchair navigation module that maps distinct verbal commands into deterministic directional motor actuation.',
      implementation:
        'Interfaced a dedicated voice recognition hardware module with a microcontroller over serial UART. Wrote optimized Embedded C firmware utilizing switch-case state handlers and timer interrupts to generate PWM and direction signals to the dual H-Bridge motor driver.',
      testing:
        'Tested acoustic recognition under varying ambient noise levels. Verified motor driver current thresholds, emergency stop response times (<50ms latency), and directional stability on multiple floor textures.',
      whatILearned: [
        'Low-level Embedded C programming and register-level hardware control',
        'Microcontroller peripheral configuration (UART, GPIO, Timers)',
        'Sensor & voice recognition module interfacing and calibration',
        'Hardware debugging with multimeters and logic analyzers',
        'Real-time command execution and fail-safe safety mechanisms',
      ],
    },
  },
];

export const certificationsData: Certification[] = [
  {
    id: 'iiot',
    title: 'Industrial Internet of Things (IIoT)',
    issuer: 'NPTEL – National Programme on Technology Enhanced Learning',
    credentialId: 'NPTEL-IIOT-2024',
    date: 'Verified Certification',
    skillsGained: ['Industrial IoT Architecture', 'Sensors in Industry', 'SCADA & Protocols', 'Automation'],
    link: '#',
  },
  {
    id: 'iot-edge',
    title: 'IoT Edge Computing and IoT Analytics',
    issuer: 'Infosys Springboard',
    credentialId: 'INFOSYS-EDGE-2024',
    date: 'Verified Certification',
    skillsGained: ['Edge Computing Nodes', 'Telemetry Stream Analysis', 'Data Ingestion', 'Edge Gateways'],
    link: '#',
  },
  {
    id: 'wireless-5g',
    title: '4G/5G Wireless Standard Design',
    issuer: 'NPTEL',
    credentialId: 'NPTEL-5G-2024',
    date: 'Verified Certification',
    skillsGained: ['Cellular Architecture', '5G NR Protocols', 'OFDM Modulation', 'MIMO & Beamforming'],
    link: '#',
  },
  {
    id: 'ai-in-action',
    title: 'AI in Action – PPT',
    issuer: 'Practical Professional Training',
    credentialId: 'PPT-AI-ACTION',
    date: 'Verified Certification',
    skillsGained: ['AI Fundamentals', 'Practical Machine Intelligence', 'Algorithmic Automation', 'Real-world Use Cases'],
    link: '#',
  },
];

export const educationData: Education[] = [
  {
    institution: 'V.S.B College of Engineering Technical Campus',
    degree: 'B.E. – Electronics & Communication Engineering',
    period: '2023 – Present',
    score: '8.33',
    scoreLabel: 'CGPA',
    location: 'Tamil Nadu, India',
    highlights: [
      'Core coursework in Digital Electronics, Microprocessors, Signals & Systems, and Web Technologies',
      'Consistent academic excellence with 8.33 CGPA',
      'Active participant in technical symposiums and embedded hardware workshops',
    ],
  },
  {
    institution: 'Government Higher Secondary School',
    degree: 'Higher Secondary Education (HSC)',
    period: '2022 – 2023',
    score: '73%',
    scoreLabel: 'Percentage',
    location: 'Tamil Nadu, India',
    highlights: [
      'Focus on Physics, Chemistry, Mathematics, and Computer Science',
      'Solid quantitative foundation for engineering studies',
    ],
  },
];

export const interestAreasData: InterestArea[] = [
  {
    title: 'WEB EXPERIENCES',
    subtitle: 'Responsive & Interactive Interfaces',
    description: 'Crafting responsive, user-friendly web interfaces with clean layout hierarchy, fluid animations, and intuitive digital interactions.',
    iconName: 'Layout',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'UI/UX'],
  },
  {
    title: 'SMART HARDWARE',
    subtitle: 'Microcontrollers & Sensors',
    description: 'Developing embedded systems and microcontroller applications where hardware responds deterministically to real-world sensory inputs.',
    iconName: 'Cpu',
    tags: ['Embedded C', 'Microcontrollers', 'Sensors', 'Actuators', 'Motor Drivers'],
  },
  {
    title: 'CONNECTED SYSTEMS',
    subtitle: 'IoT & Edge Intelligence',
    description: 'Exploring Internet of Things architectures, smart device connectivity, and decentralized edge computing nodes.',
    iconName: 'Wifi',
    tags: ['IIoT', 'Edge Computing', 'Telemetry', 'Automation'],
  },
  {
    title: 'COMMUNICATION TECHNOLOGY',
    subtitle: 'Wireless & Next-Gen Networks',
    description: 'Studying cellular and wireless networking standards including 4G/5G signal design, frequency bands, and modern telecommunication frameworks.',
    iconName: 'Antenna',
    tags: ['4G/5G Standards', 'Wireless Protocols', 'Signal Propagation'],
  },
];

export const alwaysLearningData: LearningItem[] = [
  {
    title: 'Java',
    goal: 'Improving programming fundamentals, OOP design patterns, and enterprise application development.',
    category: 'Software',
    progress: 75,
  },
  {
    title: 'Frontend Development',
    goal: 'Building faster, more accessible responsive websites with interactive components and refined UX.',
    category: 'Web',
    progress: 85,
  },
  {
    title: 'Embedded Systems',
    goal: 'Deepening practical knowledge of microcontroller architectures, RTOS concepts, and real-time firmware.',
    category: 'Hardware',
    progress: 80,
  },
  {
    title: 'Internet of Things (IoT)',
    goal: 'Exploring connected hardware prototypes, MQTT telemetry, and edge computing data pipelines.',
    category: 'Systems',
    progress: 70,
  },
  {
    title: 'UI/UX Design',
    goal: 'Learning design systems, visual hierarchy, micro-interactions, and accessible digital experiences.',
    category: 'Design',
    progress: 78,
  },
];
