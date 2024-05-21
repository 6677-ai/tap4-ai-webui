import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function NotFound() {
  const t = useTranslations('NotFound');
  return (
    <div>
      <h1>{t('title')}</h1>
      <Link href='/' className='hover:cursor-pointer hover:opacity-80'>
        {t('goHome')}
      </Link>
    </div>
  );
}
