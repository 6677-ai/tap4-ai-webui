import { RevalidateOneHour } from '@/lib/constants';

import ExploreList from '../../ExploreList';

export const revalidate = RevalidateOneHour * 6;

export default function page({ params: { pageNum } }: { params: { pageNum: string | undefined } }) {
  return <ExploreList pageNum={pageNum} />;
}
