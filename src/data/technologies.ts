import { TechnologyItem } from '../types';

export const technologiesData: TechnologyItem[] = [
  // Backend
  { name: 'Java', category: 'backend', iconId: 'java' },
  { name: 'Spring Boot', category: 'backend', iconId: 'springboot' },
  { name: 'C#', category: 'backend', iconId: 'csharp' },
  { name: '.NET', category: 'backend', iconId: 'dotnet' },
  { name: 'Python', category: 'backend', iconId: 'python' },
  { name: 'Node.js', category: 'backend', iconId: 'nodejs' },
  { name: 'NestJS', category: 'backend', iconId: 'nestjs' },

  // Frontend
  { name: 'JavaScript', category: 'frontend', iconId: 'javascript' },
  { name: 'TypeScript', category: 'frontend', iconId: 'typescript' },
  { name: 'React', category: 'frontend', iconId: 'react' },
  { name: 'Next.js', category: 'frontend', iconId: 'nextjs' },
  { name: 'Angular', category: 'frontend', iconId: 'angular' },
  { name: 'Ionic', category: 'frontend', iconId: 'ionic' },
  { name: 'React Native', category: 'frontend', iconId: 'reactnative' },

  // Cloud & Infrastructure
  { name: 'Microsoft Azure', category: 'cloud', iconId: 'azure' },
  { name: 'AWS', category: 'cloud', iconId: 'aws' },
  { name: 'Google Cloud', category: 'cloud', iconId: 'gcp' },

  // AI & Emerging Technologies
  { name: 'Artificial Intelligence', category: 'ai', iconId: 'ai-core' },
  { name: 'Large Language Models (LLMs)', category: 'ai', iconId: 'llm' },
  { name: 'Model Context Protocol (MCP)', category: 'ai', iconId: 'mcp' },
  { name: 'RAG Solutions', category: 'ai', iconId: 'rag' },
  { name: 'AI Agents', category: 'ai', iconId: 'ai-agents' },
  { name: 'AI Chatbots', category: 'ai', iconId: 'chatbots' },
];

export const techCategories = [
  { id: 'all', label: 'All Technologies' },
  { id: 'backend', label: 'Backend' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'cloud', label: 'Cloud & Infrastructure' },
  { id: 'ai', label: 'AI & Emerging Tech' },
] as const;
