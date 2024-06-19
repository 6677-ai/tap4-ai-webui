type CrawlerRequest = {
  url: string;
  tags: string[];
};

type CrawlerResponse = {
  code: number;
  data: CrawlerData;
  msg: string;
};

type CrawlerData = {
  description: string;
  detail: string;
  languages: string[];
  name: string;
  screenshot_data: string;
  screenshot_thumbnail_data: string;
  tags: string[] | null;
  title: string;
  url: string;
};

export default async function crawler({ url, tags }: CrawlerRequest) {
  const res = await fetch(process.env.CRAWLER_API!, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      url,
      tags,
    }),
  });
  return (await res.json()) as CrawlerResponse;
}
