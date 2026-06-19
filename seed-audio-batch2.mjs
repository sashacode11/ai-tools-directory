import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://ljjcbcxyinpykmcueykm.supabase.co',
  'sb_publishable_Opn0yui1j33Ohiz5biMsqQ_Yx6GxsMO',
);

const tools = [
  {
    name: 'Bark AI',
    slug: 'bark-ai',
    tagline: 'Open-source text-to-audio model',
    description:
      'Bark is an open-source text-to-audio model that generates speech, music, and sound effects. It can produce laughter, sighs, and non-verbal sounds realistically. Popular with developers building custom audio generation applications.',
    category: 'Audio',
    pricing: 'free',
    website_url: 'https://github.com/suno-ai/bark',
  },
  {
    name: 'Coqui AI',
    slug: 'coqui-ai',
    tagline: 'Open-source text-to-speech and voice cloning',
    description:
      'Coqui AI provides open-source text-to-speech models and voice cloning tools. It supports dozens of languages and allows custom voice training. Used by developers integrating high-quality TTS into their applications.',
    category: 'Audio',
    pricing: 'free',
    website_url: 'https://coqui.ai',
  },
  {
    name: 'Azure TTS',
    slug: 'azure-tts',
    tagline: 'Microsoft AI text-to-speech API',
    description:
      'Azure Text to Speech provides 400+ neural voices in 140+ languages via Microsoft Azure. It supports custom voice creation and real-time streaming. Used by enterprise developers building voice applications and conversational AI.',
    category: 'Audio',
    pricing: 'freemium',
    website_url:
      'https://azure.microsoft.com/products/ai-services/text-to-speech',
  },
  {
    name: 'Amazon Polly',
    slug: 'amazon-polly',
    tagline: 'AWS cloud text-to-speech service',
    description:
      'Amazon Polly converts text into lifelike speech using deep learning via AWS. It offers 60+ voices across 30+ languages with SSML support. Used by developers building voice-enabled applications on the AWS platform.',
    category: 'Audio',
    pricing: 'freemium',
    website_url: 'https://aws.amazon.com/polly',
  },
  {
    name: 'Google TTS',
    slug: 'google-tts',
    tagline: 'Google Cloud text-to-speech API',
    description:
      'Google Cloud Text-to-Speech provides 380+ voices in 50+ languages using WaveNet technology. It produces natural-sounding speech with fine-grained pitch and speed control. Used by developers integrating speech synthesis into Google Cloud applications.',
    category: 'Audio',
    pricing: 'freemium',
    website_url: 'https://cloud.google.com/text-to-speech',
  },
  {
    name: 'Uberduck AI',
    slug: 'uberduck-ai',
    tagline: 'AI voice synthesis and rap generation',
    description:
      'Uberduck AI provides text-to-speech with celebrity and character voices for creative projects. It includes a rap generation feature that creates lyrics and vocals. Popular with music creators and content creators for entertainment content.',
    category: 'Audio',
    pricing: 'freemium',
    website_url: 'https://uberduck.ai',
  },
  {
    name: 'Fakeyou',
    slug: 'fakeyou',
    tagline: 'Celebrity voice text-to-speech platform',
    description:
      'FakeYou provides text-to-speech using thousands of celebrity and character voice models. It is community-driven with user-submitted voice models. Used for entertainment, memes, and creative projects requiring specific character voices.',
    category: 'Audio',
    pricing: 'freemium',
    website_url: 'https://fakeyou.com',
  },
  {
    name: 'Voicemaker',
    slug: 'voicemaker',
    tagline: 'AI text-to-speech with 1000 plus voices',
    description:
      'Voicemaker offers 1000+ AI voices across 100+ languages for text-to-speech conversion. It includes advanced SSML controls for fine-tuning voice output. Used by e-learning developers and content creators for voiceover production.',
    category: 'Audio',
    pricing: 'freemium',
    website_url: 'https://voicemaker.in',
  },
  {
    name: 'Narakeet',
    slug: 'narakeet',
    tagline: 'Create voiceover videos from scripts',
    description:
      'Narakeet converts scripts and presentations into narrated videos using AI voices. It supports 90+ languages and integrates with PowerPoint and Google Slides. Used by educators and trainers creating narrated course content quickly.',
    category: 'Audio',
    pricing: 'freemium',
    website_url: 'https://narakeet.com',
  },
  {
    name: 'Wellsaid Labs',
    slug: 'wellsaid-labs',
    tagline: 'Enterprise AI voiceover platform',
    description:
      'WellSaid Labs provides studio-quality AI voiceovers for enterprise content teams. It offers consistent voice quality at scale for e-learning and marketing. Used by large organizations for professional AI voice content production.',
    category: 'Audio',
    pricing: 'paid',
    website_url: 'https://wellsaidlabs.com',
  },
  {
    name: 'Respeecher',
    slug: 'respeecher',
    tagline: 'AI voice conversion for film and games',
    description:
      "Respeecher converts one person's voice to sound like a specific target voice using AI. It is used in Hollywood films for voice de-aging and character voices. Used by major studios including Lucasfilm for professional voice work.",
    category: 'Audio',
    pricing: 'paid',
    website_url: 'https://respeecher.com',
  },
  {
    name: 'Podium AI',
    slug: 'podium-ai',
    tagline: 'AI podcast clip and highlight generator',
    description:
      'Podium AI automatically finds the most shareable moments from podcast episodes. It creates social media clips with accurate captions and visual formatting. Used by podcast producers to maximize content reach on social platforms.',
    category: 'Audio',
    pricing: 'paid',
    website_url: 'https://podium.page',
  },
  {
    name: 'Headliner',
    slug: 'headliner',
    tagline: 'AI audiogram and podcast video creator',
    description:
      'Headliner creates animated audiograms and video clips from podcast audio automatically. It adds waveform animations, captions, and branding to audio clips. Used by podcasters to create shareable social media video content from episodes.',
    category: 'Audio',
    pricing: 'freemium',
    website_url: 'https://headliner.app',
  },
  {
    name: 'Wavve',
    slug: 'wavve',
    tagline: 'Create video clips from audio for social media',
    description:
      'Wavve converts podcast and audio clips into animated videos for social media sharing. It adds waveform visualizations, captions, and background images. Used by podcasters and radio hosts for promoting audio content visually.',
    category: 'Audio',
    pricing: 'freemium',
    website_url: 'https://wavve.co',
  },
  {
    name: 'Transistor FM',
    slug: 'transistor-fm',
    tagline: 'Podcast hosting with AI transcription',
    description:
      'Transistor is a podcast hosting platform with built-in AI transcription and analytics. It supports multiple shows under one account for agencies and networks. Used by professional podcasters and media companies for reliable hosting.',
    category: 'Audio',
    pricing: 'paid',
    website_url: 'https://transistor.fm',
  },
  {
    name: 'Zencastr',
    slug: 'zencastr',
    tagline: 'AI podcast recording and production platform',
    description:
      'Zencastr records high-quality remote podcast sessions directly in the browser. It includes AI audio enhancement, transcription, and clip creation features. Used by podcast hosts for reliable remote recording with production tools.',
    category: 'Audio',
    pricing: 'freemium',
    website_url: 'https://zencastr.com',
  },
  {
    name: 'Soundful',
    slug: 'soundful',
    tagline: 'AI music generator for content creators',
    description:
      'Soundful generates unique, royalty-free background music tracks using AI. It offers genre and mood controls for precise music customization. Used by video creators and streamers needing custom background music without licensing issues.',
    category: 'Audio',
    pricing: 'freemium',
    website_url: 'https://soundful.com',
  },
  {
    name: 'Epidemic Sound AI',
    slug: 'epidemic-sound-ai',
    tagline: 'AI music recommendations for video content',
    description:
      'Epidemic Sound uses AI to recommend the perfect music tracks for video content. It matches music to video mood, pace, and genre automatically. Used by video creators and brands for licensed music that fits their content perfectly.',
    category: 'Audio',
    pricing: 'paid',
    website_url: 'https://epidemicsound.com',
  },
  {
    name: 'Ecrett Music',
    slug: 'ecrett-music',
    tagline: 'AI royalty-free music for videos',
    description:
      'Ecrett Music generates royalty-free music clips for videos from scene and emotion selections. It creates unique tracks that are never repeated for each generation. Used by video editors and content creators needing fast custom background music.',
    category: 'Audio',
    pricing: 'freemium',
    website_url: 'https://ecrettmusic.com',
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
    name: 'Loudme',
    slug: 'loudme',
    tagline: 'AI audio mastering for musicians',
    description:
      'Loudme provides AI-powered audio mastering for musicians and producers. It analyzes tracks and applies professional mastering settings automatically. Used by independent musicians releasing music without access to professional mastering engineers.',
    category: 'Audio',
    pricing: 'freemium',
    website_url: 'https://loudme.ai',
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
];

async function main() {
  console.log(`Inserting ${tools.length} Audio batch 2 tools...`);
  const { error } = await supabase
    .from('tools')
    .upsert(tools, { onConflict: 'slug' });
  if (error) console.error('Error:', error);
  else console.log(`✓ Done! Inserted ${tools.length} Audio tools`);
}

main();
