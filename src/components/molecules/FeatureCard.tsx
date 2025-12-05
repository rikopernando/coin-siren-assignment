import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Heading3, Paragraph } from '@/components/atoms/Typography';
import { FeatureItem } from '@/lib/types';
import { cn } from '@/lib/utils';

export interface FeatureCardProps {
  feature: FeatureItem;
  className?: string;
}

export function FeatureCard({ feature, className }: FeatureCardProps) {
  return (
    <Card className={cn('text-center', className)}>
      <CardHeader className="pb-3">
        <Heading3 className="text-lg">{feature.title}</Heading3>
      </CardHeader>
      <CardContent>
        <Paragraph className="text-sm text-muted-foreground mt-0">{feature.description}</Paragraph>
      </CardContent>
    </Card>
  );
}
