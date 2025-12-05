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
    <Card className={cn('overflow-hidden', className)}>
      <CardHeader className="pb-4">
        <div className="flex flex-col items-center gap-4">
          <Avatar className="h-24 w-24">
            <AvatarImage src={profile.imageUrl} alt={profile.name} />
            <AvatarFallback className="text-lg">{getInitials(profile.name)}</AvatarFallback>
          </Avatar>
          <h3 className="text-xl font-semibold text-center">{profile.name}</h3>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2 justify-center">
          {profile.skills.map((skill, index) => (
            <Badge key={index} variant="secondary" className="text-sm">
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
