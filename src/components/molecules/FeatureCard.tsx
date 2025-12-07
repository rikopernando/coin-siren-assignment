import { memo } from 'react';
import { Lead, Paragraph } from '@/components/atoms/Typography';
import { FeatureItem } from '@/lib/types';
import { cn } from '@/lib/utils';

export interface FeatureCardProps {
  feature: FeatureItem;
  className?: string;
}

export const FeatureCard = memo(function FeatureCard({ feature, className }: FeatureCardProps) {
  return (
    <div className={cn('py-2 flex flex-col space-y-2', className)}>
      <div className="border-t w-[75%]" />
      <Lead className="font-bold text-white">{feature.title}</Lead>
      <Paragraph className="mt-0 text-md leading-relaxed text-white">{feature.description}</Paragraph>
    </div>
  );
});
