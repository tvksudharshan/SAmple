import { CaseStudy, CapabilityItem, TestimonialItem } from '../types';
import heroStudioSpace from '../assets/images/hero_studio_space_1792835625664.jpg';
import caseStudyFintech from '../assets/images/case_study_fintech_1792835625814.jpg';
import caseStudyRobotics from '../assets/images/case_study_robotics_1792835627655.jpg';
import caseStudyCommerce from '../assets/images/case_study_commerce_1792835627700.jpg';

export const HERO_IMAGE = heroStudioSpace;

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'apex-quantum',
    title: 'High-Frequency Institutional Asset Execution Suite',
    client: 'Apex Quantum Technologies',
    category: 'fintech',
    categoryLabel: 'Financial Systems',
    year: '2026',
    metrics: '+340% Execution Velocity · 12ms P99 Latency',
    summary: 'A desktop-grade trading workstation engineered for sovereign wealth desks handling concurrent multi-exchange telemetry and millisecond-level position rebalancing.',
    image: caseStudyFintech,
    imageAlt: 'Apex Quantum financial workstation displayed on an architectural glass desk with London skyline',
    challenge: 'Existing browser-based trade blotters experienced severe frame drops during high-volatility market windows, stalling critical order routings and causing visual desynchronization.',
    solution: 'Designed and deployed an offscreen Canvas and WebGL rendering engine with zero-garbage collection allocation loops and binary WebSocket deserialization.',
    stack: ['React 19', 'WebGL 2.0', 'TypeScript', 'Binary WebSockets', 'Tailwind CSS', 'Rust/Wasm'],
    results: [
      { label: 'P99 Interface Latency', value: '12ms' },
      { label: 'Concurrent Tickers Rendered', value: '12,500' },
      { label: 'Daily Trading Volume', value: '$1.4B' },
      { label: 'Blotter Crash Rate', value: '0.00%' }
    ],
    clientQuote: {
      text: 'Vanguard delivered an interface that outperforms native desktop software while maintaining the agility and deployability of the web.',
      author: 'Marcus Vance',
      role: 'Head of Quantitative Infrastructure, Apex Quantum'
    }
  },
  {
    id: 'aura-robotics',
    title: 'Autonomous Robotics Fleet Spatial Mapping Console',
    client: 'Aura Systems',
    category: 'robotics',
    categoryLabel: 'Autonomous Robotics',
    year: '2026',
    metrics: '400+ Active Fleet Units · 99.98% Telemetry Integrity',
    summary: 'Real-time spatial awareness, sensor fusion, and mission command console for automated industrial inspection rovers operating in hazardous production environments.',
    image: caseStudyRobotics,
    imageAlt: 'Engineer reviewing spatial mapping telemetry in industrial robotics testing lab',
    challenge: 'Field operators required simultaneous point-cloud visualization, thermal camera streams, and sub-meter rover waypoint steering across intermittent industrial wireless links.',
    solution: 'Constructed an adaptive client-side state reconciler with spatial quadtree indexing, graceful telemetry degradation, and instant touchscreen waypoint overrides.',
    stack: ['React', 'Three.js', 'WebRTC', 'IndexedDB Offline Cache', 'gRPC-Web', 'Tailwind CSS'],
    results: [
      { label: 'Concurrent Telemetry Streams', value: '400+' },
      { label: 'Point Cloud Frame Rate', value: '60 FPS' },
      { label: 'Field Operator Triage Time', value: '-65%' },
      { label: 'Connection Recovery', value: '<200ms' }
    ],
    clientQuote: {
      text: 'The spatial telemetry interface transformed our field operations from blind spot investigations into continuous, confident supervisory control.',
      author: 'Dr. Elena Rostova',
      role: 'VP of Autonomous Systems, Aura Systems'
    }
  },
  {
    id: 'maison-archival',
    title: 'Architectural Luxury Lifestyle & Digital Commerce',
    client: 'Maison Archival Group',
    category: 'commerce',
    categoryLabel: 'Editorial Commerce',
    year: '2025',
    metrics: '+82% Average Order Value · <0.8s Global LCP',
    summary: 'An editorial commerce experience combining tactile material storytelling, micro-interactions, and instant headless checkout across 24 global markets.',
    image: caseStudyCommerce,
    imageAlt: 'Designer interacting with tactile digital commerce catalog on tablet in minimalist ceramic atelier',
    challenge: 'High-end clientele found standard e-commerce grids generic and uninspiring, resulting in low dwell times for bespoke furniture collections valued above $15,000.',
    solution: 'Engineered an editorial broadsheet interaction model with tactile viewport transitions, localized currency settlements, and zero-flicker headless inventory synchronizations.',
    stack: ['React', 'Shopify Storefront API', 'Edge Middleware', 'Tailwind CSS', 'Motion'],
    results: [
      { label: 'Average Order Value', value: '+82%' },
      { label: 'Global Largest Contentful Paint', value: '0.78s' },
      { label: 'Catalog Engagement Time', value: '4m 12s' },
      { label: 'Mobile Conversion Rate', value: '4.6%' }
    ],
    clientQuote: {
      text: 'Vanguard crafted an experience that feels as curated and deliberate as walking into our flagship European galleries.',
      author: 'Camille Delacroix',
      role: 'Global Creative Director, Maison Archival'
    }
  }
];

