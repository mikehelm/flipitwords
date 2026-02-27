'use client';

import React, { useState, useEffect } from 'react';
import { useHeroVariant } from '../context/HeroVariantContext';
import { usePathname } from 'next/navigation';

export default function HeroVariantSwitcher() {
  const { isTestMode, mounted } = useHeroVariant();
  const [showPopup, setShowPopup] = useState(false);
  const pathname = usePathname();
  
  const isHomepage = pathname === '/';

  useEffect(() => {
    if (mounted && isTestMode && isHomepage) {
      const timer = setTimeout(() => setShowPopup(true), 1000);
      return () => clearTimeout(timer);
    }
  }, [mounted, isTestMode, isHomepage]);

  // Don't render until mounted on client
  if (!mounted || !isTestMode || !isHomepage) return null;

  return (
    <>
      {/* Popup Modal - only on homepage */}
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
    </>
  );
}
