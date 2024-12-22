import { StaticImageData } from 'next/image';
import React from 'react';

import NextImage from '@/components/NextImage';

type TestimonialCardProps = {
  name: string;
  imageUrl?: StaticImageData;
  testimonial: string;
};

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  imageUrl,
  testimonial,
}) => {
  return (
    <div className='w-fit max-w-96 space-y-2 rounded-xl bg-red-100 p-3 px-5'>
      <div className='flex items-end space-x-2'>
        <div className='h-8 w-8 rounded-full bg-white'>
          <NextImage
            src={imageUrl || ''}
            alt={`${name}'s avatar`}
            className='h-full w-full rounded-full object-cover'
          />
        </div>
        <div className='font-secondary font-semibold text-rose-800'>{name}</div>
      </div>
      <div className='text-xs text-rose-950 lg:text-sm'>{testimonial}</div>
    </div>
  );
};

export default TestimonialCard;
