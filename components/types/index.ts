// components/types/index.ts
import { ReactElement } from "react";

export type Project = {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    location: string;
    year: number;
    type: 'Industrial' | 'Commercial' | 'Residential' | 'Institutional';
    icon: ReactElement;
  };