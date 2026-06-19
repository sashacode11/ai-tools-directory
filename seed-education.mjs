import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://ljjcbcxyinpykmcueykm.supabase.co',
  'sb_publishable_Opn0yui1j33Ohiz5biMsqQ_Yx6GxsMO',
);

const tools = [
  // EDUCATION
  {
    name: 'Khan Academy Khanmigo',
    slug: 'khanmigo',
    tagline: 'AI tutor for students by Khan Academy',
    description:
      "Khanmigo is Khan Academy's AI tutor that guides students through problems using the Socratic method. It never gives answers directly but helps students think through problems. Available to students and teachers on Khan Academy.",
    category: 'Education',
    pricing: 'freemium',
    website_url: 'https://khanacademy.org/khan-labs',
  },
  {
    name: 'Duolingo Max',
    slug: 'duolingo-max',
    tagline: 'AI language learning with GPT-4',
    description:
      "Duolingo Max uses GPT-4 to power Explain My Answer and Roleplay features. It lets learners practice real conversations with AI characters in the target language. The most advanced tier of the world's most popular language learning app.",
    category: 'Education',
    pricing: 'paid',
    website_url: 'https://duolingo.com',
  },
  {
    name: 'Coursera Coach',
    slug: 'coursera-coach',
    tagline: 'AI learning assistant inside Coursera courses',
    description:
      'Coursera Coach is an AI assistant embedded in Coursera courses to help learners. It answers questions about course content and helps with assignments. Available to Coursera Plus subscribers across thousands of courses.',
    category: 'Education',
    pricing: 'paid',
    website_url: 'https://coursera.org',
  },
  {
    name: 'Quizlet AI',
    slug: 'quizlet-ai',
    tagline: 'AI study tools and flashcard generation',
    description:
      'Quizlet uses AI to generate flashcards, practice tests, and explanations from any study material. Its Q-Chat AI tutor helps students understand difficult concepts conversationally. Used by hundreds of millions of students worldwide.',
    category: 'Education',
    pricing: 'freemium',
    website_url: 'https://quizlet.com',
  },
  {
    name: 'Chegg AI',
    slug: 'chegg-ai',
    tagline: 'AI homework help and tutoring platform',
    description:
      'Chegg uses AI to provide step-by-step homework help across math, science, and humanities. It offers 24/7 AI tutoring with human expert backup. Used by college students needing help with difficult coursework.',
    category: 'Education',
    pricing: 'paid',
    website_url: 'https://chegg.com',
  },
  {
    name: 'Socratic by Google',
    slug: 'socratic-google',
    tagline: 'AI homework helper by Google',
    description:
      'Socratic is a free AI homework app by Google that explains concepts using visual learning. Students take a photo of a problem and get a step-by-step explanation. Covers math, science, literature, and social studies.',
    category: 'Education',
    pricing: 'free',
    website_url: 'https://socratic.org',
  },
  {
    name: 'Photomath',
    slug: 'photomath',
    tagline: 'Scan and solve math problems with AI',
    description:
      'Photomath lets students scan math problems with their camera to get step-by-step solutions. It covers arithmetic through calculus with detailed explanations. One of the most downloaded education apps with 220 million downloads.',
    category: 'Education',
    pricing: 'freemium',
    website_url: 'https://photomath.com',
  },
  {
    name: 'Wolfram Alpha',
    slug: 'wolfram-alpha',
    tagline: 'Computational AI engine for knowledge and math',
    description:
      'Wolfram Alpha answers factual and computational questions using its knowledge engine. It solves complex math, science, and data problems with step-by-step solutions. Used by students, engineers, and researchers for advanced calculations.',
    category: 'Education',
    pricing: 'freemium',
    website_url: 'https://wolframalpha.com',
  },
  {
    name: 'Brilliant',
    slug: 'brilliant-education',
    tagline: 'Interactive AI learning for math and science',
    description:
      "Brilliant teaches math, science, and computer science through interactive problem-solving. Its AI adapts to each learner's pace and identifies knowledge gaps. Used by professionals and students wanting rigorous quantitative skills.",
    category: 'Education',
    pricing: 'paid',
    website_url: 'https://brilliant.org',
  },
  {
    name: 'Synthesis AI',
    slug: 'synthesis-ai-tutor',
    tagline: 'AI accelerated learning for kids',
    description:
      "Synthesis is an AI-powered learning platform originally built for SpaceX employees' kids. It teaches critical thinking through collaborative problem-solving games. Now available to all families as an after-school learning program.",
    category: 'Education',
    pricing: 'paid',
    website_url: 'https://synthesis.com',
  },
  {
    name: 'Carnegie Learning',
    slug: 'carnegie-learning',
    tagline: 'AI math tutoring for K12 schools',
    description:
      'Carnegie Learning uses AI to provide personalized math tutoring that adapts to each student. It is used in thousands of schools across the US for math instruction. Backed by decades of cognitive science research on learning.',
    category: 'Education',
    pricing: 'paid',
    website_url: 'https://carnegielearning.com',
  },
  {
    name: 'Numerade',
    slug: 'numerade',
    tagline: 'AI STEM tutoring with video explanations',
    description:
      'Numerade provides AI-powered STEM tutoring with thousands of video explanations. Its AI tutor Ace gives personalized help on specific problems. Used by high school and college students for STEM homework help.',
    category: 'Education',
    pricing: 'freemium',
    website_url: 'https://numerade.com',
  },
  {
    name: 'Knowji',
    slug: 'knowji',
    tagline: 'AI vocabulary learning app for students',
    description:
      'Knowji uses spaced repetition and AI to help students learn vocabulary efficiently. It includes audio pronunciations and example sentences for each word. Designed for GRE, SAT, and academic vocabulary preparation.',
    category: 'Education',
    pricing: 'paid',
    website_url: 'https://knowji.com',
  },
  {
    name: 'Elsa Speak',
    slug: 'elsa-speak',
    tagline: 'AI English pronunciation coach app',
    description:
      'ELSA is an AI-powered English pronunciation app that gives real-time feedback. It identifies specific sounds and words learners struggle with. Used by non-native English speakers wanting to improve their accent and fluency.',
    category: 'Education',
    pricing: 'freemium',
    website_url: 'https://elsaspeak.com',
  },
  {
    name: 'Speak App',
    slug: 'speak-app',
    tagline: 'AI language tutor for speaking practice',
    description:
      'Speak is an AI language learning app focused on speaking practice with real-time feedback. It uses AI conversation partners to simulate natural dialogues. Popular for learning Korean, Japanese, German, and Spanish through conversation.',
    category: 'Education',
    pricing: 'paid',
    website_url: 'https://speak.com',
  },
  {
    name: 'Ello Reading',
    slug: 'ello-reading',
    tagline: 'AI reading tutor for children',
    description:
      'Ello is an AI reading tutor that listens to children read aloud and provides instant feedback. It detects reading errors and helps kids sound out difficult words. Used by parents and teachers for early literacy development.',
    category: 'Education',
    pricing: 'paid',
    website_url: 'https://helloello.com',
  },
  {
    name: 'Gradescope',
    slug: 'gradescope',
    tagline: 'AI grading and assessment platform for educators',
    description:
      'Gradescope uses AI to assist teachers in grading assignments and exams consistently. It groups similar student answers together for faster batch grading. Used by universities and K12 schools for more efficient assessment.',
    category: 'Education',
    pricing: 'freemium',
    website_url: 'https://gradescope.com',
  },
  {
    name: 'Turnitin AI',
    slug: 'turnitin-ai',
    tagline: 'AI plagiarism and originality checker',
    description:
      'Turnitin detects plagiarism and AI-generated content in student submissions. It is used by thousands of universities worldwide for academic integrity. Now includes AI writing detection to identify ChatGPT-generated text.',
    category: 'Education',
    pricing: 'paid',
    website_url: 'https://turnitin.com',
  },
  {
    name: 'Formative AI',
    slug: 'formative-ai',
    tagline: 'AI formative assessment tool for teachers',
    description:
      'Formative is an AI-powered assessment tool that gives teachers real-time insights on student understanding. It auto-grades responses and identifies students who need extra help. Used in K12 classrooms for live student assessment.',
    category: 'Education',
    pricing: 'freemium',
    website_url: 'https://goformative.com',
  },
  {
    name: 'Kira Talent',
    slug: 'kira-talent',
    tagline: 'AI video assessment for admissions',
    description:
      'Kira Talent uses AI to evaluate video interviews for university and professional school admissions. It analyzes communication skills and personality traits consistently. Used by top business schools and professional programs worldwide.',
    category: 'Education',
    pricing: 'paid',
    website_url: 'https://kiratalent.com',
  },
  {
    name: 'Labster',
    slug: 'labster',
    tagline: 'AI virtual science lab simulations',
    description:
      'Labster provides virtual science lab simulations powered by AI for students. It lets students conduct experiments in biology, chemistry, and physics virtually. Used by universities and high schools as lab supplements or replacements.',
    category: 'Education',
    pricing: 'paid',
    website_url: 'https://labster.com',
  },
  {
    name: 'Century Tech',
    slug: 'century-tech',
    tagline: 'AI learning platform for schools',
    description:
      'Century Tech uses AI and neuroscience to personalize learning for each student. It identifies knowledge gaps and delivers targeted practice questions. Used by schools across the UK and internationally for personalized learning.',
    category: 'Education',
    pricing: 'paid',
    website_url: 'https://century.tech',
  },
  {
    name: 'Edmentum',
    slug: 'edmentum',
    tagline: 'AI adaptive learning for K12 students',
    description:
      "Edmentum provides AI-powered adaptive learning programs for K12 students. It adjusts difficulty and content based on each student's performance data. Used by schools for intervention, credit recovery, and personalized learning.",
    category: 'Education',
    pricing: 'paid',
    website_url: 'https://edmentum.com',
  },
  {
    name: 'Kidaptive',
    slug: 'kidaptive',
    tagline: 'AI learning platform for early childhood',
    description:
      "Kidaptive uses AI to personalize learning experiences for young children. It tracks learning progression and adapts content to each child's level. Used in early education apps and school programs for individualized learning.",
    category: 'Education',
    pricing: 'paid',
    website_url: 'https://kidaptive.com',
  },
  {
    name: 'Squirrel AI',
    slug: 'squirrel-ai',
    tagline: 'AI adaptive tutoring system for students',
    description:
      'Squirrel AI is an AI-powered adaptive tutoring system widely used in China. It has helped millions of students improve academic performance in core subjects. Uses knowledge graphs to identify and fill individual learning gaps.',
    category: 'Education',
    pricing: 'paid',
    website_url: 'https://squirrelai.com',
  },
  {
    name: 'Cognii',
    slug: 'cognii',
    tagline: 'AI virtual learning assistant for education',
    description:
      'Cognii provides a conversational AI tutor that gives open-format assessment and feedback. It engages students in written dialogue to deepen understanding. Used in higher education and K12 for formative assessment.',
    category: 'Education',
    pricing: 'paid',
    website_url: 'https://cognii.com',
  },
  {
    name: 'MagicSchool AI',
    slug: 'magicschool-ai',
    tagline: 'AI tools built for teachers',
    description:
      'MagicSchool AI provides 60+ AI tools specifically designed for classroom teachers. It generates lesson plans, rubrics, differentiation strategies, and parent emails. Used by hundreds of thousands of teachers to reduce administrative workload.',
    category: 'Education',
    pricing: 'freemium',
    website_url: 'https://magicschool.ai',
  },
  {
    name: 'Curipod',
    slug: 'curipod',
    tagline: 'AI interactive lesson creator for teachers',
    description:
      'Curipod generates interactive lessons with polls, word clouds, and discussions using AI. Teachers enter a topic and get a complete engaging lesson in seconds. Used by K12 teachers for more interactive and dynamic classroom experiences.',
    category: 'Education',
    pricing: 'freemium',
    website_url: 'https://curipod.com',
  },
  {
    name: 'Twee',
    slug: 'twee-education',
    tagline: 'AI lesson planning tool for English teachers',
    description:
      'Twee is an AI tool designed specifically for English language teachers. It generates reading comprehension questions, fill-in-the-blank exercises, and discussion prompts. Used by ESL and EFL teachers to create engaging language learning materials.',
    category: 'Education',
    pricing: 'freemium',
    website_url: 'https://twee.com',
  },
  {
    name: 'Diffit',
    slug: 'diffit',
    tagline: 'AI reading differentiation tool for teachers',
    description:
      'Diffit generates differentiated reading materials at different complexity levels using AI. Teachers enter a topic and get texts at multiple reading levels instantly. Used by special education and ESL teachers for inclusive instruction.',
    category: 'Education',
    pricing: 'freemium',
    website_url: 'https://diffit.me',
  },
  {
    name: 'SchoolAI',
    slug: 'schoolai',
    tagline: 'Safe AI classroom platform for students',
    description:
      'SchoolAI provides a controlled AI environment for K12 students with teacher oversight. Teachers can create AI chatbots with guardrails for specific learning activities. Designed to bring AI into classrooms safely and educationally.',
    category: 'Education',
    pricing: 'freemium',
    website_url: 'https://schoolai.com',
  },
  {
    name: 'Almanack AI',
    slug: 'almanack-ai',
    tagline: 'AI lesson planning and resource generator',
    description:
      'Almanack AI generates complete lesson plans, worksheets, and assessments for teachers. It aligns content to curriculum standards automatically. Used by K12 teachers to dramatically reduce lesson planning time.',
    category: 'Education',
    pricing: 'freemium',
    website_url: 'https://almanack.ai',
  },
  {
    name: 'Conker AI',
    slug: 'conker-ai',
    tagline: 'AI quiz generator for educators',
    description:
      'Conker AI generates multiple-choice quizzes and assessments from any topic or text. Teachers can create ready-to-use quizzes in seconds. Popular for formative assessment and exam review in K12 and higher education.',
    category: 'Education',
    pricing: 'freemium',
    website_url: 'https://conker.ai',
  },
  {
    name: 'Kaiber AI',
    slug: 'kaiber-ai-edu',
    tagline: 'AI creative tools for student projects',
    description:
      'Kaiber AI provides AI image and video generation tools for student creative projects. It turns student ideas into visual art and animated videos. Used in art, media, and digital literacy classes for creative expression.',
    category: 'Education',
    pricing: 'freemium',
    website_url: 'https://kaiber.ai',
  },
  {
    name: 'Wonders of AI',
    slug: 'wonders-of-ai',
    tagline: 'AI literacy curriculum for K12 students',
    description:
      'Wonders of AI provides a structured AI literacy curriculum for K12 students. It teaches how AI works, its applications, and ethical considerations. Used by schools wanting to prepare students for an AI-driven future.',
    category: 'Education',
    pricing: 'paid',
    website_url: 'https://wondersofai.com',
  },
  {
    name: 'Gradely',
    slug: 'gradely',
    tagline: 'AI learning diagnostics for K12 students',
    description:
      "Gradely diagnoses learning gaps and provides personalized AI tutoring for students. It gives teachers detailed reports on each student's strengths and weaknesses. Used by schools in Africa and globally for personalized K12 learning.",
    category: 'Education',
    pricing: 'freemium',
    website_url: 'https://gradely.co',
  },
  {
    name: 'Classpoint AI',
    slug: 'classpoint-ai',
    tagline: 'AI question generator for PowerPoint lessons',
    description:
      'Classpoint AI generates quiz questions directly from PowerPoint slides for teachers. It turns existing lesson slides into interactive assessments instantly. Used by teachers who already use PowerPoint for classroom instruction.',
    category: 'Education',
    pricing: 'freemium',
    website_url: 'https://classpoint.io',
  },
  {
    name: 'Blended AI',
    slug: 'blended-ai',
    tagline: 'AI teaching assistant for online educators',
    description:
      'Blended AI provides online educators with an AI teaching assistant for course creation. It generates course outlines, lesson content, and assessment questions. Used by online course creators and corporate training developers.',
    category: 'Education',
    pricing: 'paid',
    website_url: 'https://blended.ai',
  },
  {
    name: 'Anki AI',
    slug: 'anki-ai',
    tagline: 'AI-enhanced spaced repetition flashcards',
    description:
      "Anki is the world's most popular spaced repetition flashcard app with AI add-ons. Community plugins add AI card generation and smart scheduling features. Used by medical students, language learners, and exam preppers globally.",
    category: 'Education',
    pricing: 'free',
    website_url: 'https://apps.ankiweb.net',
  },
  {
    name: 'RemNote',
    slug: 'remnote',
    tagline: 'AI note-taking and spaced repetition combined',
    description:
      'RemNote combines note-taking with built-in spaced repetition and AI flashcard generation. It automatically turns notes into flashcards for efficient studying. Used by students and lifelong learners building a personal knowledge base.',
    category: 'Education',
    pricing: 'freemium',
    website_url: 'https://remnote.com',
  },
];

async function main() {
  console.log(`Inserting ${tools.length} tools across Education...`);
  const { error } = await supabase
    .from('tools')
    .upsert(tools, { onConflict: 'slug' });

  if (error) console.error('Error:', error);
  else console.log(`✓ Done! Inserted ${tools.length} tools`);
}

main();
