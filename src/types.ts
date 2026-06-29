export interface StatItem {
  id: string;
  value: number;
  suffix: string;
  label: string;
}

export interface CoreModuleItem {
  id: string;
  name: string;
  description: string;
  iconName: string; // Used to map to lucide-react icons dynamically
}

export interface BillingDetail {
  id: string;
  label: string;
  amount: string;
  status: 'pending' | 'unified' | 'active';
  color: string;
}

export interface ProcessStep {
  id: string;
  number: string;
  title: string;
  description: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  hospital: string;
}
