import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://ljjcbcxyinpykmcueykm.supabase.co',
  'sb_publishable_Opn0yui1j33Ohiz5biMsqQ_Yx6GxsMO',
);

const tools = [
  {
    name: 'Perplexity AI',
    slug: 'perplexity-ai',
    tagline: 'AI search engine with cited answers',
    description:
      'Perplexity AI is an AI-powered search engine that provides cited, conversational answers to queries. It searches the web in real time and shows sources for every claim. Used as a smarter alternative to traditional search engines.',
    category: 'Search',
    pricing: 'freemium',
    website_url: 'https://perplexity.ai',
  },
  {
    name: 'You.com',
    slug: 'you-com',
    tagline: 'AI search engine with apps and chat',
    description:
      'You.com is an AI search engine that combines web search with AI chat and specialized apps. It includes coding, writing, and research modes. Offers a privacy-focused alternative to Google with AI-enhanced results.',
    category: 'Search',
    pricing: 'freemium',
    website_url: 'https://you.com',
  },
  {
    name: 'Bing AI',
    slug: 'bing-ai',
    tagline: 'Microsoft Copilot search with GPT-4',
    description:
      "Bing AI integrates GPT-4 into Microsoft's search engine for conversational search. It generates summarized answers, compares products, and drafts content. Available in Microsoft Edge browser and Bing.com.",
    category: 'Search',
    pricing: 'free',
    website_url: 'https://bing.com/chat',
  },
  {
    name: 'Kagi Search',
    slug: 'kagi-search',
    tagline: 'Premium ad-free search with AI assistant',
    description:
      'Kagi is a paid, ad-free search engine focused on high-quality results without tracking. It includes Kagi Assistant powered by multiple AI models. Popular with privacy-conscious power users who want unbiased search results.',
    category: 'Search',
    pricing: 'paid',
    website_url: 'https://kagi.com',
  },
  {
    name: 'Brave Search',
    slug: 'brave-search-ai',
    tagline: 'Independent AI search with privacy focus',
    description:
      'Brave Search is an independent search engine with its own index and AI summarization. It does not track users or rely on Google or Bing indexes. Includes Summarizer feature for quick AI-generated answers.',
    category: 'Search',
    pricing: 'free',
    website_url: 'https://search.brave.com',
  },
  {
    name: 'Consensus',
    slug: 'consensus-search',
    tagline: 'AI search engine for scientific research',
    description:
      'Consensus searches peer-reviewed scientific papers and extracts key findings using AI. It synthesizes research across multiple studies to give evidence-based answers. Used by researchers, students, and healthcare professionals.',
    category: 'Search',
    pricing: 'freemium',
    website_url: 'https://consensus.app',
  },
  {
    name: 'Elicit',
    slug: 'elicit',
    tagline: 'AI research assistant for academic papers',
    description:
      'Elicit automates literature reviews by finding and summarizing relevant academic papers. It extracts key data points and organizes findings in structured tables. Used by researchers and evidence-based policy makers.',
    category: 'Search',
    pricing: 'freemium',
    website_url: 'https://elicit.org',
  },
  {
    name: 'Semantic Scholar',
    slug: 'semantic-scholar',
    tagline: 'Free AI-powered academic search engine',
    description:
      'Semantic Scholar is a free AI-powered research tool for finding academic papers. It uses AI to highlight influential citations and key findings. Covers 200 million academic papers across all scientific fields.',
    category: 'Search',
    pricing: 'free',
    website_url: 'https://semanticscholar.org',
  },
  {
    name: 'Metaphor Systems',
    slug: 'metaphor-systems',
    tagline: 'AI search that understands natural language',
    description:
      'Metaphor is a search engine designed to understand natural language and find semantically relevant content. It excels at finding specific types of content like essays, people, and companies. Offers an API for developers.',
    category: 'Search',
    pricing: 'freemium',
    website_url: 'https://metaphor.systems',
  },
  {
    name: 'Neeva',
    slug: 'neeva',
    tagline: 'Ad-free AI-powered search engine',
    description:
      'Neeva was an ad-free, subscription-based search engine with AI summarization features. It combined web results with personal data sources like email and Slack. Acquired by Snowflake in 2023 to power enterprise search.',
    category: 'Search',
    pricing: 'paid',
    website_url: 'https://neeva.com',
  },
  {
    name: 'Andi Search',
    slug: 'andi-search',
    tagline: 'Conversational AI search without ads',
    description:
      'Andi is a conversational AI search engine that answers questions directly without ads or tracking. It summarizes information from multiple sources into clean answers. Designed as a smarter, friendlier alternative to Google.',
    category: 'Search',
    pricing: 'free',
    website_url: 'https://andisearch.com',
  },
  {
    name: 'Exa AI',
    slug: 'exa-ai',
    tagline: 'Neural search API for AI applications',
    description:
      'Exa is a search API designed for AI applications that need semantic web search. It finds the most relevant content based on meaning rather than keywords. Used by developers building AI agents and research tools.',
    category: 'Search',
    pricing: 'freemium',
    website_url: 'https://exa.ai',
  },
  {
    name: 'Tavily',
    slug: 'tavily-search',
    tagline: 'Real-time web search API for AI agents',
    description:
      'Tavily is a search API optimised for AI agents and LLM applications. It returns clean, structured search results ready for AI processing. Used by developers building autonomous agents that need web access.',
    category: 'Search',
    pricing: 'freemium',
    website_url: 'https://tavily.com',
  },
  {
    name: 'Phind',
    slug: 'phind-search',
    tagline: 'AI search engine built for developers',
    description:
      'Phind is a developer-focused AI search engine that finds technical answers quickly. It searches documentation, Stack Overflow, and GitHub for accurate coding answers. Faster and more precise than general search engines for programming questions.',
    category: 'Search',
    pricing: 'freemium',
    website_url: 'https://phind.com',
  },
  {
    name: 'Devv AI',
    slug: 'devv-ai',
    tagline: 'AI search engine for software engineers',
    description:
      'Devv AI is a search engine specifically trained on software engineering content. It searches GitHub, documentation, and technical blogs for precise developer answers. Understands code context and returns working code examples.',
    category: 'Search',
    pricing: 'free',
    website_url: 'https://devv.ai',
  },
  {
    name: 'Liner AI',
    slug: 'liner-ai',
    tagline: 'AI search assistant with web highlighting',
    description:
      'Liner is an AI search assistant that highlights the most important parts of web pages. It provides AI-generated summaries alongside traditional search results. Used by researchers and students for efficient information gathering.',
    category: 'Search',
    pricing: 'freemium',
    website_url: 'https://getliner.com',
  },
  {
    name: 'Waldo',
    slug: 'waldo-search',
    tagline: 'AI search across all your apps and files',
    description:
      'Waldo is a universal search tool that searches across all your connected apps and files. It uses AI to find relevant information regardless of where it is stored. Connects to Google Drive, Notion, Slack, and more.',
    category: 'Search',
    pricing: 'paid',
    website_url: 'https://waldo.fyi',
  },
  {
    name: 'Glean',
    slug: 'glean',
    tagline: 'Enterprise AI search across company data',
    description:
      'Glean is an enterprise search platform that searches across all company tools and documents. It uses AI to surface relevant knowledge from Slack, Google Drive, Jira, and more. Helps employees find information without switching between apps.',
    category: 'Search',
    pricing: 'paid',
    website_url: 'https://glean.com',
  },
  {
    name: 'Hebbia',
    slug: 'hebbia',
    tagline: 'AI search for complex document analysis',
    description:
      'Hebbia is an AI search platform designed for analyzing large document collections. It is used by law firms, investment banks, and consulting firms for research. Can process thousands of documents and extract specific information instantly.',
    category: 'Search',
    pricing: 'paid',
    website_url: 'https://hebbia.ai',
  },
  {
    name: 'Komo Search',
    slug: 'komo-search',
    tagline: 'Fast AI search with community answers',
    description:
      'Komo Search combines AI-generated answers with community discussions for richer results. It is designed to be fast and ad-free with a clean interface. Includes trending searches and topic exploration features.',
    category: 'Search',
    pricing: 'free',
    website_url: 'https://komo.ai',
  },
  {
    name: 'iAsk AI',
    slug: 'iask-ai',
    tagline: 'Free AI search engine for factual answers',
    description:
      'iAsk AI is a free AI search engine that provides accurate, factual answers to questions. It searches authoritative sources and cites them in responses. Good for getting quick factual information without ads.',
    category: 'Search',
    pricing: 'free',
    website_url: 'https://iask.ai',
  },
  {
    name: 'Perplexity Copilot',
    slug: 'perplexity-copilot',
    tagline: 'Guided AI search with follow-up questions',
    description:
      'Perplexity Copilot provides a guided search experience with clarifying questions and deeper research. It breaks down complex topics into digestible summaries with sources. Part of the Perplexity AI Pro subscription.',
    category: 'Search',
    pricing: 'paid',
    website_url: 'https://perplexity.ai',
  },
  {
    name: 'Giga Search',
    slug: 'giga-search',
    tagline: 'AI search for GitHub repositories',
    description:
      'Giga Search provides semantic search across GitHub repositories and code. It understands natural language queries about code functionality. Used by developers looking for specific implementations or code examples.',
    category: 'Search',
    pricing: 'free',
    website_url: 'https://gigasearch.co',
  },
  {
    name: 'Lexii AI',
    slug: 'lexii-ai',
    tagline: 'AI search assistant with source citations',
    description:
      'Lexii AI answers questions with real-time web search and clear source citations. It is designed for quick research without diving deep into multiple web pages. Good for students and professionals needing cited answers fast.',
    category: 'Search',
    pricing: 'free',
    website_url: 'https://lexii.ai',
  },
  {
    name: 'Omnisearch',
    slug: 'omnisearch',
    tagline: 'AI semantic search for your content library',
    description:
      'Omnisearch provides semantic search across videos, podcasts, and documents. It finds the exact moment in a video where a topic is discussed. Used by media companies and content creators managing large libraries.',
    category: 'Search',
    pricing: 'paid',
    website_url: 'https://omnisearch.ai',
  },
  {
    name: 'Nuclia',
    slug: 'nuclia',
    tagline: 'AI search API for unstructured data',
    description:
      'Nuclia is an AI search API that indexes and searches unstructured data like documents and videos. It provides semantic search capabilities without requiring data science expertise. Used by developers building intelligent search features.',
    category: 'Search',
    pricing: 'freemium',
    website_url: 'https://nuclia.com',
  },
  {
    name: 'Algolia AI',
    slug: 'algolia-ai',
    tagline: 'AI-powered site search and discovery',
    description:
      'Algolia provides fast, AI-powered search for websites and applications. It includes NeuralSearch that combines vector and keyword search for best results. Used by thousands of companies including Lacoste and Stripe.',
    category: 'Search',
    pricing: 'freemium',
    website_url: 'https://algolia.com',
  },
  {
    name: 'Typesense',
    slug: 'typesense',
    tagline: 'Open-source AI-powered search engine',
    description:
      'Typesense is a fast, open-source search engine with AI-powered semantic search. It is designed as an easier alternative to Elasticsearch with instant results. Popular with developers building search into their own applications.',
    category: 'Search',
    pricing: 'freemium',
    website_url: 'https://typesense.org',
  },
  {
    name: 'Meilisearch',
    slug: 'meilisearch',
    tagline: 'Fast open-source search with AI features',
    description:
      'Meilisearch is an open-source search engine with built-in AI semantic search capabilities. It is known for its speed and ease of integration. Used by developers wanting to add powerful search to their apps quickly.',
    category: 'Search',
    pricing: 'freemium',
    website_url: 'https://meilisearch.com',
  },
  {
    name: 'Xata',
    slug: 'xata',
    tagline: 'Serverless database with AI search built in',
    description:
      'Xata is a serverless database platform with built-in full-text and vector search. It combines the features of a database, search engine, and analytics platform. Used by developers wanting a simple all-in-one data platform.',
    category: 'Search',
    pricing: 'freemium',
    website_url: 'https://xata.io',
  },
];

async function main() {
  console.log(`Inserting ${tools.length} Search tools...`);
  const { error } = await supabase
    .from('tools')
    .upsert(tools, { onConflict: 'slug' });

  if (error) console.error('Error:', error);
  else console.log(`✓ Done! Inserted ${tools.length} Search tools`);
}

main();
