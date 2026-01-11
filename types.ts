import React from 'react';

export interface PricingItem {
  name: string;
  price: string;
  detail?: string;
  highlight?: boolean;
}

export interface ServiceCategory {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ElementType;
  items: PricingItem[];
  colorTheme: 'blue' | 'green' | 'red' | 'yellow';
}

export enum SlideType {
  COVER = 'COVER',
  STATS = 'STATS',
  SERVICE = 'SERVICE',
  CONTACT = 'CONTACT',
}

export interface SlideData {
  type: SlideType;
  content?: ServiceCategory;
}