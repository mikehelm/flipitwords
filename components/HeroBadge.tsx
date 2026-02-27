'use client';

import React from 'react';
import { useHeroVariant } from '../context/HeroVariantContext';

export default function HeroBadge() {
  const { currentVariant, isTestMode, mounted } = useHeroVariant();

  if (!mounted || !isTestMode) return null;

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
      <div className="text-gray-500 text-xs px-3 py-1.5 rounded-full hover:text-gray-300 hover:bg-white/10 transition-all cursor-default">
        {currentVariant.name}
      </div>
    </div>
  );
}
