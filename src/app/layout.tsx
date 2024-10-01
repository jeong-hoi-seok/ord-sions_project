import '@/styles/global.css';

import type { Metadata, NextPage } from 'next';
import { Noto_Sans_KR } from 'next/font/google';
import React from 'react';

const notoSansKR = Noto_Sans_KR({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'ORD 주판',
  description: '원랜디 주판',
};

const RootLayout: NextPage<React.PropsWithChildren> = (props) => {
  const { children } = props;

  return (
    <html lang='ko' className={notoSansKR.className}>
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
