'use client';

import { Bot, FolderOpen, Eye, Shield, Settings } from 'lucide-react';
import { useTranslations } from 'next-intl';

const featureIcons = {
  aiPartner: Bot,
  sessionManagement: FolderOpen,
  realtimeStreaming: Eye,
  permissionControl: Shield,
  configReuse: Settings,
};

export function Features() {
  const t = useTranslations('features');

  const featureKeys = ['aiPartner', 'sessionManagement', 'realtimeStreaming', 'permissionControl', 'configReuse'] as const;

  return (
    <section id="features" className="py-24 px-4">
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

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featureKeys.map((key) => {
            const Icon = featureIcons[key];
            return (
              <div
                key={key}
                className="group p-8 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {t(`items.${key}.title`)}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t(`items.${key}.description`)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
