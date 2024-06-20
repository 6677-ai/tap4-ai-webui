'use client';

import { cn } from '@/lib/utils';

function BarItem({ className }: { className: string }) {
  return (
    <span
      className={cn(
        'absolute block h-[2px] w-[18px] transform bg-current transition duration-300 ease-in-out',
        className,
      )}
    />
  );
}

export default function MenuBtn({
  open,
  onClick,
}: {
  open: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <button type='button' className='relative ml-3' onClick={onClick}>
      <div className='absolute block w-5 -translate-x-1/2  -translate-y-1/2 transform'>
        <BarItem className={open ? 'rotate-45 bg-black' : '-translate-y-1.5 bg-black'} />
        <BarItem className={open ? 'bg-black opacity-0' : 'bg-black'} />
        <BarItem className={open ? '-rotate-45 bg-black' : 'translate-y-1.5 bg-black'} />
      </div>
      <span className='sr-only'>menu</span>
    </button>
  );
}
