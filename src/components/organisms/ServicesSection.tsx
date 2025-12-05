import { ServiceCard } from '@/components/molecules/ServiceCard';
import { Heading2 } from '@/components/atoms/Typography';
import { ServiceCategory } from '@/lib/types';
import { cn } from '@/lib/utils';

export interface ServicesSectionProps {
  services: ServiceCategory[];
  className?: string;
}

export function ServicesSection({ services, className }: ServicesSectionProps) {
  return (
    <section className={cn('py-16', className)}>
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <Heading2>우리의 서비스</Heading2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
