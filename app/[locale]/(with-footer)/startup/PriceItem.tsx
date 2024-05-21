import { cn } from '@/lib/utils';

export default function PriceItem({ title, isFree }: { title: string; isFree: boolean }) {
  return (
    <div
      className={cn(
        'flex-center w-fit gap-1 rounded-[4px] border border-[#686B84] px-[10px] py-[2px] text-sm text-[#686B84]',
        isFree && 'border-[#2CB65C] text-[#2CB65C]',
      )}
    >
      <div className={cn('size-2 rounded-full bg-[#686B84]', isFree && 'bg-[#2CB65C]')} />
      {title}
    </div>
  );
}
