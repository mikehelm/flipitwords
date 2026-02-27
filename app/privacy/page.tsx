export default function PrivacyPage() {
  return (
    <div className="py-16 sm:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-500 text-sm mb-8">
            Finalized October 29, 2025 - Flipit Global Limited - Jurisdiction: Hong Kong SAR
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
            <p className="text-gray-600">
              Flipit Global Limited (&quot;Flipit,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website, browser extension, and services (collectively, the &quot;Services&quot;).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li><strong>Account Information:</strong> Name, email, username</li>
              <li><strong>Usage Data:</strong> Pages visited, features used</li>
              <li><strong>Web3 Data:</strong> Wallet addresses, transaction data</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>To provide and improve Services</li>
              <li>To process transactions</li>
              <li>To communicate with you</li>
              <li>To detect fraud</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Sharing</h2>
            <p className="text-gray-600">
              We do not sell your personal information. We may share with service providers, for legal requirements, or with consent.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Your Rights</h2>
            <p className="text-gray-600">
              Access, Correction, Deletion, Portability, Withdraw Consent
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Contact</h2>
            <ul className="text-gray-600 space-y-2">
              <li>General: <a href="mailto:info@flipit.com" className="text-flipit-orange hover:underline">info@flipit.com</a></li>
              <li>Privacy: <a href="mailto:privacy@flipit.com" className="text-flipit-orange hover:underline">privacy@flipit.com</a></li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
