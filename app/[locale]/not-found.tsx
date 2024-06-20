/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function NotFound() {
  const t = useTranslations('NotFound');
  return (
    <div className='flex w-screen flex-1 items-center justify-center'>
      <div className='flex flex-col items-center gap-4'>
        <img src='/images/404.png' className='h-[208px] w-[323px] -translate-x-4' alt='404' />
        <h1 className='text-sm text-white/40'>{t('title')}</h1>
        <Link
          href='/'
          className='flex h-9 items-center justify-center rounded-full border border-white/40 px-[10px] text-sm uppercase text-white/40 hover:cursor-pointer hover:opacity-80'
        >
          {t('goHome')}
        </Link>
      </div>
    </div>
  );
}
