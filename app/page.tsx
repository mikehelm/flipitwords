'use client';

import Hero from '@/components/Hero';
import Demo from '@/components/Demo';
import ValueCards from '@/components/ValueCards';
import HowItWorks from '@/components/HowItWorks';
import TrustSection from '@/components/TrustSection';
import BusinessCTA from '@/components/BusinessCTA';
import { useHeroVariant } from '@/context/HeroVariantContext';

export default function Home() {
  const { currentVariant } = useHeroVariant();

  return (
    <>
      <Hero variant={currentVariant} />
      <Demo />
      <ValueCards />
      <HowItWorks />
      <TrustSection />
      <BusinessCTA />
    </>
  );
}
