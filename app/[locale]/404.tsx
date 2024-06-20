import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function NotFound() {
  const t = useTranslations('NotFound');

  return (
    <div className='flex min-h-screen flex-col items-center justify-center bg-gray-100 text-gray-900'>
      <h1 className='mb-4 text-3xl font-bold'>{t('title')} &#x1F62D;</h1>
      <p className='mb-4'>{t('description')}</p>
      <Link href='/' className='text-blue-600 hover:cursor-pointer hover:text-blue-800'>
        {t('goHome')} &#x1F3E0;
      </Link>
    </div>
  );
}
