import React from 'react';
import { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

import SubmitForm from './SubmitForm';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({
    locale,
    namespace: 'Metadata.submit',
  });

  return {
    title: t('title'),
  };
}

export default function Page() {
  const t = useTranslations('Submit');

  return (
    <div className='mx-auto max-w-pc bg-gray-100'>
      <div className='flex-y-center my-3 flex lg:my-10'>
        <h1 className='text-5xl font-bold text-gray-900'>{t('title')}</h1>
        <h2 className='mt-[5px] text-sm font-bold text-gray-700 lg:my-3'>{t('subTitle')}</h2>
        <SubmitForm />
      </div>
    </div>
  );
}
