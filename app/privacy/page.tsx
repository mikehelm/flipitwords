export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-black">
      <section className="bg-gradient-to-br from-gray-900 to-black py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-gray-400 mb-12">Finalized October 29, 2025 - Flipit Global Limited - Jurisdiction: Hong Kong SAR</p>

          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
              <p className="text-gray-300">
                Flipit Global Limited (&quot;Flipit,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website, browser extension, and services (collectively, the &quot;Services&quot;).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Information We Collect</h2>
              <h3 className="text-xl font-semibold text-white mb-2">Personal Information</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                <li>Account Information: Name, email address, username, and password when you create an account.</li>
                <li>Profile Information: Optional profile details you choose to provide.</li>
                <li>Communication Data: Messages, comments, and other content you submit through our Services.</li>
                <li>Payment Information: Payment details processed by third-party payment processors.</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-2">Usage Data</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                <li>Device Information: IP address, browser type, operating system, device identifiers.</li>
                <li>Usage Information: Pages visited, features used, time spent, referral sources.</li>
                <li>Cookies and Similar Technologies: We use cookies and similar tracking technologies.</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-2">Web3 and Token Data</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Wallet Addresses: Public blockchain wallet addresses you connect.</li>
                <li>Transaction Data: On-chain transaction records related to $FLIPS or other tokens.</li>
                <li>Node Operation Data: Information related to Flipit Node ownership and operation.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Information</h2>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>To provide, maintain, and improve our Services.</li>
                <li>To process transactions and manage your account.</li>
                <li>To communicate with you, including sending updates, notifications, and support messages.</li>
                <li>To detect, prevent, and address fraud, security issues, and technical problems.</li>
                <li>To comply with legal obligations and enforce our Terms of Use.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Data Sharing</h2>
              <p className="text-gray-300 mb-4">We do not sell your personal information. We may share your information in the following circumstances:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Service Providers: Third-party vendors who perform services on our behalf.</li>
                <li>Business Transfers: In connection with a merger, acquisition, or sale of assets.</li>
                <li>Legal Requirements: When required by law, court order, or to protect our rights.</li>
                <li>With Your Consent: When you explicitly agree to share your information.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Your Rights</h2>
              <p className="text-gray-300 mb-4">Depending on your location, you may have the following rights:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Access: Request a copy of the personal data we hold about you.</li>
                <li>Correction: Request correction of inaccurate or incomplete data.</li>
                <li>Deletion: Request deletion of your personal data.</li>
                <li>Objection: Object to processing of your data for certain purposes.</li>
                <li>Portability: Request transfer of your data to another service.</li>
              </ul>
              <p className="text-gray-300 mt-4">To exercise these rights, contact us at privacy@flipit.com.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. Contact</h2>
              <p className="text-gray-300">
                General Support: <a href="mailto:info@flipit.com" className="text-flipit-orange hover:underline">info@flipit.com</a><br />
                Privacy Inquiries: <a href="mailto:privacy@flipit.com" className="text-flipit-orange hover:underline">privacy@flipit.com</a>
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
