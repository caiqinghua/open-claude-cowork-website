'use client';

import Link from 'next/link';
import { ArrowRight, Github, Mail } from 'lucide-react';
import { useTranslations } from 'next-intl';

export function CTA() {
  const t = useTranslations('cta');

  return (
    <section className="py-24 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
          {t('title')}
        </h2>
        <p className="text-lg text-muted-foreground mb-12">
          {t('description')}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="https://github.com/caiqinghua/open-claude-cowork/releases"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-8 py-4 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-all hover:scale-105 flex items-center gap-2"
          >
            {t('downloadApp')}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="https://github.com/caiqinghua/open-claude-cowork"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-card text-foreground border border-border rounded-lg font-medium hover:bg-secondary transition-all flex items-center gap-2"
          >
            <Github className="w-5 h-5" />
            {t('starOnGithub')}
          </Link>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="py-12 px-4 border-t border-border bg-card/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">OC</span>
              </div>
              <span className="text-lg font-bold text-foreground">
                Open Claude Cowork
              </span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              {t('description')}
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="https://github.com/caiqinghua/open-claude-cowork"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">{t('resources')}</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {t('features')}
                </Link>
              </li>
              <li>
                <Link href="#advantages" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {t('advantages')}
                </Link>
              </li>
              <li>
                <Link href="#tech-stack" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {t('techStack')}
                </Link>
              </li>
              <li>
                <Link href="#quick-start" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {t('quickStart')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">{t('community')}</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="https://github.com/caiqinghua/open-claude-cowork"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t('github')}
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/caiqinghua/open-claude-cowork/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t('issues')}
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/caiqinghua/open-claude-cowork/blob/main/LICENSE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t('license')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            {t('copyright')}
          </p>
          <p className="text-sm text-muted-foreground">
            {t('madeWith')}
          </p>
        </div>
      </div>
    </footer>
  );
}
