'use client';

/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';

import { NAV_LINKS } from '@/lib/constants';
import { cn } from '@/lib/utils';

function NavDrawerItem({ isActive, name }: { isActive: boolean; name: string }) {
  return (
    <li
      className={cn(
        'flex h-[28px] w-full items-center justify-between rounded-[4px] border border-transparent bg-[#2C2D36] pl-[14px] pr-2',
        isActive && 'border-white bg-[#15141A]',
      )}
    >
      <div className={cn('size-3 rounded-full bg-[#15141A]', isActive && 'bg-white')} />
      <div className={cn('text-sm text-white/40', isActive && 'text-white')}>{name}</div>
    </li>
  );
}

export default function NavigationDrawer({ open, setOpen }: { open: boolean; setOpen: (open: boolean) => void }) {
  const t = useTranslations('Navigation');
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(open);
  const router = useRouter();

  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  const NavLinks = NAV_LINKS.map((item) => ({
    ...item,
    label: t(`${item.code}`),
  }));

  const onClose = () => {
    setOpen(false);
    setIsOpen(false);
  };

  const onRoute = (route: string) => {
    router.push(route);
    onClose();
  };

  return (
    <>
      <div
        className={cn('fixed z-50 h-screen w-screen overflow-hidden bg-black/60', isOpen ? 'block' : 'hidden')}
        onClick={onClose}
      />
      <div
        className={cn(
          'fixed right-0 top-16 z-[99999] h-[calc(100%-64px)] w-[276px] transform bg-black shadow-lg transition-transform duration-300',
          isOpen ? 'translate-x-0' : 'translate-x-full',
        )}
      >
        <div className='flex size-full flex-col gap-3 px-3 py-6'>
          {NavLinks.map((item) => (
            <button type='button' key={item.code} onClick={() => onRoute(item.href)}>
              <NavDrawerItem
                name={item.label}
                isActive={pathname === item.href || (pathname.includes(item.href) && item.href !== '/')}
              />
              <span className='sr-only'>{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
