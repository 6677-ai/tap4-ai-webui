import { dataList, detailList, WebNavigationDetailData, WebNavigationListRow } from '@/lib/data';

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
  console.log({ pageNum, pageSize });
  const res = { code: 200, msg: 'success', rows: dataList, total: dataList.length } satisfies ResponseRows<
    WebNavigationListRow[]
  >;

  return res;
}

export async function getWebNavigationDetail(name: string) {
  const res = {
    code: 200,
    msg: 'success',
    data: detailList.find((item) => item.name === name) as WebNavigationDetailData,
  } satisfies ResponseData<WebNavigationDetailData>;

  return res;
}
