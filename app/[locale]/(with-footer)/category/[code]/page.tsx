/* eslint-disable react/jsx-props-no-spreading */

import type { Metadata } from 'next';
import Head from 'next/head';
import { notFound } from 'next/navigation';
import { createClient } from '@/db/supabase/client';

import { InfoPageSize, RevalidateOneHour } from '@/lib/constants';

import Content from './Content';

export const revalidate = RevalidateOneHour * 6;

type Category = {
  title: string;
  description: string;
  name: string;
};

// 定义查询返回的类型
interface SupabaseQueryResult<T> {
  data: T | null;
  error: {
    message: string;
  } | null;
}

// 创建 Supabase 客户端实例
const supabase = createClient();

export async function generateMetadata({ params }: { params: { code: string } }): Promise<Metadata> {
  const result: SupabaseQueryResult<Category> = await supabase
    .from('navigation_category')
    .select('title, description, name')
    .eq('name', params.code)
    .single();

  const { data, error } = result;

  if (error) {
    notFound();
  }

  if (!data || !data.title) {
    notFound();
  }

  return {
    title: `Best ${data.title} AI tools in 2024`,
    description: data.description || 'Default description',
  };
}

export default async function Page({ params }: { params: { code: string } }) {
  const result: SupabaseQueryResult<Category> = await supabase
    .from('navigation_category')
    .select('title, description, name')
    .eq('name', params.code)
    .single();

  const { data: categoryData, error: categoryError } = result;

  if (categoryError) {
    notFound();
  }

  if (!categoryData || !categoryData.title || !categoryData.description || !categoryData.name) {
    notFound();
  }

  const {
    data: navigationList,
    count,
    error: navigationError,
  } = await supabase
    .from('web_navigation')
    .select('*', { count: 'exact' })
    .eq('category_name', params.code)
    .range(0, InfoPageSize - 1);

  if (navigationError || !navigationList) {
    notFound();
  }

  return (
    <div className='container mx-auto px-4 py-8'>
      <Head>
        <title>{`Best ${categoryData.title} AI tools in 2024`}</title>
        <meta name='description' content={categoryData.description} />
      </Head>
      <header className='mb-8 text-center'>
        <h1 className='mb-2 text-4xl font-bold'>Best {categoryData.title} AI tools in 2024</h1>
        <p className='text-lg text-gray-600'>{categoryData.description}</p>
      </header>
      <main>
        <Content
          navigationList={navigationList}
          currentPage={1}
          total={count || 0}
          pageSize={InfoPageSize}
          route={`/category/${params.code}`}
        />
      </main>
    </div>
  );
}
