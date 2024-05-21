import { WebNavigationListRow } from '@/lib/data';

import WebNavCard from './WebNavCard';

export default function WebNavCardList({ dataList }: { dataList: WebNavigationListRow[] }) {
  return (
    <div className='grid grid-cols-2 gap-3 lg:grid-cols-5 lg:gap-4'>
      {dataList.map((item) => (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <WebNavCard key={item.id} {...item} />
      ))}
    </div>
  );
}
