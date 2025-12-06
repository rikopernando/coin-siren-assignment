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
        'group cursor-pointer rounded-xl p-4 transition-all hover:border-primary hover:shadow-lg w-[332px] flex  h-[88px] bg-opacity-primary border-0',
        className,
      )}
      {...props}>
      <CardContent className="flex gap-6 w-full items-center justify-start p-0 text-white">
        <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-opacity-secondary transition-all">
          <Image width={32} height={32} src={`/icons/${service.iconName}`} alt={service.name} />
        </div>
        <p className="text-center text-base font-black">{service.name}</p>
      </CardContent>
    </Card>
  );
}
