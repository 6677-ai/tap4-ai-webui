'use client';

/* eslint-disable react/jsx-props-no-spreading */
import { useState } from 'react';
import { createClient } from '@/db/supabase/client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

import { FORM_PLACEHOLDER, WEBSITE_EXAMPLE } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import Spinning from '@/components/Spinning';

const FormSchema = z.object({
  website: z.string(),
  url: z.string().url(),
});

export default function SubmitForm({ className }: { className?: string }) {
  const supabase = createClient();
  const t = useTranslations('Submit');

  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      website: '',
      url: '',
    },
  });

  const onSubmit = async (formData: z.infer<typeof FormSchema>) => {
    let errMsg: any = t('networkError');
    try {
      setLoading(true);
      const { error } = await supabase.from('submit').insert({
        name: formData.website,
        url: formData.url,
        // email: ''
      });
      if (error) {
        errMsg = error.message;
        throw new Error();
      }
      toast.success(t('success'));
      form.reset();
    } catch (error) {
      toast.error(errMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn(
          'mx-3 mb-5 flex h-[449px] flex-col justify-between rounded-[12px] bg-[#2C2D36] px-3 py-5 lg:h-[557px] lg:w-[444px] lg:p-8',
          className,
        )}
      >
        <div className='space-y-3 lg:space-y-5'>
          <FormField
            control={form.control}
            name='website'
            render={({ field }) => (
              <FormItem className='space-y-1'>
                <FormLabel>{t('website')}</FormLabel>
                <FormControl>
                  <Input
                    placeholder='Tap4 AI'
                    className='input-border-pink h-[42px] w-full rounded-[8px] border-[0.5px] bg-dark-bg p-5'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='url'
            render={({ field }) => (
              <FormItem className='space-y-1'>
                <FormLabel>{t('url')}</FormLabel>
                <FormControl>
                  <Input
                    placeholder={FORM_PLACEHOLDER}
                    className='input-border-pink h-[42px] w-full rounded-[8px] border-[0.5px] bg-dark-bg p-5'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className='flex flex-col gap-[10px] lg:gap-8'>
          <button
            type='submit'
            disabled={loading}
            className={cn(
              'flex-center mt-auto h-[48px] w-full gap-4 rounded-[8px] bg-white text-center font-bold text-black hover:cursor-pointer hover:opacity-80',
              loading && 'hover:cursor-not-allowed',
            )}
          >
            {loading ? <Spinning className='size-[22px]' /> : t('submit')}
          </button>
          <p className='text-[13px] text-white/40'>
            {t('add')} <span className='text-white'>{WEBSITE_EXAMPLE}</span> {t('text')}
          </p>
        </div>
      </form>
    </Form>
  );
}
