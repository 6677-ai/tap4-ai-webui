import Link from 'next/link';
import { SquareArrowOutUpRight } from 'lucide-react';

import { WebNavigationListRow } from '@/lib/data';

import BaseImage from '../image/BaseImage';

export default function WebNavCard({ name, thumbnailUrl, title, url, content }: WebNavigationListRow) {
  // console.log('Props received by WebNavCard:', { name, thumbnailUrl, title, url, content });

  return (
    <div className='flex flex-col gap-3 rounded-[12px] bg-white p-4 shadow-md lg:p-6'>
      <Link href={`/ai/${name}`} title={title}>
        <BaseImage
          width={320}
          height={180}
          src={thumbnailUrl || '/path/to/default/image.jpg'}
          alt={title}
          title={title}
          className='aspect-[278/156] rounded-[8px] bg-gray-200 hover:opacity-70'
        />
      </Link>
      <div className='flex items-center justify-between'>
        <a href={url} title={title} target='_blank' rel='noreferrer' className='hover:opacity-70'>
          <h3 className='line-clamp-1 flex-1 text-sm font-bold text-gray-900 lg:text-base'>{title}</h3>
        </a>
        <a href={url} title={title} target='_blank' rel='noreferrer' className='hover:opacity-70'>
          <SquareArrowOutUpRight className='size-5 text-gray-900' />
          <span className='sr-only'>{title}</span>
        </a>
      </div>
      <p className='line-clamp-5 text-xs text-gray-900 lg:text-sm'>{content}</p>
    </div>
  );
}
