import { notFound } from 'next/navigation';

import Faq from '@/components/Faq';

export default async function Layout({ children, params }: { children: React.ReactNode; params: { code?: string } }) {
  if (!params.code) {
    notFound();
  }

  return (
    <div className='mx-auto w-full max-w-pc px-3 lg:px-0'>
      {children}
      <Faq />
    </div>
  );
}
