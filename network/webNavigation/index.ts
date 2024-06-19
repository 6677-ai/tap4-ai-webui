import { WebNavigationDetailData, WebNavigationListRow } from '@/lib/data';

import { createSupabaseClient } from '../../db/supabase/client';

/* eslint-disable @typescript-eslint/indent */
export type ResponseBase<T> = {
  code: number;
  msg: string;
} & T;

export type ResponseRows<T = any> = ResponseBase<{
  total: number;
  rows: T;
}>;

export type ResponseData<T = any> = ResponseBase<{
  data: T;
}>;

export type WebNavigationListRequest = {
  content?: string;
  name?: string;
  pageNum: number;
  pageSize: number;
  title?: string;
};

export async function getWebNavigationList({ pageNum, pageSize }: WebNavigationListRequest) {
  const supabase = createSupabaseClient();
  const { data, error } = await supabase
    .from('web_navigation')
    .select('id, content, image_url, name, thumbnail_url, title, url')
    .range((pageNum - 1) * pageSize, pageSize);

  if (error) {
    console.error('Error fetching web navigation list rows:', error);
    return [];
  }

  const res = {
    code: 200,
    msg: 'success',
    rows: data.map((item) => ({
      id: item.id,
      content: item.content,
      imageUrl: item.image_url,
      name: item.name,
      thumbnailUrl: item.thumbnail_url,
      title: item.title,
      url: item.url,
    })),
    total: data.length,
  } satisfies ResponseRows<WebNavigationListRow[]>;

  return res;
}

export async function getWebNavigationDetail(name: string) {
  const supabase = createSupabaseClient();
  const { data, error } = await supabase
    .from('web_navigation')
    .select(
      'category_name, collection_time, content, detail, image_url, name, star_rating, tag_name, thumbnail_url, title, url, website_data',
    )
    .eq('name', name);

  if (error) {
    console.error('Error fetching web navigation detail data:', error);
    return [];
  }
  const dataList = data.map((item) => ({
    categoryName: item.category_name,
    collectionTime: item.collection_time,
    content: item.content,
    detail: item.detail,
    imageUrl: item.image_url,
    name: item.name,
    starRating: item.star_rating,
    tagName: item.tag_name,
    thumbnailUrl: item.thumbnail_url,
    title: item.title,
    url: item.url,
    websiteData: item.website_data,
  }));

  const aiItem = dataList.find((item) => item.name === name) as WebNavigationDetailData;

  const res: ResponseData<WebNavigationDetailData> = {
    code: 200,
    msg: 'success',
    data: aiItem,
  };

  return res;
}
