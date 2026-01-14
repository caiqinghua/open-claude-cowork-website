'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { locales, localeNames, defaultLocale, type Locale } from '@/i18n/config';
import { Button } from '@/components/ui/button';

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: Locale) => {
    // If clicking the same locale, do nothing
    if (newLocale === locale) return;

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
  };

  return (
    <div className="flex items-center gap-2">
      {locales.map((loc) => (
        <Button
          key={loc}
          variant={loc === locale ? 'default' : 'ghost'}
          size="sm"
          onClick={() => switchLocale(loc)}
          className="text-sm"
        >
          {localeNames[loc]}
        </Button>
      ))}
    </div>
  );
}
