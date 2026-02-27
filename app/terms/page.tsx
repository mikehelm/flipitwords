export default function TermsPage() {
  return (
    <div className="min-h-screen bg-black">
      <section className="bg-gradient-to-br from-gray-900 to-black py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white mb-4">Terms and Conditions</h1>
          <p className="text-gray-400 mb-12">Finalized October 29, 2025 - Flipit Global Limited - Jurisdiction: Hong Kong SAR</p>

          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-300">
                By accessing and using Flipit Global Limited&apos;s website, browser extension, and services (collectively, the &quot;Services&quot;), you accept and agree to be bound by the terms and conditions of this agreement. If you do not agree to abide by the above, please do not use our Services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Description of Service</h2>
              <p className="text-gray-300">
                Flipit provides a platform that allows users to comment on and interact with web pages through our browser extension and related services. Our Services include community features, token-based rewards system, and node operation capabilities.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. User Accounts</h2>
              <h3 className="text-xl font-semibold text-white mb-2">Registration</h3>
              <p className="text-gray-300 mb-4">
                To access certain features of our Services, you must register for an account. You agree to provide accurate, current, and complete information during registration and to update such information to keep it accurate, current, and complete.
              </p>

              <h3 className="text-xl font-semibold text-white mb-2">Account Security</h3>
              <p className="text-gray-300 mb-4">
                You are responsible for safeguarding the password that you use to access the Services and for any activities or actions under your password. Flipit cannot and will not be liable for any loss or damage arising from your failure to comply with this security obligation.
              </p>

              <h3 className="text-xl font-semibold text-white mb-2">Account Termination</h3>
              <p className="text-gray-300">
                You agree that Flipit may, at its sole discretion, suspend or terminate your account with or without prior notice or liability for any reason, including if you breach the Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. User Conduct</h2>
              <p className="text-gray-300 mb-4">You agree not to use the Services to:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Upload, post, or otherwise transmit any content that is unlawful, harmful, threatening, abusive, harassing, defamatory, vulgar, obscene, or otherwise objectionable.</li>
                <li>Impersonate any person or entity or falsely state or otherwise misrepresent your affiliation with a person or entity.</li>
                <li>Upload, post, or otherwise transmit any content that infringes any patent, trademark, trade secret, copyright or other proprietary rights of any party.</li>
                <li>Interfere with or disrupt the Services or servers or networks connected to the Services.</li>
                <li>Violate any applicable local, state, national, or international law.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Intellectual Property Rights</h2>
              <p className="text-gray-300">
                The Services and its original content, features, and functionality are and will remain the exclusive property of Flipit Global Limited and its licensors. The Services are protected by copyright, trademark, and other laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. $FLIPS Token</h2>
              <h3 className="text-xl font-semibold text-white mb-2">Utility Token</h3>
              <p className="text-gray-300 mb-4">
                $FLIPS is a utility token designed for use within the Flipit ecosystem. It is not a financial instrument or investment. Holding $FLIPS does not entitle users to profits, equity, or future returns.
              </p>

              <h3 className="text-xl font-semibold text-white mb-2">No Investment Advice</h3>
              <p className="text-gray-300 mb-4">
                Nothing in these Terms or any other materials provided by Flipit constitutes investment advice, financial advice, trading advice, or any other type of advice.
              </p>

              <h3 className="text-xl font-semibold text-white mb-2">No Guarantees</h3>
              <p className="text-gray-300">
                Flipit Global Limited makes no guarantees about the value of the token or its future performance.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">7. Limitation of Liability</h2>
              <p className="text-gray-300">
                In no event shall Flipit Global Limited, its directors, employees, partners, agents, suppliers, or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">8. Governing Law</h2>
              <p className="text-gray-300">
                These Terms shall be interpreted and governed by the laws of the Hong Kong Special Administrative Region without regard to its conflict of law provisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">9. Contact</h2>
              <p className="text-gray-300">
                General Support: <a href="mailto:info@flipit.com" className="text-flipit-orange hover:underline">info@flipit.com</a><br />
                Legal Inquiries: <a href="mailto:legal@flipit.com" className="text-flipit-orange hover:underline">legal@flipit.com</a>
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
