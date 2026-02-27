export default function FAQPage() {
  const userFaqs = [
    { q: 'What is Flipit?', a: 'A Chrome extension that adds an independent back layer of reviews, warnings, and conversations to any webpage.' },
    { q: 'Does it work on any website?', a: 'Yes, designed to show context on top of any webpage.' },
    { q: 'Do I need a separate account or website?', a: 'No separate website required. No search required.' },
    { q: 'Is it independent from the website I\'m on?', a: 'Yes, reviews exist independently of the sites they reference.' },
    { q: 'Can a website delete reviews?', a: 'No. Owners can claim pages to verify and add context, but cannot remove reviews.' },
    { q: 'How do you handle spam?', a: 'Credibility scoring and bot detection/moderation tools reduce spam.' },
  ];

  const businessFaqs = [
    { q: 'How do we participate?', a: 'Claim your page, verify identity, and respond with context.' },
    { q: 'Can we remove reviews?', a: 'No. Reviews cannot be removed by businesses.' },
    { q: 'What if a review is false or illegal?', a: 'Use reporting and dispute workflows.' },
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 to-black py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">Frequently Asked Questions</h1>
        </div>
      </section>

      {/* User FAQs */}
      <section className="py-16 sm:py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-8">For Users</h2>
          <div className="max-w-2xl mx-auto space-y-6">
            {userFaqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-700 pb-4">
                <h3 className="text-lg font-semibold text-white mb-2">{faq.q}</h3>
                <p className="text-gray-400">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business FAQs */}
      <section className="py-16 sm:py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-8">For Businesses</h2>
          <div className="max-w-2xl mx-auto space-y-6">
            {businessFaqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-700 pb-4">
                <h3 className="text-lg font-semibold text-white mb-2">{faq.q}</h3>
                <p className="text-gray-400">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400 mb-6">Still have questions?</p>
          <a
            href="mailto:info@flipit.com"
            className="text-flipit-orange hover:underline text-lg"
          >
            Contact us →
          </a>
        </div>
      </section>
    </div>
  );
}
