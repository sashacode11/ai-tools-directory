import { createClient } from '@supabase/supabase-js';

export default defineEventHandler(async () => {
  const supabase = createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_KEY!,
  );

  const { data: tools } = await supabase.from('tools').select('slug');

  return (
    tools?.map(tool => ({
      loc: `/tools/${tool.slug}`,
      changefreq: 'monthly',
      priority: 0.8,
    })) ?? []
  );
});
