'use client';

import React, { useState, useEffect } from 'react';
import { useHeroVariant } from '../context/HeroVariantContext';
import { heroVariants } from '../data/heroVariants';

export default function HeroVariantSwitcher() {
  const { currentVariant, setVariant, isTestMode } = useHeroVariant();
  const [showPopup, setShowPopup] = useState(false);
  const [leftClicked, setLeftClicked] = useState(false);
  const [rightClicked, setRightClicked] = useState(false);

  useEffect(() => {
    if (isTestMode) {
      const timer = setTimeout(() => setShowPopup(true), 1000);
      return () => clearTimeout(timer);
    }
  }, [isTestMode]);

  if (!isTestMode) return null;

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
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md mx-4 p-8 text-center">
            <div className="text-4xl mb-4">✍️</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Wordsmith Mode</h2>
            <p className="text-gray-600 mb-4">
              This page is for <strong>wordsmithing purposes only</strong>.
            </p>
            <div className="bg-gray-100 rounded-xl p-4 mb-6 text-left">
              <p className="text-sm text-gray-700 font-medium mb-2">How to use:</p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <span className="text-lg">←</span>
                  <span>Use <strong>left/right arrows</strong> to cycle through 6 hero variants</span>
                  <span className="text-lg">→</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                  <span>Click the <strong>dots</strong> below the hero to jump to a specific variant</span>
                </li>
              </ul>
            </div>
            <button
              onClick={() => setShowPopup(false)}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-xl font-semibold transition-colors"
            >
              Got it, let's go
            </button>
          </div>
        </div>
      )}

      {/* Left Arrow */}
      <button
        onClick={handleLeftClick}
        className={`fixed left-4 top-1/2 -translate-y-1/2 z-40 w-24 h-24 bg-white/90 hover:bg-white border border-gray-200 rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 ${
          !leftClicked ? 'animate-pulse' : ''
        }`}
        aria-label="Previous hero variant"
      >
        <svg className="w-12 h-12 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Right Arrow */}
      <button
        onClick={handleRightClick}
        className={`fixed right-4 top-1/2 -translate-y-1/2 z-40 w-24 h-24 bg-white/90 hover:bg-white border border-gray-200 rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 ${
          !rightClicked ? 'animate-pulse' : ''
        }`}
        aria-label="Next hero variant"
      >
        <svg className="w-12 h-12 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </>
  );
}
