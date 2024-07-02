import Link from 'next/link';

export function TagItem({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex h-[38px] items-center justify-center gap-[2px] whitespace-nowrap rounded-full bg-[#dddee0] px-3 text-xs'>
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
  return (
    <ul className='no-scrollbar flex max-w-full flex-1 flex-wrap items-center gap-3 overflow-hidden'>
      {data.map((item) => (
        <li key={item.id}>
          <TagLink name={item.name} href={item.href} />
        </li>
      ))}
    </ul>
  );
}
