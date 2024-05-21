import React from 'react';
import { useTranslations } from 'next-intl';

import { formatTime } from '@/lib/utils/timeUtils';
import Faq from '@/components/Faq';

import DesktopTable from './DesktopTable';
import MobileTable from './MobileTable';

export default function Page() {
  const t = useTranslations('Startup');

  return (
    <div className='flex flex-col'>
      <div className='my-5 flex flex-col text-center lg:mx-auto lg:my-10 lg:gap-1'>
        <h1 className='bg-clip-text text-2xl font-bold text-white lg:h-[56px] lg:text-5xl'>{t('title')}</h1>
        <div>
          <h2 className='text-balance text-xs font-bold text-white lg:text-sm'>{t('subTitle')}</h2>
          <h2 className='text-balance text-xs font-bold text-white lg:text-sm'>
            {t('updateTime')} {formatTime(new Date().setDate(new Date().getDate() - 1), 'YYYY-MM-DD')}
          </h2>
        </div>
      </div>
      <DesktopTable />
      <MobileTable />
      <Faq />
    </div>
  );
}
