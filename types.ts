import React from 'react';

export type PageView = 'home' | 'help-center' | 'fees' | 'roadmap' | 'exchange' | 'agreement' | 'whitepaper';

export interface NavItem {
  label: string;
  href: string;
  action?: () => void;
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}