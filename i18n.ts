import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

export const languages = [
  {
    code: 'en-US',
    lang: 'en',
    label: 'English',
  },
  {
    code: 'ja-JP',
    lang: 'jp',
    label: '日本語',
  },
  {
    code: 'de-DE',
    lang: 'de',
    label: 'Deutsch',
  },
  {
    code: 'es-ES',
    lang: 'es',
    label: 'Español',
  },
  {
    code: 'fr-FR',
    lang: 'fr',
    label: 'Français',
  },
  {
    code: 'pt-BR',
    lang: 'pt',
    label: 'Português',
  },
  {
    code: 'ru-RU',
    lang: 'ru',
    label: 'Русский',
  },
  {
    code: 'zh-CN',
    lang: 'cn',
    label: '简体中文',
  },
  {
    code: 'zh-TW',
    lang: 'tw',
    label: '繁體中文',
  },
];

export const locales = languages.map((lang) => lang.lang);

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();

  return {
    messages: (await import(`./messages/${locale}.json`)).default,
  };
});
