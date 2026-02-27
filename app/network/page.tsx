export default function NetworkPage() {
  const nodeBenefits = [
    {
      title: 'Earn rewards',
      description: 'Node operators earn $FLIPS for contributing to network security and data availability.',
    },
    {
      title: 'Support independence',
      description: 'Help maintain a decentralized infrastructure that no single entity controls.',
    },
    {
      title: 'Early access',
      description: 'Node operators get early access to new features and governance participation.',
    },
  ];

  const tokenUtility = [
    'Stake for node operation',
    'Governance voting rights',
    'Access to premium features',
    'Reward distribution',
  ];

  return (
    <div className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Flipit Network
          </h1>
          <p className="text-xl text-gray-600">
            Decentralized infrastructure for independent reviews.
          </p>
        </div>

        {/* Node Operator Benefits */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {nodeBenefits.map((benefit, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8">
              <div className="w-12 h-12 bg-flipit-orange text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                {index + 1}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* $FLIPS Token */}
        <div className="bg-gray-900 text-white rounded-2xl p-8 sm:p-12 mb-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">
              $FLIPS Token Utility
            </h2>
            <p className="text-gray-300 mb-8">
              The $FLIPS token powers the Flipit ecosystem.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 text-left max-w-md mx-auto">
              {tokenUtility.map((utility, index) => (
                <div key={index} className="flex items-center gap-3">
                  <span className="text-flipit-orange font-bold">◆</span>
                  <span className="text-gray-300">{utility}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Links */}
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Read the whitepaper
            </h3>
            <a
              href="https://node.flipit.com/whitepaper"
              target="_blank"
              rel="noopener noreferrer"
              className="text-flipit-orange hover:underline font-medium"
            >
              https://node.flipit.com/whitepaper →
            </a>
          </div>

          <div className="pt-8">
            <a
              href="https://get.flipit.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-flipit-orange text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-orange-600 transition-colors"
            >
              Buy a Node
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
