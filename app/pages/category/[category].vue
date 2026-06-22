<template>
  <div class="min-h-screen bg-gray-50">
    <div class="max-w-5xl mx-auto px-4 py-12">
      <NuxtLink
        to="/"
        class="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-gray-800 transition-colors mb-10"
      >
        ← All tools
      </NuxtLink>

      <div class="mb-10 text-center">
        <h1 class="text-4xl font-bold text-gray-900 mb-3 capitalize">
          Best {{ categoryName }} AI Tools
        </h1>
        <p class="text-gray-500 text-lg mb-4">
          Browse {{ tools?.length ?? 0 }} AI tools in {{ categoryName }}
        </p>
        <p class="text-gray-600 max-w-2xl mx-auto text-base">
          {{ categoryDescription }}
        </p>
      </div>

      <div class="flex flex-col sm:flex-row gap-3 mb-8">
        <input
          v-model="search"
          type="text"
          :placeholder="`Search ${categoryName} tools...`"
          class="flex-1 px-4 py-2.5 rounded-lg border border-gray-200 bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
      </div>

      <p class="text-sm text-gray-400 mb-4">{{ filtered.length }} tools</p>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <NuxtLink
          v-for="tool in filtered"
          :key="tool.id"
          :to="`/tools/${tool.slug}`"
          class="bg-white rounded-xl border border-gray-200 p-5 hover:border-indigo-300 hover:shadow-sm transition-all group"
        >
          <div class="flex items-start justify-between gap-2 mb-2">
            <span
              class="text-xs font-medium text-indigo-500 uppercase tracking-widest"
            >
              {{ tool.category }}
            </span>
            <span
              class="text-xs font-semibold px-2 py-0.5 rounded-full capitalize shrink-0"
              :class="{
                'bg-green-100 text-green-700': tool.pricing === 'free',
                'bg-blue-100 text-blue-700': tool.pricing === 'freemium',
                'bg-amber-100 text-amber-700': tool.pricing === 'paid',
              }"
            >
              {{ tool.pricing }}
            </span>
          </div>
          <h2
            class="font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors mb-1"
          >
            {{ tool.name }}
          </h2>
          <p class="text-sm text-gray-500 line-clamp-2">{{ tool.tagline }}</p>
        </NuxtLink>
      </div>

      <div v-if="filtered.length === 0" class="text-center py-20 text-gray-400">
        No tools match your search.
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const supabase = useSupabase();

const categoryName = computed(() =>
  (route.params.category as string)
    .split('-')
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' '),
);

const categoryDescriptions: Record<string, string> = {
  Writing:
    'Discover the best AI writing tools to create content faster, improve grammar, generate blog posts, and automate copywriting. Perfect for bloggers, marketers, and content creators.',
  Image:
    'Explore top AI image generation and editing tools to create stunning visuals, logos, and artwork from text prompts. No design experience needed.',
  Video:
    'Find AI video creation and editing tools that help you produce professional videos, animations, and shorts in minutes.',
  Audio:
    'Browse AI audio tools for voice generation, music creation, transcription, and podcast editing.',
  Code: 'Discover AI coding assistants and developer tools that help you write, debug, and review code faster.',
  Search:
    'Explore AI-powered search engines and research tools that find information smarter and faster than traditional search.',
  Productivity:
    'Find AI productivity tools to automate tasks, manage your time, take smarter notes, and get more done every day.',
  Marketing:
    'Browse AI marketing tools for SEO, social media, email campaigns, and ad creation to grow your business.',
  Education:
    'Discover AI education tools for learning, tutoring, study assistance, and skill development.',
  Business:
    'Explore AI business tools for analytics, CRM, automation, and decision-making to run your company smarter.',
};

const categoryDescription = computed(
  () =>
    categoryDescriptions[categoryName.value] ??
    `Browse the best ${categoryName.value} AI tools available .`,
);

const { data: tools } = await supabase
  .from('tools')
  .select('*')
  .ilike('category', route.params.category as string)
  .order('name');

const search = ref('');
const filtered = computed(() => {
  if (!tools) return [];
  return tools.filter(
    tool =>
      search.value === '' ||
      tool.name.toLowerCase().includes(search.value.toLowerCase()) ||
      tool.tagline.toLowerCase().includes(search.value.toLowerCase()),
  );
});

const metaDescription = computed(
  () =>
    `Browse ${tools?.length ?? 0}+ best ${categoryName.value} AI tools . Compare free and paid options. Find the right ${categoryName.value.toLowerCase()} AI tool for your needs.`,
);

useHead({
  title: `Best ${categoryName.value} AI Tools  – SharkCraw`,
  meta: [
    { name: 'description', content: metaDescription.value },
    {
      property: 'og:title',
      content: `Best ${categoryName.value} AI Tools  – SharkCraw`,
    },
    { property: 'og:description', content: metaDescription.value },
    { property: 'og:type', content: 'website' },
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: `Best ${categoryName.value} AI Tools `,
        description: metaDescription.value,
        url: `https://www.sharkcraw.com/category/${route.params.category}`,
      }),
    },
  ],
});
</script>
