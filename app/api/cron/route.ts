/* eslint-disable import/prefer-default-export */
import { createClient } from '@/db/supabase/client';

import crawler from './crawler';

// submit table empty -> stop

// filter status
// isFeature (priority)
// time order

// when crawler is done
// insert web_nav table (tags <- tags[0] or 'other')
// update submit table status

export async function POST() {
  try {
    const supabase = createClient();

    const [{ data: categoryList, error: categoryListError }, { data: submitList, error: submitListError }] =
      await Promise.all([
        supabase.from('navigation_category').select(),
        supabase
          .from('submit')
          .select()
          .eq('status', 0)
          .order('is_feature', { ascending: false })
          .order('created_at', { ascending: true }),
      ]);
    if (categoryListError || !categoryList) {
      throw new Error(categoryListError.message);
    }

    if (submitListError || !submitList || !submitList[0]) {
      throw new Error(submitListError?.message);
    }

    const firstSubmitData = submitList[0];
    const res = await crawler({ url: firstSubmitData.url!, tags: categoryList!.map((item) => item.name) });

    if (res.code !== 200) {
      throw new Error(res.msg);
    }

    const { error: insertWebNavigationError } = await supabase.from('web_navigation').insert({
      content: res.data.description,
      detail: res.data.detail,
      name: res.data.name,
      image_url: res.data.screenshot_data,
      thumbnail_url: res.data.screenshot_thumbnail_data,
      tag_name: res.data.tags && res.data.tags?.length ? res.data.tags[0] : 'other',
      title: res.data.title,
      url: res.data.url,
    });

    if (insertWebNavigationError) {
      throw new Error(insertWebNavigationError.message);
    }

    const { error: updateSubmitError } = await supabase
      .from('submit')
      .update({ status: 1 })
      .eq('id', firstSubmitData.id);

    if (updateSubmitError) {
      throw new Error(updateSubmitError.message);
    }

    return Response.json(res);
  } catch (error) {
    return Response.json({ error });
  }
}
