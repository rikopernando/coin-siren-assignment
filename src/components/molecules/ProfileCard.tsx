'use client';

import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { ProfileCard as ProfileCardType } from '@/lib/types';
import { cn } from '@/lib/utils';

export interface ProfileCardProps {
  profile: ProfileCardType;
  className?: string;
}

export function ProfileCard({ profile, className }: ProfileCardProps) {
  // Get initials from name for avatar fallback
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <Card className={cn('overflow-hidden border-2', className)}>
      <CardHeader className="space-y-6 pb-6">
        <div className="flex flex-col items-center gap-4">
          <Avatar className="h-28 w-28 border-4 border-background shadow-lg">
            <AvatarImage src={profile.imageUrl} alt={profile.name} />
            <AvatarFallback className="text-xl font-bold">{getInitials(profile.name)}</AvatarFallback>
          </Avatar>
          <h3 className="text-center text-2xl font-bold">{profile.name}</h3>
        </div>
      </CardHeader>
      <CardContent className="pb-8">
        <div className="flex flex-wrap justify-center gap-2">
          {profile.skills.map((skill, index) => (
            <Badge key={index} variant="secondary" className="px-3 py-1 text-sm font-medium">
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
