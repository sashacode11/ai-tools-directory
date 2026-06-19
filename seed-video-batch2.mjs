import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://ljjcbcxyinpykmcueykm.supabase.co',
  'sb_publishable_Opn0yui1j33Ohiz5biMsqQ_Yx6GxsMO',
);

const tools = [
  {
    name: 'Genmo AI',
    slug: 'genmo-ai',
    tagline: 'AI video and animation generation platform',
    description:
      'Genmo AI generates videos and animations from text prompts and images. It supports creative storytelling through AI-generated visual narratives. Used by artists and creators exploring AI-generated animated content.',
    category: 'Video',
    pricing: 'freemium',
    website_url: 'https://genmo.ai',
  },
  {
    name: 'Moonvalley',
    slug: 'moonvalley',
    tagline: 'AI cinematic video generation from text',
    description:
      'Moonvalley generates cinematic quality videos from text prompts using advanced AI models. It focuses on photorealistic and artistic video output. Currently in early access for creators and filmmakers.',
    category: 'Video',
    pricing: 'freemium',
    website_url: 'https://moonvalley.ai',
  },
  {
    name: 'Higgsfield AI',
    slug: 'higgsfield-ai',
    tagline: 'AI social video generation platform',
    description:
      'Higgsfield AI specializes in generating social media videos from text and images. It produces short-form content optimized for TikTok and Instagram Reels. Used by social media creators for fast AI video content production.',
    category: 'Video',
    pricing: 'freemium',
    website_url: 'https://higgsfield.ai',
  },
  {
    name: 'Pixverse',
    slug: 'pixverse',
    tagline: 'Free AI video generator online',
    description:
      'Pixverse generates high quality AI videos from text prompts and images for free. It supports multiple video styles from realistic to anime. Popular as a free alternative to premium video generation platforms.',
    category: 'Video',
    pricing: 'freemium',
    website_url: 'https://pixverse.ai',
  },
  {
    name: 'Reface App',
    slug: 'reface-app',
    tagline: 'AI face swap app for videos and GIFs',
    description:
      'Reface is a mobile app that swaps your face into videos, GIFs, and memes using AI. It has a massive library of templates from movies and pop culture. One of the most downloaded AI entertainment apps globally.',
    category: 'Video',
    pricing: 'freemium',
    website_url: 'https://reface.ai',
  },
  {
    name: 'Filmora AI',
    slug: 'filmora-ai',
    tagline: 'AI video editing with smart features',
    description:
      'Filmora is a popular video editor with AI-powered features like auto reframe, silence detection, and AI portrait. It is designed for creators who want professional results without complexity. Used by YouTubers, students, and small business owners.',
    category: 'Video',
    pricing: 'freemium',
    website_url: 'https://filmora.wondershare.com',
  },
  {
    name: 'Clideo',
    slug: 'clideo',
    tagline: 'Online video editor with AI tools',
    description:
      'Clideo is a browser-based video editor with AI-powered background removal and subtitle generation. It handles common video editing tasks without software installation. Used by casual creators and marketers for quick online video edits.',
    category: 'Video',
    pricing: 'freemium',
    website_url: 'https://clideo.com',
  },
  {
    name: 'FlexClip',
    slug: 'flexclip',
    tagline: 'AI-powered online video maker',
    description:
      'FlexClip is an online video maker with AI script writing, text-to-speech, and background removal. It includes 6000+ templates for social media and business videos. Used by small businesses and marketers for professional video content.',
    category: 'Video',
    pricing: 'freemium',
    website_url: 'https://flexclip.com',
  },
  {
    name: 'Gling AI',
    slug: 'gling-ai',
    tagline: 'AI video editor for YouTubers',
    description:
      'Gling AI automatically cuts silences and bad takes from raw YouTube video footage. It saves creators hours of manual editing with one-click rough cuts. Designed specifically for solo YouTubers editing talking head videos.',
    category: 'Video',
    pricing: 'paid',
    website_url: 'https://gling.ai',
  },
  {
    name: 'Zubtitle',
    slug: 'zubtitle',
    tagline: 'AI captions and video optimization tool',
    description:
      'Zubtitle automatically adds captions to videos and optimizes them for social media. It resizes videos for different platform formats and adds progress bars. Used by content creators repurposing video content across multiple platforms.',
    category: 'Video',
    pricing: 'paid',
    website_url: 'https://zubtitle.com',
  },
  {
    name: 'Simon Says',
    slug: 'simon-says',
    tagline: 'AI transcription for video editing workflows',
    description:
      'Simon Says transcribes video and audio for editing in Premiere Pro, Final Cut, and Avid. It enables text-based video editing by searching and cutting from transcripts. Used by professional video editors and documentary filmmakers.',
    category: 'Video',
    pricing: 'freemium',
    website_url: 'https://simonsays.ai',
  },
  {
    name: 'Translate Video',
    slug: 'translate-video',
    tagline: 'AI video translation into 75 languages',
    description:
      'Translate.video automatically translates and dubs video content into 75+ languages. It preserves the original speaker timing and adds translated subtitles. Used by content creators and businesses expanding into international markets.',
    category: 'Video',
    pricing: 'freemium',
    website_url: 'https://translate.video',
  },
  {
    name: 'Vmaker AI',
    slug: 'vmaker-ai',
    tagline: 'AI screen recorder and video editor',
    description:
      'Vmaker AI is a screen recorder with AI-powered video editing and noise removal. It includes an AI script writer and automatic caption generator. Used by product teams and educators creating tutorial and demo videos.',
    category: 'Video',
    pricing: 'freemium',
    website_url: 'https://vmaker.com',
  },
  {
    name: 'Lumen5',
    slug: 'lumen5',
    tagline: 'AI video creation from blog content',
    description:
      'Lumen5 transforms blog posts and articles into engaging social media videos using AI. It automatically matches text with relevant stock footage and music. Used by content marketing teams repurposing written content into video.',
    category: 'Video',
    pricing: 'freemium',
    website_url: 'https://lumen5.com',
  },
  {
    name: 'Vyond',
    slug: 'vyond',
    tagline: 'AI animated video creation platform',
    description:
      'Vyond is a professional animated video platform with AI-assisted character animation. It includes a vast library of characters, props, and backgrounds. Used by L&D teams and marketers for professional animated business videos.',
    category: 'Video',
    pricing: 'paid',
    website_url: 'https://vyond.com',
  },
  {
    name: 'Powtoon',
    slug: 'powtoon',
    tagline: 'AI animated presentations and videos',
    description:
      'Powtoon creates animated videos and presentations with AI-powered design suggestions. It offers templates for business explainers, training, and marketing. Used by educators and business teams for engaging animated content.',
    category: 'Video',
    pricing: 'freemium',
    website_url: 'https://powtoon.com',
  },
  {
    name: 'Biteable',
    slug: 'biteable',
    tagline: 'AI video maker for business teams',
    description:
      'Biteable is a simple AI video maker with templates for ads, announcements, and explainers. It includes a brand kit feature for consistent company video content. Used by HR, marketing, and comms teams for quick professional videos.',
    category: 'Video',
    pricing: 'freemium',
    website_url: 'https://biteable.com',
  },
  {
    name: 'Renderforest',
    slug: 'renderforest',
    tagline: 'AI video, logo, and website maker',
    description:
      'Renderforest is an all-in-one platform for creating AI videos, logos, and websites. It offers 1000+ templates for intros, slideshows, and promotional videos. Used by small businesses and content creators for diverse visual content needs.',
    category: 'Video',
    pricing: 'freemium',
    website_url: 'https://renderforest.com',
  },
  {
    name: 'Autopod',
    slug: 'autopod',
    tagline: 'AI auto-editing plugin for video podcasts',
    description:
      'Autopod is an Adobe Premiere Pro plugin that automatically edits multi-camera podcast videos. It switches between cameras based on who is speaking using AI. Used by video podcast producers to automate the editing process.',
    category: 'Video',
    pricing: 'paid',
    website_url: 'https://autopod.fm',
  },
  {
    name: 'Topaz Video AI',
    slug: 'topaz-video-ai',
    tagline: 'AI video upscaling and enhancement software',
    description:
      'Topaz Video AI upscales, denoises, and enhances video footage using machine learning. It can convert old footage to 4K or 8K resolution. Used by video editors, archivists, and film restoration professionals.',
    category: 'Video',
    pricing: 'paid',
    website_url: 'https://topazlabs.com/topaz-video-ai',
  },
  {
    name: 'Zeroscope',
    slug: 'zeroscope',
    tagline: 'Open-source text to video model',
    description:
      'Zeroscope is an open-source text-to-video model that runs locally or via API. It generates short video clips from text descriptions without watermarks. Popular with developers and researchers building video generation applications.',
    category: 'Video',
    pricing: 'free',
    website_url: 'https://huggingface.co/cerspense/zeroscope_v2_576w',
  },
  {
    name: 'Haiper AI',
    slug: 'haiper-ai',
    tagline: 'Fast and free AI video generation',
    description:
      'Haiper AI generates short video clips from text prompts or images for free. It is known for its fast generation speed and high visual quality. A strong free alternative to paid video generation tools.',
    category: 'Video',
    pricing: 'free',
    website_url: 'https://haiper.ai',
  },
  {
    name: 'Morph Studio',
    slug: 'morph-studio',
    tagline: 'AI cinematic video generation platform',
    description:
      'Morph Studio generates cinematic AI videos from text prompts with high production quality. It focuses on storytelling and narrative video generation. Aimed at filmmakers and creative directors exploring AI video.',
    category: 'Video',
    pricing: 'freemium',
    website_url: 'https://morphstudio.com',
  },
  {
    name: 'Stable Video Diffusion',
    slug: 'stable-video-diffusion',
    tagline: 'Open-source AI video generation model',
    description:
      'Stable Video Diffusion by Stability AI generates short video clips from images. It is open-source and can be run locally or accessed via API. Popular with developers building video generation applications.',
    category: 'Video',
    pricing: 'free',
    website_url: 'https://stability.ai/stable-video',
  },
  {
    name: 'Colossyan Creator',
    slug: 'colossyan-creator',
    tagline: 'AI video creator for workplace learning',
    description:
      'Colossyan Creator specializes in creating training and e-learning videos with AI avatars. It supports 70+ languages and allows custom avatar creation. Designed for HR teams and corporate training departments.',
    category: 'Video',
    pricing: 'paid',
    website_url: 'https://colossyan.com',
  },
];

async function main() {
  console.log(`Inserting ${tools.length} Video batch 2 tools...`);
  const { error } = await supabase
    .from('tools')
    .upsert(tools, { onConflict: 'slug' });
  if (error) console.error('Error:', error);
  else console.log(`✓ Done! Inserted ${tools.length} Video tools`);
}

main();
