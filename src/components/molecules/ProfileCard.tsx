'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { TooltipArrow } from '@radix-ui/react-tooltip';

import { Large, Heading3 } from '@/components/atoms/Typography';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';
import { ProfileCard as ProfileCardType } from '@/lib/types';
import { fadeInDelayedVariants } from '@/lib/animations';

export interface ProfileCardProps {
  profile: ProfileCardType;
  className?: string;
  isActive?: boolean;
}

export function ProfileCard({ profile, className, isActive = false }: ProfileCardProps) {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    if (isActive) {
      const timer = setTimeout(() => {
        setShowTooltip(true);
      }, 500);
      return () => clearTimeout(timer);
    } else {
      setShowTooltip(false);
    }
  }, [isActive]);

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
    <TooltipProvider>
      <Tooltip open={showTooltip}>
        <TooltipTrigger asChild>
          <div>
            <Card className={cn('max-w-xs overflow-hidden flex flex-col justify-center ', className)}>
              <CardHeader className="space-y-4 sm:space-y-6 pt-4 sm:pt-8 px-4 sm:px-8 pb-4 sm:pb-6">
                <div className="flex flex-col items-center gap-2">
                  <Avatar className="h-[64px] w-[64px] sm:h-[120px] sm:w-[120px] shadow-lg overflow-visible">
                    <AvatarImage src={profile.imageUrl} alt={profile.name} />
                    <AvatarFallback className="text-lg sm:text-xl font-bold">
                      {getInitials(profile.name)}
                    </AvatarFallback>
                    <div className="absolute bottom-0 -right-1  md:bottom-1 md:right-1.5">
                      <Image
                        width={22}
                        height={16}
                        src={profile.countryFlagUrl}
                        alt="Country"
                        className="sm:w-[25px] sm:h-[18px]"
                      />
                    </div>
                  </Avatar>
                  <Heading3 className="text-center text-[18px] sm:text-2xl">{profile.name}</Heading3>
                  <Large className="mt-0 text-sm sm:text-md font-black leading-relaxed text-primary-foreground">
                    {profile.experience}
                  </Large>
                </div>
              </CardHeader>
              <CardContent className="px-4 sm:px-8 pb-4 sm:pb-8">
                <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2">
                  {profile.skills.map((skill, index) => (
                    <Badge key={index} variant="outline" className="px-3 py-1 text-sm md:text-base">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TooltipTrigger>
        <TooltipContent variant="secondary" side="top" align="center" sideOffset={16}>
          <motion.div
            className="flex gap-2 items-center"
            initial="hidden"
            animate={showTooltip ? 'visible' : 'hidden'}
            variants={fadeInDelayedVariants}>
            <Image src="/icons/icon-currency.webp" width={26} height={26} alt={profile.price} />
            <span>{profile.price}</span>
          </motion.div>
          <TooltipArrow className="fill-tooltip-secondary !visible" width={12} height={6} />
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
