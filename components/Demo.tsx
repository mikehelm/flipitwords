'use client';

import { useState } from 'react';

type Scenario = 'shopping' | 'legit' | 'hiring' | 'news';

interface ScenarioData {
  title: string;
  question: string;
  warning?: string;
  warningType?: 'danger' | 'caution' | 'info';
  review?: {
    author: string;
    text: string;
    rating: number;
  };
  conversation?: {
    author: string;
    text: string;
    time: string;
  };
  officialResponse?: {
    company: string;
    text: string;
    verified: boolean;
  };
}

const scenarios: Record<Scenario, ScenarioData> = {
  shopping: {
    title: 'Shopping',
    question: 'Is this store legit?',
    warning: '⚠️ 23 users reported delayed shipping',
    warningType: 'caution',
    review: {
      author: 'Sarah M.',
      text: 'Ordered 2 weeks ago, still waiting. Customer support not responding.',
      rating: 2,
    },
    conversation: {
      author: 'Mike T.',
      text: 'Same here. Filed a dispute with my bank.',
      time: '2 hours ago',
    },
    officialResponse: {
      company: 'Store Official',
      text: 'We apologize for the delay. Contact support@store.com for priority handling.',
      verified: true,
    },
  },
  legit: {
    title: 'Is this legit?',
    question: 'Is this a scam?',
    warning: '🚨 High risk: Domain registered 3 days ago',
    warningType: 'danger',
    review: {
      author: 'John D.',
      text: 'They asked for crypto payment only. Huge red flag.',
      rating: 1,
    },
    conversation: {
      author: 'Lisa K.',
      text: 'Same template as two other scam sites I reported.',
      time: '1 hour ago',
    },
  },
  hiring: {
    title: 'Hiring',
    question: 'Should I apply here?',
    warning: '📋 15 reviews mention unpaid overtime',
    warningType: 'info',
    review: {
      author: 'Former Employee',
      text: 'Great culture on paper, but expect 60+ hour weeks regularly.',
      rating: 3,
    },
    conversation: {
      author: 'Current Staff',
      text: 'Benefits are good if you can handle the workload.',
      time: '3 hours ago',
    },
    officialResponse: {
      company: 'HR Team',
      text: 'We are actively working on work-life balance initiatives.',
      verified: true,
    },
  },
  news: {
    title: 'News',
    question: 'Is this article biased?',
    warning: '📊 Leans conservative on media bias charts',
    warningType: 'info',
    review: {
      author: 'Media Watcher',
      text: 'Good for one perspective, but cross-reference with other sources.',
      rating: 4,
    },
    conversation: {
      author: 'Fact Checker',
      text: 'The statistics cited are accurate but cherry-picked.',
      time: '30 min ago',
    },
  },
};

export default function Demo() {
  const [activeScenario, setActiveScenario] = useState<Scenario>('shopping');
  const data = scenarios[activeScenario];

  return (
    <section id="demo" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-4">
          See it in action
        </h2>
        <p className="text-lg text-gray-600 text-center mb-12">
          Click a scenario to see what Flipit reveals
        </p>

        {/* Scenario Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {(Object.keys(scenarios) as Scenario[]).map((key) => (
            <button
              key={key}
              onClick={() => setActiveScenario(key)}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                activeScenario === key
                  ? 'bg-flipit-orange text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {scenarios[key].title}
            </button>
          ))}
        </div>

        {/* Demo Area */}
        <div className="relative max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Mock Webpage */}
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl aspect-[4/3] flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-30">
                <div className="absolute top-4 left-4 right-4 h-8 bg-gray-300 rounded"></div>
                <div className="absolute top-16 left-4 right-4 h-4 bg-gray-300 rounded w-3/4"></div>
                <div className="absolute top-24 left-4 right-4 h-4 bg-gray-300 rounded w-1/2"></div>
                <div className="absolute top-32 left-4 right-4 space-y-2">
                  <div className="h-3 bg-gray-300 rounded"></div>
                  <div className="h-3 bg-gray-300 rounded w-5/6"></div>
                  <div className="h-3 bg-gray-300 rounded w-4/6"></div>
                </div>
              </div>
              <div className="text-center z-10">
                <p className="text-gray-500 font-medium mb-2">{data.question}</p>
                <p className="text-gray-400 text-sm">Example webpage content</p>
              </div>
            </div>

            {/* Flipit Overlay */}
            <div className="bg-white border border-gray-200 rounded-xl shadow-xl p-6 space-y-4">
              <div className="flex items-center gap-2 border-b pb-4">
                <span className="text-flipit-orange font-bold">Flipit</span>
                <span className="text-gray-400 text-sm">Overlay</span>
              </div>

              {/* Warning */}
              {data.warning && (
                <div
                  className={`p-4 rounded-lg ${
                    data.warningType === 'danger'
                      ? 'bg-red-50 border border-red-200'
                      : data.warningType === 'caution'
                      ? 'bg-yellow-50 border border-yellow-200'
                      : 'bg-blue-50 border border-blue-200'
                  }`}
                >
                  <p className="font-medium text-sm">{data.warning}</p>
                </div>
              )}

              {/* Review */}
              {data.review && (
                <div className="border border-gray-100 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-sm font-medium">
                      {data.review.author[0]}
                    </div>
                    <span className="font-medium text-sm">{data.review.author}</span>
                    <div className="ml-auto flex">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className={i < data.review!.rating ? 'text-yellow-400' : 'text-gray-300'}>
                          ★
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">{data.review.text}</p>
                </div>
              )}

              {/* Conversation */}
              {data.conversation && (
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-medium text-sm">{data.conversation.author}</span>
                    <span className="text-gray-400 text-xs">{data.conversation.time}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{data.conversation.text}</p>
                </div>
              )}

              {/* Official Response */}
              {data.officialResponse && (
                <div className="border-2 border-flipit-orange/30 rounded-lg p-4 bg-flipit-orange/5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-medium text-sm">{data.officialResponse.company}</span>
                    {data.officialResponse.verified && (
                      <span className="bg-flipit-orange text-white text-xs px-2 py-0.5 rounded-full">
                        ✓ Verified
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600 text-sm">{data.officialResponse.text}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
