'use client';

import Link from 'next/link';
import { Github } from 'lucide-react';
import { useTranslations, useLocale } from 'next-intl';
import { LanguageSwitcher } from '@/components/language-switcher';

export function Navigation() {
  const t = useTranslations('navigation');
  const locale = useLocale();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform">
              <span className="text-white font-bold text-sm">OC</span>
            </div>
            <span className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
              Open Claude Cowork
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              {t('features')}
            </Link>
            <Link href="#advantages" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              {t('advantages')}
            </Link>
            <Link href="#tech-stack" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              {t('techStack')}
            </Link>
            <Link href="#quick-start" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              {t('quickStart')}
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3">
            <LanguageSwitcher />
            <Link
              href="https://github.com/caiqinghua/open-claude-cowork"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 px-4 py-2 text-sm font-medium text-foreground border border-border rounded-lg hover:bg-card transition-colors"
            >
              <Github className="w-4 h-4" />
              {t('github')}
            </Link>
            <Link
              href="https://github.com/caiqinghua/open-claude-cowork/releases"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
            >
              {t('download')}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
