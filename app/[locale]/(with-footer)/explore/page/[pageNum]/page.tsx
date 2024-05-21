import ExploreList from '../../ExploreList';

export default function page({ params: { pageNum } }: { params: { pageNum: string | undefined } }) {
  return <ExploreList pageNum={pageNum} />;
}
