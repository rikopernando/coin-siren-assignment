import Image from 'next/image';

import { Card, CardContent } from '@/components/ui/card';
import { ServiceCategory } from '@/lib/types';
import { cn } from '@/lib/utils';

export interface ServiceCardProps extends React.HTMLAttributes<HTMLDivElement> {
  service: ServiceCategory;
  className?: string;
}

export function ServiceCard({ service, className, ...props }: ServiceCardProps) {
  return (
    <Card
      className={cn(
        'group cursor-pointer rounded-xl p-3 sm:p-4 transition-all hover:border-primary hover:shadow-lg w-[280px] sm:w-[332px] flex h-[76px] sm:h-[88px] bg-opacity-primary border-0',
        className,
      )}
      {...props}>
      <CardContent className="flex gap-4 sm:gap-6 w-full items-center justify-start p-0 text-white">
        <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-lg bg-opacity-secondary transition-all flex-shrink-0">
          <Image width={28} height={28} src={`/icons/${service.iconName}`} alt={service.name} className="sm:w-8 sm:h-8" />
        </div>
        <p className="text-left text-sm sm:text-base font-black">{service.name}</p>
      </CardContent>
    </Card>
  );
}
