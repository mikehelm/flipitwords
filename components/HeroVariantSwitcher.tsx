'use client';

import React, { useState, useEffect } from 'react';
import { useHeroVariant } from '../context/HeroVariantContext';
import { heroVariants } from '../data/heroVariants';

export default function HeroVariantSwitcher() {
  const { currentVariant, setVariant, isTestMode, mounted } = useHeroVariant();
  const [showPopup, setShowPopup] = useState(false);
  const [leftClicked, setLeftClicked] = useState(false);
  const [rightClicked, setRightClicked] = useState(false);

  useEffect(() => {
    if (mounted && isTestMode) {
      const timer = setTimeout(() => setShowPopup(true), 1000);
      return () => clearTimeout(timer);
    }
  }, [mounted, isTestMode]);

  // Don't render until mounted on client
  if (!mounted || !isTestMode) return null;

  const handleLeftClick = () => {
    setLeftClicked(true);
    setVariant(currentVariant.id === 0 ? heroVariants.length - 1 : currentVariant.id - 1);
  };

  const handleRightClick = () => {
    setRightClicked(true);
    setVariant((currentVariant.id + 1) % heroVariants.length);
  };

  return (
    <>
      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
          <div className="bg-[#12141f] border border-gray-700 rounded-2xl shadow-2xl max-w-sm mx-4 p-8 text-center">
            <h2 className="text-3xl font-bold text-flipit-orange mb-4">NOT A WEBSITE</h2>
            <p className="text-gray-300 mb-6">
              This is for testing words only.
            </p>
            <p className="text-gray-400 text-sm mb-6">
              Use the arrows to cycle through hero options.
            </p>
            <button
              onClick={() => setShowPopup(false)}
              className="bg-flipit-orange hover:bg-orange-600 text-white px-8 py-3 rounded-xl font-semibold transition-colors"
            >
              Got it
            </button>
          </div>
        </div>
      )}

      {/* Left Arrow */}
      <button
        onClick={handleLeftClick}
        className={`fixed left-4 top-1/2 -translate-y-1/2 z-40 w-24 h-24 bg-gray-800/90 hover:bg-gray-700 border border-gray-700 rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 ${
          !leftClicked ? 'animate-pulse' : ''
        }`}
        aria-label="Previous hero variant"
      >
        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Right Arrow */}
      <button
        onClick={handleRightClick}
        className={`fixed right-4 top-1/2 -translate-y-1/2 z-40 w-24 h-24 bg-gray-800/90 hover:bg-gray-700 border border-gray-700 rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 ${
          !rightClicked ? 'animate-pulse' : ''
        }`}
        aria-label="Next hero variant"
      >
        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </>
  );
}
