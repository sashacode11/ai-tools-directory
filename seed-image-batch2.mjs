import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://ljjcbcxyinpykmcueykm.supabase.co',
  'sb_publishable_Opn0yui1j33Ohiz5biMsqQ_Yx6GxsMO',
);

const tools = [
  {
    name: 'Stable Cascade',
    slug: 'stable-cascade',
    tagline: 'Next generation Stable Diffusion model',
    description:
      'Stable Cascade is a new architecture from Stability AI offering faster and higher quality image generation. It uses a three-stage pipeline for better prompt adherence. Available for developers and researchers via the Stability AI API.',
    category: 'Image',
    pricing: 'freemium',
    website_url: 'https://stability.ai/stable-cascade',
  },
  {
    name: 'Fooocus',
    slug: 'fooocus',
    tagline: 'Free offline Midjourney alternative',
    description:
      'Fooocus is a free, open-source image generator inspired by Midjourney that runs locally. It requires minimal setup and produces high quality artistic images. Popular with users who want Midjourney quality without a subscription.',
    category: 'Image',
    pricing: 'free',
    website_url: 'https://github.com/lllyasviel/Fooocus',
  },
  {
    name: 'InvokeAI',
    slug: 'invokeai',
    tagline: 'Open-source Stable Diffusion interface',
    description:
      'InvokeAI is a feature-rich open-source interface for Stable Diffusion image generation. It includes an advanced canvas editor, model management, and ControlNet support. Popular with power users who want maximum control over image generation.',
    category: 'Image',
    pricing: 'free',
    website_url: 'https://invoke.ai',
  },
  {
    name: 'Automatic1111',
    slug: 'automatic1111',
    tagline: 'Most popular Stable Diffusion web UI',
    description:
      'Automatic1111 is the most widely used web interface for running Stable Diffusion locally. It supports thousands of community extensions and custom models. The go-to tool for developers and enthusiasts in the AI image generation community.',
    category: 'Image',
    pricing: 'free',
    website_url: 'https://github.com/AUTOMATIC1111/stable-diffusion-webui',
  },
  {
    name: 'Civitai',
    slug: 'civitai',
    tagline: 'Community hub for AI art models',
    description:
      'Civitai is the largest platform for sharing and downloading Stable Diffusion models and LoRAs. It hosts thousands of fine-tuned models created by the community. Used by AI artists to find specialized models for specific art styles.',
    category: 'Image',
    pricing: 'free',
    website_url: 'https://civitai.com',
  },
  {
    name: 'Tensor Art',
    slug: 'tensor-art',
    tagline: 'Free cloud platform for AI image generation',
    description:
      'Tensor Art provides free cloud-based AI image generation with community model sharing. It hosts custom Stable Diffusion models and offers daily free credits. Popular alternative to running Stable Diffusion locally.',
    category: 'Image',
    pricing: 'freemium',
    website_url: 'https://tensor.art',
  },
  {
    name: 'Mage Space',
    slug: 'mage-space',
    tagline: 'Free Stable Diffusion image generation online',
    description:
      'Mage Space offers free online Stable Diffusion image generation with various model options. It is known for fewer content restrictions than other platforms. Used by AI artists wanting flexible image generation without local setup.',
    category: 'Image',
    pricing: 'freemium',
    website_url: 'https://mage.space',
  },
  {
    name: 'Openart AI',
    slug: 'openart-ai',
    tagline: 'AI art platform with workflow builder',
    description:
      'Openart is an AI art platform that supports multiple models and includes a visual workflow builder. It has a large community for sharing and discovering AI art. Used by AI artists wanting a feature-rich platform with social features.',
    category: 'Image',
    pricing: 'freemium',
    website_url: 'https://openart.ai',
  },
  {
    name: 'SeaArt AI',
    slug: 'seaart-ai',
    tagline: 'Free AI art generator with many models',
    description:
      'SeaArt AI provides free AI image generation with a wide selection of Stable Diffusion models. It includes character consistency tools and image-to-image features. Popular with anime and illustration artists for style-specific generation.',
    category: 'Image',
    pricing: 'freemium',
    website_url: 'https://seaart.ai',
  },
  {
    name: 'Photoai',
    slug: 'photoai',
    tagline: 'AI photo generator for personal avatars',
    description:
      'PhotoAI trains on your photos to generate new images of you in different styles and settings. It creates professional headshots, fashion photos, and creative portraits. Used by individuals wanting personalized AI-generated photo content.',
    category: 'Image',
    pricing: 'paid',
    website_url: 'https://photoai.com',
  },
  {
    name: 'Aragon AI',
    slug: 'aragon-ai',
    tagline: 'AI professional headshot generator',
    description:
      'Aragon AI generates professional headshots from casual selfies using AI. It produces LinkedIn-ready profile photos in various business styles. Used by professionals who need quality headshots without a photography session.',
    category: 'Image',
    pricing: 'paid',
    website_url: 'https://aragon.ai',
  },
  {
    name: 'BetterPic',
    slug: 'betterpic',
    tagline: 'AI headshot and portrait generator',
    description:
      'BetterPic transforms casual photos into professional AI-generated headshots. It offers multiple professional styles and backgrounds in minutes. Used by job seekers, executives, and entrepreneurs needing polished profile photos.',
    category: 'Image',
    pricing: 'paid',
    website_url: 'https://betterpic.io',
  },
  {
    name: 'Cutout Pro',
    slug: 'cutout-pro',
    tagline: 'AI background remover and photo editor',
    description:
      'Cutout Pro removes backgrounds, enhances photos, and generates AI images in one platform. It supports batch processing for ecommerce product photography. Used by online sellers and designers for fast professional photo editing.',
    category: 'Image',
    pricing: 'freemium',
    website_url: 'https://cutout.pro',
  },
  {
    name: 'Erase BG',
    slug: 'erase-bg',
    tagline: 'Free AI background removal tool',
    description:
      'Erase.bg removes image backgrounds instantly using AI with high edge accuracy. It is completely free for standard resolution images. Popular for quick background removal without Photoshop skills or subscriptions.',
    category: 'Image',
    pricing: 'free',
    website_url: 'https://erase.bg',
  },
  {
    name: 'Cleanup Pictures',
    slug: 'cleanup-pictures',
    tagline: 'AI object remover from photos',
    description:
      'Cleanup Pictures removes unwanted objects, people, and text from photos using AI inpainting. It fills removed areas with realistic background content automatically. Used by photographers and designers for quick photo cleanup.',
    category: 'Image',
    pricing: 'freemium',
    website_url: 'https://cleanup.pictures',
  },
  {
    name: 'Hama Image',
    slug: 'hama-image',
    tagline: 'Erase objects from photos instantly',
    description:
      'Hama is a free tool that erases unwanted objects from photos using AI inpainting. It works directly in the browser with a simple brush tool. Great for removing photobombers and distracting elements from images.',
    category: 'Image',
    pricing: 'free',
    website_url: 'https://hama.app',
  },
  {
    name: 'Vectorizer AI',
    slug: 'vectorizer-ai',
    tagline: 'Convert raster images to vector with AI',
    description:
      'Vectorizer AI converts raster images like PNG and JPG into clean vector SVG files. It handles complex illustrations and logos with high accuracy. Used by designers needing scalable vector versions of existing raster artwork.',
    category: 'Image',
    pricing: 'freemium',
    website_url: 'https://vectorizer.ai',
  },
  {
    name: 'Upscayl',
    slug: 'upscayl',
    tagline: 'Free open-source AI image upscaler',
    description:
      'Upscayl is a free, open-source desktop app for AI image upscaling on Windows, Mac, and Linux. It uses ESRGAN models to enlarge images without quality loss. The best free option for users who want to upscale images locally.',
    category: 'Image',
    pricing: 'free',
    website_url: 'https://upscayl.org',
  },
  {
    name: 'Nero AI',
    slug: 'nero-ai',
    tagline: 'AI image upscaler and enhancer online',
    description:
      'Nero AI provides free online AI image upscaling and enhancement tools. It improves sharpness, removes noise, and restores old photos using AI. Used by photographers and genealogists for restoring and enhancing old images.',
    category: 'Image',
    pricing: 'freemium',
    website_url: 'https://ai.nero.com',
  },
  {
    name: 'Generated Photos',
    slug: 'generated-photos',
    tagline: 'AI-generated royalty-free human photos',
    description:
      'Generated Photos provides a library of fully AI-generated human faces for commercial use. All photos are synthetic and royalty-free without privacy concerns. Used by designers and marketers needing diverse human imagery without model releases.',
    category: 'Image',
    pricing: 'freemium',
    website_url: 'https://generated.photos',
  },
  {
    name: 'Dzine AI',
    slug: 'dzine-ai',
    tagline: 'AI image generation for product design',
    description:
      'Dzine AI specializes in generating product mockups and design concepts using AI. It helps product designers and entrepreneurs visualize ideas quickly. Used for product development, packaging design, and concept visualization.',
    category: 'Image',
    pricing: 'freemium',
    website_url: 'https://dzine.ai',
  },
  {
    name: 'Pictura AI',
    slug: 'pictura-ai',
    tagline: 'AI portrait painter in classic art styles',
    description:
      'Pictura AI transforms photos into paintings in the style of classic artists. It reproduces oil painting, watercolor, and impressionist styles from photos. Used by art enthusiasts wanting personalized artwork in historical art styles.',
    category: 'Image',
    pricing: 'paid',
    website_url: 'https://pictura.ai',
  },
  {
    name: 'Icons8 AI',
    slug: 'icons8-ai',
    tagline: 'AI face generator and smart photos',
    description:
      'Icons8 offers AI-generated faces and smart photo tools for designers. Its generated photos tool creates diverse, royalty-free stock photos on demand. Used by UI designers and marketers needing diverse human photos without licensing issues.',
    category: 'Image',
    pricing: 'freemium',
    website_url: 'https://icons8.com/ai',
  },
  {
    name: 'Pixelcut AI',
    slug: 'pixelcut-ai',
    tagline: 'AI product photo editor for sellers',
    description:
      'Pixelcut AI creates professional product photos for online stores with AI background generation. It includes batch editing and branded template features. Popular with Amazon and Etsy sellers needing fast professional product images.',
    category: 'Image',
    pricing: 'freemium',
    website_url: 'https://pixelcut.ai',
  },
  {
    name: 'Designify',
    slug: 'designify',
    tagline: 'AI product photo enhancer for ecommerce',
    description:
      'Designify automatically removes backgrounds and creates professional product photos using AI. It applies smart backgrounds and lighting adjustments instantly. Used by ecommerce businesses for consistent, professional product imagery.',
    category: 'Image',
    pricing: 'freemium',
    website_url: 'https://designify.com',
  },
];

async function main() {
  console.log(`Inserting ${tools.length} Image batch 2 tools...`);
  const { error } = await supabase
    .from('tools')
    .upsert(tools, { onConflict: 'slug' });
  if (error) console.error('Error:', error);
  else console.log(`✓ Done! Inserted ${tools.length} Image tools`);
}

main();
