export default function ValueCards() {
  const cards = [
    {
      emoji: '⚠️',
      title: 'Warnings',
      description: 'Flag scams and suspicious behavior.',
    },
    {
      emoji: '⭐',
      title: 'Reviews',
      description: 'See what people experienced on this exact page.',
    },
    {
      emoji: '💬',
      title: 'Conversations',
      description: 'Ask questions and share receipts.',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#070823]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-4">What you get</h2>
        <p className="text-lg text-gray-400 text-center mb-12">Instant context when you need it most</p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card) => (
            <div key={card.title} className="bg-[#12141f] border border-gray-800 rounded-xl p-8 hover:border-gray-700 transition-colors">
              <div className="text-4xl mb-4">{card.emoji}</div>
              <h3 className="text-xl font-bold text-white mb-2">{card.title}</h3>
              <p className="text-gray-400">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
