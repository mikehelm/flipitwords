import Link from 'next/link';

export default function BusinessCTA() {
  const benefits = [
    'Verify ownership of your page',
    'Add context and updates for visitors',
    'Respond publicly to feedback',
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#0b0d15]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">For businesses: participate early</h2>
          <p className="text-lg text-gray-400 mb-8">
            Be part of the conversation where your customers make decisions.
          </p>
          
          <div className="bg-[#12141f] border border-gray-800 rounded-xl p-8 mb-8 text-left">
            <h3 className="font-bold text-white mb-4 text-center">What participating means:</h3>
            <ul className="space-y-3 max-w-md mx-auto">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="text-flipit-orange text-xl">✓</span>
                  <span className="text-gray-300">{benefit}</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-6 p-4 bg-red-900/20 border border-red-700/50 rounded-lg text-center">
              <p className="text-red-400 font-medium">⚠️ You can&apos;t remove user reviews.</p>
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
