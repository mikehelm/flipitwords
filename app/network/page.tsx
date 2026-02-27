export default function NetworkPage() {
  const nodeBenefits = [
    { title: 'Earn Rewards', description: 'Run a node, contribute to network stability, and earn $FLIPS tokens for uptime and performance.' },
    { title: 'Support Decentralization', description: 'Help maintain a resilient network that keeps conversations transparent and secure.' },
    { title: 'Participate in Governance', description: 'Have a say in Flipit\'s roadmap through community-driven voting.' },
    { title: 'Access Exclusive Features', description: 'Get early access to premium tools, content, and ecosystem updates.' },
  ];

  const tokenUtility = [
    'Highlight and elevate content',
    'Access premium content',
    'Purchase advertising space',
    'Governance participation',
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 to-black py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">Flipit Network</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Power the back of the internet. Earn rewards. Shape the future.
          </p>
          <a
            href="https://get.flipit.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-flipit-orange text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-orange-600 transition-colors"
          >
            Buy a Node
          </a>
        </div>
      </section>

      {/* Node benefits */}
      <section className="py-16 sm:py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Why run a node</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {nodeBenefits.map((benefit) => (
              <div key={benefit.title} className="bg-black border border-gray-700 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* $FLIPS Token */}
      <section className="py-16 sm:py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-4">The $FLIPS Token</h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
            Powers the Flipit platform. Enables advertising, governance, premium content, and content highlighting.
          </p>
          
          <div className="max-w-2xl mx-auto bg-gray-900 border border-gray-700 rounded-xl p-8">
            <h3 className="text-xl font-bold text-white mb-6">Token utility</h3>
            <ul className="space-y-4">
              {tokenUtility.map((utility, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="text-flipit-orange">•</span>
                  <span className="text-gray-300">{utility}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Contract */}
      <section className="py-16 sm:py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Contract Address</h2>
          <p className="text-gray-400 mb-2">Binance Smart Chain</p>
          <code className="text-sm text-flipit-orange bg-black px-4 py-2 rounded-lg inline-block">
            0xa39f841ba9e6c97d7096Ae3CF02521d5B9202B82
          </code>
        </div>
      </section>

      {/* Whitepaper */}
      <section className="py-16 sm:py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <a
            href="https://node.flipit.com/whitepaper"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-flipit-orange text-flipit-orange px-8 py-4 rounded-xl font-semibold text-lg hover:bg-flipit-orange hover:text-white transition-colors"
          >
            Read the Whitepaper
          </a>
        </div>
      </section>
    </div>
  );
}
