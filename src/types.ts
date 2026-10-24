export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  category: 'fintech' | 'robotics' | 'commerce';
  categoryLabel: string;
  year: string;
  metrics: string;
  summary: string;
  image: string;
  imageAlt: string;
  challenge: string;
  solution: string;
  stack: string[];
  results: { label: string; value: string }[];
  clientQuote?: {
    text: string;
    author: string;
    role: string;
  };
}

export interface CapabilityItem {
  number: string;
  title: string;
  summary: string;
  details: string;
  deliverables: string[];
  technologies: string[];
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  organization: string;
  metric: string;
  metricContext: string;
}

export interface EstimatorState {
  tier: 'prototype' | 'production' | 'enterprise';
  modules: string[];
  timeline: 'standard' | 'accelerated';
}
