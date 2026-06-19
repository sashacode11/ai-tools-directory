import { createClient } from '@supabase/supabase-js';

export default defineEventHandler(async () => {
  const supabase = createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_KEY!,
  );

  const { data: tools } = await supabase.from('tools').select('slug');

  const toolUrls =
    tools?.map(tool => ({
      loc: `/tools/${tool.slug}`,
      changefreq: 'monthly',
      priority: 0.8,
    })) ?? [];

  const categoryUrls = [
    'writing',
    'image',
    'video',
    'audio',
    'code',
    'search',
    'productivity',
    'marketing',
    'education',
    'business',
  ].map(cat => ({
    loc: `/category/${cat}`,
    changefreq: 'weekly',
    priority: 0.9,
  }));

  return [...categoryUrls, ...toolUrls];
});
