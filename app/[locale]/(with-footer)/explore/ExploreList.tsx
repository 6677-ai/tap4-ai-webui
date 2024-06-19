import { createClient } from '@/db/supabase/client';

import BasePagination from '@/components/page/BasePagination';
import WebNavCardList from '@/components/webNav/WebNavCardList';

const WEB_PAGE_SIZE = 12;

export default async function ExploreList({ pageNum }: { pageNum?: string }) {
  const supabase = createClient();
  const currentPage = pageNum ? Number(pageNum) : 1;

  const { data: navigationList } = await supabase
    .from('web_navigation')
    .select()
    .range(currentPage - 1, currentPage - 1 + WEB_PAGE_SIZE - 1);

  return (
    <>
      <WebNavCardList dataList={navigationList!} />
      <BasePagination
        currentPage={currentPage}
        pageSize={WEB_PAGE_SIZE}
        total={20}
        route='/explore'
        subRoute='/page'
        className='my-5 lg:my-10'
      />
    </>
  );
}
