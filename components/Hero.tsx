'use client';

import { HeroVariant } from '@/data/heroVariants';
import { useHeroVariant } from '@/context/HeroVariantContext';
import { heroVariants } from '@/data/heroVariants';
import HeroBadge from './HeroBadge';

interface HeroProps {
  variant: HeroVariant;
}

export default function Hero({ variant }: HeroProps) {
  const { setVariant, isTestMode } = useHeroVariant();

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
    <section className="bg-gradient-to-br from-gray-50 to-white py-16 sm:py-24 lg:py-32 relative">
      <HeroBadge />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Kicker - optional smaller text above headline */}
        {variant.kicker && (
          <p className="text-sm sm:text-base font-semibold text-[#FF4500] uppercase tracking-wide mb-4">
            {variant.kicker}
          </p>
        )}
        
        {/* Main headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight">
          {variant.headline}
        </h1>
        
        {/* Subheadline */}
        <p className="mt-6 text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto">
          {variant.subheadline}
        </p>
        
        {/* Support line - optional secondary paragraph */}
        {variant.supportLine && (
          <p className="mt-4 text-lg text-gray-500 font-medium">
            {variant.supportLine}
          </p>
        )}
        
        {/* Bullet points */}
        <ul className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center max-w-4xl mx-auto">
          {variant.bullets.map((bullet, index) => (
            <li 
              key={index}
              className="flex items-center gap-2 text-gray-700"
            >
              <svg className="w-5 h-5 text-[#FF4500] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
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
            className="text-gray-600 hover:text-gray-900 font-semibold text-lg transition-colors"
          >
            <a href="#demo">
              {variant.secondaryCtaText} ↓
            </a>
          </button>
        </div>
        
        {/* Microcopy */}
        <p className="mt-6 text-sm text-gray-400 italic">
          {variant.microcopy}
        </p>

        {/* Dots indicator - only in test mode, positioned under hero */}
        {isTestMode && (
          <div className="mt-12 flex gap-3 justify-center">
            {heroVariants.map((v) => (
              <button
                key={v.id}
                onClick={() => setVariant(v.id)}
                className={`w-3 h-3 rounded-full transition-all ${
                  variant.id === v.id
                    ? 'bg-orange-500 scale-125'
                    : 'bg-gray-300 hover:bg-gray-400'
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
