import { CircleHelp } from 'lucide-react';
import { useTranslations } from 'next-intl';

function TitleItem({ children }: { children: React.ReactNode }) {
  return (
    <h3 className='flex items-center gap-1 text-2xl'>
      <CircleHelp /> {children}
    </h3>
  );
}

function ContentItem({ children }: { children: React.ReactNode }) {
  return <p className='mt-3 text-white/60'>{children}</p>;
}

export default function Faq() {
  const t = useTranslations('Faq');
  return (
    <div className='mx-auto max-w-pc space-y-8 pb-5'>
      <h2 className='text-center text-2xl font-bold lg:pb-3 lg:text-3xl'>{t('title')}</h2>
      <div className='grid grid-cols-1 gap-5 px-3 lg:grid-cols-2 lg:gap-16 lg:px-0'>
        <div>
          <TitleItem>{t('1.question')}</TitleItem>
          <ContentItem>{t('1.answer')}</ContentItem>
        </div>
        <div>
          <TitleItem>{t('2.question')}</TitleItem>
          <ContentItem>{t('2.answer-1')}</ContentItem>
          <ContentItem>{t('2.answer-2')}</ContentItem>
          <ContentItem>{t('2.answer-3')}</ContentItem>
        </div>
        <div>
          <TitleItem>{t('3.question')}</TitleItem>
          <ContentItem>{t('3.answer-1')}</ContentItem>
          <ContentItem>{t('3.answer-2')}</ContentItem>
        </div>
        <div>
          <TitleItem>{t('4.question')}</TitleItem>
          <ContentItem>{t('4.answer')}</ContentItem>
        </div>
        <div>
          <TitleItem>{t('5.question')}</TitleItem>
          <ContentItem>{t('5.answer')}</ContentItem>
        </div>
        <div>
          <TitleItem>{t('6.question')}</TitleItem>
          <ContentItem>{t('6.answer')}</ContentItem>
        </div>
        <div>
          <TitleItem>{t('7.question')}</TitleItem>
          <ContentItem>{t('7.answer')}</ContentItem>
        </div>
        <div>
          <TitleItem>{t('8.question')}</TitleItem>
          <ContentItem>{t('8.answer')}</ContentItem>
        </div>
        <div>
          <TitleItem>{t('9.question')}</TitleItem>
          <ContentItem>{t('9.answer')}</ContentItem>
        </div>
        <div>
          <TitleItem>{t('10.question')}</TitleItem>
          <ContentItem>{t('10.answer')}</ContentItem>
        </div>
        <div>
          <TitleItem>{t('11.question')}</TitleItem>
          <ContentItem>{t('11.answer')}</ContentItem>
        </div>
      </div>
    </div>
  );
}
