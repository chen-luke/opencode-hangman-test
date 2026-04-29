import React from 'react';
import type { LucideProps } from 'lucide-react';

// Map icon names to Lucide components
import {
  PawPrint,
  Clapperboard,
  FlaskConical,
  Globe,
  UtensilsCrossed,
  Monitor,
} from 'lucide-react';

const iconMap: Record<string, React.ComponentType<LucideProps>> = {
  'paw-print': PawPrint,
  clapperboard: Clapperboard,
  'flask-conical': FlaskConical,
  globe: Globe,
  'utensils-crossed': UtensilsCrossed,
  monitor: Monitor,
};

interface CategoryCardProps {
  name: string;
  icon: string;
  selected?: boolean;
  onClick?: () => void;
}

export function CategoryCard({ name, icon, selected, onClick }: CategoryCardProps) {
  const IconComponent = iconMap[icon] || Monitor;

  return (
    <button
      className={`category-card${selected ? ' selected' : ''}`}
      onClick={onClick}
    >
      <IconComponent className="category-icon" />
      <span className="category-label">{name}</span>
    </button>
  );
}
