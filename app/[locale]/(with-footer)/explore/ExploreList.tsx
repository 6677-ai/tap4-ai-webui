import { getWebNavigationList } from '@/network/webNavigation';

import BasePagination from '@/components/page/BasePagination';
import WebNavCardList from '@/components/webNav/WebNavCardList';

const WEB_PAGE_SIZE = 20;

export const revalidate = 3600;

export default async function ExploreList({ pageNum }: { pageNum?: string }) {
  const currentPage = pageNum ? Number(pageNum) : 1;

  const res = await getWebNavigationList({
    pageNum: currentPage,
    pageSize: WEB_PAGE_SIZE,
  });

  return (
    <>
      <WebNavCardList dataList={res.rows} />
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
