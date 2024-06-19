function LoadingItem() {
  return <div className='h-[38px] w-[75px] rounded-full bg-[#2C2D36]' />;
}

function LoadingCard() {
  return (
    <div
      role='status'
      className='flex h-[210px] animate-pulse flex-col gap-3 rounded-xl bg-[#2C2D36] p-1 shadow lg:h-[343px]'
    >
      <div className='mb-4 flex aspect-[310/174] h-auto w-full items-center justify-center rounded-xl bg-gray-500' />
      <div className='flex flex-col gap-2 px-[6px]'>
        <div className='mb-2 h-4 w-24 rounded-full bg-gray-500' />
        <div className='h-2.5 rounded-full bg-gray-500' />
        <div className='h-2.5 rounded-full bg-gray-500' />
        <div className='h-2.5 rounded-full bg-gray-500' />
      </div>
    </div>
  );
}

export default function Loading() {
  const length = Array.from({ length: 12 }, (_, i) => i);

  return (
    <div className='mt-5 w-full space-y-10'>
      <div className='flex animate-pulse items-center gap-3'>
        <LoadingItem />
        <LoadingItem />
        <LoadingItem />
      </div>
      <div className='h-8 w-[120px] animate-pulse rounded-full bg-gray-500' />
      <div className='grid w-full grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-4'>
        {length.map((item) => (
          <LoadingCard key={item} />
        ))}
      </div>
    </div>
  );
}
