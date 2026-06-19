import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://ljjcbcxyinpykmcueykm.supabase.co',
  'sb_publishable_Opn0yui1j33Ohiz5biMsqQ_Yx6GxsMO',
);

const tools = [
  {
    name: 'GitHub Copilot',
    slug: 'github-copilot',
    tagline: 'AI pair programmer inside your editor',
    description:
      'GitHub Copilot suggests code completions and entire functions in real time. It integrates with VS Code, JetBrains, and Neovim. Trained on billions of lines of public code to assist developers of all skill levels.',
    category: 'Code',
    pricing: 'paid',
    website_url: 'https://github.com/features/copilot',
  },
  {
    name: 'Cursor',
    slug: 'cursor',
    tagline: 'AI-first code editor built on VS Code',
    description:
      'Cursor is a code editor with deep AI integration for writing, editing, and understanding code. It supports multi-file editing and codebase-wide context. Built on VS Code so existing extensions and settings transfer instantly.',
    category: 'Code',
    pricing: 'freemium',
    website_url: 'https://cursor.sh',
  },
  {
    name: 'Windsurf',
    slug: 'windsurf',
    tagline: 'AI coding agent by Codeium',
    description:
      'Windsurf is an AI-powered code editor by Codeium with agentic coding capabilities. It can plan and execute multi-step coding tasks autonomously. Designed for developers wanting an AI teammate rather than just autocomplete.',
    category: 'Code',
    pricing: 'freemium',
    website_url: 'https://codeium.com/windsurf',
  },
  {
    name: 'Tabnine',
    slug: 'tabnine',
    tagline: 'Private AI code completion for teams',
    description:
      'Tabnine provides AI code completion with a strong focus on privacy and security. It can run entirely on-premise without sending code to external servers. Popular with enterprises that have strict data security requirements.',
    category: 'Code',
    pricing: 'freemium',
    website_url: 'https://tabnine.com',
  },
  {
    name: 'Amazon CodeWhisperer',
    slug: 'amazon-codewhisperer',
    tagline: 'AWS AI coding assistant for developers',
    description:
      'Amazon CodeWhisperer generates code suggestions and scans for security vulnerabilities. It integrates with VS Code, JetBrains, and AWS Cloud9. Free for individual developers with enhanced features for AWS users.',
    category: 'Code',
    pricing: 'freemium',
    website_url: 'https://aws.amazon.com/codewhisperer',
  },
  {
    name: 'Replit AI',
    slug: 'replit-ai',
    tagline: 'AI coding assistant inside Replit IDE',
    description:
      'Replit AI provides code completion, explanation, and generation inside the Replit browser IDE. It includes Ghostwriter for code generation and debugging assistance. Ideal for beginners and students learning to code online.',
    category: 'Code',
    pricing: 'freemium',
    website_url: 'https://replit.com/ai',
  },
  {
    name: 'Cody by Sourcegraph',
    slug: 'cody-sourcegraph',
    tagline: 'AI coding assistant with codebase context',
    description:
      'Cody by Sourcegraph understands your entire codebase to provide accurate code suggestions. It can explain complex code, find bugs, and generate unit tests. Works with large enterprise codebases where context matters most.',
    category: 'Code',
    pricing: 'freemium',
    website_url: 'https://sourcegraph.com/cody',
  },
  {
    name: 'Phind',
    slug: 'phind',
    tagline: 'AI search engine for developers',
    description:
      'Phind is an AI-powered search engine specifically designed for programmers. It searches the web and generates detailed technical answers with code examples. Faster and more accurate than Google for coding questions.',
    category: 'Code',
    pricing: 'freemium',
    website_url: 'https://phind.com',
  },
  {
    name: 'Blackbox AI',
    slug: 'blackbox-ai',
    tagline: 'AI code generation and search tool',
    description:
      'Blackbox AI helps developers find and generate code quickly from natural language queries. It includes a VS Code extension and web interface for code search. Supports 20+ programming languages with context-aware suggestions.',
    category: 'Code',
    pricing: 'freemium',
    website_url: 'https://blackbox.ai',
  },
  {
    name: 'Sourcery',
    slug: 'sourcery',
    tagline: 'AI code reviewer and refactoring tool',
    description:
      'Sourcery automatically reviews pull requests and suggests code improvements. It focuses on code quality, readability, and Python best practices. Integrates with GitHub, GitLab, and VS Code for seamless code review.',
    category: 'Code',
    pricing: 'freemium',
    website_url: 'https://sourcery.ai',
  },
  {
    name: 'Debuild',
    slug: 'debuild',
    tagline: 'Build web apps from plain English descriptions',
    description:
      'Debuild generates full web applications from natural language descriptions. It creates React components and SQL queries automatically. Designed for non-developers and rapid prototyping of web app ideas.',
    category: 'Code',
    pricing: 'freemium',
    website_url: 'https://debuild.app',
  },
  {
    name: 'Mintlify',
    slug: 'mintlify',
    tagline: 'AI documentation writer for developers',
    description:
      'Mintlify automatically generates code documentation from source code. It creates clear docstrings and API documentation with one click. Integrates with VS Code and supports all major programming languages.',
    category: 'Code',
    pricing: 'freemium',
    website_url: 'https://mintlify.com',
  },
  {
    name: 'Sweep AI',
    slug: 'sweep-ai',
    tagline: 'AI junior developer for GitHub issues',
    description:
      'Sweep AI reads GitHub issues and automatically writes code to fix them. It creates pull requests with the solution for human review. Acts as an AI junior developer that handles small bug fixes and features.',
    category: 'Code',
    pricing: 'freemium',
    website_url: 'https://sweep.dev',
  },
  {
    name: 'Codeium',
    slug: 'codeium',
    tagline: 'Free AI code completion for developers',
    description:
      'Codeium provides free AI-powered code completion for 70+ programming languages. It integrates with 40+ editors including VS Code, JetBrains, and Vim. Completely free for individual developers with no usage limits.',
    category: 'Code',
    pricing: 'free',
    website_url: 'https://codeium.com',
  },
  {
    name: 'AskCodi',
    slug: 'askcodi',
    tagline: 'AI coding assistant for multiple languages',
    description:
      'AskCodi generates code, explains functions, and writes unit tests on demand. It supports 50+ programming languages and integrates with popular IDEs. Good for developers who want quick answers without leaving their editor.',
    category: 'Code',
    pricing: 'freemium',
    website_url: 'https://askcodi.com',
  },
  {
    name: 'Mutable AI',
    slug: 'mutable-ai',
    tagline: 'AI accelerated software development',
    description:
      'Mutable AI helps developers write production-ready code faster with AI assistance. It includes autocomplete, refactoring, and test generation features. Designed for professional developers building real-world applications.',
    category: 'Code',
    pricing: 'paid',
    website_url: 'https://mutable.ai',
  },
  {
    name: 'Codiga',
    slug: 'codiga',
    tagline: 'AI code analysis and smart snippets',
    description:
      'Codiga provides real-time code analysis and secure coding assistant features. It detects vulnerabilities and suggests fixes as you type. Integrates with VS Code, JetBrains, and Chrome for browser-based coding.',
    category: 'Code',
    pricing: 'freemium',
    website_url: 'https://codiga.io',
  },
  {
    name: 'Safurai',
    slug: 'safurai',
    tagline: 'AI code assistant for faster development',
    description:
      'Safurai is an AI coding assistant that helps with code generation, refactoring, and debugging. It works as a VS Code extension with a chat interface. Good for developers who want a conversational coding assistant.',
    category: 'Code',
    pricing: 'free',
    website_url: 'https://safurai.com',
  },
  {
    name: 'CodeGeeX',
    slug: 'codegeex',
    tagline: 'Open-source multilingual AI code generator',
    description:
      'CodeGeeX is an open-source AI coding assistant supporting 40+ programming languages. It offers code generation, translation between languages, and explanation features. Free to use with a VS Code and JetBrains plugin.',
    category: 'Code',
    pricing: 'free',
    website_url: 'https://codegeex.cn',
  },
  {
    name: 'Duet AI',
    slug: 'duet-ai',
    tagline: 'Google AI assistant for Cloud developers',
    description:
      "Duet AI is Google's AI assistant for Google Cloud developers and workspace users. It helps write cloud infrastructure code, debug applications, and generate data queries. Integrated into Google Cloud Console and IDEs.",
    category: 'Code',
    pricing: 'paid',
    website_url: 'https://cloud.google.com/duet-ai',
  },
  {
    name: 'Copilot X',
    slug: 'copilot-x',
    tagline: 'Next generation GitHub Copilot with chat',
    description:
      'Copilot X extends GitHub Copilot with a chat interface, pull request summaries, and CLI integration. It can explain code, suggest fixes for bugs, and generate tests. The most advanced AI coding assistant from GitHub.',
    category: 'Code',
    pricing: 'paid',
    website_url: 'https://github.com/features/preview/copilot-x',
  },
  {
    name: 'Snyk Code',
    slug: 'snyk-code',
    tagline: 'AI-powered security code scanning',
    description:
      'Snyk Code scans codebases for security vulnerabilities in real time using AI. It provides fix suggestions and integrates into CI/CD pipelines. Used by security-conscious development teams and DevOps engineers.',
    category: 'Code',
    pricing: 'freemium',
    website_url: 'https://snyk.io/product/snyk-code',
  },
  {
    name: 'Fig AI',
    slug: 'fig-ai',
    tagline: 'AI autocomplete for your terminal',
    description:
      'Fig adds AI-powered autocomplete to any terminal application. It suggests commands, flags, and arguments based on context. Makes command-line tools more accessible for developers of all experience levels.',
    category: 'Code',
    pricing: 'freemium',
    website_url: 'https://fig.io',
  },
  {
    name: 'Warp AI',
    slug: 'warp-ai',
    tagline: 'AI-powered terminal for modern developers',
    description:
      'Warp is a modern terminal with built-in AI that explains errors and suggests commands. It includes collaborative features and a command palette for quick actions. Replaces traditional terminals with a more intelligent interface.',
    category: 'Code',
    pricing: 'freemium',
    website_url: 'https://warp.dev',
  },
  {
    name: 'Codepal',
    slug: 'codepal',
    tagline: 'AI coding tools for every developer task',
    description:
      'Codepal offers 40+ AI coding tools including a code generator, reviewer, and explainer. It supports all major programming languages and frameworks. Great for developers who need specialized tools for different coding tasks.',
    category: 'Code',
    pricing: 'freemium',
    website_url: 'https://codepal.ai',
  },
  {
    name: 'Fronty',
    slug: 'fronty',
    tagline: 'Convert images to HTML CSS with AI',
    description:
      'Fronty converts design images and screenshots into clean HTML and CSS code using AI. It saves frontend developers hours of manual coding from mockups. Useful for quickly prototyping designs from Figma exports.',
    category: 'Code',
    pricing: 'freemium',
    website_url: 'https://fronty.com',
  },
  {
    name: 'Durable AI',
    slug: 'durable-ai',
    tagline: 'Build a website with AI in 30 seconds',
    description:
      'Durable AI generates complete small business websites in under 30 seconds. It includes AI copywriting, image generation, and a CRM tool. Designed for small businesses and freelancers who need a quick web presence.',
    category: 'Code',
    pricing: 'paid',
    website_url: 'https://durable.co',
  },
  {
    name: 'Enzyme',
    slug: 'enzyme',
    tagline: 'AI frontend engineer for your codebase',
    description:
      'Enzyme is an AI tool that understands your frontend codebase and implements UI changes. It reads your existing components and follows your coding patterns. Helps frontend teams ship UI updates faster.',
    category: 'Code',
    pricing: 'paid',
    website_url: 'https://enzyme.so',
  },
  {
    name: 'Codesquire AI',
    slug: 'codesquire-ai',
    tagline: 'AI code writing assistant for data scientists',
    description:
      'Codesquire AI helps data scientists write Python, SQL, and R code from natural language. It works inside Jupyter Notebooks, BigQuery, and Google Colab. Reduces the time spent writing repetitive data analysis code.',
    category: 'Code',
    pricing: 'freemium',
    website_url: 'https://codesquire.ai',
  },
  {
    name: 'Jit Security',
    slug: 'jit-security',
    tagline: 'AI continuous security for developers',
    description:
      'Jit provides continuous security testing integrated into the development workflow. It automates security scanning for code, dependencies, and infrastructure. Helps developer teams ship secure code without slowing down.',
    category: 'Code',
    pricing: 'freemium',
    website_url: 'https://jit.io',
  },
];

async function main() {
  console.log(`Inserting ${tools.length} Code tools...`);
  const { error } = await supabase
    .from('tools')
    .upsert(tools, { onConflict: 'slug' });

  if (error) console.error('Error:', error);
  else console.log(`✓ Done! Inserted ${tools.length} Code tools`);
}

main();
