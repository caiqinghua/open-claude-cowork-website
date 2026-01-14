'use client';

import Link from 'next/link';
import { ArrowRight, Github } from 'lucide-react';
import { useTranslations } from 'next-intl';

export function Hero() {
  const t = useTranslations('hero');

  return (
    <section className="relative pt-32 pb-20 px-4 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent pointer-events-none"></div>

      <div className="max-w-6xl mx-auto text-center relative">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          <span className="text-sm text-muted-foreground">{t('badge')}</span>
        </div>

        {/* Main Title */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-foreground mb-6 tracking-tight">
          {t('title')}
        </h1>

        {/* Subtitle */}
        <p className="text-xl sm:text-2xl text-primary font-medium mb-6">
          {t('subtitle')}
        </p>

        {/* Description */}
        <p className="max-w-2xl mx-auto text-lg text-muted-foreground mb-12 leading-relaxed">
          {t('description')}
          <br />
          {t('description2')}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link
            href="https://github.com/caiqinghua/open-claude-cowork/releases"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-8 py-4 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-all hover:scale-105 flex items-center gap-2"
          >
            {t('getStarted')}
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

        {/* Features Preview */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors">
            <div className="text-3xl mb-3">🤖</div>
            <h3 className="font-semibold text-foreground mb-2">{t('features.aiPartner.title')}</h3>
            <p className="text-sm text-muted-foreground">{t('features.aiPartner.description')}</p>
          </div>
          <div className="p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors">
            <div className="text-3xl mb-3">📂</div>
            <h3 className="font-semibold text-foreground mb-2">{t('features.sessionManagement.title')}</h3>
            <p className="text-sm text-muted-foreground">{t('features.sessionManagement.description')}</p>
          </div>
          <div className="p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors">
            <div className="text-3xl mb-3">🔐</div>
            <h3 className="font-semibold text-foreground mb-2">{t('features.permissionControl.title')}</h3>
            <p className="text-sm text-muted-foreground">{t('features.permissionControl.description')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
