'use client';

import { Copy, Check } from 'lucide-react';
import { useState } from 'react';
import { useTranslations } from 'next-intl';

export function QuickStart() {
  const t = useTranslations('quickStart');
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const stepKeys = ['clone', 'install', 'config', 'start'] as const;

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <section id="quick-start" className="py-24 px-4 bg-card/30">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('subtitle')}
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-6">
          {stepKeys.map((key, index) => {
            const command = t(`steps.${key}.command`);
            return (
              <div key={key} className="relative">
                {/* Step Number */}
                <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </div>

                {/* Content */}
                <div className="ml-12">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {t(`steps.${key}.title`)}
                  </h3>

                  {/* Code Block */}
                  <div className="relative group">
                    <pre className="bg-background border border-border rounded-lg p-4 overflow-x-auto">
                      <code className="text-sm text-foreground whitespace-pre-wrap">
                        {command}
                      </code>
                    </pre>

                    {/* Copy Button */}
                    <button
                      onClick={() => copyToClipboard(command, index)}
                      className="absolute top-2 right-2 p-2 rounded-md bg-card border border-border hover:bg-secondary transition-colors opacity-0 group-hover:opacity-100"
                      title={t('copyCommand')}
                    >
                      {copiedIndex === index ? (
                        <Check className="w-4 h-4 text-primary" />
                      ) : (
                        <Copy className="w-4 h-4 text-muted-foreground" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-12 p-6 rounded-lg bg-primary/10 border border-primary/30">
          <p className="text-sm text-foreground mb-2">
            {t('tip')}
          </p>
          <p className="text-sm text-muted-foreground">
            {t('tipDescription')}
          </p>
        </div>
      </div>
    </section>
  );
}
