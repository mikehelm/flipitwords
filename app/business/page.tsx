export default function BusinessPage() {
  const benefits = [
    {
      title: 'Verify ownership',
      description: 'Prove you represent the official entity behind the page.',
    },
    {
      title: 'Add context and updates',
      description: 'Share official information, policy changes, or responses to common concerns.',
    },
    {
      title: 'Respond publicly',
      description: 'Address feedback directly where customers are reading it.',
    },
  ];

  const faqs = [
    {
      question: 'Can I remove negative reviews?',
      answer: 'No. Reviews exist independently and cannot be removed by page owners. This maintains trust in the platform.',
    },
    {
      question: 'How do I claim my page?',
      answer: 'Contact us at business@flipit.com with verification of your affiliation with the domain or entity.',
    },
    {
      question: 'What can I post as an official representative?',
      answer: 'You can add context, updates, and respond to reviews. All official responses are marked with a verified badge.',
    },
    {
      question: 'Does claiming a page cost anything?',
      answer: 'Basic page claiming is free. Premium features for analytics and priority support may be available in the future.',
    },
  ];

  return (
    <div className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Be present on the back of your pages.
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Verify your page and respond with context where customers decide.
          </p>
          <a
            href="mailto:business@flipit.com"
            className="inline-block bg-flipit-orange text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-orange-600 transition-colors"
          >
            Claim your page
          </a>
        </div>

        {/* Benefits */}
        <div className="bg-gray-50 rounded-2xl p-8 sm:p-12 mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8">
            What participating means
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-flipit-orange text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {index + 1}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Hardline */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="bg-red-50 border-2 border-red-200 rounded-xl p-8 text-center">
            <h3 className="text-xl font-bold text-red-700 mb-2">
              ⚠️ What you CANNOT do
            </h3>
            <p className="text-red-600 font-medium text-lg">
              You cannot remove user reviews.
            </p>
            <p className="text-red-500 text-sm mt-2">
              This is fundamental to maintaining trust in the platform.
            </p>
          </div>
        </div>

        {/* Why early participation */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Why participate early?
          </h2>
          <p className="text-gray-600">
            Being an early participant shows customers you care about transparency. 
            Address concerns proactively and build trust before issues escalate.
          </p>
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
            FAQ for businesses
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
