import { createClient } from '@/db/supabase/client';

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
      <WebNavCardList dataList={navigationList!} />
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
