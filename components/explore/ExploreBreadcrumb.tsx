import { Home } from 'lucide-react';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

export default function ExploreBreadcrumb({
  linkList,
}: {
  linkList: { href?: string; title: string; isLast?: boolean }[];
}) {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {linkList.map((item) => (
          <>
            <BreadcrumbItem>
              {!item.isLast && (
                <BreadcrumbLink href={item.href} className='flex items-center gap-1 text-white/40'>
                  {item.href === '/' && <Home className='size-4' />}
                  {item.title}
                </BreadcrumbLink>
              )}
              {item.isLast && <BreadcrumbPage>{item.title}</BreadcrumbPage>}
            </BreadcrumbItem>
            {!item.isLast && <BreadcrumbSeparator className='text-white/40' />}
          </>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
