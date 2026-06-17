import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://ljjcbcxyinpykmcueykm.supabase.co',
  'sb_publishable_Opn0yui1j33Ohiz5biMsqQ_Yx6GxsMO',
);

const tools = [
  // ── Writing ──────────────────────────────────────────────────────────────
  {
    name: 'ChatGPT',
    slug: 'chatgpt',
    tagline: 'Conversational AI for writing, research, and more',
    description:
      "ChatGPT is OpenAI's flagship conversational AI assistant. It can draft emails, essays, stories, and code, and answer questions on almost any topic.",
    category: 'Writing',
    pricing: 'freemium',
    website_url: 'https://chat.openai.com',
  },
  {
    name: 'Jasper',
    slug: 'jasper',
    tagline: 'AI copywriting platform for marketing teams',
    description:
      'Jasper helps marketing teams create on-brand content at scale. It supports blog posts, ad copy, social media, and more with brand voice controls.',
    category: 'Writing',
    pricing: 'paid',
    website_url: 'https://www.jasper.ai',
  },
  {
    name: 'Copy.ai',
    slug: 'copy-ai',
    tagline: 'Generate marketing copy in seconds',
    description:
      'Copy.ai uses AI to generate sales copy, product descriptions, email sequences, and social media posts. It offers dozens of templates for common marketing needs.',
    category: 'Writing',
    pricing: 'freemium',
    website_url: 'https://www.copy.ai',
  },
  {
    name: 'Grammarly',
    slug: 'grammarly',
    tagline: 'AI writing assistant for grammar and clarity',
    description:
      'Grammarly checks grammar, spelling, tone, and clarity in real time. It integrates with browsers, email clients, and productivity apps.',
    category: 'Writing',
    pricing: 'freemium',
    website_url: 'https://www.grammarly.com',
  },
  {
    name: 'Notion AI',
    slug: 'notion-ai',
    tagline: 'AI writing and summarisation inside Notion',
    description:
      'Notion AI is built into the Notion workspace and can draft, summarise, translate, and improve writing without leaving your notes or documents.',
    category: 'Writing',
    pricing: 'freemium',
    website_url: 'https://www.notion.so/product/ai',
  },
  {
    name: 'Writesonic',
    slug: 'writesonic',
    tagline: 'AI writer for blogs, ads, and landing pages',
    description:
      'Writesonic generates SEO-optimised articles, Google Ads, landing pages, and product descriptions. It includes a Chatsonic assistant with web access.',
    category: 'Writing',
    pricing: 'freemium',
    website_url: 'https://writesonic.com',
  },
  {
    name: 'Rytr',
    slug: 'rytr',
    tagline: 'Affordable AI writing assistant for every use case',
    description:
      "Rytr is a budget-friendly AI writing tool covering 40+ use cases and 30+ languages. It's popular with freelancers and small businesses.",
    category: 'Writing',
    pricing: 'freemium',
    website_url: 'https://rytr.me',
  },
  {
    name: 'Sudowrite',
    slug: 'sudowrite',
    tagline: 'AI writing partner for fiction authors',
    description:
      "Sudowrite is purpose-built for novelists and screenwriters. It helps with brainstorming, expanding scenes, rewriting dialogue, and overcoming writer's block.",
    category: 'Writing',
    pricing: 'paid',
    website_url: 'https://www.sudowrite.com',
  },
  {
    name: 'QuillBot',
    slug: 'quillbot',
    tagline: 'Paraphrase, summarise, and improve your writing',
    description:
      'QuillBot offers AI-powered paraphrasing, summarisation, grammar checking, and citation generation. It is widely used by students and academics.',
    category: 'Writing',
    pricing: 'freemium',
    website_url: 'https://quillbot.com',
  },
  {
    name: 'Claude',
    slug: 'claude',
    tagline: 'Safe and helpful AI assistant by Anthropic',
    description:
      "Claude is Anthropic's AI assistant designed to be helpful, harmless, and honest. It excels at long-form writing, analysis, coding, and nuanced conversation.",
    category: 'Writing',
    pricing: 'freemium',
    website_url: 'https://claude.ai',
  },

  // ── Image ─────────────────────────────────────────────────────────────────
  {
    name: 'Midjourney',
    slug: 'midjourney',
    tagline: 'High-quality AI image generation via Discord',
    description:
      'Midjourney produces stunning artistic images from text prompts. It operates through Discord and is known for its painterly, cinematic aesthetic.',
    category: 'Image',
    pricing: 'paid',
    website_url: 'https://www.midjourney.com',
  },
  {
    name: 'DALL·E 3',
    slug: 'dalle-3',
    tagline: "OpenAI's photorealistic text-to-image model",
    description:
      'DALL·E 3 generates highly detailed images from natural language descriptions. It is integrated into ChatGPT and the OpenAI API.',
    category: 'Image',
    pricing: 'freemium',
    website_url: 'https://openai.com/dall-e-3',
  },
  {
    name: 'Stable Diffusion',
    slug: 'stable-diffusion',
    tagline: 'Open-source image generation you can run locally',
    description:
      'Stable Diffusion is a powerful open-source text-to-image model. It can be run locally or via hosted platforms and supports a vast ecosystem of fine-tuned models.',
    category: 'Image',
    pricing: 'free',
    website_url: 'https://stability.ai',
  },
  {
    name: 'Adobe Firefly',
    slug: 'adobe-firefly',
    tagline: 'Commercially safe AI image generation by Adobe',
    description:
      'Adobe Firefly generates images, text effects, and design variations trained on licensed content, making it safe for commercial use. It integrates with Photoshop and Illustrator.',
    category: 'Image',
    pricing: 'freemium',
    website_url: 'https://firefly.adobe.com',
  },
  {
    name: 'Canva AI',
    slug: 'canva-ai',
    tagline: 'AI design tools inside the Canva platform',
    description:
      "Canva's AI suite includes Magic Media for image generation, Magic Edit for photo editing, and Magic Design for instant template creation, all inside the Canva editor.",
    category: 'Image',
    pricing: 'freemium',
    website_url: 'https://www.canva.com/ai-image-generator',
  },
  {
    name: 'Leonardo.ai',
    slug: 'leonardo-ai',
    tagline: 'AI image generation platform for creatives and game devs',
    description:
      'Leonardo.ai offers high-quality image generation with fine-tuned models suited to game assets, concept art, and product photography. It includes an AI canvas editor.',
    category: 'Image',
    pricing: 'freemium',
    website_url: 'https://leonardo.ai',
  },
  {
    name: 'Ideogram',
    slug: 'ideogram',
    tagline: 'AI image generation with accurate text rendering',
    description:
      'Ideogram specialises in generating images that include legible text, a notoriously difficult task for AI models. It is popular for posters, logos, and typography-driven designs.',
    category: 'Image',
    pricing: 'freemium',
    website_url: 'https://ideogram.ai',
  },
  {
    name: 'Playground AI',
    slug: 'playground-ai',
    tagline: 'Free AI image creation with a generous daily limit',
    description:
      'Playground AI lets users generate up to 500 images per day for free using multiple models including Stable Diffusion and its own SDXL-based model.',
    category: 'Image',
    pricing: 'freemium',
    website_url: 'https://playgroundai.com',
  },
  {
    name: 'Recraft',
    slug: 'recraft',
    tagline: 'Vector and raster AI image generation for designers',
    description:
      'Recraft generates consistent, brand-aligned images and SVG vectors. It is especially useful for UI designers who need icon sets or illustration styles at scale.',
    category: 'Image',
    pricing: 'freemium',
    website_url: 'https://www.recraft.ai',
  },
  {
    name: 'Flux',
    slug: 'flux',
    tagline: 'State-of-the-art open image generation model',
    description:
      'Flux by Black Forest Labs is a leading open-weight text-to-image model known for photorealism and prompt adherence. Available via API and several hosted platforms.',
    category: 'Image',
    pricing: 'freemium',
    website_url: 'https://blackforestlabs.ai',
  },

  // ── Video ─────────────────────────────────────────────────────────────────
  {
    name: 'Sora',
    slug: 'sora',
    tagline: "OpenAI's text-to-video generation model",
    description:
      'Sora generates realistic and imaginative video clips from text prompts up to one minute long. It is available to ChatGPT Plus and Pro subscribers.',
    category: 'Video',
    pricing: 'paid',
    website_url: 'https://openai.com/sora',
  },
  {
    name: 'Runway',
    slug: 'runway',
    tagline: 'AI video generation and editing for creators',
    description:
      'Runway offers Gen-3 Alpha for text-to-video generation plus a suite of video editing tools including inpainting, background removal, and motion brush.',
    category: 'Video',
    pricing: 'freemium',
    website_url: 'https://runwayml.com',
  },
  {
    name: 'Kling AI',
    slug: 'kling-ai',
    tagline: 'High-quality video generation from Kuaishou',
    description:
      'Kling AI generates cinematic video clips from text or images. Developed by Kuaishou, it supports up to two-minute clips with strong motion consistency.',
    category: 'Video',
    pricing: 'freemium',
    website_url: 'https://klingai.com',
  },
  {
    name: 'Pika',
    slug: 'pika',
    tagline: 'Easy AI video creation and editing',
    description:
      'Pika lets users create and edit videos using text prompts, images, or existing video clips. It focuses on accessibility and quick turnaround for social media content.',
    category: 'Video',
    pricing: 'freemium',
    website_url: 'https://pika.art',
  },
  {
    name: 'HeyGen',
    slug: 'heygen',
    tagline: 'AI avatar videos for business communication',
    description:
      'HeyGen creates professional talking-head videos using AI avatars. It supports over 100 languages and is widely used for sales, training, and marketing videos.',
    category: 'Video',
    pricing: 'freemium',
    website_url: 'https://www.heygen.com',
  },
  {
    name: 'Synthesia',
    slug: 'synthesia',
    tagline: 'Create AI presenter videos without a camera',
    description:
      'Synthesia turns scripts into polished videos featuring lifelike AI avatars. It is popular for corporate training, explainer videos, and multilingual content.',
    category: 'Video',
    pricing: 'paid',
    website_url: 'https://www.synthesia.io',
  },
  {
    name: 'Invideo AI',
    slug: 'invideo-ai',
    tagline: 'Turn text prompts into ready-to-publish videos',
    description:
      'Invideo AI generates complete videos from a text brief, including stock footage, voiceover, music, and captions, ready for YouTube or social media.',
    category: 'Video',
    pricing: 'freemium',
    website_url: 'https://invideo.io',
  },
  {
    name: 'Luma Dream Machine',
    slug: 'luma-dream-machine',
    tagline: 'Fast and realistic AI video generation',
    description:
      "Luma's Dream Machine generates smooth, realistic video clips from text or images. It is praised for fluid motion and high visual fidelity.",
    category: 'Video',
    pricing: 'freemium',
    website_url: 'https://lumalabs.ai/dream-machine',
  },
  {
    name: 'Descript',
    slug: 'descript',
    tagline: 'Edit video by editing the transcript',
    description:
      'Descript transcribes video and audio, then lets you edit the media by editing the text. AI features include filler word removal, overdub voice cloning, and eye contact correction.',
    category: 'Video',
    pricing: 'freemium',
    website_url: 'https://www.descript.com',
  },
  {
    name: 'Captions',
    slug: 'captions',
    tagline: 'AI-powered video creation for social media',
    description:
      'Captions auto-generates subtitles, removes silences, corrects eye contact, and adds effects to talking-head videos. It is optimised for TikTok, Reels, and Shorts.',
    category: 'Video',
    pricing: 'freemium',
    website_url: 'https://www.captions.ai',
  },

  // ── Audio ─────────────────────────────────────────────────────────────────
  {
    name: 'ElevenLabs',
    slug: 'elevenlabs',
    tagline: 'Hyper-realistic AI voice generation and cloning',
    description:
      'ElevenLabs produces the most natural-sounding AI voices available. It supports voice cloning, multilingual dubbing, and a text-to-speech API for developers.',
    category: 'Audio',
    pricing: 'freemium',
    website_url: 'https://elevenlabs.io',
  },
  {
    name: 'Suno',
    slug: 'suno',
    tagline: 'Generate full songs with vocals from a text prompt',
    description:
      'Suno creates complete songs including lyrics, instrumentation, and vocals from a short text description. It supports dozens of genres and is free to try.',
    category: 'Audio',
    pricing: 'freemium',
    website_url: 'https://suno.com',
  },
  {
    name: 'Udio',
    slug: 'udio',
    tagline: 'AI music generation with studio-quality output',
    description:
      'Udio generates high-fidelity music tracks from text prompts. It allows extending, remixing, and fine-tuning generated tracks, with a focus on audio quality.',
    category: 'Audio',
    pricing: 'freemium',
    website_url: 'https://www.udio.com',
  },
  {
    name: 'Whisper',
    slug: 'whisper',
    tagline: "OpenAI's open-source speech recognition model",
    description:
      'Whisper is a highly accurate automatic speech recognition model open-sourced by OpenAI. It supports over 90 languages and is available via the OpenAI API.',
    category: 'Audio',
    pricing: 'free',
    website_url: 'https://openai.com/research/whisper',
  },
  {
    name: 'Murf',
    slug: 'murf',
    tagline: 'Professional AI voiceovers for any project',
    description:
      'Murf offers a library of 120+ AI voices in 20+ languages for creating voiceovers for videos, podcasts, and presentations. It includes a studio with sync to slides.',
    category: 'Audio',
    pricing: 'freemium',
    website_url: 'https://murf.ai',
  },
  {
    name: 'Adobe Podcast',
    slug: 'adobe-podcast',
    tagline: 'AI audio recording and enhancement by Adobe',
    description:
      "Adobe Podcast's Enhance Speech tool removes background noise and improves microphone quality with one click. It also offers AI-powered transcription and editing.",
    category: 'Audio',
    pricing: 'freemium',
    website_url: 'https://podcast.adobe.com',
  },
  {
    name: 'Deezer SongCatcher',
    slug: 'deezer-songcatcher',
    tagline: 'Identify songs instantly with AI',
    description:
      'Deezer SongCatcher uses AI audio fingerprinting to identify songs playing around you and add them directly to your Deezer library.',
    category: 'Audio',
    pricing: 'free',
    website_url: 'https://www.deezer.com/en/features/songcatcher',
  },
  {
    name: 'Krisp',
    slug: 'krisp',
    tagline: 'AI noise cancellation for calls and recordings',
    description:
      'Krisp removes background noise and echo from microphone and speaker audio in real time. It works with any conferencing app and includes meeting transcription.',
    category: 'Audio',
    pricing: 'freemium',
    website_url: 'https://krisp.ai',
  },
  {
    name: 'Resemble AI',
    slug: 'resemble-ai',
    tagline: 'Real-time AI voice cloning and synthesis',
    description:
      'Resemble AI enables brands and developers to build custom AI voices. It supports real-time voice cloning, emotion control, and a speech-to-speech API.',
    category: 'Audio',
    pricing: 'paid',
    website_url: 'https://www.resemble.ai',
  },
  {
    name: 'Cleanvoice',
    slug: 'cleanvoice',
    tagline: 'Automatically remove filler words from recordings',
    description:
      'Cleanvoice uses AI to detect and remove filler words, stuttering, and mouth sounds from podcast and audio recordings, saving hours of manual editing.',
    category: 'Audio',
    pricing: 'freemium',
    website_url: 'https://cleanvoice.ai',
  },

  // ── Code ──────────────────────────────────────────────────────────────────
  {
    name: 'GitHub Copilot',
    slug: 'github-copilot',
    tagline: 'AI pair programmer inside your editor',
    description:
      'GitHub Copilot suggests code completions, entire functions, and tests as you type. It integrates with VS Code, JetBrains, and other popular IDEs.',
    category: 'Code',
    pricing: 'paid',
    website_url: 'https://github.com/features/copilot',
  },
  {
    name: 'Cursor',
    slug: 'cursor',
    tagline: 'AI-first code editor built on VS Code',
    description:
      'Cursor is a fork of VS Code with deep AI integration. It can edit multiple files at once, explain code, and generate features from natural language descriptions.',
    category: 'Code',
    pricing: 'freemium',
    website_url: 'https://cursor.sh',
  },
  {
    name: 'Tabnine',
    slug: 'tabnine',
    tagline: 'Private AI code completion for teams',
    description:
      'Tabnine provides AI code completions that can run entirely on your own infrastructure, making it popular with enterprises that require data privacy.',
    category: 'Code',
    pricing: 'freemium',
    website_url: 'https://www.tabnine.com',
  },
  {
    name: 'Replit AI',
    slug: 'replit-ai',
    tagline: 'Build and deploy apps with AI in the browser',
    description:
      'Replit AI helps you write, debug, and explain code inside the Replit browser-based IDE. It can scaffold entire projects and deploy them instantly.',
    category: 'Code',
    pricing: 'freemium',
    website_url: 'https://replit.com/ai',
  },
  {
    name: 'Codeium',
    slug: 'codeium',
    tagline: 'Free AI code completion for 70+ languages',
    description:
      'Codeium offers free AI autocomplete and chat for over 70 programming languages. It integrates with most major editors and has a fast, low-latency model.',
    category: 'Code',
    pricing: 'freemium',
    website_url: 'https://codeium.com',
  },
  {
    name: 'v0 by Vercel',
    slug: 'v0-vercel',
    tagline: 'Generate React UI components from text prompts',
    description:
      'v0 generates production-ready React and Tailwind UI components from a text description. Output can be copied directly into Next.js projects.',
    category: 'Code',
    pricing: 'freemium',
    website_url: 'https://v0.dev',
  },
  {
    name: 'Bolt.new',
    slug: 'bolt-new',
    tagline: 'Prompt-to-full-stack app in the browser',
    description:
      'Bolt.new by StackBlitz generates complete web applications from a text prompt and lets you edit, run, and deploy them without leaving the browser.',
    category: 'Code',
    pricing: 'freemium',
    website_url: 'https://bolt.new',
  },
  {
    name: 'Aider',
    slug: 'aider',
    tagline: 'AI pair programming in your terminal',
    description:
      'Aider is an open-source CLI tool that lets you pair program with GPT-4 or Claude directly in your terminal. It edits your local files and commits changes to git.',
    category: 'Code',
    pricing: 'free',
    website_url: 'https://aider.chat',
  },
  {
    name: 'Lovable',
    slug: 'lovable',
    tagline: 'Build full-stack apps by chatting with AI',
    description:
      'Lovable (formerly GPT Engineer) lets non-developers and developers alike build web apps through conversation. It generates, runs, and deploys the code automatically.',
    category: 'Code',
    pricing: 'freemium',
    website_url: 'https://lovable.dev',
  },
  {
    name: 'Claude Code',
    slug: 'claude-code',
    tagline: 'Agentic AI coding assistant in your terminal',
    description:
      "Claude Code is Anthropic's CLI coding agent that can read, write, and execute code across your entire codebase. It handles complex multi-file refactors and debugging tasks.",
    category: 'Code',
    pricing: 'paid',
    website_url: 'https://claude.ai/code',
  },

  // ── Search ────────────────────────────────────────────────────────────────
  {
    name: 'Perplexity AI',
    slug: 'perplexity-ai',
    tagline: 'AI search engine with cited answers',
    description:
      'Perplexity searches the web in real time and returns concise answers with source citations. It supports follow-up questions and deep research mode.',
    category: 'Search',
    pricing: 'freemium',
    website_url: 'https://www.perplexity.ai',
  },
  {
    name: 'You.com',
    slug: 'you-com',
    tagline: 'AI-powered search with chat and apps',
    description:
      'You.com combines web search with AI chat and a library of specialised AI apps for coding, writing, and research. It prioritises source transparency.',
    category: 'Search',
    pricing: 'freemium',
    website_url: 'https://you.com',
  },
  {
    name: 'Brave Search AI',
    slug: 'brave-search-ai',
    tagline: 'Independent search with built-in AI summarisation',
    description:
      'Brave Search runs its own independent index and offers AI-generated summaries called Answers. It does not track users or rely on Google or Bing.',
    category: 'Search',
    pricing: 'free',
    website_url: 'https://search.brave.com',
  },
  {
    name: 'Exa',
    slug: 'exa',
    tagline: 'Semantic search API for AI applications',
    description:
      'Exa (formerly Metaphor) is a neural search engine designed for developers. It finds semantically relevant web pages and returns clean content for AI pipelines.',
    category: 'Search',
    pricing: 'freemium',
    website_url: 'https://exa.ai',
  },
  {
    name: 'Consensus',
    slug: 'consensus',
    tagline: 'Search scientific papers with AI-synthesised answers',
    description:
      'Consensus searches over 200 million research papers and uses AI to extract and synthesise findings. It is designed for evidence-based research and fact-checking.',
    category: 'Search',
    pricing: 'freemium',
    website_url: 'https://consensus.app',
  },
  {
    name: 'Elicit',
    slug: 'elicit',
    tagline: 'AI research assistant for academic literature',
    description:
      'Elicit helps researchers find, summarise, and extract data from academic papers. It automates literature reviews and supports systematic research workflows.',
    category: 'Search',
    pricing: 'freemium',
    website_url: 'https://elicit.com',
  },
  {
    name: 'Phind',
    slug: 'phind',
    tagline: 'AI search engine built for developers',
    description:
      'Phind searches the web and technical documentation to answer coding questions with detailed explanations and code examples. It uses GPT-4-class models.',
    category: 'Search',
    pricing: 'freemium',
    website_url: 'https://www.phind.com',
  },
  {
    name: 'Kagi Search',
    slug: 'kagi-search',
    tagline: 'Premium ad-free search with AI assistant',
    description:
      'Kagi is a paid, ad-free search engine with an AI assistant called Kagi Assistant. It lets users personalise rankings and includes a universal summariser for any URL.',
    category: 'Search',
    pricing: 'paid',
    website_url: 'https://kagi.com',
  },
  {
    name: 'Tavily',
    slug: 'tavily',
    tagline: 'Real-time web search API optimised for AI agents',
    description:
      'Tavily provides a search API designed for LLM applications and AI agents. It returns clean, structured results optimised for RAG and autonomous agent workflows.',
    category: 'Search',
    pricing: 'freemium',
    website_url: 'https://tavily.com',
  },
  {
    name: 'Bing AI',
    slug: 'bing-ai',
    tagline: 'Microsoft Copilot search with GPT-4 integration',
    description:
      "Bing AI integrates GPT-4 into Microsoft's search engine, offering conversational answers, image generation, and cited web results through Microsoft Copilot.",
    category: 'Search',
    pricing: 'free',
    website_url: 'https://www.bing.com/chat',
  },

  // ── Productivity ──────────────────────────────────────────────────────────
  {
    name: 'Otter.ai',
    slug: 'otter-ai',
    tagline: 'AI meeting transcription and notes',
    description:
      'Otter.ai transcribes meetings in real time and generates summaries, action items, and searchable notes. It integrates with Zoom, Google Meet, and Microsoft Teams.',
    category: 'Productivity',
    pricing: 'freemium',
    website_url: 'https://otter.ai',
  },
  {
    name: 'Reclaim.ai',
    slug: 'reclaim-ai',
    tagline: 'AI scheduling assistant that protects focus time',
    description:
      'Reclaim automatically schedules tasks, habits, and meetings in your calendar to protect focus time and work-life balance. It integrates with Google Calendar.',
    category: 'Productivity',
    pricing: 'freemium',
    website_url: 'https://reclaim.ai',
  },
  {
    name: 'Motion',
    slug: 'motion',
    tagline: 'AI task and calendar management for busy teams',
    description:
      'Motion automatically prioritises your tasks and builds the perfect daily schedule. It reschedules tasks in real time as your day changes.',
    category: 'Productivity',
    pricing: 'paid',
    website_url: 'https://www.usemotion.com',
  },
  {
    name: 'Mem.ai',
    slug: 'mem-ai',
    tagline: 'Self-organising AI workspace for your notes',
    description:
      'Mem uses AI to automatically tag and surface relevant notes and information. It acts as a second brain that connects ideas across your knowledge base.',
    category: 'Productivity',
    pricing: 'freemium',
    website_url: 'https://mem.ai',
  },
  {
    name: 'Fireflies.ai',
    slug: 'fireflies-ai',
    tagline: 'AI meeting recorder, transcriber, and analyser',
    description:
      'Fireflies joins your online meetings, records and transcribes them, then lets you search and analyse conversations. It tracks action items and integrates with your CRM.',
    category: 'Productivity',
    pricing: 'freemium',
    website_url: 'https://fireflies.ai',
  },
  {
    name: 'Superhuman',
    slug: 'superhuman',
    tagline: 'The fastest AI-powered email experience',
    description:
      'Superhuman is an AI email client with keyboard shortcuts, auto-summarisation, and AI compose features designed to get through your inbox in record time.',
    category: 'Productivity',
    pricing: 'paid',
    website_url: 'https://superhuman.com',
  },
  {
    name: 'Taskade',
    slug: 'taskade',
    tagline: 'AI agents for task management and collaboration',
    description:
      'Taskade combines task lists, mind maps, and docs with AI agents that can research, write, and complete tasks autonomously. It supports real-time team collaboration.',
    category: 'Productivity',
    pricing: 'freemium',
    website_url: 'https://www.taskade.com',
  },
  {
    name: 'Tana',
    slug: 'tana',
    tagline: 'AI-powered outliner for knowledge workers',
    description:
      'Tana is a flexible note-taking and task management tool with AI commands built in. It uses a structured node-based system that works like a personal database.',
    category: 'Productivity',
    pricing: 'freemium',
    website_url: 'https://tana.inc',
  },
  {
    name: 'Zapier AI',
    slug: 'zapier-ai',
    tagline: 'Automate workflows with AI-powered Zaps',
    description:
      "Zapier's AI features let you build automations from natural language descriptions and add AI steps that write content or make decisions within your workflows.",
    category: 'Productivity',
    pricing: 'freemium',
    website_url: 'https://zapier.com/ai',
  },
  {
    name: 'Merlin',
    slug: 'merlin',
    tagline: 'ChatGPT sidebar for any website',
    description:
      'Merlin is a browser extension that brings GPT-4 and Claude to any webpage. It can summarise articles, reply to emails, and answer questions in context.',
    category: 'Productivity',
    pricing: 'freemium',
    website_url: 'https://www.getmerlin.in',
  },

  // ── Marketing ─────────────────────────────────────────────────────────────
  {
    name: 'HubSpot AI',
    slug: 'hubspot-ai',
    tagline: 'AI tools built into the HubSpot CRM',
    description:
      "HubSpot's AI features include content generation, email writing, chatbots, and predictive lead scoring, all natively integrated into its CRM and marketing platform.",
    category: 'Marketing',
    pricing: 'freemium',
    website_url: 'https://www.hubspot.com/artificial-intelligence',
  },
  {
    name: 'AdCreative.ai',
    slug: 'adcreative-ai',
    tagline: 'Generate high-converting ad creatives with AI',
    description:
      'AdCreative.ai generates advertising banners, social media posts, and product photos optimised for conversion. It scores creatives and connects to ad platforms.',
    category: 'Marketing',
    pricing: 'paid',
    website_url: 'https://www.adcreative.ai',
  },
  {
    name: 'Predis.ai',
    slug: 'predis-ai',
    tagline: 'AI social media content creation and scheduling',
    description:
      'Predis.ai generates social media posts, carousels, and short videos from a product URL or keyword, then schedules them across platforms.',
    category: 'Marketing',
    pricing: 'freemium',
    website_url: 'https://predis.ai',
  },
  {
    name: 'Phrasee',
    slug: 'phrasee',
    tagline: 'AI-generated marketing language that performs',
    description:
      'Phrasee uses AI to generate and optimise subject lines, push notifications, and ad copy, then runs experiments to find the best-performing language.',
    category: 'Marketing',
    pricing: 'paid',
    website_url: 'https://phrasee.co',
  },
  {
    name: 'Surfer SEO',
    slug: 'surfer-seo',
    tagline: 'AI-powered on-page SEO optimisation and content',
    description:
      'Surfer SEO analyses top-ranking pages and gives data-driven guidance on content structure, keyword usage, and word count to help you rank higher.',
    category: 'Marketing',
    pricing: 'paid',
    website_url: 'https://surferseo.com',
  },
  {
    name: 'Lately',
    slug: 'lately',
    tagline: 'Repurpose long content into social media posts',
    description:
      'Lately uses AI to transform blog posts, videos, and podcasts into dozens of social media snippets, learning your brand voice over time to improve results.',
    category: 'Marketing',
    pricing: 'paid',
    website_url: 'https://www.lately.ai',
  },
  {
    name: 'Persado',
    slug: 'persado',
    tagline: 'AI motivation language for enterprise marketing',
    description:
      'Persado uses AI to generate and test emotionally resonant marketing language for email, ads, and push notifications, with proven lift for enterprise brands.',
    category: 'Marketing',
    pricing: 'paid',
    website_url: 'https://www.persado.com',
  },
  {
    name: 'Postwise',
    slug: 'postwise',
    tagline: 'AI ghostwriter and scheduler for X (Twitter)',
    description:
      'Postwise helps creators grow on X by generating viral tweet ideas, writing full threads, and scheduling posts at optimal times based on engagement data.',
    category: 'Marketing',
    pricing: 'paid',
    website_url: 'https://postwise.ai',
  },
  {
    name: 'Pencil',
    slug: 'pencil',
    tagline: 'AI ad generation and performance prediction',
    description:
      'Pencil generates video and static ad creatives and predicts which will perform best before you spend on media. It connects directly to Meta and TikTok ad accounts.',
    category: 'Marketing',
    pricing: 'paid',
    website_url: 'https://www.trypencil.com',
  },
  {
    name: 'Typeface',
    slug: 'typeface',
    tagline: 'Enterprise AI content generation with brand controls',
    description:
      'Typeface is an AI content platform for enterprises that enforces brand guidelines, tone of voice, and visual identity across all generated content.',
    category: 'Marketing',
    pricing: 'paid',
    website_url: 'https://www.typeface.ai',
  },

  // ── Education ─────────────────────────────────────────────────────────────
  {
    name: 'Khan Academy Khanmigo',
    slug: 'khanmigo',
    tagline: 'AI tutor and teaching assistant by Khan Academy',
    description:
      "Khanmigo is Khan Academy's AI-powered tutor that guides students through problems using the Socratic method rather than just giving answers, supporting teachers too.",
    category: 'Education',
    pricing: 'freemium',
    website_url: 'https://www.khanacademy.org/khan-labs',
  },
  {
    name: 'Duolingo Max',
    slug: 'duolingo-max',
    tagline: 'AI-powered language learning with roleplay',
    description:
      'Duolingo Max adds GPT-4-powered features including Explain My Answer for detailed feedback and Roleplay for practicing real-world conversations with an AI.',
    category: 'Education',
    pricing: 'paid',
    website_url: 'https://blog.duolingo.com/duolingo-max',
  },
  {
    name: 'Photomath',
    slug: 'photomath',
    tagline: 'Scan math problems and get step-by-step solutions',
    description:
      'Photomath uses your camera to scan handwritten or printed math problems and shows detailed step-by-step solutions to help students understand the process.',
    category: 'Education',
    pricing: 'freemium',
    website_url: 'https://photomath.com',
  },
  {
    name: 'Socratic by Google',
    slug: 'socratic-google',
    tagline: 'AI homework helper for students',
    description:
      'Socratic uses Google AI to help students understand homework by finding the best online resources and explanations when they photograph or type a question.',
    category: 'Education',
    pricing: 'free',
    website_url: 'https://socratic.org',
  },
  {
    name: 'Synthesis Tutor',
    slug: 'synthesis-tutor',
    tagline: 'Adaptive AI math tutor for children',
    description:
      "Synthesis Tutor provides personalised math practice for kids aged 5–14 using adaptive AI that adjusts difficulty in real time. Originally built for SpaceX employees' children.",
    category: 'Education',
    pricing: 'paid',
    website_url: 'https://www.synthesis.com',
  },
  {
    name: 'Quizlet AI',
    slug: 'quizlet-ai',
    tagline: 'AI-powered flashcards and study tools',
    description:
      "Quizlet uses AI to generate flashcards from your notes, explain concepts, and personalise practice sessions to focus on what you haven't mastered yet.",
    category: 'Education',
    pricing: 'freemium',
    website_url: 'https://quizlet.com/features/quizlet-ai',
  },
  {
    name: 'Coursera Coach',
    slug: 'coursera-coach',
    tagline: 'AI learning assistant inside Coursera courses',
    description:
      'Coursera Coach is an AI assistant embedded in Coursera courses that answers questions, summarises lectures, and provides personalised guidance as you learn.',
    category: 'Education',
    pricing: 'freemium',
    website_url: 'https://www.coursera.org',
  },
  {
    name: 'Wolfram Alpha',
    slug: 'wolfram-alpha',
    tagline: 'Computational knowledge engine for STEM',
    description:
      'Wolfram Alpha answers computational questions across maths, science, engineering, and more using curated knowledge and step-by-step solutions.',
    category: 'Education',
    pricing: 'freemium',
    website_url: 'https://www.wolframalpha.com',
  },
  {
    name: 'Explainpaper',
    slug: 'explainpaper',
    tagline: 'Upload papers and get AI explanations of hard parts',
    description:
      'Explainpaper lets you highlight confusing sections of academic papers and get plain-English explanations powered by AI, making dense research accessible.',
    category: 'Education',
    pricing: 'freemium',
    website_url: 'https://www.explainpaper.com',
  },
  {
    name: 'Brilliant',
    slug: 'brilliant',
    tagline: 'Interactive STEM learning with AI-guided paths',
    description:
      "Brilliant teaches maths, science, and computer science through interactive problem-solving. Its AI adapts the curriculum to each learner's gaps and goals.",
    category: 'Education',
    pricing: 'paid',
    website_url: 'https://brilliant.org',
  },

  // ── Business ──────────────────────────────────────────────────────────────
  {
    name: 'Salesforce Einstein',
    slug: 'salesforce-einstein',
    tagline: 'AI built into the Salesforce platform',
    description:
      'Salesforce Einstein brings AI-powered predictions, recommendations, and automation across the Salesforce ecosystem including sales, service, and marketing clouds.',
    category: 'Business',
    pricing: 'paid',
    website_url: 'https://www.salesforce.com/products/einstein/overview',
  },
  {
    name: 'Microsoft Copilot for M365',
    slug: 'microsoft-copilot-m365',
    tagline: 'AI assistant across Word, Excel, Teams, and Outlook',
    description:
      'Microsoft 365 Copilot integrates GPT-4 into Word, Excel, PowerPoint, Outlook, and Teams to draft documents, analyse data, summarise meetings, and more.',
    category: 'Business',
    pricing: 'paid',
    website_url: 'https://www.microsoft.com/en-us/microsoft-365/copilot',
  },
  {
    name: 'Gong',
    slug: 'gong',
    tagline: 'AI revenue intelligence for sales teams',
    description:
      'Gong records and analyses customer-facing conversations to surface insights about deal health, rep coaching opportunities, and market trends.',
    category: 'Business',
    pricing: 'paid',
    website_url: 'https://www.gong.io',
  },
  {
    name: 'Chorus.ai',
    slug: 'chorus-ai',
    tagline: 'Conversation intelligence for B2B sales',
    description:
      'Chorus by ZoomInfo captures and analyses sales calls and meetings to provide coaching recommendations, deal risk alerts, and buyer sentiment analysis.',
    category: 'Business',
    pricing: 'paid',
    website_url: 'https://www.chorus.ai',
  },
  {
    name: 'Glean',
    slug: 'glean',
    tagline: 'AI enterprise search across all your work apps',
    description:
      'Glean indexes all company knowledge across Slack, Drive, Confluence, Jira, and more, then lets employees search and ask questions in natural language.',
    category: 'Business',
    pricing: 'paid',
    website_url: 'https://www.glean.com',
  },
  {
    name: 'Vanta',
    slug: 'vanta',
    tagline: 'AI-powered security compliance automation',
    description:
      'Vanta automates SOC 2, ISO 27001, HIPAA, and other security compliance frameworks using AI to monitor controls, collect evidence, and streamline audits.',
    category: 'Business',
    pricing: 'paid',
    website_url: 'https://www.vanta.com',
  },
  {
    name: 'Tome',
    slug: 'tome',
    tagline: 'AI-powered presentations for sales and strategy',
    description:
      'Tome generates narrative presentations from a prompt, pulling in data, images, and structure automatically. It is designed for sales decks and strategy documents.',
    category: 'Business',
    pricing: 'freemium',
    website_url: 'https://tome.app',
  },
  {
    name: 'Beautiful.ai',
    slug: 'beautiful-ai',
    tagline: 'Smart slide design that formats itself',
    description:
      'Beautiful.ai uses AI to automatically format slides as you add content, keeping designs polished without manual adjustment. It is built for business presentations.',
    category: 'Business',
    pricing: 'freemium',
    website_url: 'https://www.beautiful.ai',
  },
  {
    name: 'Gamma',
    slug: 'gamma',
    tagline: 'Generate presentations, docs, and websites with AI',
    description:
      'Gamma creates presentations, documents, and web pages from a text prompt in seconds. It uses a flexible card-based format and supports real-time collaboration.',
    category: 'Business',
    pricing: 'freemium',
    website_url: 'https://gamma.app',
  },
  {
    name: 'Poe',
    slug: 'poe',
    tagline: 'Chat with multiple AI models in one place',
    description:
      'Poe by Quora lets you access ChatGPT, Claude, Gemini, and other models in a single app. It supports custom bots and is available on web, iOS, and Android.',
    category: 'Business',
    pricing: 'freemium',
    website_url: 'https://poe.com',
  },
];

async function main() {
  console.log(`Inserting ${tools.length} tools...`);
  const { error } = await supabase
    .from('tools')
    .upsert(tools, { onConflict: 'slug' });

  if (error) {
    console.error('Insert failed:', error);
  } else {
    console.log(`✓ Successfully inserted/updated ${tools.length} tools`);
  }
}

main();
