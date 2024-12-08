'use client';
import * as React from 'react';
import '@/lib/env';

import { Button } from '@/components/ui/button';

export default function HomePage() {
  return (
    <div>
      <div className='relative h-screen bg-[url(/images/banner.jpeg)] bg-cover bg-center'>
        <div className='absolute inset-0 z-10 min-h-screen bg-black opacity-50'></div>

        {/* banner  */}
        <div className='relative z-20 grid min-h-screen content-center px-10 italic text-white lg:px-32'>
          <div>
            <div className='text-sm md:text-base'>Invitation Wedding</div>
            <div className='py-2 font-secondary text-3xl font-bold tracking-wide md:text-5xl lg:text-7xl'>
              Sebar Kabar Gembira <br />
              dalam Genggaman
            </div>
            <div className='text-sm md:text-base'>with FLEXATION</div>
          </div>

          <div className='py-10'>
            <Button className='scroll-button rounded-full bg-gray-200 px-5 py-3 text-xs font-semibold text-red-950 transition duration-200 ease-in-out hover:bg-red-900 hover:text-white'>
              Pilih Desain Impianmu
            </Button>
          </div>
        </div>
      </div>
      <div className='items-center gap-10 space-y-2 p-10 px-10 md:grid md:grid-flow-col md:space-y-0 lg:px-32'>
        <div className='w-fit space-y-2 text-center'>
          <div className='font-secondary text-xl font-semibold text-red-950 md:text-2xl'>
            Apa kata mereka tentang FLEXATION?
          </div>
          <div className='text-base text-red-900'>
            Sebarkan Undangan Anti Ribet <br />
            Satset terima beres Sebarkan Undangan Anti Ribet
          </div>
        </div>
        <div>
          <div className='w-fit max-w-96 space-y-2 rounded-xl bg-red-100 p-3 px-5'>
            <div className='flex items-end space-x-2'>
              <div className='h-8 w-8 rounded-full bg-white'></div>
              <div className='font-secondary font-semibold text-rose-800'>
                Arul & Tina
              </div>
            </div>
            <div className='text-sm text-rose-950'>
              Hi, terima kasih viding udah bantuin acara kita, kita dari awal
              emang sudah memlih viding karena banyak teman artis sudah pakai
              viding, semuanya oke servicenya cepet banget ada live streaming
              juga, jadi teman teman yang ga bisa dating bisa menyaksikan juga
              dan kita juga dapat recordnya jadi kalo mau nonton nikahan kita
              secara lengkap tuh ada rekamannya, pokonya keren banget, sukses
              selalu viding
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
