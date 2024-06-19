// import { WebNavigationDetailData, WebNavigationListRow } from '../types';
export type WebNavigationListRow = {
  content: string;
  id: string;
  imageUrl: string | null;
  name: string;
  thumbnailUrl: string | null;
  title: string;
  url: string;
};

export type WebNavigationDetailData = {
  categoryName: string;
  collectionTime: string;
  content: string;
  detail: string;
  imageUrl: string;
  name: string;
  starRating: number;
  tagName: string;
  thumbnailUrl: string;
  title: string;
  url: string;
  websiteData: string;
};
