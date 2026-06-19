import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://ljjcbcxyinpykmcueykm.supabase.co',
  'sb_publishable_Opn0yui1j33Ohiz5biMsqQ_Yx6GxsMO',
);

const tools = [
  {
    name: 'ElevenLabs',
    slug: 'elevenlabs',
    tagline: 'Hyper-realistic AI voice generation platform',
    description:
      'ElevenLabs produces the most natural-sounding AI voices available today. It supports voice cloning, text-to-speech, and dubbing in 29 languages. Used by podcasters, audiobook creators, and game developers.',
    category: 'Audio',
    pricing: 'freemium',
    website_url: 'https://elevenlabs.io',
  },
  {
    name: 'Murf AI',
    slug: 'murf-ai',
    tagline: 'Studio-quality AI voiceovers for any content',
    description:
      'Murf AI generates professional voiceovers with 120+ realistic AI voices. It includes a video sync feature that matches voiceover timing to slides. Popular for e-learning, explainer videos, and presentations.',
    category: 'Audio',
    pricing: 'freemium',
    website_url: 'https://murf.ai',
  },
  {
    name: 'Suno AI',
    slug: 'suno-ai',
    tagline: 'Generate full songs with AI in seconds',
    description:
      'Suno AI creates complete songs with vocals, instruments, and lyrics from text prompts. It can generate music in any genre from pop to jazz to metal. One of the most viral AI music generation tools available.',
    category: 'Audio',
    pricing: 'freemium',
    website_url: 'https://suno.ai',
  },
  {
    name: 'Udio',
    slug: 'udio',
    tagline: 'AI music creation with stunning quality',
    description:
      'Udio generates high-quality music tracks from text descriptions with impressive realism. It supports a wide range of genres and allows stem separation. Competing directly with Suno as a top AI music generator.',
    category: 'Audio',
    pricing: 'freemium',
    website_url: 'https://udio.com',
  },
  {
    name: 'Descript Overdub',
    slug: 'descript-overdub',
    tagline: 'Clone your voice for audio editing',
    description:
      'Descript Overdub lets you create a voice clone to fix audio mistakes by typing. It integrates directly into the Descript video and podcast editor. Saves hours of re-recording for podcasters and video creators.',
    category: 'Audio',
    pricing: 'paid',
    website_url: 'https://descript.com/overdub',
  },
  {
    name: 'Play.ht',
    slug: 'play-ht',
    tagline: 'AI text-to-speech with 900 plus voices',
    description:
      'Play.ht offers over 900 AI voices across 142 languages for text-to-speech conversion. It includes a voice cloning feature and WordPress plugin. Used by bloggers, publishers, and app developers.',
    category: 'Audio',
    pricing: 'freemium',
    website_url: 'https://play.ht',
  },
  {
    name: 'Resemble AI',
    slug: 'resemble-ai',
    tagline: 'Custom AI voice cloning for developers',
    description:
      'Resemble AI provides voice cloning and real-time speech synthesis via API. It can create a custom voice from just a few minutes of audio. Used in gaming, virtual assistants, and interactive media.',
    category: 'Audio',
    pricing: 'paid',
    website_url: 'https://resemble.ai',
  },
  {
    name: 'Speechify',
    slug: 'speechify',
    tagline: 'Listen to any text at high speed',
    description:
      'Speechify converts any text, document, or web page into audio using AI voices. It supports speeds up to 4.5x normal reading speed. Popular with students, professionals, and people with dyslexia.',
    category: 'Audio',
    pricing: 'freemium',
    website_url: 'https://speechify.com',
  },
  {
    name: 'Whisper OpenAI',
    slug: 'whisper-openai',
    tagline: 'Open-source speech recognition by OpenAI',
    description:
      "Whisper is OpenAI's open-source automatic speech recognition system trained on 680,000 hours of audio. It transcribes and translates speech with high accuracy across 99 languages. Free to use and run locally.",
    category: 'Audio',
    pricing: 'free',
    website_url: 'https://openai.com/research/whisper',
  },
  {
    name: 'Otter AI',
    slug: 'otter-ai',
    tagline: 'AI meeting transcription and notes',
    description:
      'Otter AI automatically transcribes meetings, interviews, and lectures in real time. It integrates with Zoom, Google Meet, and Microsoft Teams. Generates meeting summaries and action items automatically.',
    category: 'Audio',
    pricing: 'freemium',
    website_url: 'https://otter.ai',
  },
  {
    name: 'Krisp',
    slug: 'krisp',
    tagline: 'AI noise cancellation for calls',
    description:
      'Krisp removes background noise and echo from calls in real time using AI. It works with any conferencing app including Zoom, Teams, and Google Meet. Popular with remote workers and podcasters in noisy environments.',
    category: 'Audio',
    pricing: 'freemium',
    website_url: 'https://krisp.ai',
  },
  {
    name: 'Adobe Podcast',
    slug: 'adobe-podcast-enhance',
    tagline: 'AI audio enhancement for podcasters',
    description:
      'Adobe Podcast Enhance improves recording quality using AI noise and echo removal. It makes low-quality microphone recordings sound studio-professional. Free to use via the Adobe Podcast web platform.',
    category: 'Audio',
    pricing: 'free',
    website_url: 'https://podcast.adobe.com',
  },
  {
    name: 'Audo AI',
    slug: 'audo-ai',
    tagline: 'One-click audio cleanup for creators',
    description:
      'Audo AI removes background noise, hiss, and reverb from audio recordings in one click. It processes files in seconds and preserves the natural voice quality. Great for podcasters and video creators with imperfect recordings.',
    category: 'Audio',
    pricing: 'freemium',
    website_url: 'https://audo.ai',
  },
  {
    name: 'Soundraw',
    slug: 'soundraw',
    tagline: 'AI music generator for content creators',
    description:
      'Soundraw generates royalty-free music tracks customized by mood, genre, and tempo. Creators can adjust song length and structure to fit their content. All generated music is royalty-free for commercial use.',
    category: 'Audio',
    pricing: 'paid',
    website_url: 'https://soundraw.io',
  },
  {
    name: 'Beatoven AI',
    slug: 'beatoven-ai',
    tagline: 'Create royalty-free music by mood',
    description:
      'Beatoven AI composes unique royalty-free music tracks based on mood and genre selection. It allows timeline editing to match music to specific video moments. Used by video editors, podcasters, and game developers.',
    category: 'Audio',
    pricing: 'freemium',
    website_url: 'https://beatoven.ai',
  },
  {
    name: 'Loudly',
    slug: 'loudly',
    tagline: 'AI music generation for social media',
    description:
      'Loudly generates short AI music tracks optimized for social media content. It offers genre, mood, and instrument controls for customization. All tracks are royalty-free and ready for immediate commercial use.',
    category: 'Audio',
    pricing: 'freemium',
    website_url: 'https://loudly.com',
  },
  {
    name: 'Boomy',
    slug: 'boomy',
    tagline: 'Create and release AI music instantly',
    description:
      'Boomy lets anyone create original songs using AI in seconds and release them to streaming platforms. It handles distribution to Spotify, Apple Music, and more. Users earn royalties from streams of their AI-generated music.',
    category: 'Audio',
    pricing: 'freemium',
    website_url: 'https://boomy.com',
  },
  {
    name: 'Aiva',
    slug: 'aiva',
    tagline: 'AI composer for film and game music',
    description:
      'AIVA is an AI music composition tool designed for creating film scores and game soundtracks. It generates full orchestral compositions from style presets. Licensed by composers and studios for professional productions.',
    category: 'Audio',
    pricing: 'freemium',
    website_url: 'https://aiva.ai',
  },
  {
    name: 'Mubert',
    slug: 'mubert',
    tagline: 'AI generative music for streaming',
    description:
      'Mubert generates endless AI music streams tailored to specific moods and activities. It offers an API for developers to integrate generative music into apps. Used for productivity, meditation, and workout playlists.',
    category: 'Audio',
    pricing: 'freemium',
    website_url: 'https://mubert.com',
  },
  {
    name: 'Voicemod',
    slug: 'voicemod',
    tagline: 'Real-time AI voice changer for gaming',
    description:
      'Voicemod is a real-time voice changer that works with Discord, Twitch, and gaming platforms. It offers hundreds of voice effects and a soundboard feature. Popular with streamers, gamers, and content creators.',
    category: 'Audio',
    pricing: 'freemium',
    website_url: 'https://voicemod.net',
  },
  {
    name: 'Altered AI',
    slug: 'altered-ai',
    tagline: 'Professional AI voice transformation tool',
    description:
      'Altered AI changes your voice to sound like different characters or personas using AI. It is used in film, gaming, and podcast production. Offers studio-quality voice transformation with low latency.',
    category: 'Audio',
    pricing: 'paid',
    website_url: 'https://altered.ai',
  },
  {
    name: 'Replica Studios',
    slug: 'replica-studios',
    tagline: 'AI voice actors for games and animation',
    description:
      'Replica Studios provides AI voice actors for games, animations, and interactive media. It offers hundreds of emotive voices with natural performance quality. Used by indie game developers and animation studios.',
    category: 'Audio',
    pricing: 'freemium',
    website_url: 'https://replicastudios.com',
  },
  {
    name: 'Lovo AI',
    slug: 'lovo-ai',
    tagline: 'AI voiceover and text-to-speech platform',
    description:
      'Lovo AI offers 500+ AI voices across 100 languages for voiceover production. It includes an AI video editor and script writer in one platform. Used for e-learning, ads, podcasts, and YouTube videos.',
    category: 'Audio',
    pricing: 'freemium',
    website_url: 'https://lovo.ai',
  },
  {
    name: 'Listnr',
    slug: 'listnr',
    tagline: 'Convert blog posts to podcasts with AI',
    description:
      'Listnr converts written blog content into audio podcasts using AI voices. It hosts the audio and provides an embeddable player for websites. Helps bloggers reach listeners who prefer audio content consumption.',
    category: 'Audio',
    pricing: 'freemium',
    website_url: 'https://listnr.com',
  },
  {
    name: 'Podcastle AI',
    slug: 'podcastle-ai',
    tagline: 'AI-powered podcast creation platform',
    description:
      'Podcastle offers AI noise removal, voice enhancement, and automatic transcription for podcasters. It supports remote multi-track recording with studio quality. An all-in-one platform for creating and publishing podcasts.',
    category: 'Audio',
    pricing: 'freemium',
    website_url: 'https://podcastle.ai',
  },
  {
    name: 'Cleanvoice AI',
    slug: 'cleanvoice-ai',
    tagline: 'Remove filler words from podcast recordings',
    description:
      'Cleanvoice AI automatically removes filler words, stutters, and mouth sounds from audio recordings. It saves hours of manual editing for podcasters and interviewers. Supports multiple languages and accents.',
    category: 'Audio',
    pricing: 'paid',
    website_url: 'https://cleanvoice.ai',
  },
  {
    name: 'Auphonic',
    slug: 'auphonic',
    tagline: 'Automatic audio post-production service',
    description:
      'Auphonic automatically levels loudness, reduces noise, and encodes audio to broadcast standards. It integrates with podcast hosting platforms for streamlined publishing. Used by professional podcasters and radio producers.',
    category: 'Audio',
    pricing: 'freemium',
    website_url: 'https://auphonic.com',
  },
  {
    name: 'Riverside FM',
    slug: 'riverside-fm',
    tagline: 'Remote podcast recording in studio quality',
    description:
      'Riverside.fm records podcast and video interviews in high quality directly in the browser. It captures separate tracks for each participant for clean editing. Used by top podcasters and media companies worldwide.',
    category: 'Audio',
    pricing: 'freemium',
    website_url: 'https://riverside.fm',
  },
  {
    name: 'Sonantic',
    slug: 'sonantic',
    tagline: 'Expressive AI voice acting for games',
    description:
      'Sonantic creates emotionally expressive AI voice performances for video games and films. It captures nuanced performances including laughter, fear, and tension. Acquired by Spotify to enhance audio experiences.',
    category: 'Audio',
    pricing: 'paid',
    website_url: 'https://sonantic.io',
  },
  {
    name: 'Voice AI',
    slug: 'voice-ai',
    tagline: 'Real-time voice changer with AI cloning',
    description:
      'Voice.ai is a free real-time voice changer with access to thousands of community voices. It supports voice cloning and works with any streaming or communication app. Popular with gamers and content creators.',
    category: 'Audio',
    pricing: 'freemium',
    website_url: 'https://voice.ai',
  },
  {
    name: 'Speechelo',
    slug: 'speechelo',
    tagline: 'Convert text to human-sounding voiceovers',
    description:
      'Speechelo generates natural-sounding voiceovers from text in 23 languages. It includes breathing sounds and voice inflections for more human-like delivery. Used for YouTube videos, sales videos, and e-learning.',
    category: 'Audio',
    pricing: 'paid',
    website_url: 'https://speechelo.com',
  },
  {
    name: 'Typecast',
    slug: 'typecast',
    tagline: 'AI voice actors for digital content',
    description:
      'Typecast offers AI voice actors with distinct personalities for videos and podcasts. Users can direct performances by adjusting tone, speed, and emotion. Popular for creating character voices in animation and games.',
    category: 'Audio',
    pricing: 'freemium',
    website_url: 'https://typecast.ai',
  },
  {
    name: 'Musicfy',
    slug: 'musicfy',
    tagline: 'Create AI covers with celebrity voices',
    description:
      'Musicfy lets users create AI music covers using celebrity and character voice models. It generates songs in the style of famous artists from any audio input. Viral tool among music fans and content creators.',
    category: 'Audio',
    pricing: 'freemium',
    website_url: 'https://musicfy.lol',
  },
  {
    name: 'Kits AI',
    slug: 'kits-ai',
    tagline: 'AI voice conversion for musicians',
    description:
      'Kits AI converts vocals into different AI voice models for music production. It offers licensed artist voices and custom voice model training. Used by music producers and vocalists experimenting with sound.',
    category: 'Audio',
    pricing: 'freemium',
    website_url: 'https://kits.ai',
  },
  {
    name: 'Moises App',
    slug: 'moises-app',
    tagline: 'AI music practice and stem separation',
    description:
      'Moises AI separates music tracks into stems like vocals, drums, and bass. It also includes pitch and tempo control for musician practice. Popular with guitar players, vocalists, and music producers.',
    category: 'Audio',
    pricing: 'freemium',
    website_url: 'https://moises.ai',
  },
  {
    name: 'Lalal AI',
    slug: 'lalal-ai',
    tagline: 'AI stem splitter for music and vocals',
    description:
      'Lalal.ai separates vocals, instruments, and stems from any audio track with high quality. It supports 10 stem types including bass, drums, piano, and strings. Used by DJs, remixers, and music producers.',
    category: 'Audio',
    pricing: 'freemium',
    website_url: 'https://lalal.ai',
  },
  {
    name: 'Splash Pro',
    slug: 'splash-pro',
    tagline: 'Make beats and songs with AI instantly',
    description:
      'Splash Pro generates full beats and songs using AI from simple text or voice prompts. It is designed for non-musicians wanting to create original music quickly. Available on mobile and desktop platforms.',
    category: 'Audio',
    pricing: 'freemium',
    website_url: 'https://splashmusic.com',
  },
  {
    name: 'Voicepen AI',
    slug: 'voicepen-ai',
    tagline: 'Convert audio and video to blog posts',
    description:
      'Voicepen AI transcribes audio and video recordings and converts them into blog posts. It cleans up transcripts and formats them as readable articles. Great for repurposing podcast content into written form.',
    category: 'Audio',
    pricing: 'paid',
    website_url: 'https://voicepen.ai',
  },
  {
    name: 'Notta AI',
    slug: 'notta-ai',
    tagline: 'AI meeting transcription in 104 languages',
    description:
      'Notta AI transcribes meetings, interviews, and audio files in 104 languages. It integrates with Zoom, Google Meet, and Microsoft Teams for automatic recording. Generates summaries and action items from transcripts.',
    category: 'Audio',
    pricing: 'freemium',
    website_url: 'https://notta.ai',
  },
  {
    name: 'Fireflies AI',
    slug: 'fireflies-ai',
    tagline: 'AI notetaker for meetings and calls',
    description:
      'Fireflies AI joins meetings and automatically records, transcribes, and summarizes conversations. It integrates with 40+ apps including Salesforce and Slack. Used by sales teams and remote teams to capture meeting insights.',
    category: 'Audio',
    pricing: 'freemium',
    website_url: 'https://fireflies.ai',
  },
];

async function main() {
  console.log(`Inserting ${tools.length} Audio tools...`);
  const { error } = await supabase
    .from('tools')
    .upsert(tools, { onConflict: 'slug' });

  if (error) console.error('Error:', error);
  else console.log(`✓ Done! Inserted ${tools.length} Audio tools`);
}

main();
