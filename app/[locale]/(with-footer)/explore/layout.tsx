import { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

import Faq from '@/components/Faq';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({
    locale,
    namespace: 'Metadata.explore',
  });

  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const t = useTranslations('Explore');

  return (
    <div className='flex-y-center mx-auto w-full max-w-pc px-3'>
      <div className='my-5 flex flex-col gap-1 text-balance text-center lg:my-10 lg:gap-3'>
        <h1 className='text-2xl lg:text-5xl'>{t('title')}</h1>
        <h2 className='text-xs lg:text-sm'>{t('subTitle')}</h2>
      </div>
      {children}
      <Faq />
    </div>
  );
}
