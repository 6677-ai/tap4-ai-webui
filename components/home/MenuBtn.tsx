'use client';

import { cn } from '@/lib/utils';

function BarItem({ className }: { className: string }) {
  return (
    <span
      className={cn(
        'absolute block h-[2px] w-[18px] transform bg-current bg-white transition duration-300 ease-in-out',
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
        <BarItem className={open ? 'rotate-45' : '-translate-y-1.5'} />
        <BarItem className={open ? 'opacity-0' : ''} />
        <BarItem className={open ? '-rotate-45' : 'translate-y-1.5'} />
      </div>
      <span className='sr-only'>menu</span>
    </button>
  );
}
