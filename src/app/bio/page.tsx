'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function BioPage() {
  const router = useRouter();

  useEffect(() => {
    // Ganti URL di sini dengan link tujuan
    router.push('https://msha.ke/flexation');
  }, [router]);

  return (
    <div className='flex min-h-screen items-center justify-center'>
      {/* <p className="text-lg font-semibold">Mengalihkan ke halaman lain...</p> */}
    </div>
  );
}
