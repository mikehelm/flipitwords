'use client';

import React from 'react';
import { useHeroVariant } from '../context/HeroVariantContext';

export default function HeroBadge() {
  const { currentVariant, isTestMode } = useHeroVariant();

  if (!isTestMode) return null;

  return (
    <div className="absolute top-4 right-4 z-10 bg-flipit-orange text-white text-xs px-3 py-1.5 rounded-full shadow">
      Hero: {currentVariant.name}
    </div>
  );
}
