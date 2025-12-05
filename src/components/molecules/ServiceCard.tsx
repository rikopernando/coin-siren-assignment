import { Card, CardContent } from '@/components/ui/card';
import { Icon } from '@/components/atoms/Icon';
import { ServiceCategory } from '@/lib/types';
import { cn } from '@/lib/utils';
import { LucideIcon, Globe, Code, Pencil, TrendingUp, Headphones, Circle } from 'lucide-react';

export interface ServiceCardProps {
  service: ServiceCategory;
  className?: string;
}

const iconMap: Record<string, LucideIcon> = {
  Globe,
  Code,
  Pencil,
  TrendingUp,
  Headphones,
  Circle,
};

export function ServiceCard({ service, className }: ServiceCardProps) {
  // Get the icon from the icon map based on iconName
  const IconComponent = iconMap[service.iconName] || Circle;

  return (
    <Card className={cn('hover:shadow-lg transition-shadow cursor-pointer', className)}>
      <CardContent className="flex flex-col items-center justify-center gap-3 p-6">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
          <Icon icon={IconComponent} size={24} />
        </div>
        <p className="text-center text-sm font-medium">{service.name}</p>
      </CardContent>
    </Card>
  );
}
