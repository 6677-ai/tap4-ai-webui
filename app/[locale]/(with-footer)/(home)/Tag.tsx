import Link from 'next/link';
import { CircleChevronRight } from 'lucide-react';
import { useTranslations } from 'next-intl';

export function TagItem({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex h-[38px] items-center justify-center gap-[2px] whitespace-nowrap rounded-full bg-[#2C2D36] px-3 text-xs'>
      {children}
    </div>
  );
}

export function TagLink({ name, href }: { name: string; href: string }) {
  return (
    <Link href={href} title={name}>
      <TagItem>{name}</TagItem>
    </Link>
  );
}

export function TagList({ data }: { data: { name: string; href: string; id: string }[] }) {
  const t = useTranslations('Home');

  return (
    <ul className='flex items-center gap-3'>
      <ul className='no-scrollbar flex max-w-full flex-1 items-center gap-3 overflow-auto'>
        {data.map((item) => (
          <li key={item.href}>
            <TagLink name={item.name} href={item.href} />
          </li>
        ))}
      </ul>
      <li>
        <Link href='/category'>
          <TagItem>
            <span>{t('more')}</span>
            <CircleChevronRight />
          </TagItem>
        </Link>
      </li>
    </ul>
  );
}
