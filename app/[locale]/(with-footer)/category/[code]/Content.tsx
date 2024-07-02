/* eslint-disable react/jsx-props-no-spreading */
import { WebNavigation } from '@/db/supabase/types';
import { useTranslations } from 'next-intl';

import { WebNavigationListRow } from '@/lib/data'; // 确保导入正确路径
import Empty from '@/components/Empty';
import ExploreBreadcrumb from '@/components/explore/ExploreBreadcrumb';
import BasePagination from '@/components/page/BasePagination';
import WebNavCard from '@/components/webNav/WebNavCard';

export default function Content({
  navigationList,
  currentPage,
  total,
  pageSize,
  route,
}: {
  navigationList: WebNavigation[];
  currentPage: number;
  total: number;
  pageSize: number;
  route: string;
}) {
  const t = useTranslations('Category');

  // 将 navigationList 映射为 WebNavigationListRow 类型
  const mappedNavigationList: WebNavigationListRow[] = navigationList.map((item) => ({
    id: String(item.id),
    title: item.title,
    url: item.url,
    imageUrl: item.image_url || null,
    thumbnailUrl: item.thumbnail_url || null,
    content: item.content,
    name: item.name,
  }));

  return (
    <>
      <div className='mx-auto flex flex-col gap-3 py-5 lg:pt-10'>
        <div className='mx-auto'>
          <ExploreBreadcrumb
            linkList={[
              {
                href: '/',
                title: t('home'),
              },
            ]}
          />
        </div>
      </div>
      <div className='mt-3'>
        {mappedNavigationList && !!mappedNavigationList.length ? (
          <>
            <div className='grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-4'>
              {mappedNavigationList.map((item) => (
                <WebNavCard key={item.id} {...item} />
              ))}
            </div>
            <div className='my-5 flex items-center justify-center lg:my-10'>
              <BasePagination
                currentPage={currentPage}
                total={total}
                pageSize={pageSize}
                route={route}
                subRoute='/page'
              />
            </div>
          </>
        ) : (
          <div className='mb-3 lg:mb-5'>
            <Empty title={t('empty')} />
          </div>
        )}
      </div>
    </>
  );
}
