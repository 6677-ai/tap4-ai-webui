import { createClient } from '@/db/supabase/client';

import { WebNavigationListRow } from '@/lib/data'; // 确保导入正确路径
import SearchForm from '@/components/home/SearchForm';
import BasePagination from '@/components/page/BasePagination';
import WebNavCardList from '@/components/webNav/WebNavCardList';

import { TagList } from '../(home)/Tag';

const WEB_PAGE_SIZE = 12;

export default async function ExploreList({ pageNum }: { pageNum?: string }) {
  const supabase = createClient();
  const currentPage = pageNum ? Number(pageNum) : 1;

  // start and end
  const start = (currentPage - 1) * WEB_PAGE_SIZE;
  const end = start + WEB_PAGE_SIZE - 1;

  const [{ data: categoryList }, { data: navigationList, count }] = await Promise.all([
    supabase.from('navigation_category').select(),
    supabase
      .from('web_navigation')
      .select('*', { count: 'exact' })
      .order('collection_time', { ascending: false })
      .range(start, end),
  ]);

  // 将 navigationList 映射为 WebNavigationListRow 类型
  const mappedNavigationList: WebNavigationListRow[] | null = navigationList
    ? navigationList.map((item) => ({
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
    <>
      <div className='flex w-full items-center justify-center'>
        <SearchForm />
      </div>
      <div className='mb-10 mt-5'>
        <TagList
          data={categoryList!.map((item) => ({
            id: String(item.id),
            name: item.name,
            href: `/category/${item.name}`,
          }))}
        />
      </div>
      <WebNavCardList dataList={mappedNavigationList!} />
      <BasePagination
        currentPage={currentPage}
        pageSize={WEB_PAGE_SIZE}
        total={count!}
        route='/explore'
        subRoute='/page'
        className='my-5 lg:my-10'
      />
    </>
  );
}
