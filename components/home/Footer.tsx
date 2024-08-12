import { HTMLAttributeAnchorTarget } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { CONTACT_US_EMAIL } from '@/lib/env';

function InfoLink({
  href,
  title,
  target,
  type,
}: {
  href: string;
  title: string;
  target?: HTMLAttributeAnchorTarget;
  type?: string;
}) {
  return (
    <Link
      href={href}
      title={title}
      className='whitespace-nowrap text-xs hover:opacity-70 lg:text-sm'
      target={target}
      type={type}
    >
      {title}
    </Link>
  );
}

export default function Footer() {
  const t = useTranslations('Footer');

  const SupportLinks = [
    {
      title: 'Flux AI Image Generator',
      href: 'https://flux-ai.io/',
    },
    {
      title: 'Photo to Video AI',
      href: 'https://dreammachineai.online/',
    },
    {
      title: 'Flux Pro Image Generator',
      href: 'https://flux-pro.net/',
    },
    {
      title: t('tap4'),
      href: 'https://tap4.ai/',
    },
    {
      title: t('tattoo'),
      href: 'https://tattooai.design/',
    },
  ];

  const INFO_LIST = [
    {
      title: t('privacy'),
      href: '/privacy-policy',
    },
    {
      title: t('termsConditions'),
      href: '/terms-of-service',
    },
  ];

  return (
    <footer className='w-full bg-[#15141A]'>
      <div className='mx-auto flex min-h-[251px] max-w-pc flex-col items-center justify-between p-10 pb-5 lg:h-[180px] lg:flex-row lg:px-0 lg:pb-10'>
        <div className='flex flex-col items-center lg:items-stretch'>
          <p className='text-xl font-bold text-white lg:h-8 lg:text-[32px]'>{t('title')}</p>
          <p className='text-xs'>{t('subTitle')}</p>
        </div>
        <div className='mt-5 flex flex-col items-center gap-y-5 lg:mt-0 lg:flex-row lg:items-stretch lg:gap-x-10'>
          <div className='flex w-full flex-col gap-2'>
            <p className='font-bold'>{t('support')}</p>
            {SupportLinks.map((item) => (
              <a
                href={item.href}
                key={item.href}
                target='_blank'
                rel='noreferrer'
                className='text-xs hover:opacity-70 lg:text-sm'
                title={item.title}
              >
                {item.title}
              </a>
            ))}
          </div>
          <div className='grid grid-cols-2 gap-x-10 gap-y-5 lg:grid-cols-1 lg:gap-3'>
            {INFO_LIST.map((item) => (
              <InfoLink key={item.href} href={item.href} title={item.title} />
            ))}
            <a
              href={`mailto:${CONTACT_US_EMAIL}`}
              className='whitespace-nowrap text-xs hover:opacity-70 lg:text-sm'
              title={t('contactUs')}
              type='email'
            >
              {t('contactUs')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
