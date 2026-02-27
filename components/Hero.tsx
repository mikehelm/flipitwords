'use client';

import { HeroVariant } from '@/data/heroVariants';
import { useHeroVariant } from '@/context/HeroVariantContext';
import { heroVariants } from '@/data/heroVariants';
import HeroBadge from './HeroBadge';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

interface HeroProps {
  variant: HeroVariant;
}

export default function Hero({ variant }: HeroProps) {
  const { setVariant, isTestMode, mounted } = useHeroVariant();
  const pathname = usePathname();
  const [scrollOpacity, setScrollOpacity] = useState(1);
  const [leftClicked, setLeftClicked] = useState(false);
  const [rightClicked, setRightClicked] = useState(false);

  const isHomepage = pathname === '/';
  const showArrows = mounted && isTestMode && isHomepage;

  useEffect(() => {
    if (!showArrows) return;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const opacity = Math.max(0, 1 - scrollY / 300);
      setScrollOpacity(opacity);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showArrows]);

  const handleLeftClick = () => {
    setLeftClicked(true);
    setVariant(variant.id === 0 ? heroVariants.length - 1 : variant.id - 1);
  };

  const handleRightClick = () => {
    setRightClicked(true);
    setVariant((variant.id + 1) % heroVariants.length);
  };

  const handleCtaClick = (ctaType: 'primary' | 'secondary') => {
    window.dispatchEvent(new CustomEvent('hero_cta_click', { 
      detail: { 
        variantId: variant.id, 
        variantName: variant.name, 
        cta: ctaType 
      } 
    }));
  };

  return (
    <section className="flipit-bg py-16 sm:py-24 lg:py-32 relative min-h-[80vh]">
      {/* Gradient orbs */}
      <div className="flipit-orbs">
        <div className="flipit-orb flipit-orb-1"></div>
        <div className="flipit-orb flipit-orb-2"></div>
        <div className="flipit-orb flipit-orb-3"></div>
      </div>
      
      {/* Bottom fade */}
      <div className="flipit-fade-bottom"></div>
      
      {mounted && isTestMode && <HeroBadge />}
      
      {/* Left Arrow - only on homepage */}
      {showArrows && (
        <button
          onClick={handleLeftClick}
          style={{ opacity: scrollOpacity, pointerEvents: scrollOpacity > 0.1 ? 'auto' : 'none' }}
          className={`absolute left-4 top-1/2 -translate-y-1/2 z-40 w-24 h-24 bg-gray-800/90 hover:bg-gray-700 border border-gray-700 rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 ${
            !leftClicked ? 'animate-pulse' : ''
          }`}
          aria-label="Previous hero variant"
        >
          <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      )}

      {/* Right Arrow - only on homepage */}
      {showArrows && (
        <button
          onClick={handleRightClick}
          style={{ opacity: scrollOpacity, pointerEvents: scrollOpacity > 0.1 ? 'auto' : 'none' }}
          className={`absolute right-4 top-1/2 -translate-y-1/2 z-40 w-24 h-24 bg-gray-800/90 hover:bg-gray-700 border border-gray-700 rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 ${
            !rightClicked ? 'animate-pulse' : ''
          }`}
          aria-label="Next hero variant"
        >
          <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Kicker - optional smaller text above headline */}
        {variant.kicker && (
          <p className="text-sm sm:text-base font-semibold text-flipit-orange uppercase tracking-wide mb-4">
            {variant.kicker}
          </p>
        )}
        
        {/* Main headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
          {variant.headline}
        </h1>
        
        {/* Subheadline */}
        <p className="mt-6 text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto">
          {variant.subheadline}
        </p>
        
        {/* Support line - optional secondary paragraph */}
        {variant.supportLine && (
          <p className="mt-4 text-lg text-gray-400 font-medium">
            {variant.supportLine}
          </p>
        )}
        
        {/* Bullet points */}
        <ul className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center max-w-4xl mx-auto">
          {variant.bullets.map((bullet, index) => (
            <li 
              key={index}
              className="flex items-center gap-2 text-gray-300"
            >
              <svg className="w-5 h-5 text-flipit-orange flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
        
        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => handleCtaClick('primary')}
            data-hero-variant={variant.id}
            className="bg-flipit-orange text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-orange-600 transition-colors shadow-lg hover:shadow-xl"
          >
            <a
              href="https://chromewebstore.google.com/detail/flipit/aeclfjapikjpkdajbaolonnceecpghce"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              {variant.primaryCtaText} — It&apos;s free
            </a>
          </button>
          <button
            onClick={() => handleCtaClick('secondary')}
            data-hero-variant={variant.id}
            className="text-gray-300 hover:text-white font-semibold text-lg transition-colors"
          >
            <a href="#demo">
              {variant.secondaryCtaText} ↓
            </a>
          </button>
        </div>
        
        {/* Trust cue */}
        {variant.trustCue && (
          <p className="mt-4 text-xs text-gray-500 flex items-center justify-center gap-1">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            {variant.trustCue}
          </p>
        )}
        
        {/* Microcopy */}
        <p className="mt-2 text-sm text-gray-500 italic">
          {variant.microcopy}
        </p>

        {/* Dots indicator - only in test mode, positioned under hero */}
        {mounted && isTestMode && (
          <div className="mt-24 flex gap-3 justify-center opacity-50 hover:opacity-100 transition-opacity">
            {heroVariants.map((v) => (
              <button
                key={v.id}
                onClick={() => setVariant(v.id)}
                className={`w-3 h-3 rounded-full transition-all ${
                  variant.id === v.id
                    ? 'bg-flipit-orange scale-125'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
                aria-label={`Go to variant: ${v.name}`}
                title={v.name}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
