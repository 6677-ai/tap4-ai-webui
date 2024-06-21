/* eslint-disable no-template-curly-in-string */
type CrawlerRequest = {
  url: string;
  tags: string[];
  callback_url: string;
  key: string;
};

type CrawlerResponse = {
  code: number;
  msg: string;
};

// type CrawlerData = {
//   description: string;
//   detail: string;
//   languages: string[];
//   name: string;
//   screenshot_data: string;
//   screenshot_thumbnail_data: string;
//   tags: string[] | null;
//   title: string;
//   url: string;
// };

export default async function crawler({ url, tags, callback_url, key }: CrawlerRequest) {
  const crawlerKey = process.env.CRAWLER_API_KEY;
  const res = await fetch(process.env.CRAWLER_API!, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${crawlerKey}`,
    },
    body: JSON.stringify({
      url,
      tags,
      callback_url,
      key,
    }),
  });
  return (await res.json()) as CrawlerResponse;
}
