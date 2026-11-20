import { ServiceItem } from '../types';

export const servicesData: ServiceItem[] = [
  {
    id: 'ai-genai',
    title: 'AI & Generative AI',
    shortDesc: 'Pioneering intelligent automation and next-gen cognitive systems tailored for high-impact enterprise workflows.',
    highlights: ['LLM Integration', 'RAG Solutions', 'AI Agents', 'Intelligent Chatbots'],
    iconName: 'ai',
  },
  {
    id: 'cloud-solutions',
    title: 'Cloud Solutions',
    shortDesc: 'Architecting resilient, secure, and cost-optimized multi-cloud environments engineered for zero-downtime scaling.',
    highlights: ['Microsoft Azure', 'AWS', 'Google Cloud Platform'],
    iconName: 'cloud',
  },
  {
    id: 'app-dev',
    title: 'Application Development',
    shortDesc: 'Crafting robust full-stack web, mobile, and enterprise platforms with modern frameworks and microservices architecture.',
    highlights: ['Web Applications', 'Enterprise Applications', 'Mobile Applications', 'API Development'],
    iconName: 'appDev',
  },
  {
    id: 'it-consulting',
    title: 'IT Consulting & Advisory',
    shortDesc: 'Guiding digital evolution with visionary technology roadmaps, deep architectural audits, and strategic technical leadership.',
    highlights: ['Technology Consulting', 'Architecture & Design', 'Technical Strategy'],
    iconName: 'consulting',
  },
  {
    id: 'modernization',
    title: 'Modernization & Migration',
    shortDesc: 'Transforming legacy codebases into high-velocity cloud-native microservices with zero business disruption.',
    highlights: ['Legacy Modernization', 'Cloud Migration', 'Application Modernization'],
    iconName: 'modernization',
  },
  {
    id: 'maintenance-support',
    title: 'Maintenance & Support',
    shortDesc: 'Providing proactive 24/7 monitoring, performance optimization, and SLA-backed engineering support for business continuity.',
    highlights: ['Application Maintenance', 'Performance Optimization', 'Technical Support'],
    iconName: 'support',
  },
];
