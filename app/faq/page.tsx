export default function FAQPage() {
  const generalFaqs = [
    {
      question: 'What is Flipit?',
      answer: 'Flipit is a browser extension that shows independent reviews, warnings, and discussions about any webpage you visit. Think of it as a "back layer" of the internet where people share their real experiences.',
    },
    {
      question: 'Does it work on any website?',
      answer: 'Yes! Flipit works on virtually any webpage. Just click the Flipit icon to see what people are saying about that specific page.',
    },
    {
      question: 'Is Flipit independent?',
      answer: 'Yes. Reviews exist independently of the sites they reference. Page owners cannot remove or alter user reviews, ensuring authentic feedback.',
    },
    {
      question: 'Can a website delete reviews?',
      answer: 'No. Website owners can claim their page to add official context and respond to reviews, but they cannot delete reviews. This is fundamental to maintaining trust.',
    },
    {
      question: 'How do you handle spam?',
      answer: 'We use a combination of reputation systems, community reporting, and moderation to reduce spam. Users with established positive history have more weight, and repeated violations result in restrictions.',
    },
  ];

  const businessFaqs = [
    {
      question: 'How can my business participate?',
      answer: 'You can claim your page by verifying ownership. This allows you to add official context, updates, and respond to customer feedback.',
    },
    {
      question: 'Can I remove negative reviews about my business?',
      answer: 'No. You cannot remove user reviews. You can only add context and respond. This maintains the integrity of the platform.',
    },
    {
      question: 'How do I claim my page?',
      answer: 'Contact us at business@flipit.com with verification of your affiliation with the domain or entity.',
    },
  ];

  return (
    <div className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h1>
        </div>

        {/* General FAQs */}
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <span className="text-flipit-orange">◆</span> General
          </h2>
          <div className="space-y-4">
            {generalFaqs.map((faq, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Business FAQs */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <span className="text-flipit-orange">◆</span> For Businesses
          </h2>
          <div className="space-y-4">
            {businessFaqs.map((faq, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Still have questions */}
        <div className="max-w-2xl mx-auto text-center mt-16">
          <p className="text-gray-600 mb-4">
            Still have questions?
          </p>
          <a
            href="mailto:info@flipit.com"
            className="text-flipit-orange hover:underline font-medium"
          >
            Contact us at info@flipit.com
          </a>
        </div>
      </div>
    </div>
  );
}
