'use client';

import { useTranslations } from 'next-intl';

export function TechStack() {
  const t = useTranslations('techStack');

  const categoryKeys = ['framework', 'ui', 'data', 'ai'] as const;

  return (
    <section id="tech-stack" className="py-24 px-4">
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

        {/* Tech Stack Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categoryKeys.map((key) => (
            <div
              key={key}
              className="p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
            >
              <h3 className="text-lg font-semibold text-primary mb-4">
                {t(`items.${key}.category`)}
              </h3>
              <ul className="space-y-2">
                {(t.raw(`items.${key}.technologies`) as string[]).map((tech, techIndex) => (
                  <li
                    key={techIndex}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Build Tools */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground mb-4">{t('buildTools')}</p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {(t.raw('tools') as string[]).map((tool, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-background border border-border rounded-lg text-sm text-foreground"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
