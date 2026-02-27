export default function HowItWorks() {
  const steps = [
    { number: '1', title: 'Install Flipit', description: 'Add the free extension to Chrome in one click.' },
    { number: '2', title: 'Flip the page', description: 'Click the Flipit icon on any webpage.' },
    { number: '3', title: 'Read and share', description: 'See reviews, warnings, and join the conversation.' },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#0b0d15]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-4">How it works</h2>
        <p className="text-lg text-gray-400 text-center mb-4">Three simple steps to better decisions</p>
        <p className="text-flipit-orange font-semibold text-center mb-12">No separate website. No search required.</p>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="w-16 h-16 bg-flipit-orange text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg">
                {step.number}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
