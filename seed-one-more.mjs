import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://ljjcbcxyinpykmcueykm.supabase.co',
  'sb_publishable_Opn0yui1j33Ohiz5biMsqQ_Yx6GxsMO',
);

const tools = [
  {
    name: 'Pika Art',
    slug: 'pika-art',
    tagline: 'AI video generation from text and images',
    description:
      'Pika is an AI video generation platform that creates high quality video clips from text prompts and images. It supports style controls and camera motion for cinematic results. Used by creators and marketers for fast AI video production.',
    category: 'Video',
    pricing: 'freemium',
    website_url: 'https://pika.art',
  },
];

async function main() {
  const { error } = await supabase
    .from('tools')
    .upsert(tools, { onConflict: 'slug' });
  if (error) console.error('Error:', error);
  else console.log('✓ Done! Now run count-tools.mjs');
}

main();
