/* eslint-disable react/jsx-props-no-spreading */

import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { createClient } from '@/db/supabase/client';

import { InfoPageSize, RevalidateOneHour } from '@/lib/constants';

import Content from './Content';

export const revalidate = RevalidateOneHour * 6;

export async function generateMetadata({ params }: { params: { code: string } }): Promise<Metadata> {
  const supabase = createClient();
  const { data: categoryList } = await supabase.from('navigation_category').select().eq('name', params.code);

  if (!categoryList || !categoryList[0]) {
    notFound();
  }

  return {
    title: categoryList[0].title,
  };
}

export default async function Page({ params }: { params: { code: string } }) {
  const supabase = createClient();
  const [{ data: categoryList }, { data: navigationList, count }] = await Promise.all([
    supabase.from('navigation_category').select().eq('name', params.code),
    supabase
      .from('web_navigation')
      .select('*', { count: 'exact' })
      .eq('category_name', params.code)
      .range(0, InfoPageSize - 1),
  ]);

  if (!categoryList || !categoryList[0]) {
    notFound();
  }

  return (
    <Content
      headerTitle={categoryList[0]!.title || params.code}
      navigationList={navigationList!}
      currentPage={1}
      total={count!}
      pageSize={InfoPageSize}
      route={`/category/${params.code}`}
    />
  );
}
