'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Pagination from 'rc-pagination';

import { cn } from '@/lib/utils';
import { objToQueryStr } from '@/lib/utils/stringUtils';

type BasePaginationProps = {
  route: string;
  subRoute?: string;
  currentPage: number;
  pageSize: number;
  firstPageRoute?: string;
  total: number;
  searchParamsKeys?: string[];
  className?: string;
};

function LinkTag({
  className,
  title,
  href,
  children,
}: {
  className?: string;
  title: string;
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      title={title}
      className={cn(
        'flex-center size-8 rounded-[4px] border border-transparent bg-transparent text-white/40 hover:cursor-pointer hover:bg-[#2C2D36]',
        className,
      )}
    >
      {children}
    </Link>
  );
}

function itemRender({
  page,
  type,
  element,
  route,
  currentPage,
}: {
  page: number;
  type: 'page' | 'prev' | 'next' | 'jump-prev' | 'jump-next';
  element: React.ReactNode;
  route: string;
  currentPage: number;
}) {
  if (type === 'page') {
    return (
      <LinkTag
        href={route}
        title={page.toString()}
        className={page === currentPage ? 'border-white bg-[#2C2D36] text-white' : ''}
      >
        {page}
      </LinkTag>
    );
  }
  if (type === 'prev') {
    return (
      <LinkTag href={route} title={type}>
        <ChevronLeft className='h-4 w-4' />
      </LinkTag>
    );
  }
  if (type === 'next') {
    return (
      <LinkTag href={route} title={type}>
        <ChevronRight className='h-4 w-4' />
      </LinkTag>
    );
  }
  if (type === 'jump-prev' || type === 'jump-next') {
    return <div>...</div>;
  }
  return element;
}

export default function BasePagination({
  route,
  subRoute = '',
  firstPageRoute,
  currentPage,
  pageSize,
  total,
  searchParamsKeys,
  className,
}: BasePaginationProps) {
  const searchParams = useSearchParams();

  const getRoute = (nextNum: number): string => {
    let routeStr = `${route}${subRoute}/${nextNum}`;

    if (nextNum === 1 || nextNum === 0) {
      routeStr = firstPageRoute || route;
    }

    const searchParamsObj: Record<string, string | null> = {};
    searchParamsKeys?.forEach((key) => {
      searchParamsObj[key] = searchParams.get(key);
    });

    return objToQueryStr(routeStr, searchParamsObj);
  };

  return (
    <Pagination
      className={cn('[&>li]:flex-center flex gap-3 text-xs text-white', className)}
      pageSize={pageSize}
      defaultCurrent={currentPage}
      total={total}
      showLessItems
      itemRender={(page, type, element) => itemRender({ page, type, element, route: getRoute(page), currentPage })}
      locale={{
        next_page: 'next',
        prev_page: 'prev',
      }}
      prevIcon={<ChevronLeft className='h-4 w-4' />}
      nextIcon={<ChevronRight className='h-4 w-4' />}
    />
  );
}
