import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://ljjcbcxyinpykmcueykm.supabase.co',
  'sb_publishable_Opn0yui1j33Ohiz5biMsqQ_Yx6GxsMO',
);

const tools = [
  {
    name: 'Midjourney',
    slug: 'midjourney',
    tagline: 'High-quality AI image generation via Discord',
    description:
      'Midjourney is one of the most popular AI image generators, known for stunning artistic quality. It operates through Discord with simple text prompts. Widely used by artists, designers, and creative professionals.',
    category: 'Image',
    pricing: 'paid',
    website_url: 'https://midjourney.com',
  },
  {
    name: 'DALL-E 3',
    slug: 'dall-e-3',
    tagline: 'OpenAI image generation with precise prompt following',
    description:
      "DALL-E 3 is OpenAI's most advanced image generation model, integrated into ChatGPT. It follows complex prompts with high accuracy and produces photorealistic or artistic images. Available via ChatGPT Plus and the OpenAI API.",
    category: 'Image',
    pricing: 'freemium',
    website_url: 'https://openai.com/dall-e-3',
  },
  {
    name: 'Stable Diffusion',
    slug: 'stable-diffusion',
    tagline: 'Open-source AI image generation model',
    description:
      'Stable Diffusion is a free, open-source image generation model you can run locally. It powers hundreds of third-party tools and has a massive community of fine-tuned models. Ideal for developers and power users wanting full control.',
    category: 'Image',
    pricing: 'free',
    website_url: 'https://stability.ai',
  },
  {
    name: 'Adobe Firefly',
    slug: 'adobe-firefly',
    tagline: 'Commercially safe AI image generation by Adobe',
    description:
      'Adobe Firefly is trained on licensed content making it safe for commercial use. It integrates with Photoshop, Illustrator, and Adobe Express. Features include generative fill, text effects, and image expansion.',
    category: 'Image',
    pricing: 'freemium',
    website_url: 'https://firefly.adobe.com',
  },
  {
    name: 'Leonardo AI',
    slug: 'leonardo-ai',
    tagline: 'AI image generation for game assets and art',
    description:
      'Leonardo AI specializes in generating consistent game assets, concept art, and illustrations. It offers fine-tuned models, image-to-image, and canvas editing tools. Popular with game developers and digital artists.',
    category: 'Image',
    pricing: 'freemium',
    website_url: 'https://leonardo.ai',
  },
  {
    name: 'Ideogram',
    slug: 'ideogram',
    tagline: 'AI image generator with accurate text rendering',
    description:
      'Ideogram is known for generating images with accurate, legible text embedded in them. It excels at posters, logos, and typographic designs. Free to use with a generous daily generation limit.',
    category: 'Image',
    pricing: 'freemium',
    website_url: 'https://ideogram.ai',
  },
  {
    name: 'Playground AI',
    slug: 'playground-ai',
    tagline: 'Free AI image creator with powerful editing tools',
    description:
      'Playground AI offers a free image generation platform with advanced editing capabilities. It supports multiple models including SDXL and its own Playground v2 model. Great for designers wanting a no-cost creative tool.',
    category: 'Image',
    pricing: 'freemium',
    website_url: 'https://playground.com',
  },
  {
    name: 'Nightcafe',
    slug: 'nightcafe',
    tagline: 'AI art generator with community features',
    description:
      'NightCafe is an AI art generator with a strong social community where users share creations. It supports multiple algorithms including Stable Diffusion, DALL-E, and CLIP-Guided Diffusion. Credits-based system with daily free credits.',
    category: 'Image',
    pricing: 'freemium',
    website_url: 'https://nightcafe.studio',
  },
  {
    name: 'Canva AI',
    slug: 'canva-ai',
    tagline: 'AI image tools built into Canva design platform',
    description:
      "Canva includes AI-powered image generation, background removal, and magic edit features. It integrates seamlessly with Canva's design templates and editor. Perfect for non-designers creating social media and marketing visuals.",
    category: 'Image',
    pricing: 'freemium',
    website_url: 'https://canva.com/ai-image-generator',
  },
  {
    name: 'Bing Image Creator',
    slug: 'bing-image-creator',
    tagline: 'Free AI image generation powered by DALL-E',
    description:
      "Bing Image Creator is Microsoft's free AI image generator powered by DALL-E 3. It is accessible directly from Bing search and Microsoft Edge browser. Completely free with a daily boost limit for faster generations.",
    category: 'Image',
    pricing: 'free',
    website_url: 'https://bing.com/images/create',
  },
  {
    name: 'Runway ML',
    slug: 'runway-ml',
    tagline: 'AI creative suite for images and video',
    description:
      'Runway ML offers AI-powered image generation, inpainting, and background removal tools. It is part of a broader creative suite that also includes video generation. Used by filmmakers, designers, and digital artists.',
    category: 'Image',
    pricing: 'freemium',
    website_url: 'https://runwayml.com',
  },
  {
    name: 'Pika Labs',
    slug: 'pika-labs',
    tagline: 'AI image and video generation platform',
    description:
      'Pika Labs generates high-quality images and videos from text prompts. It is known for its fast generation speed and cinematic output quality. Available through Discord and a web interface.',
    category: 'Image',
    pricing: 'freemium',
    website_url: 'https://pika.art',
  },
  {
    name: 'Artbreeder',
    slug: 'artbreeder',
    tagline: 'Blend and evolve AI-generated images',
    description:
      'Artbreeder lets users blend images together to create new unique artwork. It uses GAN technology to generate portraits, landscapes, and abstract art. Has a large community of shared creations to remix.',
    category: 'Image',
    pricing: 'freemium',
    website_url: 'https://artbreeder.com',
  },
  {
    name: 'DreamStudio',
    slug: 'dreamstudio',
    tagline: 'Official Stable Diffusion web interface',
    description:
      'DreamStudio is the official web app for Stable Diffusion by Stability AI. It offers fine-grained controls over generation parameters like steps, CFG scale, and seed. Credits-based pricing with pay-as-you-go model.',
    category: 'Image',
    pricing: 'paid',
    website_url: 'https://dreamstudio.ai',
  },
  {
    name: 'Fotor AI',
    slug: 'fotor-ai',
    tagline: 'AI photo editor and image generator',
    description:
      'Fotor combines AI image generation with a powerful online photo editor. It includes one-click background removal, AI portrait enhancer, and object eraser. Popular with social media creators and e-commerce sellers.',
    category: 'Image',
    pricing: 'freemium',
    website_url: 'https://fotor.com/ai-image-generator',
  },
  {
    name: 'Picsart AI',
    slug: 'picsart-ai',
    tagline: 'AI creative tools for photos and designs',
    description:
      'Picsart offers AI-powered photo editing, image generation, and design tools. Features include AI background remover, image enhancer, and text-to-image. Available on mobile and web with a large creator community.',
    category: 'Image',
    pricing: 'freemium',
    website_url: 'https://picsart.com',
  },
  {
    name: 'Remove.bg',
    slug: 'remove-bg',
    tagline: 'Instant AI background removal for images',
    description:
      'Remove.bg automatically removes backgrounds from photos in seconds using AI. It handles complex edges like hair and fur with high accuracy. Offers a free tier and API access for bulk processing.',
    category: 'Image',
    pricing: 'freemium',
    website_url: 'https://remove.bg',
  },
  {
    name: 'Clipdrop',
    slug: 'clipdrop',
    tagline: 'AI image editing tools by Stability AI',
    description:
      'Clipdrop offers a suite of AI image tools including background removal, upscaling, and relighting. It is built by Stability AI and uses cutting-edge diffusion models. Popular with product photographers and designers.',
    category: 'Image',
    pricing: 'freemium',
    website_url: 'https://clipdrop.co',
  },
  {
    name: 'Picso',
    slug: 'picso',
    tagline: 'AI art generator for mobile users',
    description:
      'Picso is a mobile-first AI art generator available on iOS and Android. It offers dozens of art styles and generates images from text prompts instantly. Great for casual creators and social media enthusiasts.',
    category: 'Image',
    pricing: 'freemium',
    website_url: 'https://picso.ai',
  },
  {
    name: 'Pixlr AI',
    slug: 'pixlr-ai',
    tagline: 'AI-powered online photo editor',
    description:
      'Pixlr is a browser-based photo editor with AI-powered tools like background remover and AI image generator. It offers Photoshop-like features without requiring software installation. Free tier available with premium upgrades.',
    category: 'Image',
    pricing: 'freemium',
    website_url: 'https://pixlr.com',
  },
  {
    name: 'Luminar Neo',
    slug: 'luminar-neo',
    tagline: 'AI photo editing software for photographers',
    description:
      'Luminar Neo is a desktop photo editing app with AI-powered sky replacement, portrait enhancement, and relight tools. It integrates with Lightroom and Photoshop as a plugin. Designed for photographers wanting AI-assisted editing.',
    category: 'Image',
    pricing: 'paid',
    website_url: 'https://skylum.com/luminar',
  },
  {
    name: 'Topaz Labs',
    slug: 'topaz-labs',
    tagline: 'AI photo enhancement and upscaling tools',
    description:
      'Topaz Labs offers AI tools for photo sharpening, noise reduction, and upscaling. Its Gigapixel AI can enlarge images up to 600% without losing detail. Industry standard for professional photo enhancement.',
    category: 'Image',
    pricing: 'paid',
    website_url: 'https://topazlabs.com',
  },
  {
    name: "Let's Enhance",
    slug: 'lets-enhance',
    tagline: 'AI image upscaler and enhancer online',
    description:
      "Let's Enhance uses AI to upscale and enhance low-resolution images without blurring. It can increase image resolution up to 16x while improving sharpness. Used by real estate photographers and ecommerce businesses.",
    category: 'Image',
    pricing: 'freemium',
    website_url: 'https://letsenhance.io',
  },
  {
    name: 'Pixelcut',
    slug: 'pixelcut',
    tagline: 'AI product photo editor for ecommerce',
    description:
      'Pixelcut is designed for creating professional product photos for online stores. It includes background removal, AI backgrounds, and batch editing tools. Popular with Shopify sellers and Amazon merchants.',
    category: 'Image',
    pricing: 'freemium',
    website_url: 'https://pixelcut.ai',
  },
  {
    name: 'PhotoRoom',
    slug: 'photoroom',
    tagline: 'AI product photo studio in your pocket',
    description:
      'PhotoRoom removes backgrounds and creates professional product photos using AI. It offers hundreds of templates for marketplaces like Amazon, eBay, and Etsy. Available on iOS, Android, and web.',
    category: 'Image',
    pricing: 'freemium',
    website_url: 'https://photoroom.com',
  },
  {
    name: 'Imgupscaler',
    slug: 'imgupscaler',
    tagline: 'Free AI image upscaler online',
    description:
      'Imgupscaler uses AI to enlarge images up to 4x without quality loss. It is completely free to use with no registration required. Simple drag-and-drop interface for quick upscaling.',
    category: 'Image',
    pricing: 'free',
    website_url: 'https://imgupscaler.com',
  },
  {
    name: 'Deep Dream Generator',
    slug: 'deep-dream-generator',
    tagline: 'Psychedelic AI art from your photos',
    description:
      "Deep Dream Generator creates surreal, dream-like images using Google's DeepDream algorithm. Users can apply neural network styles to their own photos. Popular for creating unique abstract and psychedelic artwork.",
    category: 'Image',
    pricing: 'freemium',
    website_url: 'https://deepdreamgenerator.com',
  },
  {
    name: 'Craiyon',
    slug: 'craiyon',
    tagline: 'Free AI image generator for everyone',
    description:
      'Craiyon (formerly DALL-E mini) is a completely free AI image generator accessible to anyone. It generates nine image variations for each prompt. Best for casual experimentation without any cost or signup.',
    category: 'Image',
    pricing: 'free',
    website_url: 'https://craiyon.com',
  },
  {
    name: 'Lexica',
    slug: 'lexica',
    tagline: 'Stable Diffusion image search and generator',
    description:
      'Lexica is a search engine for Stable Diffusion images and prompts. Users can search millions of AI-generated images and use them as inspiration. Also includes an image generation tool powered by Stable Diffusion.',
    category: 'Image',
    pricing: 'freemium',
    website_url: 'https://lexica.art',
  },
  {
    name: 'Krea AI',
    slug: 'krea-ai',
    tagline: 'Real-time AI image generation and enhancement',
    description:
      'Krea AI offers real-time AI image generation that updates as you draw or type. It includes an AI upscaler and image enhancer for improving existing photos. Popular with concept artists and creative directors.',
    category: 'Image',
    pricing: 'freemium',
    website_url: 'https://krea.ai',
  },
  {
    name: 'Photosonic',
    slug: 'photosonic',
    tagline: 'AI art generator by Writesonic',
    description:
      'Photosonic is an AI image generator by the Writesonic team. It generates realistic and artistic images from text descriptions. Integrated with Writesonic for combined text and image content creation.',
    category: 'Image',
    pricing: 'freemium',
    website_url: 'https://photosonic.writesonic.com',
  },
  {
    name: 'Stablecog',
    slug: 'stablecog',
    tagline: 'Free open-source AI image generator',
    description:
      'Stablecog is a free, open-source AI image generation platform built on Stable Diffusion. It offers multiple models and is completely transparent about its codebase. Great for privacy-conscious users and developers.',
    category: 'Image',
    pricing: 'freemium',
    website_url: 'https://stablecog.com',
  },
  {
    name: 'Stockimg AI',
    slug: 'stockimg-ai',
    tagline: 'AI stock image and design generator',
    description:
      'Stockimg AI generates stock photos, logos, book covers, and social media images using AI. It replaces traditional stock photo subscriptions with on-demand generation. Useful for startups and content creators needing fresh visuals.',
    category: 'Image',
    pricing: 'freemium',
    website_url: 'https://stockimg.ai',
  },
  {
    name: 'Getimg AI',
    slug: 'getimg-ai',
    tagline: 'Suite of AI image tools in one platform',
    description:
      'Getimg AI offers text-to-image, image editing, inpainting, and custom model training. It supports over 20 AI models including Stable Diffusion variants. Generous free tier with 100 images per month.',
    category: 'Image',
    pricing: 'freemium',
    website_url: 'https://getimg.ai',
  },
  {
    name: 'Blue Willow',
    slug: 'blue-willow',
    tagline: 'Free Midjourney alternative via Discord',
    description:
      'Blue Willow is a free AI image generator that operates through Discord, similar to Midjourney. It generates logos, photo-realistic images, and fantasy art. A popular free alternative for users who cannot afford Midjourney.',
    category: 'Image',
    pricing: 'free',
    website_url: 'https://bluewillow.ai',
  },
  {
    name: 'Vivid AI',
    slug: 'vivid-ai',
    tagline: 'AI portrait and avatar generator for mobile',
    description:
      'Vivid AI transforms selfies into stunning AI portraits and avatars. It offers dozens of styles from oil paintings to anime and fantasy art. Available on iOS and Android with fast processing times.',
    category: 'Image',
    pricing: 'freemium',
    website_url: 'https://vivid.ai',
  },
  {
    name: 'Lensa AI',
    slug: 'lensa-ai',
    tagline: 'AI magic avatar and photo editor app',
    description:
      'Lensa AI creates personalized magic avatars from selfies using AI. It also offers portrait retouching, background blur, and sky replacement. Went viral for its stunning artistic portrait transformations.',
    category: 'Image',
    pricing: 'freemium',
    website_url: 'https://prisma-ai.com/lensa',
  },
  {
    name: 'Gigapixel AI',
    slug: 'gigapixel-ai',
    tagline: 'AI image upscaling up to 600 percent',
    description:
      'Gigapixel AI by Topaz Labs enlarges images up to 600% using machine learning. It recovers lost details and produces sharp, high-resolution output. Used by photographers, print shops, and digital artists.',
    category: 'Image',
    pricing: 'paid',
    website_url: 'https://topazlabs.com/gigapixel',
  },
  {
    name: 'Patterned AI',
    slug: 'patterned-ai',
    tagline: 'AI pattern and texture generator for designers',
    description:
      'Patterned AI generates seamless patterns and textures from text descriptions. It is designed for textile designers, surface pattern artists, and product designers. Outputs are tileable and ready for production use.',
    category: 'Image',
    pricing: 'freemium',
    website_url: 'https://patterned.ai',
  },
  {
    name: 'Pincel AI',
    slug: 'pincel-ai',
    tagline: 'AI photo editing and retouching online',
    description:
      'Pincel AI offers quick AI-powered photo retouching, background removal, and object replacement. It is browser-based with no software installation needed. Good for quick edits without learning complex software.',
    category: 'Image',
    pricing: 'freemium',
    website_url: 'https://pincel.app',
  },
];

async function main() {
  console.log(`Inserting ${tools.length} Image tools...`);
  const { error } = await supabase
    .from('tools')
    .upsert(tools, { onConflict: 'slug' });

  if (error) console.error('Error:', error);
  else console.log(`✓ Done! Inserted ${tools.length} Image tools`);
}

main();
