'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#070823] border-b border-gray-800">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.svg"
              alt="Flipit"
              width={93}
              height={40}
              className="h-8 w-auto"
              priority
            />
          </Link>

          {/* CTA Button */}
          <a
            href="https://chromewebstore.google.com/detail/flipit/aeclfjapikjpkdajbaolonnceecpghce"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-flipit-orange text-white px-5 py-2 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
          >
            Add to Chrome
          </a>
        </div>
      </nav>
    </header>
  );
}
