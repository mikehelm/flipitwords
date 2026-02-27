import Link from 'next/link';

export default function Footer() {
  const navLinks = [
    { href: '/how-it-works', label: 'How it works' },
    { href: '/business', label: 'For Business' },
    { href: '/trust', label: 'Trust & Safety' },
    { href: '/network', label: 'Network' },
    { href: '/faq', label: 'FAQ' },
  ];

  const legalLinks = [
    { href: '/privacy', label: 'Privacy' },
    { href: '/terms', label: 'Terms' },
  ];

  const socialLinks = [
    { href: 'https://discord.com/invite/StzFTnXbmX', label: 'Discord', icon: '💬' },
    { href: 'https://twitter.com/flipit', label: 'X', icon: '𝕏' },
    { href: 'https://www.linkedin.com/company/flipit.com', label: 'LinkedIn', icon: 'in' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <span className="text-2xl font-bold text-flipit-orange">Flipit</span>
            <p className="mt-4 text-gray-400 max-w-md">
              Independent reviews and warnings, on the page you&apos;re viewing.
            </p>
            <p className="mt-2 text-gray-400">
              <a href="mailto:info@flipit.com" className="hover:text-white transition-colors">
                info@flipit.com
              </a>
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold mb-4">Links</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a href="mailto:info@flipit.com" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Social */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            
            <h3 className="font-semibold mt-6 mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors text-lg"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2026 Flipit Global Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
