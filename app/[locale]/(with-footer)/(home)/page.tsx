import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { getWebNavigationList } from '@/network/webNavigation';
import { CircleChevronRight } from 'lucide-react';
import { getTranslations } from 'next-intl/server';

import WebNavCardList from '@/components/webNav/WebNavCardList';

const ScrollToTop = dynamic(() => import('@/components/page/ScrollToTop'), { ssr: false });

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({
    locale,
    namespace: 'Metadata.home',
  });

  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL as string),
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
    alternates: {
      canonical: './',
    },
  };
}

export const revalidate = 3600;

export default async function Page() {
  const t = await getTranslations('Home');
  const res = await getWebNavigationList({ pageNum: 1, pageSize: 20 });

  return (
    <div className='relative w-full bg-white'>
      <div className='relative mx-auto w-full max-w-pc flex-1 px-3 lg:px-0'>
        <div className='my-5 flex flex-col text-center lg:mx-auto lg:my-10 lg:gap-1'>
          <h1 className='text-2xl font-bold text-black lg:text-5xl'>{t('title')}</h1>
          <h2 className='lg:text-l mt-6 text-balance  text-xl text-black'>{t('subTitle')}</h2> {/* 添加mt-4增加间距 */}
        </div>
        <div className='flex flex-col gap-5'>
          <h2 className='text-center text-[18px] text-black lg:text-[32px]'>{t('ai-navigate')}</h2>
          <WebNavCardList dataList={res.rows} />
          <Link
            href='/explore'
            className='mx-auto mb-5 flex w-fit items-center justify-center gap-5 rounded-[9px] border border-black p-[10px] text-sm leading-4 text-black hover:opacity-70'
          >
            {t('exploreMore')}
            <CircleChevronRight className='mt-[0.5] h-[20px] w-[20px] text-black' />
          </Link>
        </div>
        <ScrollToTop />
      </div>
    </div>
  );
}
