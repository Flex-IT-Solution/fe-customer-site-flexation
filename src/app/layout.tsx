import { Metadata } from 'next';
import * as React from 'react';

import '@/styles/globals.css';

import Footer from '@/components/Footer';
import BottomMenu from '@/components/navigation/bottom-menu';
import { Navbar } from '@/components/navigation/navbar';

// !STARTERCONF This is for demo purposes, remove @/styles/colors.css import immediately
import { siteConfig } from '@/constant/config';

// !STARTERCONF Change these default meta
// !STARTERCONF Look at @/constant/config to change them
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  robots: { index: true, follow: true },
  // !STARTERCONF this is the default favicon, you can generate your own from https://realfavicongenerator.net/
  // ! copy to /favicon folder
  icons: {
    icon: '/svg/LogoFlexation.svg',
    shortcut: '/svg/LogoFlexation.svg',
    apple: '/svg/LogoFlexation.svg',
  },
  manifest: `/favicon/site.webmanifest`,
  openGraph: {
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.title,
    images: [`${siteConfig.url}/images/og.jpg`],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: [`${siteConfig.url}/images/og.jpg`],
    creator: 'FLEXATION x FlexDev',
  },
  authors: [
    {
      name: 'FLEXATION x FlexDev',
      url: 'https://flexation.id',
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className='no-scrollbar relative overflow-x-hidden'>
        <div className='fixed left-0 right-0 top-0 z-50'>
          <Navbar />
        </div>
        {children}
        <div className='fixed bottom-2 left-0 right-0 z-50 lg:hidden'>
          <BottomMenu />
        </div>
        <Footer />
      </body>
    </html>
  );
}
