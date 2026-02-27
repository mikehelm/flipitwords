export default function HowItWorksPage() {
  const steps = [
    { number: '1', title: 'Install Flipit', description: 'Add the free extension to Chrome in one click.' },
    { number: '2', title: 'Flip the page', description: 'Click the Flipit icon on any webpage.' },
    { number: '3', title: 'Read and share', description: 'See reviews, warnings, and join the conversation.' },
  ];

  const features = [
    { title: 'Warnings', description: 'Flags for scams, suspicious behavior, and common issues' },
    { title: 'Reviews', description: 'Real experiences from people who visited this page before you' },
    { title: 'Conversations', description: 'Ask questions, share receipts, and help others' },
    { title: 'Official context', description: 'Verified business responses and clarifications' },
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 to-black py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">Reviews where decisions happen</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Flip any page to see what people experienced.
          </p>
          <a
            href="https://chromewebstore.google.com/detail/flipit/aeclfjapikjpkdajbaolonnceecpghce"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-flipit-orange text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-orange-600 transition-colors"
          >
            Add to Chrome — It&apos;s free
          </a>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 sm:py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Three simple steps</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {steps.map((step) => (
              <div key={step.number} className="text-center">
                <div className="w-16 h-16 bg-flipit-orange text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            ))}
          </div>
          <p className="text-flipit-orange font-semibold text-center mt-12">No separate website. No search required.</p>
        </div>
      </section>

      {/* What you'll see */}
      <section className="py-16 sm:py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">What you&apos;ll see</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <div key={feature.title} className="bg-gray-900 border border-gray-700 rounded-xl p-6">
                <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Independence */}
      <section className="py-16 sm:py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Independent by design</h2>
          <div className="max-w-2xl mx-auto space-y-4 text-gray-300">
            <p>• Reviews exist independently of the sites they reference.</p>
            <p>• Owners can claim pages to verify and respond, but can&apos;t remove reviews.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
