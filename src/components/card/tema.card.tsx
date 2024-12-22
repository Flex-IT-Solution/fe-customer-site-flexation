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
}: WeddingCardProps) {
  return (
    <div
      data-aos='fade-up'
      className='space-y-2 rounded-2xl bg-red-100 p-3 lg:p-4 xl:space-y-4 xl:p-5'
    >
      <NextImage
        src={imageSrc}
        alt={alt}
        useSkeleton={true}
        classNames={{
          image: 'rounded-lg',
        }}
      />
      <div className='flex items-center justify-between'>
        <div className='font-secondary text-lg font-semibold text-rose-800 xl:text-2xl'>
          {title}
        </div>
        <div className='flex gap-2'>
          <Link href={demoLink}>
            <Button className='bg-rose-500 text-white hover:bg-rose-600 hover:text-rose-50'>
              Demo
            </Button>
          </Link>
          <Link href='https://wa.me/6285732705891'>
            <Button className='bg-rose-800 text-white hover:bg-rose-600 hover:text-rose-100'>
              Pesan
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
