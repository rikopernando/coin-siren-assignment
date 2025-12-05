import { Lead, Paragraph } from '@/components/atoms/Typography';
import { FeatureItem } from '@/lib/types';
import { cn } from '@/lib/utils';

export interface FeatureCardProps {
  feature: FeatureItem;
  className?: string;
}

export function FeatureCard({ feature, className }: FeatureCardProps) {
  return (
    <div className={cn('border-t py-2 flex flex-col space-y-2', className)}>
      <Lead className="font-bold text-white">{feature.title}</Lead>
      <Paragraph className="mt-0 text-md leading-relaxed text-white">{feature.description}</Paragraph>
    </div>
  );
}
