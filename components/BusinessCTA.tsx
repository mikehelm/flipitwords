import Link from 'next/link';

export default function BusinessCTA() {
  const benefits = [
    'Verify ownership of your page',
    'Add context and updates for visitors',
    'Respond publicly to feedback',
  ];

  return (
    <section className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            For businesses: participate early
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Be part of the conversation where your customers make decisions.
          </p>

          <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
            <h3 className="font-bold text-gray-900 mb-4">What participating means:</h3>
            <ul className="space-y-3 text-left max-w-md mx-auto">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="text-flipit-orange">✓</span>
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-700 font-medium">
                ⚠️ You can&apos;t remove user reviews.
              </p>
            </div>
          </div>

          <Link
            href="/business"
            className="inline-block bg-flipit-orange text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-orange-600 transition-colors"
          >
            Learn more for businesses
          </Link>
        </div>
      </div>
    </section>
  );
}
