import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/db/supabase/client';

const supabase = createClient();

export async function GET(req: NextRequest, { params }: { params: { name: string } }) {
  const { name } = params;

  if (!name) {
    return NextResponse.json({ error: 'Invalid category name' }, { status: 400 });
  }

  try {
    // 查询 navigation_category 表
    const { data: categoryData, error: categoryError } = await supabase
      .from('navigation_category')
      .select('title, description')
      .eq('name', name)
      .single();

    if (categoryError || !categoryData) {
      return NextResponse.json({ error: 'Category not found' }, { status: 404 });
    }

    // 查询 web_navigation 表
    const { data: websites, error: websitesError } = await supabase
      .from('web_navigation')
      .select('*')
      .eq('category_name', name);

    if (websitesError) {
      throw new Error('Error querying Supabase');
    }

    return NextResponse.json({ category: categoryData, websites }, { status: 200 });
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : 'Unknown error';
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
