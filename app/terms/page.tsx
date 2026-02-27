export default function TermsPage() {
  return (
    <div className="py-16 sm:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms and Conditions</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-500 text-sm mb-8">
            Finalized October 29, 2025 - Flipit Global Limited - Jurisdiction: Hong Kong SAR
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance</h2>
            <p className="text-gray-600">
              By using Flipit Services, you accept these terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Service Description</h2>
            <p className="text-gray-600">
              Flipit provides a platform for commenting on web pages via browser extension.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Accounts</h2>
            <p className="text-gray-600">
              Register with accurate info. You are responsible for password security.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. User Conduct</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Do not post unlawful, harmful, or infringing content.</li>
              <li>Do not impersonate others.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. $FLIPS Token</h2>
            <p className="text-gray-600">
              Utility token only. Not financial advice. No guarantees on value.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Termination</h2>
            <p className="text-gray-600">
              We may suspend accounts for violations.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Contact</h2>
            <ul className="text-gray-600 space-y-2">
              <li>General: <a href="mailto:info@flipit.com" className="text-flipit-orange hover:underline">info@flipit.com</a></li>
              <li>Legal: <a href="mailto:legal@flipit.com" className="text-flipit-orange hover:underline">legal@flipit.com</a></li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