export const CAPABILITIES: CapabilityItem[] = [
  {
    number: '01',
    title: 'Real-Time Telemetry & Systems Architecture',
    summary: 'Engineered for sub-50ms data pipelines, WebSocket streaming, and mission-critical supervisory control.',
    details: 'We specialize in interfaces where data latency is measured in single-digit milliseconds. Our architectures employ binary streaming formats, client-side RingBuffers, and isolated thread worker computation to ensure UI threads never stutter under market volatility or sensor bursts.',
    deliverables: ['Binary WebSocket protocols', 'Worker-thread state deserializers', 'Resilient reconnect state machines', 'Offline-first queue syncing'],
    technologies: ['WebSockets', 'Web Workers', 'Protobuf', 'Rust / WebAssembly', 'Redis Streams']
  },
  {
    number: '02',
    title: 'Mission-Critical Interface Engineering',
    summary: 'Production design systems and complex desktop-grade web applications with zero compromise on responsiveness.',
    details: 'Complex enterprise workflows require clear information hierarchies and zero visual clutter. We build custom component libraries with strict accessibility, custom keyboard navigation routines, and optical dark/light mode balance.',
    deliverables: ['Custom design token engines', 'Accessible headless keyboard models', 'Virtual scrolling data grids', 'Micro-interaction feedback kits'],
    technologies: ['React 19', 'TypeScript', 'Tailwind CSS', 'Radix Primitives', 'Motion']
  },
  {
    number: '03',
    title: 'Computational & Spatial Prototyping',
    summary: 'Bridging physical systems, 3D spatial mapping, and hardware integration through browser standards.',
    details: 'From LiDAR point clouds to robotics pathfinding, we render dense physical phenomena directly in the browser using WebGL shaders and spatial partition data structures.',
    deliverables: ['Shader-optimized point cloud visualizers', 'Parametric CAD model inspectors', 'Sensor fusion overlays', 'Tactile interactive viewports'],
    technologies: ['WebGL 2.0', 'Three.js', 'GLSL Shaders', 'WebRTC', 'Canvas 2D Engine']
  },
  {
    number: '04',
    title: 'High-Throughput Cloud & Edge Infrastructure',
    summary: 'Zero-cold-start edge endpoints and distributed state synchronization designed for global scale.',
    details: 'Your frontend is only as fast as the network boundary behind it. We design serverless and edge architectures that cache computed states at the edge, validate mutations, and enforce enterprise RBAC without database bottlenecks.',
    deliverables: ['Edge cache orchestration', 'Distributed optimistic concurrency', 'Zero-trust auth verification', 'Automated end-to-end telemetry'],
    technologies: ['Edge Functions', 'Cloudflare Workers', 'PostgreSQL', 'Docker', 'OpenTelemetry']
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'test-1',
    quote: 'The trading interface Vanguard architected allowed our sovereign fund partners to execute multi-leg derivative baskets with zero observable latency. It set an entirely new benchmark for our technical stack.',
    author: 'Marcus Vance',
    role: 'Head of Quantitative Infrastructure',
    organization: 'Apex Quantum Technologies',
    metric: '12ms',
    metricContext: 'P99 trade execution response time'
  },
  {
    id: 'test-2',
    quote: 'We replaced five disconnected diagnostic screens with a single unified telemetry console. Our field deployment turnaround decreased by over 60% within the first month of rollout.',
    author: 'Dr. Elena Rostova',
    role: 'VP of Autonomous Systems',
    organization: 'Aura Systems',
    metric: '-65%',
    metricContext: 'Field operator triage time reduction'
  },
  {
    id: 'test-3',
    quote: 'Rarely do you find an engineering partner that combines ruthless technical rigor with exquisite aesthetic taste. Vanguard transformed our digital revenue stream.',
    author: 'Camille Delacroix',
    role: 'Global Creative Director',
    organization: 'Maison Archival Group',
    metric: '+82%',
    metricContext: 'Growth in digital order value'
  }
];

export const ESTIMATOR_MODULES = [
  {
    id: 'realtime-telemetry',
    name: 'Real-Time Streaming Telemetry',
    desc: 'Binary WebSockets, RingBuffer deserialization, and live chart canvases',
    weeks: 3,
    budget: 18000
  },
  {
    id: 'design-system',
    name: 'Tailored Design System & Tokens',
    desc: 'Accessible components, custom primitives, optical dark/light themes',
    weeks: 2,
    budget: 12000
  },
  {
    id: 'spatial-3d',
    name: '3D Spatial / WebGL Viewport',
    desc: 'Point-cloud visualization, shader materials, and CAD model inspection',
    weeks: 4,
    budget: 24000
  },
  {
    id: 'auth-rbac',
    name: 'Enterprise Auth & RBAC Security',
    desc: 'SSO integration, audit trails, and role-based access control',
    weeks: 2,
    budget: 14000
  },
  {
    id: 'offline-sync',
    name: 'Offline-First Cache & Sync Engine',
    desc: 'IndexedDB reconciliation, optimistic mutations, and recovery queues',
    weeks: 2,
    budget: 15000
  },
  {
    id: 'analytics-audit',
    name: 'Observability & Automated Testing',
    desc: 'OpenTelemetry instrumentation, Playwright end-to-end suites, CI/CD',
    weeks: 1,
    budget: 9000
  }
];
