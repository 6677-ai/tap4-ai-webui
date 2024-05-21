import { cn } from '@/lib/utils';

import BaseImage from './BaseImage';

export default function Icon({
  src,
  className,
  title = '',
  width = 16,
  height = 16,
}: {
  src: string;
  title?: string;
  className?: string;
  width?: number;
  height?: number;
}) {
  return (
    <BaseImage
      src={src}
      className={cn('h-4 w-4', className)}
      width={width}
      height={height}
      alt={title || 'icon'}
      title={title || 'icon'}
    />
  );
}
