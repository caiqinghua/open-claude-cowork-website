'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { locales, localeNames, defaultLocale, type Locale } from '@/i18n/config';
import { Button } from '@/components/ui/button';
import { Globe, Check } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const switchLocale = (newLocale: Locale) => {
    // If clicking the same locale, just close the dropdown
    if (newLocale === locale) {
      setIsOpen(false);
      return;
    }

    // Get pathname without locale prefix
    let pathnameWithoutLocale = pathname;

    // Check if pathname starts with a locale prefix
    const localePattern = /^\/([a-z]{2})(\/|$)/;
    const match = pathname.match(localePattern);

    if (match) {
      // Remove the locale prefix
      pathnameWithoutLocale = pathname.slice(match[1].length + 1);
    }

    // Ensure pathnameWithoutLocale starts with /
    if (!pathnameWithoutLocale.startsWith('/')) {
      pathnameWithoutLocale = '/' + pathnameWithoutLocale;
    }

    // Build new pathname
    // Default locale (en) doesn't get a prefix
    const newPathname = newLocale === defaultLocale
      ? pathnameWithoutLocale
      : `/${newLocale}${pathnameWithoutLocale}`;

    router.push(newPathname);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2"
      >
        <Globe className="w-4 h-4" />
        <span className="hidden sm:inline">{localeNames[locale as Locale]}</span>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </Button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-card border border-border rounded-lg shadow-lg overflow-hidden z-50">
          <div className="py-1">
            {locales.map((loc) => (
              <button
                key={loc}
                onClick={() => switchLocale(loc)}
                className="w-full px-4 py-2.5 text-left text-sm hover:bg-secondary transition-colors flex items-center justify-between"
              >
                <span className="flex items-center gap-2">
                  <span className="text-lg">{loc === 'en' ? '🇺🇸' : '🇨🇳'}</span>
                  <span className={loc === locale ? 'font-semibold' : ''}>
                    {localeNames[loc]}
                  </span>
                </span>
                {loc === locale && (
                  <Check className="w-4 h-4 text-primary" />
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
