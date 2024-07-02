import { Suspense } from 'react';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { createClient } from '@/db/supabase/client';
import { getTranslations } from 'next-intl/server';

import { RevalidateOneHour } from '@/lib/constants';
import { WebNavigationListRow } from '@/lib/data'; // 确保导入正确路径
import { Separator } from '@/components/ui/separator';
import Empty from '@/components/Empty';
import WebNavCardList from '@/components/webNav/WebNavCardList';

import { TagList } from '../../Tag';
import Loading from './loading';

const ScrollToTop = dynamic(() => import('@/components/page/ScrollToTop'), { ssr: false });

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({
    locale,
    namespace: 'Metadata.home',
  });

  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
  };
}

export const revalidate = RevalidateOneHour / 2;

export default async function Page({ params }: { params: { search?: string } }) {
  const supabase = createClient();
  const t = await getTranslations('Home');
  const { data: categoryList } = await supabase.from('navigation_category').select();
  const { data: dataList } = await supabase
    .from('web_navigation')
    .select()
    .ilike('detail', `%${decodeURI(params?.search || '')}%`);

  // 将 dataList 映射为 WebNavigationListRow 类型
  const mappedDataList: WebNavigationListRow[] | null = dataList
    ? dataList.map((item) => ({
        id: String(item.id), // 确保 id 是字符串
        title: item.title,
        url: item.url,
        imageUrl: item.image_url || null, // 将 image_url 映射到 imageUrl
        thumbnailUrl: item.thumbnail_url || null, // 将 thumbnail_url 映射到 thumbnailUrl
        content: item.content,
        name: item.name,
      }))
    : null;

  return (
    <Suspense fallback={<Loading />}>
      <div className='mb-10 mt-5'>
        {params?.search && (
          <TagList
            data={categoryList!.map((item) => ({
              id: String(item.id),
              name: item.name,
              href: `/category/${item.name}`,
            }))}
          />
        )}
      </div>
      <section className='flex flex-col gap-5'>
        {mappedDataList && !!mappedDataList.length && params?.search ? (
          <>
            <h2 className='mb-1 text-left text-[18px] lg:text-2xl'>{t('result')}</h2>
            <WebNavCardList dataList={mappedDataList!} />
          </>
        ) : (
          <Empty title={t('empty')} />
        )}
      </section>
      <Separator className='mx-auto my-10 h-px w-4/5 bg-[#2C2D36] lg:my-16' />
      <ScrollToTop />
    </Suspense>
  );
}
