'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { locales, localeNames, type Locale } from '@/i18n/config';
import { Button } from '@/components/ui/button';

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: Locale) => {
    // Remove current locale from pathname
    const pathnameWithoutLocale = pathname.replace(`/${locale}`, '').replace(`/${locale}`, '');
    const newPathname = `/${newLocale}${pathnameWithoutLocale}`;
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
