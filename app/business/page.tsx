export default function BusinessPage() {
  const benefits = [
    'Verify you represent the business',
    'Add official context (policies, clarifications, updates)',
    'Respond to concerns publicly',
  ];

  const examples = [
    { title: 'Official response', description: 'Share your side with links and evidence' },
    { title: 'Policy clarification', description: 'Explain returns, cancellations, security practices' },
    { title: 'Resolved issue', description: 'Show how you addressed customer concerns' },
  ];

  const faqs = [
    { q: 'Can we delete reviews?', a: 'No. Reviews cannot be removed by businesses.' },
    { q: 'Can we report illegal content?', a: 'Yes, via our reporting workflow.' },
    { q: 'How do we verify?', a: 'Domain verification and business documentation.' },
    { q: 'What if someone lies?', a: 'Dispute process with evidence review.' },
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 to-black py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">Be present on the back of your pages</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Verify your page and respond with context where customers decide.
          </p>
          <a
            href="mailto:info@flipit.com"
            className="inline-block bg-flipit-orange text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-orange-600 transition-colors"
          >
            Claim your page
          </a>
        </div>
      </section>

      {/* What participating means */}
      <section className="py-16 sm:py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">What participating means</h2>
          <div className="max-w-2xl mx-auto">
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-4">
                  <span className="text-flipit-orange text-2xl">✓</span>
                  <span className="text-gray-300 text-lg">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* What you cannot do */}
      <section className="py-16 sm:py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto bg-red-900/20 border border-red-700 rounded-xl p-8 text-center">
            <h3 className="text-xl font-bold text-red-400 mb-4">What you cannot do</h3>
            <p className="text-red-300 text-lg">You cannot remove user reviews.</p>
          </div>
        </div>
      </section>

      {/* Why participate early */}
      <section className="py-16 sm:py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Why participating early matters</h2>
          <div className="max-w-2xl mx-auto space-y-4 text-gray-300">
            <p>• When users flip your page, silence looks like guilt.</p>
            <p>• Early participation helps prevent misinformation from becoming the default narrative.</p>
            <p>• Transparent response builds trust with skeptical customers.</p>
          </div>
        </div>
      </section>

      {/* Examples */}
      <section className="py-16 sm:py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">What good looks like</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {examples.map((example) => (
              <div key={example.title} className="bg-gray-900 border border-gray-700 rounded-xl p-6">
                <h3 className="text-lg font-bold text-white mb-2">{example.title}</h3>
                <p className="text-gray-400">{example.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">FAQ for businesses</h2>
          <div className="max-w-2xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-700 pb-4">
                <h3 className="text-lg font-semibold text-white mb-2">{faq.q}</h3>
                <p className="text-gray-400">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
