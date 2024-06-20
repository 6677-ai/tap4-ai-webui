import { SquareArrowOutUpRight } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { STARTUP_LIST } from '@/lib/constants';

import PriceItem from './PriceItem';
import TagItem from './TagItem';

export default function MobileTable() {
  const t = useTranslations('Startup.table');

  return (
    <div className='mb-10 space-y-1 lg:hidden'>
      <div className='flex h-8 items-center justify-between bg-gray-200 px-3 text-xs font-bold text-gray-900'>
        <div>{t('website')}</div>
        <div>{t('submission')}</div>
      </div>
      <div className='flex flex-col gap-1'>
        {STARTUP_LIST.map((item) => (
          <div key={item.DA} className='flex min-h-[99px] items-center justify-between bg-white p-3'>
            <div className='flex flex-1 flex-col'>
              <div className='mb-[9px] text-sm text-gray-900'>
                (DA{item.DA}) {item.Website}
              </div>
              <div className='mb-[6px] flex flex-wrap gap-1'>
                {item.Tag ? item.Tag.split(',').map((tag) => <TagItem key={tag} title={tag} />) : null}
              </div>
              <PriceItem title={item.Price} isFree={item.Price.toLowerCase() === 'free'} />
            </div>
            <a
              href={item.URL}
              target='_blank'
              rel='noreferrer'
              className='flex-center h-[75px] w-9 rounded-[4px] border border-gray-400 hover:opacity-80'
            >
              <SquareArrowOutUpRight className='text-gray-400' />
              <span className='sr-only'>{item.Website}</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
