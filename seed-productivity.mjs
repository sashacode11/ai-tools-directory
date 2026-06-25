import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://ljjcbcxyinpykmcueykm.supabase.co',
  'sb_publishable_Opn0yui1j33Ohiz5biMsqQ_Yx6GxsMO',
);

const tools = [
  {
    name: 'Notion AI',
    slug: 'notion-ai-productivity',
    tagline: 'AI writing and summarization inside Notion',
    description:
      'Notion AI adds writing assistance, summarization, and translation directly inside Notion workspaces. It can generate action items from meeting notes and draft documents instantly. Used by teams already on Notion for project management.',
    category: 'Productivity',
    pricing: 'paid',
    website_url: 'https://notion.so/product/ai',
  },
  {
    name: 'Motion',
    slug: 'motion',
    tagline: 'AI calendar that plans your day automatically',
    description:
      'Motion uses AI to automatically schedule tasks and meetings into your calendar. It reprioritizes your schedule in real time when things change. Used by busy professionals who want optimized daily planning without manual effort.',
    category: 'Productivity',
    pricing: 'paid',
    website_url: 'https://usemotion.com',
  },
  {
    name: 'Reclaim AI',
    slug: 'reclaim-ai',
    tagline: 'AI scheduling assistant for Google Calendar',
    description:
      'Reclaim AI automatically schedules tasks, habits, and meetings in Google Calendar. It protects focus time and automatically reschedules when priorities change. Popular with knowledge workers managing complex schedules.',
    category: 'Productivity',
    pricing: 'freemium',
    website_url: 'https://reclaim.ai',
  },
  {
    name: 'Clockwise',
    slug: 'clockwise',
    tagline: 'AI calendar optimization for teams',
    description:
      'Clockwise optimizes team calendars to create more focus time and reduce meeting conflicts. It automatically moves flexible meetings to create uninterrupted work blocks. Used by engineering and product teams at fast-growing companies.',
    category: 'Productivity',
    pricing: 'freemium',
    website_url: 'https://getclockwise.com',
  },
  {
    name: 'Superhuman',
    slug: 'superhuman',
    tagline: 'Fastest AI email experience ever made',
    description:
      'Superhuman is a blazing fast email client with AI triage, summaries, and reply suggestions. It uses keyboard shortcuts and AI to help users reach inbox zero faster. Popular among executives and founders who live in their inbox.',
    category: 'Productivity',
    pricing: 'paid',
    website_url: 'https://superhuman.com',
  },
  {
    name: 'SaneBox',
    slug: 'sanebox',
    tagline: 'AI email filtering that learns your priorities',
    description:
      'SaneBox uses AI to filter unimportant emails out of your inbox automatically. It learns your email habits over time and improves its filtering accuracy. Works with any email client including Gmail and Outlook.',
    category: 'Productivity',
    pricing: 'paid',
    website_url: 'https://sanebox.com',
  },
  {
    name: 'Shortwave',
    slug: 'shortwave',
    tagline: 'AI-powered email client for Gmail',
    description:
      'Shortwave is an AI email client that summarizes threads and drafts replies for Gmail. It bundles related emails together and prioritizes important messages. Designed for people who receive high volumes of email daily.',
    category: 'Productivity',
    pricing: 'freemium',
    website_url: 'https://shortwave.com',
  },
  {
    name: 'Mem AI',
    slug: 'mem-ai',
    tagline: 'AI note-taking that organizes itself',
    description:
      'Mem is an AI-powered note-taking app that automatically organizes and connects your notes. It surfaces relevant notes when you need them without manual tagging. Popular with knowledge workers building a personal knowledge base.',
    category: 'Productivity',
    pricing: 'freemium',
    website_url: 'https://mem.ai',
  },
  {
    name: 'Remio',
    slug: 'remio',
    tagline: 'Local-first AI memory and personal knowledge base',
    description:
      'Remio is a local-first AI memory and personal knowledge base for files, webpages, recordings, emails, messages, images, and notes. It builds local indexes and vectors so users can retrieve focused personal context instead of repeatedly scanning folders or loading whole documents into prompts.',
    category: 'Productivity',
    pricing: 'freemium',
    website_url: 'https://remio.ai/',
  },
  {
    name: 'Obsidian AI',
    slug: 'obsidian-ai',
    tagline: 'AI plugins for Obsidian knowledge base',
    description:
      'Obsidian is a powerful note-taking app with AI plugins for summarization and generation. The Smart Connections plugin finds semantically related notes automatically. Used by researchers and writers building complex knowledge graphs.',
    category: 'Productivity',
    pricing: 'freemium',
    website_url: 'https://obsidian.md',
  },
  {
    name: 'Taskade',
    slug: 'taskade-productivity',
    tagline: 'AI agents for tasks and project management',
    description:
      'Taskade combines task management with AI agents that can research, write, and execute workflows. It includes real-time collaboration and video chat built in. Used by remote teams wanting AI-enhanced project management.',
    category: 'Productivity',
    pricing: 'freemium',
    website_url: 'https://taskade.com',
  },
  {
    name: 'Magical',
    slug: 'magical',
    tagline: 'AI text expander and automation tool',
    description:
      'Magical is a Chrome extension that expands shortcuts into full messages and autofills forms. It uses AI to personalize templates with recipient data automatically. Popular with sales reps and customer support teams for fast messaging.',
    category: 'Productivity',
    pricing: 'freemium',
    website_url: 'https://getmagical.com',
  },
  {
    name: 'Zapier AI',
    slug: 'zapier-ai',
    tagline: 'AI-powered workflow automation platform',
    description:
      'Zapier connects 6000+ apps and uses AI to help build automation workflows from natural language. It can create multi-step Zaps from plain English descriptions. The most popular no-code automation tool for business workflows.',
    category: 'Productivity',
    pricing: 'freemium',
    website_url: 'https://zapier.com',
  },
  {
    name: 'Make',
    slug: 'make-automation',
    tagline: 'Visual AI workflow automation platform',
    description:
      'Make (formerly Integromat) is a visual automation platform for building complex workflows. It supports 1000+ app integrations with advanced logic and data transformation. Popular with developers and power users needing advanced automation.',
    category: 'Productivity',
    pricing: 'freemium',
    website_url: 'https://make.com',
  },
  {
    name: 'Bardeen AI',
    slug: 'bardeen-ai',
    tagline: 'AI automation for repetitive browser tasks',
    description:
      'Bardeen is a browser extension that automates repetitive tasks across web apps. It includes pre-built playbooks for scraping, data entry, and outreach. Used by sales teams and researchers to automate manual workflows.',
    category: 'Productivity',
    pricing: 'freemium',
    website_url: 'https://bardeen.ai',
  },
  {
    name: 'Otter AI Meeting',
    slug: 'otter-ai-meeting',
    tagline: 'AI meeting notes and action items',
    description:
      'Otter AI automatically records, transcribes, and summarizes meetings in real time. It identifies speakers, highlights key moments, and generates action items. Integrates with Zoom, Google Meet, and Microsoft Teams.',
    category: 'Productivity',
    pricing: 'freemium',
    website_url: 'https://otter.ai',
  },
  {
    name: 'Fireflies Meeting',
    slug: 'fireflies-meeting',
    tagline: 'AI notetaker that joins your meetings',
    description:
      'Fireflies automatically joins calls to record, transcribe, and analyze meeting conversations. It creates searchable transcripts and tracks talking time per speaker. Used by sales, recruiting, and remote teams.',
    category: 'Productivity',
    pricing: 'freemium',
    website_url: 'https://fireflies.ai',
  },
  {
    name: 'Tldv',
    slug: 'tldv',
    tagline: 'Record and summarize video meetings with AI',
    description:
      'tl;dv records Zoom and Google Meet calls and generates AI summaries with timestamps. It allows clipping key moments and sharing highlights with stakeholders. Free plan includes unlimited recordings with AI summaries.',
    category: 'Productivity',
    pricing: 'freemium',
    website_url: 'https://tldv.io',
  },
  {
    name: 'Krisp Meetings',
    slug: 'krisp-meetings',
    tagline: 'AI noise cancellation and meeting notes',
    description:
      'Krisp removes background noise from calls and generates AI meeting notes automatically. It works with all conferencing apps without requiring a bot to join. Popular with remote workers in noisy home office environments.',
    category: 'Productivity',
    pricing: 'freemium',
    website_url: 'https://krisp.ai',
  },
  {
    name: 'Clearbit',
    slug: 'clearbit',
    tagline: 'AI data enrichment for business contacts',
    description:
      'Clearbit enriches contact and company data in real time using AI and data aggregation. It integrates with Salesforce, HubSpot, and marketing tools. Used by sales and marketing teams for lead enrichment and scoring.',
    category: 'Productivity',
    pricing: 'paid',
    website_url: 'https://clearbit.com',
  },
  {
    name: 'Cron',
    slug: 'cron',
    tagline: 'Next generation calendar for professionals',
    description:
      'Cron is a fast, keyboard-first calendar app with AI scheduling suggestions. It shows team availability and integrates with Zoom and Google Meet. Acquired by Notion to become their calendar product for power users.',
    category: 'Productivity',
    pricing: 'free',
    website_url: 'https://cron.com',
  },
  {
    name: 'Amie',
    slug: 'amie',
    tagline: 'Joyful productivity app with AI assistant',
    description:
      'Amie combines calendar, tasks, and contacts in one beautiful productivity app. It includes an AI assistant for scheduling and task management. Designed for individuals who want a unified view of their work and personal life.',
    category: 'Productivity',
    pricing: 'freemium',
    website_url: 'https://amie.so',
  },
  {
    name: 'Reflect',
    slug: 'reflect-notes',
    tagline: 'AI note-taking with networked thinking',
    description:
      'Reflect is a note-taking app with AI writing assistance and networked note connections. It syncs with Google Calendar to attach notes to meetings automatically. Popular with founders and executives for daily journaling and meeting prep.',
    category: 'Productivity',
    pricing: 'paid',
    website_url: 'https://reflect.app',
  },
  {
    name: 'Rewind AI',
    slug: 'rewind-ai',
    tagline: 'AI search for everything you have seen',
    description:
      'Rewind AI records everything on your Mac screen and makes it searchable with AI. It can recall any meeting, document, or website you visited. Useful for professionals who need to reference past conversations and work.',
    category: 'Productivity',
    pricing: 'freemium',
    website_url: 'https://rewind.ai',
  },
  {
    name: 'Raycast AI',
    slug: 'raycast-ai',
    tagline: 'AI-powered productivity launcher for Mac',
    description:
      'Raycast is a Mac launcher with built-in AI for drafting text, summarizing, and automating tasks. It replaces Spotlight with a faster, AI-enhanced command palette. Loved by developers and power users for its extensibility.',
    category: 'Productivity',
    pricing: 'freemium',
    website_url: 'https://raycast.com',
  },
  {
    name: 'Alfred AI',
    slug: 'alfred-ai',
    tagline: 'Powerful Mac launcher with AI workflows',
    description:
      'Alfred is a productivity app for Mac with AI-powered workflows and clipboard history. It speeds up repetitive tasks with custom keyboard shortcuts and automations. A long-standing favourite among Mac power users.',
    category: 'Productivity',
    pricing: 'freemium',
    website_url: 'https://alfredapp.com',
  },
  {
    name: 'Maestra',
    slug: 'maestra',
    tagline: 'AI transcription and subtitle generator',
    description:
      'Maestra automatically transcribes audio and video files with high accuracy using AI. It supports 80+ languages and generates subtitles in minutes. Used by media companies, educators, and content creators for captioning.',
    category: 'Productivity',
    pricing: 'freemium',
    website_url: 'https://maestra.ai',
  },
  {
    name: 'Spoke',
    slug: 'spoke-ai',
    tagline: 'AI summaries for Slack and meetings',
    description:
      'Spoke generates AI summaries of Slack channels, threads, and recorded meetings. It helps teams catch up on missed conversations without reading everything. Useful for async teams spread across multiple time zones.',
    category: 'Productivity',
    pricing: 'paid',
    website_url: 'https://spoke.app',
  },
  {
    name: 'Saga AI',
    slug: 'saga-ai',
    tagline: 'AI workspace for notes and tasks',
    description:
      'Saga is an AI-powered workspace that connects notes, tasks, and documents. It auto-links related content and suggests connections between ideas. Used by individuals and small teams wanting a smart all-in-one workspace.',
    category: 'Productivity',
    pricing: 'freemium',
    website_url: 'https://saga.so',
  },
  {
    name: 'Capacities',
    slug: 'capacities',
    tagline: 'AI note-taking with object-based organization',
    description:
      'Capacities is a note-taking tool that organizes information as objects like books, people, and projects. It includes AI writing assistance and smart tagging. Popular with knowledge workers building structured personal databases.',
    category: 'Productivity',
    pricing: 'freemium',
    website_url: 'https://capacities.io',
  },
  {
    name: 'Timely',
    slug: 'timely-ai',
    tagline: 'AI automatic time tracking for teams',
    description:
      'Timely automatically tracks time spent in apps and meetings using AI. It creates accurate timesheets without manual entry or timers. Used by agencies, consultants, and freelancers for effortless time tracking and billing.',
    category: 'Productivity',
    pricing: 'paid',
    website_url: 'https://timelyapp.com',
  },
];

async function main() {
  console.log(`Inserting ${tools.length} Productivity tools...`);
  const { error } = await supabase
    .from('tools')
    .upsert(tools, { onConflict: 'slug' });

  if (error) console.error('Error:', error);
  else console.log(`✓ Done! Inserted ${tools.length} Productivity tools`);
}

main();
