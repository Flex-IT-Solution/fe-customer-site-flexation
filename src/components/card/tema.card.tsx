import { StaticImageData } from 'next/image';
import Link from 'next/link';

import NextImage from '@/components/NextImage';
import { Button } from '@/components/ui/button';

type WeddingCardProps = {
  imageSrc: StaticImageData;
  alt: string;
  title: string;
  demoLink: string;
  orderLink?: string;
};

export default function TemaCard({
  imageSrc,
  alt,
  title,
  demoLink,
  orderLink = 'https://wa.me/6285732705891',
}: WeddingCardProps) {
  return (
    <div className='space-y-2 rounded-lg bg-red-50 p-3'>
      <NextImage
        src={imageSrc}
        alt={alt}
        useSkeleton={true}
        className='rounded-md'
      />
      <div className='flex items-center justify-between'>
        <div className='font-secondary text-lg font-semibold text-rose-800'>
          {title}
        </div>
        <div className='flex gap-2'>
          <Link href={demoLink}>
            <Button className='bg-rose-500 text-white hover:bg-rose-600 hover:text-rose-50'>
              Demo
            </Button>
          </Link>
          <Link href={orderLink}>
            <Button className='bg-rose-800 text-white hover:bg-rose-600 hover:text-rose-100'>
              Pesan
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
