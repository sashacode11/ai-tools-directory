import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://ljjcbcxyinpykmcueykm.supabase.co',
  'sb_publishable_Opn0yui1j33Ohiz5biMsqQ_Yx6GxsMO',
);

const tools = [
  {
    name: 'Runway Gen-2',
    slug: 'runway-gen-2',
    tagline: 'Text and image to video AI generator',
    description:
      'Runway Gen-2 generates realistic videos from text prompts or images. It supports video-to-video transformation and motion brush controls. Used by filmmakers and content creators for AI-generated footage.',
    category: 'Video',
    pricing: 'freemium',
    website_url: 'https://runwayml.com',
  },
  {
    name: 'Sora',
    slug: 'sora',
    tagline: 'OpenAI text-to-video generation model',
    description:
      "Sora is OpenAI's text-to-video model capable of generating minute-long cinematic videos. It understands complex scenes, camera movements, and character consistency. Currently available to select creators and ChatGPT Plus users.",
    category: 'Video',
    pricing: 'paid',
    website_url: 'https://openai.com/sora',
  },
  {
    name: 'Synthesia',
    slug: 'synthesia',
    tagline: 'Create AI presenter videos without a camera',
    description:
      'Synthesia turns text scripts into professional videos with AI avatars. It offers 160+ AI presenters and supports 120+ languages. Used by enterprises for training videos, product demos, and corporate communications.',
    category: 'Video',
    pricing: 'paid',
    website_url: 'https://synthesia.io',
  },
  {
    name: 'HeyGen',
    slug: 'heygen',
    tagline: 'AI video generation with realistic avatars',
    description:
      'HeyGen creates videos featuring realistic AI avatars from text scripts. It includes voice cloning, avatar customization, and video translation features. Popular for marketing videos, sales outreach, and e-learning content.',
    category: 'Video',
    pricing: 'freemium',
    website_url: 'https://heygen.com',
  },
  {
    name: 'Descript',
    slug: 'descript',
    tagline: 'Edit video by editing the transcript',
    description:
      'Descript lets you edit video and audio by editing the text transcript. Features include overdub voice cloning, filler word removal, and screen recording. Popular with podcasters, YouTubers, and video editors.',
    category: 'Video',
    pricing: 'freemium',
    website_url: 'https://descript.com',
  },
  {
    name: 'Kling AI',
    slug: 'kling-ai',
    tagline: 'High-quality video generation from Kuaishou',
    description:
      'Kling AI is a video generation model by Kuaishou that produces cinematic video clips. It supports text-to-video and image-to-video with realistic motion. Emerging as a strong competitor to Sora and Runway.',
    category: 'Video',
    pricing: 'freemium',
    website_url: 'https://klingai.com',
  },
  {
    name: 'Luma Dream Machine',
    slug: 'luma-dream-machine',
    tagline: 'Fast realistic AI video generation',
    description:
      'Luma Dream Machine generates high-quality, realistic videos from text and images. It is known for fast generation speed and smooth, lifelike motion. Free tier available with daily generation limits.',
    category: 'Video',
    pricing: 'freemium',
    website_url: 'https://lumalabs.ai/dream-machine',
  },
  {
    name: 'Invideo AI',
    slug: 'invideo-ai',
    tagline: 'Turn text prompts into full videos',
    description:
      'Invideo AI converts text scripts or prompts into complete videos with voiceover, music, and stock footage. It supports YouTube, Instagram, and TikTok formats. Great for content creators who want fast video production.',
    category: 'Video',
    pricing: 'freemium',
    website_url: 'https://invideo.io',
  },
  {
    name: 'Pictory',
    slug: 'pictory',
    tagline: 'Turn blog posts into videos automatically',
    description:
      'Pictory converts long-form blog posts and scripts into short branded videos. It automatically selects relevant stock footage and adds captions. Used by marketers to repurpose written content into video format.',
    category: 'Video',
    pricing: 'paid',
    website_url: 'https://pictory.ai',
  },
  {
    name: 'Vidyo AI',
    slug: 'vidyo-ai',
    tagline: 'Repurpose long videos into short clips',
    description:
      'Vidyo AI automatically extracts the best moments from long videos for social media. It adds captions, identifies key highlights, and formats clips for TikTok and Reels. Ideal for podcasters and YouTubers repurposing content.',
    category: 'Video',
    pricing: 'freemium',
    website_url: 'https://vidyo.ai',
  },
  {
    name: 'Opus Clip',
    slug: 'opus-clip',
    tagline: 'AI video clipping for social media',
    description:
      'Opus Clip uses AI to find the most engaging moments in long videos and converts them into viral short clips. It adds animated captions and scores clips by virality potential. Popular with content creators and marketers.',
    category: 'Video',
    pricing: 'freemium',
    website_url: 'https://opus.pro',
  },
  {
    name: 'Captions AI',
    slug: 'captions-ai',
    tagline: 'AI captions and video editing on mobile',
    description:
      'Captions AI automatically generates accurate captions for videos on iOS and Android. It includes AI eye contact correction, background replacement, and clip editing. Widely used by TikTok and Instagram creators.',
    category: 'Video',
    pricing: 'freemium',
    website_url: 'https://captions.ai',
  },
  {
    name: 'Wisecut',
    slug: 'wisecut',
    tagline: 'Automatic video editing with AI',
    description:
      'Wisecut automatically removes silences, adds background music, and creates subtitles. It uses AI to detect pacing and cut videos for maximum engagement. Good for YouTubers and online course creators.',
    category: 'Video',
    pricing: 'freemium',
    website_url: 'https://wisecut.video',
  },
  {
    name: 'Fliki',
    slug: 'fliki',
    tagline: 'Turn text into videos with AI voices',
    description:
      'Fliki converts blog posts, tweets, and scripts into videos using AI voiceovers. It includes 1900+ realistic voices in 75+ languages. Popular for creating faceless YouTube channels and social media content.',
    category: 'Video',
    pricing: 'freemium',
    website_url: 'https://fliki.ai',
  },
  {
    name: 'Steve AI',
    slug: 'steve-ai',
    tagline: 'Convert scripts to animated or live videos',
    description:
      'Steve AI transforms text scripts into animated or live-action videos using AI. It offers a library of 100 million stock assets and animated characters. Used for explainer videos, ads, and training content.',
    category: 'Video',
    pricing: 'paid',
    website_url: 'https://steve.ai',
  },
  {
    name: 'Colossyan',
    slug: 'colossyan',
    tagline: 'AI video creation for workplace learning',
    description:
      'Colossyan specializes in creating training and e-learning videos with AI avatars. It supports 70+ languages and allows custom avatar creation. Designed for HR teams and corporate training departments.',
    category: 'Video',
    pricing: 'paid',
    website_url: 'https://colossyan.com',
  },
  {
    name: 'Hour One',
    slug: 'hour-one',
    tagline: 'AI video production with human presenters',
    description:
      'Hour One creates professional videos featuring realistic AI human presenters. It is used for corporate training, news broadcasting, and marketing videos. Offers custom character creation from real people.',
    category: 'Video',
    pricing: 'paid',
    website_url: 'https://hourone.ai',
  },
  {
    name: 'Elai IO',
    slug: 'elai-io',
    tagline: 'Build AI videos with avatars from text',
    description:
      'Elai.io generates videos with AI avatars from simple text input. It supports custom branded avatars and 65+ languages. Used by businesses for product explainers and employee training videos.',
    category: 'Video',
    pricing: 'paid',
    website_url: 'https://elai.io',
  },
  {
    name: 'Deepbrain AI',
    slug: 'deepbrain-ai',
    tagline: 'AI video studios with hyper-realistic avatars',
    description:
      'Deepbrain AI creates videos with hyper-realistic AI human avatars from text scripts. It is used for news production, customer service videos, and digital humans. Features the fastest video generation in the industry.',
    category: 'Video',
    pricing: 'paid',
    website_url: 'https://deepbrain.io',
  },
  {
    name: 'Veed IO',
    slug: 'veed-io',
    tagline: 'Online video editor with AI tools',
    description:
      'Veed.io is a browser-based video editor with AI-powered subtitles, translation, and noise removal. It includes screen recording, teleprompter, and video compression tools. Popular with social media creators and educators.',
    category: 'Video',
    pricing: 'freemium',
    website_url: 'https://veed.io',
  },
  {
    name: 'Kapwing',
    slug: 'kapwing',
    tagline: 'AI-powered online video editor for teams',
    description:
      'Kapwing is a collaborative online video editor with AI subtitle generation and smart cut tools. It supports team workspaces and brand kit features. Used by marketing teams and content agencies for social video production.',
    category: 'Video',
    pricing: 'freemium',
    website_url: 'https://kapwing.com',
  },
  {
    name: 'Submagic',
    slug: 'submagic',
    tagline: 'AI captions for short-form video content',
    description:
      'Submagic generates trendy animated captions for TikTok, Reels, and YouTube Shorts. It automatically highlights keywords and adds emojis for engagement. Designed specifically for short-form content creators.',
    category: 'Video',
    pricing: 'paid',
    website_url: 'https://submagic.co',
  },
  {
    name: 'Munch',
    slug: 'munch',
    tagline: 'AI video repurposing for social media',
    description:
      'Munch extracts the most engaging clips from long-form videos using AI. It analyzes trending topics and matches clips to current social media trends. Used by brands and creators to maximize content reach.',
    category: 'Video',
    pricing: 'paid',
    website_url: 'https://getmunch.com',
  },
  {
    name: 'Vizard AI',
    slug: 'vizard-ai',
    tagline: 'Repurpose webinars and podcasts into clips',
    description:
      'Vizard AI converts webinars, podcasts, and interviews into shareable social clips. It identifies the best moments and adds captions automatically. Great for B2B marketers and podcast producers.',
    category: 'Video',
    pricing: 'freemium',
    website_url: 'https://vizard.ai',
  },
  {
    name: 'Typeframes',
    slug: 'typeframes',
    tagline: 'Create product videos from text',
    description:
      'Typeframes generates animated product demo videos from text descriptions. It is designed for SaaS companies and app developers showcasing their products. Produces clean, modern videos without any design skills needed.',
    category: 'Video',
    pricing: 'paid',
    website_url: 'https://typeframes.com',
  },
  {
    name: 'Shuffll',
    slug: 'shuffll',
    tagline: 'AI video production platform for marketing',
    description:
      'Shuffll is a video production platform that uses AI to create branded marketing videos. It includes customizable templates, AI scripting, and brand kit integration. Built for marketing teams needing fast professional video content.',
    category: 'Video',
    pricing: 'paid',
    website_url: 'https://shuffll.com',
  },
  {
    name: 'Animoto',
    slug: 'animoto',
    tagline: 'Easy video maker with AI assistance',
    description:
      'Animoto is a simple drag-and-drop video maker with AI-powered storyboard suggestions. It includes licensed music, stock footage, and branded templates. Popular with small businesses and real estate agents.',
    category: 'Video',
    pricing: 'freemium',
    website_url: 'https://animoto.com',
  },
  {
    name: 'Loomly',
    slug: 'loomly',
    tagline: 'Social media video scheduling with AI',
    description:
      'Loomly is a social media management tool with AI-assisted video creation and scheduling. It suggests content ideas based on trending topics and calendar events. Used by social media managers and marketing agencies.',
    category: 'Video',
    pricing: 'paid',
    website_url: 'https://loomly.com',
  },
  {
    name: 'Rask AI',
    slug: 'rask-ai',
    tagline: 'AI video translation and dubbing tool',
    description:
      "Rask AI translates and dubs videos into 130+ languages while preserving the original speaker's voice. It supports lip sync for more natural-looking dubbed videos. Used by content creators expanding to global audiences.",
    category: 'Video',
    pricing: 'paid',
    website_url: 'https://rask.ai',
  },
  {
    name: 'Papercup',
    slug: 'papercup',
    tagline: 'AI dubbing for global video distribution',
    description:
      'Papercup uses AI to dub videos into multiple languages with natural-sounding voices. It preserves the emotional tone and pacing of the original speaker. Used by broadcasters and media companies for international distribution.',
    category: 'Video',
    pricing: 'paid',
    website_url: 'https://papercup.com',
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
    name: 'Wondershare Filmora',
    slug: 'wondershare-filmora',
    tagline: 'AI-powered video editing for creators',
    description:
      'Filmora is a user-friendly video editor with AI scene detection, auto reframe, and noise removal. It includes motion tracking, green screen, and 1000+ effects. Popular with beginner and intermediate video editors.',
    category: 'Video',
    pricing: 'freemium',
    website_url: 'https://filmora.wondershare.com',
  },
  {
    name: 'Podcastle',
    slug: 'podcastle',
    tagline: 'AI podcast and video recording platform',
    description:
      'Podcastle is an AI-powered platform for recording, editing, and publishing podcasts and videos. It includes noise cancellation, AI voice enhancement, and remote interview recording. Great for podcasters and video journalists.',
    category: 'Video',
    pricing: 'freemium',
    website_url: 'https://podcastle.ai',
  },
  {
    name: 'Cliplama',
    slug: 'cliplama',
    tagline: 'AI short video creator from long content',
    description:
      'Cliplama automatically creates short videos from long-form content like podcasts and webinars. It identifies highlight moments and adds subtitles and branding. Designed for content marketers and social media teams.',
    category: 'Video',
    pricing: 'freemium',
    website_url: 'https://cliplama.com',
  },
  {
    name: 'Videogen',
    slug: 'videogen',
    tagline: 'Generate stock videos with AI',
    description:
      'Videogen creates original stock video clips from text prompts using AI. It solves the problem of finding the right stock footage by generating exactly what you need. Useful for marketers and video editors.',
    category: 'Video',
    pricing: 'paid',
    website_url: 'https://videogen.io',
  },
  {
    name: 'Movio',
    slug: 'movio',
    tagline: 'AI spokesperson video creator',
    description:
      'Movio creates marketing videos featuring AI spokesperson avatars from text scripts. It offers 200+ AI avatars and 20+ languages. Used by e-commerce stores and digital marketers for product promotion videos.',
    category: 'Video',
    pricing: 'paid',
    website_url: 'https://movio.la',
  },
  {
    name: 'Phenaki',
    slug: 'phenaki',
    tagline: 'Long-form AI video generation from text',
    description:
      'Phenaki is a Google research model that generates long videos from text prompts. It can create videos of variable length from detailed story descriptions. Represents a step toward AI-generated long-form film content.',
    category: 'Video',
    pricing: 'free',
    website_url: 'https://phenaki.video',
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
];

async function main() {
  console.log(`Inserting ${tools.length} Video tools...`);
  const { error } = await supabase
    .from('tools')
    .upsert(tools, { onConflict: 'slug' });

  if (error) console.error('Error:', error);
  else console.log(`✓ Done! Inserted ${tools.length} Video tools`);
}

main();
