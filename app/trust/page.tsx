export default function TrustPage() {
  const principles = [
    'Users come first.',
    'Businesses can respond, not censor.',
    'Quality beats noise.',
  ];

  const moderation = [
    'Report spam, harassment, and illegal content',
    'Evidence-based dispute resolution',
    'Removals only for policy violations',
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 to-black py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">Independent by design</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Built so the back layer can&apos;t be controlled by the page owner.
          </p>
        </div>
      </section>

      {/* Core principles */}
      <section className="py-16 sm:py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Core principles</h2>
          <div className="max-w-2xl mx-auto space-y-6">
            {principles.map((principle, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-8 h-8 bg-flipit-orange rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">✓</span>
                </div>
                <p className="text-gray-300 text-lg">{principle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Moderation */}
      <section className="py-16 sm:py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Moderation and reporting</h2>
          <div className="max-w-2xl mx-auto space-y-4">
            {moderation.map((item, index) => (
              <div key={index} className="bg-gray-900 border border-gray-700 rounded-lg p-4">
                <p className="text-gray-300">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy */}
      <section className="py-16 sm:py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Privacy</h2>
          <div className="max-w-2xl mx-auto text-gray-300 space-y-4">
            <p>• Minimal data collection</p>
            <p>• No selling of personal information</p>
            <p>• Transparent permissions</p>
          </div>
          <a href="/privacy" className="inline-block mt-8 text-flipit-orange hover:underline">
            Read full Privacy Policy →
          </a>
        </div>
      </section>

      {/* Business safety */}
      <section className="py-16 sm:py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">For businesses</h2>
          <div className="max-w-2xl mx-auto text-gray-300 space-y-4">
            <p>• Claim pages to verify identity and add context</p>
            <p>• Businesses cannot remove reviews</p>
          </div>
        </div>
      </section>
    </div>
  );
}
