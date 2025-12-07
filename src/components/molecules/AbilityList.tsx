import { memo } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface Ability {
  id: string;
  label: string;
}

export interface AbilityListProps {
  abilities: Ability[];
  className?: string;
}

/**
 * Displays a list of abilities with checkboxes
 * Used in the mobile view of the hero section
 */
export const AbilityList = memo(function AbilityList({ abilities, className }: AbilityListProps) {
  // Split abilities into two rows
  const halfLength = Math.ceil(abilities.length / 2);
  const firstRow = abilities.slice(0, halfLength);
  const secondRow = abilities.slice(halfLength);

  return (
    <div className={cn('space-y-2', className)}>
      {/* First Row */}
      <div className="flex gap-x-2">
        {firstRow.map((ability, index) => (
          <div key={ability.id} className={`${index === 0 ? 'min-w-[92px]' : ''} flex items-center gap-2`}>
            <Image src="/icons/icon-checkbox.webp" width={20} height={20} alt="check" />
            <span className="text-white text-sm font-bold">{ability.label}</span>
          </div>
        ))}
      </div>

      {/* Second Row */}
      <div className="flex gap-x-2">
        {secondRow.map((ability, index) => (
          <div key={ability.id} className={`${index === 0 ? 'min-w-[92px]' : ''} flex items-center gap-2`}>
            <Image src="/icons/icon-checkbox.webp" width={20} height={20} alt="check" />
            <span className="text-white text-sm font-bold">{ability.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
});
