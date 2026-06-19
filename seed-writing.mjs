import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://ljjcbcxyinpykmcueykm.supabase.co',
  'sb_publishable_Opn0yui1j33Ohiz5biMsqQ_Yx6GxsMO',
);

const tools = [
  {
    name: 'Jasper',
    slug: 'jasper',
    tagline: 'AI writing assistant for marketing teams',
    description:
      'Jasper is an AI writing platform designed for marketing teams and content creators. It generates blog posts, ad copy, emails, and social media content at scale. Jasper supports over 50 templates and 25+ languages.',
    category: 'Writing',
    pricing: 'paid',
    website_url: 'https://jasper.ai',
  },
  {
    name: 'Copy.ai',
    slug: 'copy-ai',
    tagline: 'Generate marketing copy in seconds',
    description:
      'Copy.ai uses AI to generate sales copy, blog content, and social media posts instantly. It offers 90+ content templates and a long-form editor. Ideal for marketers and entrepreneurs who need fast content.',
    category: 'Writing',
    pricing: 'freemium',
    website_url: 'https://copy.ai',
  },
  {
    name: 'Writesonic',
    slug: 'writesonic',
    tagline: 'AI writer for blogs, ads and websites',
    description:
      'Writesonic generates SEO-optimized articles, landing pages, and ad copy using AI. It includes a Chatsonic feature for real-time web-connected writing. Supports 25+ languages and dozens of content formats.',
    category: 'Writing',
    pricing: 'freemium',
    website_url: 'https://writesonic.com',
  },
  {
    name: 'Rytr',
    slug: 'rytr',
    tagline: 'Affordable AI writing assistant for everyone',
    description:
      'Rytr is a budget-friendly AI writing tool that helps create content for blogs, emails, and social media. It supports 40+ use cases and 30+ languages. Popular among freelancers and small business owners.',
    category: 'Writing',
    pricing: 'freemium',
    website_url: 'https://rytr.me',
  },
  {
    name: 'Sudowrite',
    slug: 'sudowrite',
    tagline: 'AI writing partner for fiction authors',
    description:
      "Sudowrite is built specifically for novelists and creative writers. It helps with story development, character building, and overcoming writer's block. Features include Rewrite, Describe, and Story Engine tools.",
    category: 'Writing',
    pricing: 'paid',
    website_url: 'https://sudowrite.com',
  },
  {
    name: 'Wordtune',
    slug: 'wordtune',
    tagline: 'Rewrite and rephrase your sentences instantly',
    description:
      'Wordtune helps you rewrite sentences to sound clearer, more casual, or more formal. It integrates with Google Docs and offers a browser extension. Great for non-native English speakers and professionals.',
    category: 'Writing',
    pricing: 'freemium',
    website_url: 'https://wordtune.com',
  },
  {
    name: 'Grammarly',
    slug: 'grammarly',
    tagline: 'AI grammar and writing style checker',
    description:
      'Grammarly checks grammar, spelling, punctuation, and writing style in real time. It works across browsers, Google Docs, Microsoft Word, and desktop apps. The premium version includes tone detection and plagiarism checking.',
    category: 'Writing',
    pricing: 'freemium',
    website_url: 'https://grammarly.com',
  },
  {
    name: 'ProWritingAid',
    slug: 'prowritingaid',
    tagline: 'Deep writing analysis for serious writers',
    description:
      'ProWritingAid provides in-depth writing reports covering style, grammar, readability, and pacing. It integrates with Scrivener, Google Docs, and Word. Popular with authors and long-form content writers.',
    category: 'Writing',
    pricing: 'freemium',
    website_url: 'https://prowritingaid.com',
  },
  {
    name: 'Hemingway Editor',
    slug: 'hemingway-editor',
    tagline: 'Make your writing bold and clear',
    description:
      'Hemingway Editor highlights complex sentences, passive voice, and hard-to-read phrases. It gives your text a readability grade and suggests simplifications. Available as a web app and desktop application.',
    category: 'Writing',
    pricing: 'freemium',
    website_url: 'https://hemingwayapp.com',
  },
  {
    name: 'QuillBot',
    slug: 'quillbot',
    tagline: 'Paraphrase and summarize text with AI',
    description:
      'QuillBot is a paraphrasing tool that rewrites text while preserving meaning. It includes a summarizer, grammar checker, and citation generator. Widely used by students and academic writers.',
    category: 'Writing',
    pricing: 'freemium',
    website_url: 'https://quillbot.com',
  },
  {
    name: 'Notion AI',
    slug: 'notion-ai',
    tagline: 'AI writing built into your workspace',
    description:
      'Notion AI is integrated directly into Notion pages and databases. It can draft documents, summarize notes, translate content, and fix grammar. Perfect for teams already using Notion for project management.',
    category: 'Writing',
    pricing: 'paid',
    website_url: 'https://notion.so/product/ai',
  },
  {
    name: 'Anyword',
    slug: 'anyword',
    tagline: 'Predictive AI copywriting for marketers',
    description:
      'Anyword uses predictive performance scoring to show which copy will perform best before publishing. It generates ads, emails, landing pages, and blog content. Trusted by major brands for data-driven copywriting.',
    category: 'Writing',
    pricing: 'paid',
    website_url: 'https://anyword.com',
  },
  {
    name: 'Hypotenuse AI',
    slug: 'hypotenuse-ai',
    tagline: 'Bulk AI content for ecommerce and blogs',
    description:
      'Hypotenuse AI specializes in generating product descriptions and blog articles at scale. It can produce hundreds of SEO-optimized descriptions from a spreadsheet. Popular with ecommerce stores and content agencies.',
    category: 'Writing',
    pricing: 'paid',
    website_url: 'https://hypotenuse.ai',
  },
  {
    name: 'Longshot AI',
    slug: 'longshot-ai',
    tagline: 'Fact-checked long-form AI content writer',
    description:
      'Longshot AI focuses on generating factually accurate long-form blog content. It includes a FactCheck feature that verifies claims against real sources. Good for SEO writers who need reliable, researched articles.',
    category: 'Writing',
    pricing: 'freemium',
    website_url: 'https://longshot.ai',
  },
  {
    name: 'Frase',
    slug: 'frase',
    tagline: 'SEO content briefs and AI writing in one',
    description:
      'Frase combines SEO research with AI writing to help create content that ranks. It analyzes top-ranking pages and generates optimized briefs automatically. Used by SEO agencies and content marketers.',
    category: 'Writing',
    pricing: 'paid',
    website_url: 'https://frase.io',
  },
  {
    name: 'Surfer SEO',
    slug: 'surfer-seo',
    tagline: 'AI content editor optimized for Google rankings',
    description:
      'Surfer SEO analyzes SERPs and provides real-time content optimization scores. It integrates with Google Docs and Jasper for seamless SEO writing. Widely used by SEO professionals and content teams.',
    category: 'Writing',
    pricing: 'paid',
    website_url: 'https://surferseo.com',
  },
  {
    name: 'INK Editor',
    slug: 'ink-editor',
    tagline: 'AI writing and SEO optimization combined',
    description:
      'INK Editor combines AI writing with SEO scoring to help content rank higher. It uses a proprietary AI model trained on top-performing content. Includes a focus mode for distraction-free writing.',
    category: 'Writing',
    pricing: 'freemium',
    website_url: 'https://inkforall.com',
  },
  {
    name: 'Scalenut',
    slug: 'scalenut',
    tagline: 'AI-powered SEO and content marketing platform',
    description:
      'Scalenut helps plan, research, and write SEO content from a single platform. It includes keyword clustering, content briefs, and an AI writer. Popular with content agencies managing multiple clients.',
    category: 'Writing',
    pricing: 'paid',
    website_url: 'https://scalenut.com',
  },
  {
    name: 'Peppertype',
    slug: 'peppertype',
    tagline: 'Instant AI content generation for teams',
    description:
      'Peppertype generates marketing copy, product descriptions, and social posts instantly. It supports over 35 content types and team collaboration features. Built for marketing teams needing fast content at scale.',
    category: 'Writing',
    pricing: 'paid',
    website_url: 'https://peppertype.ai',
  },
  {
    name: 'Simplified',
    slug: 'simplified-writing',
    tagline: 'All-in-one AI writing and design platform',
    description:
      'Simplified combines AI writing, graphic design, video editing, and social scheduling in one tool. The writing feature covers blogs, ads, emails, and scripts. Great for solo creators managing all content types.',
    category: 'Writing',
    pricing: 'freemium',
    website_url: 'https://simplified.com',
  },
  {
    name: 'Narrato',
    slug: 'narrato',
    tagline: 'AI content workspace for content teams',
    description:
      'Narrato is a content creation and workflow platform with built-in AI writing tools. It includes content briefs, templates, and team collaboration features. Used by content agencies and marketing departments.',
    category: 'Writing',
    pricing: 'paid',
    website_url: 'https://narrato.io',
  },
  {
    name: 'Article Forge',
    slug: 'article-forge',
    tagline: 'Automated long-form article generator',
    description:
      'Article Forge uses deep learning to write complete articles on any topic in minutes. It automatically includes relevant headings, images, and links. Designed for bulk content production and SEO campaigns.',
    category: 'Writing',
    pricing: 'paid',
    website_url: 'https://articleforge.com',
  },
  {
    name: 'Kafkai',
    slug: 'kafkai',
    tagline: 'Niche AI article writer for SEO',
    description:
      'Kafkai generates niche-specific articles trained on industry data for better accuracy. It covers categories like finance, health, travel, and technology. Useful for affiliate marketers building content sites.',
    category: 'Writing',
    pricing: 'paid',
    website_url: 'https://kafkai.com',
  },
  {
    name: 'Copysmith',
    slug: 'copysmith',
    tagline: 'Enterprise AI copywriting at scale',
    description:
      'Copysmith is built for enterprise teams needing high-volume content production. It integrates with Shopify, Google Ads, and Hootsuite for direct publishing. Includes team collaboration and content approval workflows.',
    category: 'Writing',
    pricing: 'paid',
    website_url: 'https://copysmith.ai',
  },
  {
    name: 'Writecream',
    slug: 'writecream',
    tagline: 'AI writer for cold outreach and content',
    description:
      'Writecream specializes in personalized cold email icebreakers and outreach content. It also generates blog articles, YouTube scripts, and podcast intros. Popular with sales teams and growth marketers.',
    category: 'Writing',
    pricing: 'freemium',
    website_url: 'https://writecream.com',
  },
  {
    name: 'Lex',
    slug: 'lex',
    tagline: 'AI writing tool for thought leaders',
    description:
      'Lex is a minimalist AI writing tool designed for essays and long-form thinking. It uses GPT-4 to help unblock writers and develop ideas. Favored by journalists, bloggers, and newsletter writers.',
    category: 'Writing',
    pricing: 'paid',
    website_url: 'https://lex.page',
  },
  {
    name: 'Moonbeam',
    slug: 'moonbeam',
    tagline: 'AI writing assistant for long-form content',
    description:
      'Moonbeam is designed specifically for writing essays, blog posts, and stories. It includes Smart Temple technology that learns your writing style over time. Good for content creators who publish regularly.',
    category: 'Writing',
    pricing: 'paid',
    website_url: 'https://gomoonbeam.com',
  },
  {
    name: 'Gravity Write',
    slug: 'gravity-write',
    tagline: 'Fast AI content creation for all formats',
    description:
      'Gravity Write generates blogs, ads, emails, and social posts using advanced AI models. It offers 250+ templates covering a wide range of content needs. Includes an SEO optimizer and plagiarism checker.',
    category: 'Writing',
    pricing: 'freemium',
    website_url: 'https://gravitywrite.com',
  },
  {
    name: 'TextCortex',
    slug: 'textcortex',
    tagline: 'AI writing assistant across all your apps',
    description:
      'TextCortex works as a browser extension that brings AI writing to any website or app. It can rewrite, summarize, translate, and expand text anywhere you type. Supports 25+ languages and 60+ writing templates.',
    category: 'Writing',
    pricing: 'freemium',
    website_url: 'https://textcortex.com',
  },
  {
    name: 'Describely',
    slug: 'describely',
    tagline: 'AI product descriptions for ecommerce',
    description:
      'Describely generates SEO-optimized product descriptions for ecommerce stores at scale. It integrates with Shopify, WooCommerce, and BigCommerce. Used by online retailers to speed up catalog content creation.',
    category: 'Writing',
    pricing: 'paid',
    website_url: 'https://describely.ai',
  },
  {
    name: 'Smart Copy',
    slug: 'smart-copy',
    tagline: 'Unbounce AI copywriter for landing pages',
    description:
      'Smart Copy by Unbounce generates landing page copy, headlines, and CTAs using AI. It is built into the Unbounce platform and also available as a standalone tool. Ideal for conversion-focused marketers.',
    category: 'Writing',
    pricing: 'freemium',
    website_url: 'https://unbounce.com/smart-copy',
  },
  {
    name: 'Closers Copy',
    slug: 'closers-copy',
    tagline: 'AI copywriter trained on sales frameworks',
    description:
      'Closers Copy uses sales-specific AI models trained on proven copywriting frameworks. It includes AIDA, PAS, and other persuasion structures built in. Designed for direct response copywriters and sales pages.',
    category: 'Writing',
    pricing: 'paid',
    website_url: 'https://closerscopy.com',
  },
  {
    name: 'Compose AI',
    slug: 'compose-ai',
    tagline: 'Free AI autocomplete for faster writing',
    description:
      'Compose AI is a free Chrome extension that adds AI autocomplete to any text field. It learns your writing style and suggests completions as you type. Works in Gmail, Google Docs, and most web apps.',
    category: 'Writing',
    pricing: 'free',
    website_url: 'https://compose.ai',
  },
  {
    name: 'Jenni AI',
    slug: 'jenni-ai',
    tagline: 'AI writing assistant for academic papers',
    description:
      'Jenni AI is designed for students and researchers writing academic content. It provides in-text citations, paraphrasing, and research assistance. Helps avoid plagiarism while accelerating paper writing.',
    category: 'Writing',
    pricing: 'freemium',
    website_url: 'https://jenni.ai',
  },
  {
    name: 'Paragraph AI',
    slug: 'paragraph-ai',
    tagline: 'Mobile-first AI writing assistant',
    description:
      'Paragraph AI is a writing assistant available on iOS, Android, and Chrome. It generates replies, emails, posts, and essays from short prompts. Popular with mobile users who write on the go.',
    category: 'Writing',
    pricing: 'freemium',
    website_url: 'https://paragraphai.com',
  },
  {
    name: 'AI Writer',
    slug: 'ai-writer',
    tagline: 'Verifiable AI content with source citations',
    description:
      'AI Writer generates articles with cited sources so you can verify every claim. It focuses on factual accuracy and includes a text reviser and SEO editor. Good for publishers who need trustworthy content.',
    category: 'Writing',
    pricing: 'paid',
    website_url: 'https://ai-writer.com',
  },
  {
    name: 'Cowriter',
    slug: 'cowriter',
    tagline: 'AI writing tool with distraction-free editor',
    description:
      'Cowriter combines a clean distraction-free editor with AI writing assistance. It helps with brainstorming, drafting, and editing long-form content. Designed for writers who want minimal UI with powerful AI.',
    category: 'Writing',
    pricing: 'freemium',
    website_url: 'https://cowriter.org',
  },
  {
    name: 'Bearly AI',
    slug: 'bearly-ai',
    tagline: 'AI reading and writing assistant shortcut',
    description:
      'Bearly AI is a keyboard shortcut tool that brings AI writing and summarization anywhere on your Mac. Press a hotkey to summarize articles, rewrite text, or generate content. Built for power users and researchers.',
    category: 'Writing',
    pricing: 'freemium',
    website_url: 'https://bearly.ai',
  },
  {
    name: 'Chibi AI',
    slug: 'chibi-ai',
    tagline: 'Flexible AI writing tool for bloggers',
    description:
      'Chibi AI is a lightweight AI writing tool focused on blog post creation. It gives writers more control over AI output compared to fully automated tools. Suited for bloggers who want AI assistance without losing their voice.',
    category: 'Writing',
    pricing: 'paid',
    website_url: 'https://chibi.ai',
  },
  {
    name: 'Typli',
    slug: 'typli',
    tagline: 'AI writer with built-in SEO assistant',
    description:
      'Typli combines AI content generation with an integrated SEO assistant. It suggests keywords, checks readability, and generates meta descriptions automatically. Good for bloggers and content marketers focused on organic traffic.',
    category: 'Writing',
    pricing: 'freemium',
    website_url: 'https://typli.ai',
  },
];

async function main() {
  console.log(`Inserting ${tools.length} Writing tools...`);
  const { error } = await supabase
    .from('tools')
    .upsert(tools, { onConflict: 'slug' });

  if (error) console.error('Error:', error);
  else console.log(`✓ Done! Inserted ${tools.length} Writing tools`);
}

main();
