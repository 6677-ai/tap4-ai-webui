import { useTranslations } from 'next-intl';

import Spinning from './Spinning';

export default function Loading({ className }: { className?: string }) {
  const t = useTranslations('Common');

  return (
    <div role='status' className='flex flex-col items-center gap-1'>
      <Spinning className={className} />
      <span className='text-xs'>{t('loading')}</span>
    </div>
  );
}
