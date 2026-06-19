import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://ljjcbcxyinpykmcueykm.supabase.co',
  'sb_publishable_Opn0yui1j33Ohiz5biMsqQ_Yx6GxsMO',
);

const tools = [
  // MARKETING
  {
    name: 'HubSpot AI',
    slug: 'hubspot-ai',
    tagline: 'AI-powered CRM and marketing platform',
    description:
      'HubSpot uses AI across its CRM, email, and content tools to help marketing teams grow faster. It includes AI email writing, predictive lead scoring, and chatbot builder. The most popular all-in-one marketing platform for SMBs.',
    category: 'Marketing',
    pricing: 'freemium',
    website_url: 'https://hubspot.com',
  },
  {
    name: 'Mailchimp AI',
    slug: 'mailchimp-ai',
    tagline: 'AI email marketing for small businesses',
    description:
      'Mailchimp uses AI to optimize send times, suggest subject lines, and personalize email campaigns. It includes a content generator and predictive segmentation. The most widely used email marketing platform for small businesses.',
    category: 'Marketing',
    pricing: 'freemium',
    website_url: 'https://mailchimp.com',
  },
  {
    name: 'Klaviyo AI',
    slug: 'klaviyo-ai',
    tagline: 'AI email and SMS marketing for ecommerce',
    description:
      'Klaviyo uses AI to power personalized email and SMS campaigns for ecommerce brands. It predicts customer lifetime value and optimal send times. Deeply integrated with Shopify and used by top DTC brands.',
    category: 'Marketing',
    pricing: 'freemium',
    website_url: 'https://klaviyo.com',
  },
  {
    name: 'AdCreative AI',
    slug: 'adcreative-ai',
    tagline: 'Generate high-converting ad creatives with AI',
    description:
      'AdCreative AI generates conversion-optimized ad images and copy for Google, Facebook, and Instagram. It scores creatives by predicted performance before you publish. Used by performance marketers and growth agencies.',
    category: 'Marketing',
    pricing: 'paid',
    website_url: 'https://adcreative.ai',
  },
  {
    name: 'Pencil AI',
    slug: 'pencil-ai',
    tagline: 'AI ad generation and testing platform',
    description:
      'Pencil generates AI ad creatives and predicts which will perform best before launch. It connects to ad accounts to learn from past performance data. Used by ecommerce brands and performance marketing agencies.',
    category: 'Marketing',
    pricing: 'paid',
    website_url: 'https://trypencil.com',
  },
  {
    name: 'Mutiny',
    slug: 'mutiny',
    tagline: 'AI website personalization for B2B companies',
    description:
      'Mutiny personalizes website content for different visitor segments using AI. It requires no engineering work and integrates with existing marketing stacks. Used by B2B SaaS companies to increase conversion rates.',
    category: 'Marketing',
    pricing: 'paid',
    website_url: 'https://mutinyhq.com',
  },
  {
    name: 'Drift AI',
    slug: 'drift-ai',
    tagline: 'AI conversational marketing and sales platform',
    description:
      'Drift uses AI chatbots to engage website visitors and qualify leads in real time. It books meetings automatically and routes conversations to the right sales rep. Used by B2B companies to accelerate pipeline generation.',
    category: 'Marketing',
    pricing: 'paid',
    website_url: 'https://drift.com',
  },
  {
    name: 'Intercom AI',
    slug: 'intercom-ai',
    tagline: 'AI customer messaging and support platform',
    description:
      'Intercom uses AI to power customer support, onboarding, and sales conversations. Its Fin AI bot resolves customer queries automatically without human agents. Used by SaaS companies for customer engagement and retention.',
    category: 'Marketing',
    pricing: 'paid',
    website_url: 'https://intercom.com',
  },
  {
    name: 'Postaga',
    slug: 'postaga',
    tagline: 'AI outreach and link building tool',
    description:
      'Postaga uses AI to find outreach opportunities and personalize email campaigns at scale. It automates link building, podcast booking, and press outreach. Used by SEO agencies and content marketers for scalable outreach.',
    category: 'Marketing',
    pricing: 'paid',
    website_url: 'https://postaga.com',
  },
  {
    name: 'Smartly IO',
    slug: 'smartly-io',
    tagline: 'AI social media advertising automation',
    description:
      'Smartly.io automates social media ad creation, targeting, and optimization using AI. It manages campaigns across Facebook, Instagram, Pinterest, and TikTok. Used by large brands and agencies managing millions in ad spend.',
    category: 'Marketing',
    pricing: 'paid',
    website_url: 'https://smartly.io',
  },
  {
    name: 'Phrasee',
    slug: 'phrasee',
    tagline: 'AI brand language optimization for marketing',
    description:
      'Phrasee generates and optimizes marketing language for email subject lines, push notifications, and ads. It uses NLP to match brand voice while maximizing engagement. Used by enterprise brands like Virgin and Dominos.',
    category: 'Marketing',
    pricing: 'paid',
    website_url: 'https://phrasee.co',
  },
  {
    name: 'Persado',
    slug: 'persado',
    tagline: 'AI motivation language for marketing campaigns',
    description:
      'Persado uses AI to generate marketing language that motivates specific audience segments. It has generated billions in incremental revenue for enterprise clients. Used by financial services and retail brands for high-stakes campaigns.',
    category: 'Marketing',
    pricing: 'paid',
    website_url: 'https://persado.com',
  },
  {
    name: 'Albert AI',
    slug: 'albert-ai',
    tagline: 'Autonomous AI digital marketing platform',
    description:
      'Albert AI autonomously manages digital marketing campaigns across search, social, and programmatic. It makes real-time optimization decisions without human intervention. Used by enterprise brands wanting fully autonomous campaign management.',
    category: 'Marketing',
    pricing: 'paid',
    website_url: 'https://albert.ai',
  },
  {
    name: 'Madgicx',
    slug: 'madgicx',
    tagline: 'AI ad management for Facebook and Google',
    description:
      'Madgicx provides AI-powered ad management and creative intelligence for Facebook and Google. It automates budget allocation and audience targeting optimization. Used by ecommerce brands scaling their paid advertising.',
    category: 'Marketing',
    pricing: 'paid',
    website_url: 'https://madgicx.com',
  },
  {
    name: 'Seventh Sense',
    slug: 'seventh-sense',
    tagline: 'AI email send time optimization',
    description:
      "Seventh Sense uses AI to determine the best time to send emails to each individual subscriber. It integrates with HubSpot and Marketo for enterprise email optimization. Increases open rates by sending at each person's peak engagement time.",
    category: 'Marketing',
    pricing: 'paid',
    website_url: 'https://theseventhsense.com',
  },
  {
    name: 'Optimove',
    slug: 'optimove',
    tagline: 'AI customer marketing orchestration platform',
    description:
      'Optimove uses AI to orchestrate personalized marketing campaigns across all channels. It predicts customer behavior and recommends the best next action. Used by gaming, retail, and financial services companies for retention marketing.',
    category: 'Marketing',
    pricing: 'paid',
    website_url: 'https://optimove.com',
  },
  {
    name: 'Sprout Social AI',
    slug: 'sprout-social-ai',
    tagline: 'AI social media management and analytics',
    description:
      'Sprout Social uses AI for social listening, content recommendations, and optimal post scheduling. It analyzes competitor performance and audience sentiment across platforms. Used by marketing teams managing enterprise social media presence.',
    category: 'Marketing',
    pricing: 'paid',
    website_url: 'https://sproutsocial.com',
  },
  {
    name: 'Brand24',
    slug: 'brand24',
    tagline: 'AI social media monitoring and analytics',
    description:
      'Brand24 monitors mentions of your brand across social media, news, and blogs using AI. It measures sentiment and identifies influencers talking about your brand. Used by PR teams and marketers for reputation management.',
    category: 'Marketing',
    pricing: 'paid',
    website_url: 'https://brand24.com',
  },
  {
    name: 'Lately AI',
    slug: 'lately-ai',
    tagline: 'AI social media content repurposing tool',
    description:
      'Lately AI analyzes your best-performing content and repurposes long-form content into social posts. It learns what resonates with your specific audience over time. Used by social media managers handling multiple brand accounts.',
    category: 'Marketing',
    pricing: 'paid',
    website_url: 'https://lately.ai',
  },
  {
    name: 'Taplio',
    slug: 'taplio',
    tagline: 'AI LinkedIn content and growth tool',
    description:
      'Taplio helps professionals grow on LinkedIn with AI-generated post ideas and scheduling. It includes engagement tools and analytics to optimize LinkedIn presence. Used by founders, executives, and B2B marketers building personal brands.',
    category: 'Marketing',
    pricing: 'paid',
    website_url: 'https://taplio.com',
  },
  {
    name: 'Tribescaler',
    slug: 'tribescaler',
    tagline: 'AI Twitter hook and thread generator',
    description:
      'Tribescaler generates viral Twitter hooks and threads using AI trained on top-performing content. It analyzes successful tweets to identify patterns that drive engagement. Used by creators and marketers growing their Twitter audience.',
    category: 'Marketing',
    pricing: 'freemium',
    website_url: 'https://tribescaler.com',
  },
  {
    name: 'Predis AI',
    slug: 'predis-ai',
    tagline: 'AI social media post and video creator',
    description:
      'Predis AI generates social media posts, carousels, and short videos from text prompts. It includes competitor analysis and post scheduling features. Good for small businesses managing their own social media marketing.',
    category: 'Marketing',
    pricing: 'freemium',
    website_url: 'https://predis.ai',
  },
  {
    name: 'Ocoya',
    slug: 'ocoya',
    tagline: 'AI content creation and social scheduling',
    description:
      'Ocoya combines AI copywriting with social media scheduling in one platform. It generates captions, hashtags, and visual content for all major platforms. Used by solopreneurs and agencies managing multiple social accounts.',
    category: 'Marketing',
    pricing: 'freemium',
    website_url: 'https://ocoya.com',
  },
  {
    name: 'Syllaby',
    slug: 'syllaby',
    tagline: 'AI social media video content strategy',
    description:
      'Syllaby uses AI to research trending questions in your industry and create video scripts. It finds what your target audience is searching for and turns it into content ideas. Used by service businesses building video marketing strategies.',
    category: 'Marketing',
    pricing: 'freemium',
    website_url: 'https://syllaby.io',
  },
  {
    name: 'Sendible AI',
    slug: 'sendible-ai',
    tagline: 'AI social media management for agencies',
    description:
      'Sendible is a social media management platform with AI content suggestions and scheduling. It supports white-label reporting for agency client management. Used by marketing agencies managing social media for multiple brands.',
    category: 'Marketing',
    pricing: 'paid',
    website_url: 'https://sendible.com',
  },
  {
    name: 'Contentsquare',
    slug: 'contentsquare',
    tagline: 'AI digital experience analytics platform',
    description:
      'Contentsquare uses AI to analyze user behavior on websites and apps. It identifies friction points and opportunities to improve conversion rates. Used by enterprise brands to optimize digital customer experiences.',
    category: 'Marketing',
    pricing: 'paid',
    website_url: 'https://contentsquare.com',
  },
  {
    name: 'Heap Analytics',
    slug: 'heap-analytics',
    tagline: 'AI product analytics that captures everything',
    description:
      'Heap automatically captures all user interactions on your website or app without manual tracking. Its AI surfaces the most impactful behaviors affecting conversion. Used by product and marketing teams for data-driven optimization.',
    category: 'Marketing',
    pricing: 'freemium',
    website_url: 'https://heap.io',
  },
  {
    name: 'Howler AI',
    slug: 'howler-ai',
    tagline: 'AI PR outreach and media pitching tool',
    description:
      'Howler AI automates media outreach by finding relevant journalists and personalizing pitches. It builds targeted media lists and tracks pitch responses. Used by startups and PR agencies for earned media campaigns.',
    category: 'Marketing',
    pricing: 'paid',
    website_url: 'https://howlerai.com',
  },
  {
    name: 'Inflection AI',
    slug: 'inflection-ai-marketing',
    tagline: 'AI-powered customer communication platform',
    description:
      'Inflection AI helps businesses send personalized messages to customers at the right moment. It uses AI to determine optimal messaging timing and content. Used by consumer brands for lifecycle marketing and retention.',
    category: 'Marketing',
    pricing: 'paid',
    website_url: 'https://inflection.ai',
  },
  {
    name: 'Exceed AI',
    slug: 'exceed-ai',
    tagline: 'AI sales assistant for lead follow-up',
    description:
      'Exceed AI automates lead follow-up with human-like email and chat conversations. It qualifies leads and books meetings directly into sales rep calendars. Used by B2B sales teams to ensure no leads fall through the cracks.',
    category: 'Marketing',
    pricing: 'paid',
    website_url: 'https://exceed.ai',
  },
  {
    name: 'Seventh AI',
    slug: 'seventh-ai',
    tagline: 'AI marketing attribution and analytics',
    description:
      'Seventh AI provides marketing attribution modeling to understand which channels drive revenue. It uses AI to analyze multi-touch customer journeys across all channels. Used by performance marketing teams optimizing budget allocation.',
    category: 'Marketing',
    pricing: 'paid',
    website_url: 'https://seventh.ai',
  },
  {
    name: 'Emplifi AI',
    slug: 'emplifi-ai',
    tagline: 'AI social media and customer experience platform',
    description:
      'Emplifi unifies social media marketing, commerce, and customer care with AI. It provides AI content suggestions, social listening, and customer service automation. Used by enterprise brands for unified social customer experience.',
    category: 'Marketing',
    pricing: 'paid',
    website_url: 'https://emplifi.io',
  },
  {
    name: 'Retention Science',
    slug: 'retention-science',
    tagline: 'AI lifecycle marketing for ecommerce',
    description:
      'Retention Science uses AI to predict customer behavior and automate lifecycle email campaigns. It identifies at-risk customers and sends personalized win-back campaigns. Used by ecommerce brands to maximize customer lifetime value.',
    category: 'Marketing',
    pricing: 'paid',
    website_url: 'https://retentionscience.com',
  },
  {
    name: 'Pattern89',
    slug: 'pattern89',
    tagline: 'AI creative intelligence for digital ads',
    description:
      'Pattern89 analyzes creative elements in ads to predict and improve performance. It tells marketers which colors, images, and copy elements drive the best results. Used by performance marketers to make data-driven creative decisions.',
    category: 'Marketing',
    pricing: 'paid',
    website_url: 'https://pattern89.com',
  },
  {
    name: 'Personyze',
    slug: 'personyze',
    tagline: 'AI website personalization and recommendations',
    description:
      'Personyze personalizes website content, popups, and product recommendations using AI. It segments visitors by behavior, location, and referral source. Used by ecommerce and media sites to increase engagement and conversions.',
    category: 'Marketing',
    pricing: 'paid',
    website_url: 'https://personyze.com',
  },
  {
    name: 'Zeta Global',
    slug: 'zeta-global',
    tagline: 'AI marketing cloud for enterprise brands',
    description:
      'Zeta Global is an AI-powered marketing cloud that identifies and acquires high-value customers. It uses a data cloud of 235 million profiles for precise targeting. Used by Fortune 500 companies for data-driven marketing campaigns.',
    category: 'Marketing',
    pricing: 'paid',
    website_url: 'https://zetaglobal.com',
  },
  {
    name: 'Cortex',
    slug: 'cortex-marketing',
    tagline: 'AI content strategy and creative optimization',
    description:
      'Cortex uses AI to analyze what content performs best for your brand and competitors. It recommends optimal posting times, content themes, and visual styles. Used by enterprise marketing teams for data-driven content strategy.',
    category: 'Marketing',
    pricing: 'paid',
    website_url: 'https://meetcortex.com',
  },
  {
    name: 'Invoca',
    slug: 'invoca',
    tagline: 'AI call tracking and conversation intelligence',
    description:
      'Invoca uses AI to analyze phone call conversations and attribute them to marketing campaigns. It identifies which ads and keywords drive phone leads. Used by healthcare, automotive, and financial services marketers.',
    category: 'Marketing',
    pricing: 'paid',
    website_url: 'https://invoca.com',
  },
  {
    name: 'Gorgias AI',
    slug: 'gorgias-ai',
    tagline: 'AI helpdesk for ecommerce customer support',
    description:
      'Gorgias is an AI-powered helpdesk built specifically for ecommerce stores. It automates responses to common questions about orders, returns, and shipping. Integrates deeply with Shopify to pull order data into support tickets.',
    category: 'Marketing',
    pricing: 'paid',
    website_url: 'https://gorgias.com',
  },
  {
    name: 'Yotpo AI',
    slug: 'yotpo-ai',
    tagline: 'AI reviews and loyalty platform for ecommerce',
    description:
      'Yotpo uses AI to collect and display customer reviews, photos, and loyalty rewards. It generates more reviews through smart timing and personalized requests. Used by ecommerce brands to build social proof and customer loyalty.',
    category: 'Marketing',
    pricing: 'freemium',
    website_url: 'https://yotpo.com',
  },
];

async function main() {
  console.log(`Inserting ${tools.length} tools across Marketing...`);
  const { error } = await supabase
    .from('tools')
    .upsert(tools, { onConflict: 'slug' });

  if (error) console.error('Error:', error);
  else console.log(`✓ Done! Inserted ${tools.length} tools`);
}

main();
