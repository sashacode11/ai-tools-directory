import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://ljjcbcxyinpykmcueykm.supabase.co',
  'sb_publishable_Opn0yui1j33Ohiz5biMsqQ_Yx6GxsMO',
);

const tools = [
  // BUSINESS
  {
    name: 'Salesforce Einstein',
    slug: 'salesforce-einstein',
    tagline: 'AI built into the Salesforce platform',
    description:
      'Salesforce Einstein brings AI to every Salesforce product including CRM, marketing, and service. It predicts lead scores, recommends next actions, and automates routine tasks. The most widely deployed enterprise AI platform globally.',
    category: 'Business',
    pricing: 'paid',
    website_url: 'https://salesforce.com/products/einstein',
  },
  {
    name: 'Microsoft Copilot 365',
    slug: 'microsoft-copilot-365',
    tagline: 'AI assistant across Microsoft Office apps',
    description:
      'Microsoft 365 Copilot integrates GPT-4 into Word, Excel, PowerPoint, Teams, and Outlook. It drafts documents, analyzes data, summarizes meetings, and automates tasks. The most significant AI productivity launch for enterprise users.',
    category: 'Business',
    pricing: 'paid',
    website_url: 'https://microsoft.com/microsoft-365/copilot',
  },
  {
    name: 'Google Workspace AI',
    slug: 'google-workspace-ai',
    tagline: 'AI features across Google Docs and Gmail',
    description:
      'Google Workspace includes Duet AI for writing in Docs, summarizing in Gmail, and analyzing in Sheets. It generates presentations in Slides and takes meeting notes in Meet. Used by businesses running on Google Workspace.',
    category: 'Business',
    pricing: 'paid',
    website_url: 'https://workspace.google.com/features/ai',
  },
  {
    name: 'Zoho Zia',
    slug: 'zoho-zia',
    tagline: 'AI business assistant across Zoho apps',
    description:
      "Zia is Zoho's AI assistant built into its CRM, analytics, and business apps. It predicts sales outcomes, detects anomalies, and automates data entry. Used by SMBs running their business on the Zoho ecosystem.",
    category: 'Business',
    pricing: 'freemium',
    website_url: 'https://zoho.com/zia',
  },
  {
    name: 'Gong IO',
    slug: 'gong-io',
    tagline: 'AI revenue intelligence platform for sales',
    description:
      'Gong records and analyzes sales calls using AI to identify winning behaviors. It provides deal intelligence, coaching insights, and forecast accuracy. Used by enterprise sales teams to improve rep performance and close rates.',
    category: 'Business',
    pricing: 'paid',
    website_url: 'https://gong.io',
  },
  {
    name: 'Chorus AI',
    slug: 'chorus-ai',
    tagline: 'AI conversation intelligence for sales teams',
    description:
      'Chorus by ZoomInfo captures and analyzes sales conversations to surface insights. It identifies deal risks, coaching opportunities, and competitive mentions. Used by B2B sales teams to replicate top performer behaviors.',
    category: 'Business',
    pricing: 'paid',
    website_url: 'https://zoominfo.com/products/chorus',
  },
  {
    name: 'People AI',
    slug: 'people-ai',
    tagline: 'AI revenue operations and sales intelligence',
    description:
      'People.ai uses AI to capture all sales activity and map it to CRM records automatically. It eliminates manual data entry and provides accurate pipeline visibility. Used by enterprise sales teams for revenue operations efficiency.',
    category: 'Business',
    pricing: 'paid',
    website_url: 'https://people.ai',
  },
  {
    name: 'Clari',
    slug: 'clari',
    tagline: 'AI revenue platform for forecasting',
    description:
      'Clari uses AI to analyze pipeline data and provide accurate revenue forecasts. It identifies at-risk deals and gives sales leaders real-time visibility. Used by enterprise revenue teams for predictable revenue growth.',
    category: 'Business',
    pricing: 'paid',
    website_url: 'https://clari.com',
  },
  {
    name: 'Outreach AI',
    slug: 'outreach-ai',
    tagline: 'AI sales execution and engagement platform',
    description:
      'Outreach uses AI to help sales reps prioritize prospects and personalize outreach at scale. It includes AI-powered email sequencing, meeting intelligence, and deal health scoring. Used by enterprise sales teams for systematic outbound sales.',
    category: 'Business',
    pricing: 'paid',
    website_url: 'https://outreach.io',
  },
  {
    name: 'Salesloft AI',
    slug: 'salesloft-ai',
    tagline: 'AI-powered sales engagement platform',
    description:
      'Salesloft uses AI to help sales teams engage buyers throughout the entire sales cycle. It includes cadence automation, conversation intelligence, and deal analytics. Competes directly with Outreach for enterprise sales team workflows.',
    category: 'Business',
    pricing: 'paid',
    website_url: 'https://salesloft.com',
  },
  {
    name: 'Apollo IO',
    slug: 'apollo-io',
    tagline: 'AI sales intelligence and engagement platform',
    description:
      'Apollo.io provides a database of 275 million contacts with AI-powered sales engagement. It combines prospecting, email sequencing, and call tools in one platform. Popular with SDR teams for outbound prospecting and lead generation.',
    category: 'Business',
    pricing: 'freemium',
    website_url: 'https://apollo.io',
  },
  {
    name: 'ZoomInfo AI',
    slug: 'zoominfo-ai',
    tagline: 'AI B2B contact and company intelligence',
    description:
      'ZoomInfo provides AI-powered B2B contact data, company intelligence, and buyer intent signals. It helps sales and marketing teams find and engage the right prospects. The largest B2B contact database used by enterprise GTM teams.',
    category: 'Business',
    pricing: 'paid',
    website_url: 'https://zoominfo.com',
  },
  {
    name: 'Lavender AI',
    slug: 'lavender-ai',
    tagline: 'AI email coach for sales reps',
    description:
      'Lavender analyzes sales emails in real time and scores them for reply likelihood. It suggests improvements to subject lines, length, and personalization. Used by SDRs and AEs to write more effective cold and warm emails.',
    category: 'Business',
    pricing: 'freemium',
    website_url: 'https://lavender.ai',
  },
  {
    name: 'Crystal Knows',
    slug: 'crystal-knows',
    tagline: 'AI personality insights for sales',
    description:
      'Crystal uses AI to predict the personality type of anyone based on their online presence. It advises salespeople on how to communicate with each prospect. Used by sales teams to personalize outreach based on personality type.',
    category: 'Business',
    pricing: 'freemium',
    website_url: 'https://crystalknows.com',
  },
  {
    name: 'Dooly AI',
    slug: 'dooly-ai',
    tagline: 'AI sales workspace for CRM hygiene',
    description:
      'Dooly helps sales reps update Salesforce and take meeting notes simultaneously using AI. It automatically syncs call notes to the correct CRM fields. Used by sales teams who struggle with CRM data quality and rep adoption.',
    category: 'Business',
    pricing: 'freemium',
    website_url: 'https://dooly.ai',
  },
  {
    name: 'Tome AI',
    slug: 'tome-ai',
    tagline: 'AI presentation and storytelling tool',
    description:
      'Tome uses AI to generate entire presentations and business narratives from prompts. It creates slide decks with AI-generated text, images, and layouts. Used by founders, consultants, and sales teams for fast pitch creation.',
    category: 'Business',
    pricing: 'freemium',
    website_url: 'https://tome.app',
  },
  {
    name: 'Gamma App',
    slug: 'gamma-app',
    tagline: 'AI presentation generator for business',
    description:
      'Gamma creates polished presentations, documents, and websites from text prompts. It generates complete slide decks with professional design in seconds. Popular with business professionals who need fast, good-looking presentations.',
    category: 'Business',
    pricing: 'freemium',
    website_url: 'https://gamma.app',
  },
  {
    name: 'Beautiful AI',
    slug: 'beautiful-ai',
    tagline: 'AI-powered smart presentation software',
    description:
      'Beautiful.ai uses AI design rules to automatically format presentations as you add content. It eliminates manual slide formatting with smart templates. Used by business teams who want professional presentations without a designer.',
    category: 'Business',
    pricing: 'paid',
    website_url: 'https://beautiful.ai',
  },
  {
    name: 'Rows AI',
    slug: 'rows-ai',
    tagline: 'AI spreadsheet that analyzes your data',
    description:
      'Rows is a spreadsheet with built-in AI that can analyze and summarize data instantly. It connects to 50+ data sources and generates charts and insights automatically. Used by business analysts and operations teams for data-driven reporting.',
    category: 'Business',
    pricing: 'freemium',
    website_url: 'https://rows.com',
  },
  {
    name: 'Equals AI',
    slug: 'equals-ai',
    tagline: 'AI analytics connected to your database',
    description:
      'Equals connects directly to databases and data warehouses for AI-powered analysis. It combines spreadsheet flexibility with live data connections and AI insights. Used by startup operators and finance teams for real-time business analytics.',
    category: 'Business',
    pricing: 'paid',
    website_url: 'https://equals.com',
  },
  {
    name: 'Valid8 AI',
    slug: 'valid8-ai',
    tagline: 'AI financial analysis for investors',
    description:
      'Valid8 uses AI to analyze financial documents and validate financial data accuracy. It automates financial due diligence for investors and lenders. Used by private equity firms and credit analysts for faster deal analysis.',
    category: 'Business',
    pricing: 'paid',
    website_url: 'https://valid8financial.com',
  },
  {
    name: 'Kira Systems',
    slug: 'kira-systems',
    tagline: 'AI contract analysis for legal teams',
    description:
      'Kira Systems uses machine learning to extract and analyze information from contracts. It speeds up contract review for M&A due diligence and compliance. Used by law firms and corporate legal departments for document review.',
    category: 'Business',
    pricing: 'paid',
    website_url: 'https://kirasystems.com',
  },
  {
    name: 'Luminance',
    slug: 'luminance',
    tagline: 'AI legal document review and analysis',
    description:
      'Luminance uses AI trained on legal documents to review and analyze contracts. It identifies unusual clauses and risk factors automatically. Used by law firms and in-house legal teams for faster contract review.',
    category: 'Business',
    pricing: 'paid',
    website_url: 'https://luminance.com',
  },
  {
    name: 'Ironclad AI',
    slug: 'ironclad-ai',
    tagline: 'AI contract management platform',
    description:
      'Ironclad is a digital contracting platform with AI for drafting, negotiating, and managing contracts. It automates contract workflows and provides real-time analytics on contract data. Used by legal operations teams at enterprise companies.',
    category: 'Business',
    pricing: 'paid',
    website_url: 'https://ironcladapp.com',
  },
  {
    name: 'Domo AI',
    slug: 'domo-ai',
    tagline: 'AI business intelligence platform',
    description:
      'Domo is a cloud-based business intelligence platform with AI-powered insights and alerts. It connects to 1000+ data sources and provides real-time dashboards. Used by executives and data teams for enterprise-wide business intelligence.',
    category: 'Business',
    pricing: 'paid',
    website_url: 'https://domo.com',
  },
  {
    name: 'Tableau AI',
    slug: 'tableau-ai',
    tagline: 'AI-powered data visualization platform',
    description:
      'Tableau uses AI to help users explore data and discover insights through visual analytics. Einstein Discovery integration provides predictive analytics and recommendations. The most widely used enterprise data visualization platform globally.',
    category: 'Business',
    pricing: 'paid',
    website_url: 'https://tableau.com',
  },
  {
    name: 'ThoughtSpot',
    slug: 'thoughtspot',
    tagline: 'AI search and analytics for business data',
    description:
      'ThoughtSpot lets users search their business data in natural language to get instant insights. Its SpotIQ AI automatically discovers hidden insights in data. Used by large enterprises for self-service business intelligence.',
    category: 'Business',
    pricing: 'paid',
    website_url: 'https://thoughtspot.com',
  },
  {
    name: 'Sisense AI',
    slug: 'sisense-ai',
    tagline: 'AI embedded analytics for product teams',
    description:
      'Sisense provides AI-powered embedded analytics for software products. It allows companies to add intelligence and data insights directly into their applications. Used by product teams wanting to deliver analytics as a product feature.',
    category: 'Business',
    pricing: 'paid',
    website_url: 'https://sisense.com',
  },
  {
    name: 'Mosaic Tech',
    slug: 'mosaic-tech',
    tagline: 'AI financial planning for startups',
    description:
      'Mosaic is a strategic finance platform that connects to financial systems for AI-powered planning. It automates financial reporting and scenario modeling for finance teams. Used by high-growth startups and scale-ups for strategic financial management.',
    category: 'Business',
    pricing: 'paid',
    website_url: 'https://mosaic.tech',
  },
  {
    name: 'Brex AI',
    slug: 'brex-ai',
    tagline: 'AI spend management for startups',
    description:
      'Brex uses AI to automate expense categorization, receipt matching, and spend insights. It provides real-time visibility into company spending patterns. Used by startups and tech companies for modern finance management.',
    category: 'Business',
    pricing: 'freemium',
    website_url: 'https://brex.com',
  },
  {
    name: 'Ramp AI',
    slug: 'ramp-ai',
    tagline: 'AI corporate card and spend management',
    description:
      'Ramp uses AI to identify cost-saving opportunities and automate expense management. It automatically categorizes transactions and flags policy violations. Used by thousands of companies to reduce spending and save time on finance.',
    category: 'Business',
    pricing: 'freemium',
    website_url: 'https://ramp.com',
  },
  {
    name: 'Pulley AI',
    slug: 'pulley-ai',
    tagline: 'AI equity management for startups',
    description:
      'Pulley uses AI to simplify cap table management and equity planning for startups. It models dilution scenarios and helps founders make informed equity decisions. Used by early-stage startups managing complex equity structures.',
    category: 'Business',
    pricing: 'paid',
    website_url: 'https://pulley.com',
  },
  {
    name: 'Harvey AI',
    slug: 'harvey-ai',
    tagline: 'AI legal assistant for law firms',
    description:
      'Harvey AI is a legal AI platform built on GPT-4 for law firms and legal departments. It assists with contract analysis, legal research, and document drafting. Backed by OpenAI and used by major law firms globally.',
    category: 'Business',
    pricing: 'paid',
    website_url: 'https://harvey.ai',
  },
  {
    name: 'Casetext',
    slug: 'casetext',
    tagline: 'AI legal research and document drafting',
    description:
      'Casetext provides AI-powered legal research and document drafting for attorneys. Its CoCounsel tool uses GPT-4 to analyze documents and answer legal questions. Acquired by Thomson Reuters to enhance their legal AI offerings.',
    category: 'Business',
    pricing: 'paid',
    website_url: 'https://casetext.com',
  },
  {
    name: 'Lex Machina',
    slug: 'lex-machina',
    tagline: 'AI legal analytics for litigation strategy',
    description:
      'Lex Machina provides legal analytics for litigation strategy using AI. It analyzes judge behavior, opposing counsel patterns, and case outcomes. Used by litigators to make data-driven decisions about cases and strategies.',
    category: 'Business',
    pricing: 'paid',
    website_url: 'https://lexmachina.com',
  },
  {
    name: 'Runway Financial',
    slug: 'runway-financial',
    tagline: 'AI financial modeling for operators',
    description:
      'Runway is a financial modeling platform that connects live data for real-time forecasting. It uses AI to help operators build and maintain financial models without spreadsheets. Used by startup CFOs and operators for dynamic financial planning.',
    category: 'Business',
    pricing: 'paid',
    website_url: 'https://runway.com',
  },
  {
    name: 'Quantive AI',
    slug: 'quantive-ai',
    tagline: 'AI strategy and OKR management platform',
    description:
      'Quantive uses AI to help organizations set, track, and achieve strategic goals with OKRs. It provides AI-generated OKR suggestions and progress insights. Used by enterprises for cascading strategy from leadership to teams.',
    category: 'Business',
    pricing: 'paid',
    website_url: 'https://quantive.com',
  },
  {
    name: 'Leena AI',
    slug: 'leena-ai',
    tagline: 'AI employee experience and HR platform',
    description:
      'Leena AI provides an AI assistant that handles HR queries, onboarding, and policy questions. It integrates with HRMS systems to give employees instant answers. Used by large enterprises to improve employee self-service and reduce HR workload.',
    category: 'Business',
    pricing: 'paid',
    website_url: 'https://leena.ai',
  },
  {
    name: 'Effy AI',
    slug: 'effy-ai',
    tagline: 'AI performance review and feedback tool',
    description:
      'Effy AI streamlines performance reviews with AI-generated feedback summaries and templates. It runs 360 feedback cycles and generates actionable development insights. Used by HR teams and managers for efficient performance management.',
    category: 'Business',
    pricing: 'freemium',
    website_url: 'https://effy.ai',
  },
  {
    name: 'Workday AI',
    slug: 'workday-ai',
    tagline: 'AI-powered HR and finance enterprise platform',
    description:
      'Workday uses AI across its HR and finance platform for workforce planning and insights. It provides skills intelligence, hiring recommendations, and anomaly detection. Used by large enterprises for unified HR and financial management.',
    category: 'Business',
    pricing: 'paid',
    website_url: 'https://workday.com',
  },
];

async function main() {
  console.log(`Inserting ${tools.length} tools across Business...`);
  const { error } = await supabase
    .from('tools')
    .upsert(tools, { onConflict: 'slug' });

  if (error) console.error('Error:', error);
  else console.log(`✓ Done! Inserted ${tools.length} tools`);
}

main();
