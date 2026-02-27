'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { heroVariants, HeroVariant } from '../data/heroVariants';

interface HeroVariantContextType {
  currentVariant: HeroVariant;
  setVariant: (id: number) => void;
  cycleVariant: () => void;
  isTestMode: boolean;
  mounted: boolean;
}

const HeroVariantContext = createContext<HeroVariantContextType | undefined>(undefined);

export function HeroVariantProvider({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);
  const [currentVariant, setCurrentVariant] = useState<HeroVariant>(heroVariants[0]);
  const [isTestMode, setIsTestMode] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Check for test mode
    const params = new URLSearchParams(window.location.search);
    const heroTest = params.get('heroTest');
    const heroParam = params.get('hero');
    
    const inTestMode = heroTest === '1';
    setIsTestMode(inTestMode);

    // Determine initial variant
    let initialVariantId = 0;
    
    if (heroParam) {
      const id = parseInt(heroParam, 10);
      if (!isNaN(id) && id >= 0 && id < heroVariants.length) {
        initialVariantId = id;
      }
    } else if (inTestMode) {
      // Only check localStorage in test mode
      const stored = localStorage.getItem('flipit_hero_variant');
      if (stored) {
        const id = parseInt(stored, 10);
        if (!isNaN(id) && id >= 0 && id < heroVariants.length) {
          initialVariantId = id;
        }
      }
    }

    setCurrentVariant(heroVariants[initialVariantId]);

    if (inTestMode) {
      console.log(`[Hero Variant] Loaded: ${heroVariants[initialVariantId].name} (ID: ${initialVariantId})`);
    }
  }, []);

  const setVariant = (id: number) => {
    if (id >= 0 && id < heroVariants.length) {
      setCurrentVariant(heroVariants[id]);
      if (typeof window !== 'undefined') {
        localStorage.setItem('flipit_hero_variant', id.toString());
      }
      if (isTestMode) {
        console.log(`[Hero Variant] Switched to: ${heroVariants[id].name} (ID: ${id})`);
      }
    }
  };

  const cycleVariant = () => {
    const nextId = (currentVariant.id + 1) % heroVariants.length;
    setVariant(nextId);
  };

  return (
    <HeroVariantContext.Provider value={{ currentVariant, setVariant, cycleVariant, isTestMode, mounted }}>
      {children}
    </HeroVariantContext.Provider>
  );
}

export function useHeroVariant() {
  const context = useContext(HeroVariantContext);
  if (!context) {
    throw new Error('useHeroVariant must be used within HeroVariantProvider');
  }
  return context;
}
