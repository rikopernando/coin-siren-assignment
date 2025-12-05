import { FeatureCard } from '@/components/molecules/FeatureCard';
import { FeatureItem } from '@/lib/types';
import { cn } from '@/lib/utils';

export interface FeaturesSectionProps {
  features: FeatureItem[];
  className?: string;
}

export function FeaturesSection({ features, className }: FeaturesSectionProps) {
  return (
    <section className={cn('bg-secondary/30 py-16', className)}>
      <div className="container mx-auto px-4">
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
