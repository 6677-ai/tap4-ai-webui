import Loading from '@/components/Loading';

export default function HomeLoading() {
  return (
    <div className='-z-10 flex min-h-screen min-w-full items-center justify-center bg-opacity-90'>
      <Loading className='h-12 w-12' />
    </div>
  );
}
