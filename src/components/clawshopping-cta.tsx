'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';

export function ClawShoppingCTA() {
  const t = useTranslations('clawshopping');

  return (
    <section className="py-16 px-4 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-2xl border border-blue-100 p-8 md:p-12 shadow-lg">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-sm font-medium mb-6">
              <span className="animate-pulse">🔥</span>
              <span>{t('badge')}</span>
            </div>

            {/* Title */}
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {t('title')}
            </h2>

            {/* Description */}
            <p className="text-gray-700 text-lg mb-8 leading-relaxed max-w-3xl mx-auto">
              {t('description')}
            </p>

            {/* Bonus Cards */}
            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 border border-blue-100 hover:shadow-md transition-shadow">
                <div className="text-3xl mb-3">🎁</div>
                <div className="font-semibold text-gray-900 mb-1">{t('bonus1.title')}</div>
                <div className="text-sm text-gray-600">{t('bonus1.desc')}</div>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-white rounded-xl p-6 border border-purple-100 hover:shadow-md transition-shadow">
                <div className="text-3xl mb-3">💎</div>
                <div className="font-semibold text-gray-900 mb-1">{t('bonus2.title')}</div>
                <div className="text-sm text-gray-600">{t('bonus2.desc')}</div>
              </div>
              <div className="bg-gradient-to-br from-pink-50 to-white rounded-xl p-6 border border-pink-100 hover:shadow-md transition-shadow">
                <div className="text-3xl mb-3">🚀</div>
                <div className="font-semibold text-gray-900 mb-1">{t('bonus3.title')}</div>
                <div className="text-sm text-gray-600">{t('bonus3.desc')}</div>
              </div>
            </div>

            <div className="mb-8 flex flex-wrap justify-center gap-2">
              {['Coding', 'Research', 'Browser Tasks', 'Automations'].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* CTA Button */}
            <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
              <Link
                href="https://tulingbc.com?utm_source=open-claude-cowork&utm_medium=website&utm_campaign=hero_cta"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-xl font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
              >
                {t('cta')}
                <span className="text-xl">→</span>
              </Link>

              <Link
                href="https://discord.gg/4MgVR6SG"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-blue-200 bg-white px-8 py-4 font-semibold text-blue-700 hover:border-blue-300 hover:bg-blue-50"
              >
                {t('discordCta')}
                <span className="text-xl">↗</span>
              </Link>
            </div>

            {/* Limited Time Notice */}
            <p className="text-sm text-gray-500 mt-4">
              {t('limited')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
