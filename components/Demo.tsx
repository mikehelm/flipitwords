'use client';

import { useState } from 'react';

const scenarios = [
  { id: 'shopping', label: 'Shopping' },
  { id: 'legit', label: 'Is this legit?' },
  { id: 'hiring', label: 'Hiring' },
  { id: 'news', label: 'News' },
];

export default function Demo() {
  const [activeScenario, setActiveScenario] = useState('shopping');

  return (
    <section id="demo" className="py-16 sm:py-24 bg-[#0b0d15]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-4">See it in action</h2>
        <p className="text-lg text-gray-400 text-center mb-12">Click a scenario to see what Flipit reveals</p>
        
        {/* Scenario buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {scenarios.map((scenario) => (
            <button
              key={scenario.id}
              onClick={() => setActiveScenario(scenario.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                activeScenario === scenario.id
                  ? 'bg-flipit-orange text-white shadow-lg'
                  : 'bg-[#1a1d2e] text-gray-300 hover:bg-[#252840]'
              }`}
            >
              {scenario.label}
            </button>
          ))}
        </div>

        {/* Demo mockup */}
        <div className="relative max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Mock webpage */}
            <div className="bg-gradient-to-br from-[#1a1d2e] to-[#0f1120] rounded-xl aspect-[4/3] flex items-center justify-center relative overflow-hidden border border-gray-800">
              <div className="absolute inset-0 opacity-30">
                <div className="absolute top-4 left-4 right-4 h-8 bg-gray-700 rounded"></div>
                <div className="absolute top-16 left-4 right-4 h-4 bg-gray-700 rounded w-3/4"></div>
                <div className="absolute top-24 left-4 right-4 h-4 bg-gray-700 rounded w-1/2"></div>
                <div className="absolute top-32 left-4 right-4 space-y-2">
                  <div className="h-3 bg-gray-700 rounded"></div>
                  <div className="h-3 bg-gray-700 rounded w-5/6"></div>
                  <div className="h-3 bg-gray-700 rounded w-4/6"></div>
                </div>
              </div>
              <div className="text-center z-10">
                <p className="text-gray-400 font-medium mb-2">Is this store legit?</p>
                <p className="text-gray-500 text-sm">Example webpage content</p>
              </div>
            </div>

            {/* Flipit overlay */}
            <div className="bg-[#12141f] border border-gray-800 rounded-xl shadow-xl p-6 space-y-4">
              <div className="flex items-center gap-2 border-b border-gray-800 pb-4">
                <span className="text-flipit-orange font-bold">Flipit</span>
                <span className="text-gray-500 text-sm">Overlay</span>
              </div>

              {/* Warning */}
              <div className="p-4 rounded-lg bg-yellow-900/20 border border-yellow-700/50">
                <p className="font-medium text-sm text-yellow-300">⚠️ 23 users reported delayed shipping</p>
              </div>

              {/* Review */}
              <div className="border border-gray-800 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center text-sm font-medium text-gray-300">S</div>
                  <span className="font-medium text-sm text-gray-200">Sarah M.</span>
                  <div className="ml-auto flex">
                    <span className="text-yellow-400">★</span>
                    <span className="text-yellow-400">★</span>
                    <span className="text-gray-600">★</span>
                    <span className="text-gray-600">★</span>
                    <span className="text-gray-600">★</span>
                  </div>
                </div>
                <p className="text-gray-400 text-sm">Ordered 2 weeks ago, still waiting. Customer support not responding.</p>
              </div>

              {/* Conversation */}
              <div className="bg-[#1a1d2e] rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-medium text-sm text-gray-200">Mike T.</span>
                  <span className="text-gray-500 text-xs">2 hours ago</span>
                </div>
                <p className="text-gray-400 text-sm">Same here. Filed a dispute with my bank.</p>
              </div>

              {/* Official response */}
              <div className="border-2 border-flipit-orange/30 rounded-lg p-4 bg-flipit-orange/5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-medium text-sm text-gray-200">Store Official</span>
                  <span className="bg-flipit-orange text-white text-xs px-2 py-0.5 rounded-full">✓ Verified</span>
                </div>
                <p className="text-gray-300 text-sm">We apologize for the delay. Contact support@store.com for priority handling.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
