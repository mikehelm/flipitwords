import Link from 'next/link';

export default function HowItWorksPage() {
  const steps = [
    {
      number: '1',
      title: 'Install Flipit',
      description: 'Add the free extension to Chrome in one click. No account required to start reading.',
    },
    {
      number: '2',
      title: 'Flip the page',
      description: 'Click the Flipit icon whenever you want context on the page you\'re viewing.',
    },
    {
      number: '3',
      title: 'Read and share',
      description: 'See reviews, warnings, and join the conversation. Share your own experiences.',
    },
  ];

  const features = [
    { icon: '⚠️', title: 'Warnings', description: 'Scam alerts, suspicious behavior flags, and risk indicators.' },
    { icon: '⭐', title: 'Reviews', description: 'Real experiences from people who\'ve been there before.' },
    { icon: '💬', title: 'Conversations', description: 'Ask questions, share receipts, and help others.' },
    { icon: '✓', title: 'Official Context', description: 'Verified responses from page owners when available.' },
  ];

  return (
    <div className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Reviews where decisions happen.
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Flip any page to see what people experienced.
          </p>
          <a
            href="https://chromewebstore.google.com/detail/flipit/aeclfjapikjpkdajbaolonnceecpghce"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-flipit-orange text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-orange-600 transition-colors"
          >
            Add to Chrome
          </a>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-24">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-20 h-20 bg-flipit-orange text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6">
                {step.number}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>

        {/* What you'll see */}
        <div className="bg-gray-50 rounded-2xl p-8 sm:p-12 mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8">
            What you&apos;ll see
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6">
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Independence Callout */}
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Independent by design
          </h2>
          <p className="text-gray-600 mb-4">
            Reviews exist independently of the sites they reference. Site owners can claim pages 
            to add context, but they cannot remove user reviews.
          </p>
          <p className="text-flipit-orange font-semibold">
            No separate website. No search required.
          </p>
        </div>
      </div>
    </div>
  );
}
