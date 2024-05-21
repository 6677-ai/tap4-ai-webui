import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { getWebNavigationList } from '@/network/webNavigation';
import { CircleChevronRight } from 'lucide-react';
import { getTranslations } from 'next-intl/server';

import Faq from '@/components/Faq';
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
    openGraph: {
      title: t('openGraph.title'),
      description: t('openGraph.description'),
      url: process.env.NEXT_PUBLIC_SITE_URL,
      siteName: t('openGraph.siteName'),
      type: 'website',
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_SITE_URL}/images/home/home-page.jpg`,
          secureUrl: `${process.env.NEXT_PUBLIC_SITE_URL}/images/home/home-page.jpg`,
          width: 1200,
          height: 630,
          alt: t('title'),
        },
      ],
    },
    twitter: {
      title: t('twitter.title'),
      description: t('twitter.description'),
      site: t('twitter.site'),
      creator: t('twitter.creator'),
      card: 'summary_large_image',
      images: {
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/images/home/home-page.jpg`,
        alt: t('title'),
      },
    },
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
    <div className='relative w-full'>
      <div className='relative mx-auto w-full max-w-pc flex-1 px-3 lg:px-0'>
        <div className='my-5 flex flex-col text-center lg:mx-auto lg:my-10 lg:gap-1'>
          <h1 className='text-2xl font-bold text-white lg:text-5xl'>{t('title')}</h1>
          <h2 className='text-balance text-xs font-bold text-white lg:text-sm'>{t('subTitle')}</h2>
        </div>
        <div className='flex flex-col gap-5'>
          <h2 className='text-center text-[18px] lg:text-[32px]'>{t('ai-navigate')}</h2>
          <WebNavCardList dataList={res.rows} />
          <Link
            href='/explore'
            className='mx-auto mb-5 flex w-fit items-center justify-center gap-5 rounded-[9px] border border-white p-[10px] text-sm leading-4 hover:opacity-70'
          >
            {t('exploreMore')}
            <CircleChevronRight className='mt-[0.5] h-[20px] w-[20px]' />
          </Link>
        </div>
        <Faq />
        <ScrollToTop />
      </div>
    </div>
  );
}
