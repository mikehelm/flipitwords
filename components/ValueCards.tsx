export default function ValueCards() {
  const cards = [
    {
      icon: '⚠️',
      title: 'Warnings',
      description: 'Flag scams and suspicious behavior.',
    },
    {
      icon: '⭐',
      title: 'Reviews',
      description: "See what people experienced on this exact page.",
    },
    {
      icon: '💬',
      title: 'Conversations',
      description: 'Ask questions and share receipts.',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-4">
          What you get
        </h2>
        <p className="text-lg text-gray-600 text-center mb-12">
          Instant context when you need it most
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-4xl mb-4">{card.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{card.title}</h3>
              <p className="text-gray-600">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
