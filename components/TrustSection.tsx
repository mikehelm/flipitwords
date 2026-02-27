export default function TrustSection() {
  const points = [
    'Reviews exist independently of the sites they reference.',
    'Site owners can claim pages to verify and add context, but can\'t remove reviews.',
    'Credibility and moderation reduce spam.',
  ];

  return (
    <section className="py-16 sm:py-24 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">Independent by design</h2>
        <p className="text-lg text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Built so the back layer can&apos;t be controlled by the page owner.
        </p>
        
        <div className="max-w-3xl mx-auto space-y-6">
          {points.map((point, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="w-8 h-8 bg-flipit-orange rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white font-bold">✓</span>
              </div>
              <p className="text-lg text-gray-300">{point}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
