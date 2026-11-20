export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  highlights: string[];
  iconName: 'ai' | 'cloud' | 'appDev' | 'consulting' | 'modernization' | 'support';
}

export interface TechnologyItem {
  name: string;
  category: 'backend' | 'frontend' | 'cloud' | 'ai';
  tagline?: string;
  badge?: string;
  iconId: string;
}

export interface HighlightStat {
  value: string;
  numberValue: number;
  suffix: string;
  title: string;
  description: string;
  icon: 'users' | 'trophy' | 'rocket' | 'handshake';
}

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  service: string;
  message: string;
}
