// components/types/index.ts
export type Project = {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    location: string;
    year: number;
    type: 'Industrial' | 'Commercial' | 'Residential' | 'Institutional';
  };