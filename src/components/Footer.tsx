import Link from 'next/link';
import React from 'react';
import { ImInstagram, ImWhatsapp } from 'react-icons/im';

import LogoFlexationLanscape from '~/svg/LogoFlexationLandscape.svg';

export default function Footer() {
  return (
    <div className='space-y-5 bg-[#B8445E] p-5 pb-20 text-[10px] font-light text-white md:p-10 md:text-xs lg:px-20 2xl:text-sm'>
      <div className='gap-16 space-y-2 lg:grid lg:grid-flow-col lg:space-y-0'>
        <div className='space-y-2'>
          <LogoFlexationLanscape className='w-28 lg:w-36' />
          <div>
            Undangan digital fleksibel yang membuat momen spesialmu lebih mudah
            dan hemat biaya. Dapatkan undangan digital yang praktis, interaktif,
            dan ramah lingkungan untuk segala acara.
          </div>
        </div>
        <div className='grid grid-flow-col gap-5 lg:gap-10'>
          <div className='space-y-1 md:space-y-2'>
            <div className='text-sm font-bold md:text-lg'>Produk</div>
            <div className='cursor-pointer hover:text-yellow-400'>
              Undangan Pernikahan
            </div>
            <div className='cursor-pointer hover:text-yellow-400'>
              Undangan Ulang Tahun
            </div>
            <div className='cursor-pointer hover:text-yellow-400'>
              Undangan Seminar
            </div>
            <div className='cursor-pointer hover:text-yellow-400'>
              Undangan Acara/ Perusahaan
            </div>
          </div>
          <div className='space-y-1 md:space-y-2'>
            <div className='text-sm font-bold md:text-lg'>Resources</div>
            <div className='cursor-pointer hover:text-yellow-400'>Blog</div>
            <div className='cursor-pointer hover:text-yellow-400'>
              Panduan Pengguna
            </div>
            <div className='cursor-pointer hover:text-yellow-400'>FAQ</div>
          </div>
          <div className='space-y-1 md:space-y-2'>
            <div className='text-sm font-bold md:text-lg'>Company</div>
            <div className='cursor-pointer hover:text-yellow-400'>
              Tentang Kami
            </div>
            <div className='cursor-pointer hover:text-yellow-400'>
              <Link href='https://wa.me/6285732705891'>Hubungi Kami</Link>
            </div>
          </div>
        </div>
        <div className='space-y-2'>
          <div className='text-sm font-bold md:text-lg'>Try It Today</div>
          <div className=''>
            Buat undangan digitalmu sekarang dan rasakan kemudahan berbagi momen
            spesial hanya dalam beberapa langkah!
          </div>
          <div className='lg:w-fullcursor-pointer w-fit rounded-full bg-white p-2 px-5 text-[10px] text-red-600 hover:bg-red-100'>
            <Link
              href='https://wa.me/6285732705891'
              className='flex items-center gap-2'
            >
              <ImWhatsapp size={20} />
              <div className=''>
                Chat on with Whatsapp <br /> +6285732705891
              </div>
            </Link>
          </div>
        </div>
      </div>
      <hr />
      <div className='flex justify-between'>
        <div className=''>
          @2024 Flexation x{' '}
          <Link href='https://flexdev.web.id' className='hover:text-yellow-400'>
            FlexDev
          </Link>
          . All rights reserved
        </div>
        <div className='flex gap-2'>
          <Link href='https://wa.me/6285732705891'>
            <ImWhatsapp />
          </Link>
          <Link href='https://instagram.com/flexation.id'>
            <ImInstagram />
          </Link>
        </div>
      </div>
    </div>
  );
}
