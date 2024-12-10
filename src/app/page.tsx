'use client';
import {
  Banknote,
  BookUser,
  Gift,
  Globe,
  Megaphone,
  Music,
  Palette,
  Pencil,
  Timer,
  Users,
  Zap,
} from 'lucide-react';
import * as React from 'react';
import '@/lib/env';

import FiturCard from '@/components/card/fitur.card';
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
            <Button variant='default'>Pilih Desain Impianmu</Button>
          </div>
        </div>
      </div>

      {/* fitur  */}
      <div className='space-y-5 px-10 py-20 md:px-32'>
        <div className='text-center'>
          <div className='font-secondary text-2xl font-bold text-red-950 md:text-3xl'>
            Fitur Undangan Digital Terbaik
          </div>
          <div className='text-xs text-neutral-600 md:text-lg'>
            Berbagai macam fitur terbaik undangan online yang Anda butuhkan ada
            disini dan <br className='hidden lg:inline' /> kami akan selalu
            berinovasi menambahkan fitur-fitur lainnya
          </div>
        </div>
        <div className='grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4'>
          <FiturCard
            icon={<Globe />}
            title='Domain Eksklusif'
            description='Menggunakan mekanisme subdomain dan tersedia penambahan add-on custom domain'
          />
          <FiturCard
            icon={<Users />}
            title='Custom Nama Tamu'
            description='Satu tamu, satu undangan. Selayaknya undangan pernikahan fisik'
          />
          <FiturCard
            icon={<Pencil />}
            title='Full Custom Teks'
            description='Seluruh teks pada undangan dapat Anda ubah sesuai keinginan'
          />
          <FiturCard
            icon={<Zap />}
            title='Shareblast (Beta)'
            description='Bagi undangan kepada seluruh tamu terdaftar dari WhatsApp hanya dengan 1 kali klik'
          />
          <FiturCard
            icon={<Music />}
            title='Konten Lengkap'
            description='Tersedia berbagai jenis konten baik teks, gambar, link, peta, musik hingga video'
          />
          <FiturCard
            icon={<Palette />}
            title='Tema Instan'
            description='Tersedia berbagai macam tema siap pakai yang dapat diganti kapan saja tanpa batas'
          />
          <FiturCard
            icon={<Palette />}
            title='Manajemen Tamu'
            description='Fitur pengaturan tamu baik personal / grup sesuai preferensi (undangan / informasi)'
          />
          <FiturCard
            icon={<BookUser />}
            title='Reservasi & Buku Tamu'
            description='Fitur penerima ucapan dari tamu dan konfirmasi kehadiran dengan manajemen data yang baik'
          />
          <FiturCard
            icon={<Banknote />}
            title='Pembayaran Mudah'
            description='Pembayaran dapat dilakukan kapan saja, mudah, otomatis dengan metode pembayaran yang lengkap'
          />
          <FiturCard
            icon={<Megaphone />}
            title='Story & Quotes'
            description='Ceritakan perjalanan / deskripsi undangan Anda & tambahkan quotes kepada tamu undangan'
          />
          <FiturCard
            icon={<Gift />}
            title='Hadiah'
            description='Tersedia fitur kirim hadiah secara online ke rekening kamu atau alamat melalui undanganmu'
          />
          <FiturCard
            icon={<Timer />}
            title='Countdown Timer'
            description='Tersedia fitur countdown timer yang dapat berfungsi sebagai pengingat waktu acara'
          />
        </div>
      </div>

      {/* tema-undangan  */}
      <div></div>

      {/* testimoni */}
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
              Sangat memuaskan! Kami bisa custom undangan sesuai dengan tema
              yang kami inginkan. Selain itu, layanan support dari tim Flexation
              sangat ramah dan membantu. Terima kasih atas pengalaman yang luar
              biasa ini!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
