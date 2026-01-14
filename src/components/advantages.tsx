'use client';

import { Check, X } from 'lucide-react';
import { useTranslations } from 'next-intl';

export function Advantages() {
  const t = useTranslations('advantages');

  const advantageKeys = ['noSubscription', 'visualInterface', 'modelSupport', 'persistence', 'permissionControl'] as const;

  return (
    <section id="advantages" className="py-24 px-4 bg-card/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        {/* Comparison Table */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {advantageKeys.map((key) => (
              <div
                key={key}
                className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6 rounded-lg bg-card border border-border hover:border-primary/30 transition-colors"
              >
                {/* Title */}
                <div className="font-semibold text-foreground">{t(`items.${key}.title`)}</div>

                {/* Claude Code */}
                <div className="flex items-start gap-3 text-muted-foreground">
                  <X className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{t(`items.${key}.claudeCode`)}</span>
                </div>

                {/* Open Claude Cowork */}
                <div className="flex items-start gap-3 text-foreground">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm font-medium">{t(`items.${key}.openClaude`)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">
            {t('compatible')}
          </p>
          <code className="px-4 py-2 bg-background border border-border rounded-lg text-sm text-primary">
            {t('configPath')}
          </code>
        </div>
      </div>
    </section>
  );
}
