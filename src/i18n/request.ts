import { getRequestConfig } from 'next-intl/server';
import { locales, defaultLocale } from './config';

export default getRequestConfig(async ({ locale }) => {
  // Ensure we have a valid locale
  const validLocale = (locale && locales.includes(locale as any)) ? locale : defaultLocale;

  return {
    locale: validLocale,
    messages: (await import(`@/locales/${validLocale}.json`)).default,
  };
});
