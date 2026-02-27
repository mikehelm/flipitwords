export default function TrustPage() {
  const principles = [
    {
      title: 'Reviews are independent',
      description: 'Reviews exist independently of the sites they reference. Page owners cannot remove or alter them.',
    },
    {
      title: 'Ownership can be verified',
      description: 'Site owners can claim pages to add official context, but this doesn\'t give them control over reviews.',
    },
    {
      title: 'Credibility matters',
      description: 'We use reputation systems and moderation to reduce spam and improve reliability.',
    },
  ];

  const moderation = [
    'Users can report abusive or false content',
    'Our moderation team reviews flagged content',
    'Repeated violations result in account restrictions',
    'We maintain transparency about moderation actions',
  ];

  return (
    <div className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Independent by design.
          </h1>
          <p className="text-xl text-gray-600">
            Built so the back layer can&apos;t be controlled by the page owner.
          </p>
        </div>

        {/* Core Principles */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {principles.map((principle, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8">
              <div className="w-12 h-12 bg-flipit-orange text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                {index + 1}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{principle.title}</h3>
              <p className="text-gray-600">{principle.description}</p>
            </div>
          ))}
        </div>

        {/* Moderation */}
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8">
            Moderation and reporting
          </h2>
          <div className="bg-white border border-gray-200 rounded-xl p-8">
            <ul className="space-y-4">
              {moderation.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-flipit-orange font-bold">✓</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Privacy */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8">
            Privacy summary
          </h2>
          <div className="bg-gray-50 rounded-xl p-8">
            <ul className="space-y-4 text-gray-600">
              <li>• We collect minimal data necessary for the service</li>
              <li>• We do not sell your personal information</li>
              <li>• Page viewing data is used to show relevant reviews only</li>
              <li>• You can request deletion of your data at any time</li>
              <li>• Full details in our <a href="/privacy" className="text-flipit-orange hover:underline">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
