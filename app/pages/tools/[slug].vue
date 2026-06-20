<template>
  <div class="min-h-screen bg-gray-50">
    <div v-if="tool" class="max-w-3xl mx-auto px-4 py-12">
      <!-- Back -->
      <NuxtLink
        to="/"
        class="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-gray-800 transition-colors mb-10"
      >
        ← All tools
      </NuxtLink>

      <!-- Header -->
      <div class="bg-white rounded-2xl border border-gray-200 p-8 mb-6">
        <div class="flex items-start justify-between gap-4 flex-wrap">
          <div>
            <span
              class="text-xs font-medium uppercase tracking-widest text-indigo-500 mb-2 block"
            >
              {{ tool.category }}
            </span>
            <h1 class="text-3xl font-bold text-gray-900 mb-2">
              {{ tool.name }}
            </h1>
            <p class="text-lg text-gray-500">{{ tool.tagline }}</p>
          </div>
          <span
            class="shrink-0 text-xs font-semibold px-3 py-1 rounded-full capitalize"
            :class="{
              'bg-green-100 text-green-700': tool.pricing === 'free',
              'bg-blue-100 text-blue-700': tool.pricing === 'freemium',
              'bg-amber-100 text-amber-700': tool.pricing === 'paid',
            }"
          >
            {{ tool.pricing }}
          </span>
        </div>

        <p class="mt-6 text-gray-700 leading-relaxed text-base">
          {{ tool.description }}
        </p>

        <a
          :href="tool.website_url"
          target="_blank"
          rel="noopener noreferrer"
          class="mt-8 inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-5 py-2.5 rounded-lg transition-colors text-sm"
        >
          Visit {{ tool.name }} →
        </a>
      </div>

      <!-- Meta info -->
      <div class="grid grid-cols-2 gap-4">
        <div class="bg-white rounded-xl border border-gray-200 p-5">
          <p class="text-xs text-gray-400 uppercase tracking-widest mb-1">
            Category
          </p>
          <p class="font-medium text-gray-800">{{ tool.category }}</p>
        </div>
        <div class="bg-white rounded-xl border border-gray-200 p-5">
          <p class="text-xs text-gray-400 uppercase tracking-widest mb-1">
            Pricing
          </p>
          <p class="font-medium text-gray-800 capitalize">{{ tool.pricing }}</p>
        </div>
      </div>
    </div>

    <!-- Not found -->
    <div v-else class="max-w-3xl mx-auto px-4 py-24 text-center">
      <p class="text-gray-400 text-lg mb-4">Tool not found.</p>
      <NuxtLink to="/" class="text-indigo-600 hover:underline text-sm"
        >← Back to all tools</NuxtLink
      >
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const supabase = useSupabase();

const { data: tools } = await supabase
  .from('tools')
  .select('*')
  .eq('slug', route.params.slug)
  .limit(1);

const tool = tools?.[0] ?? null;

// SEO
useHead({
  title: tool
    ? `${tool.name} – ${tool.tagline} | SharkCraw`
    : 'Tool not found | SharkCraw',
  meta: [
    {
      name: 'description',
      content: tool?.description ?? 'AI tool not found.',
    },
    // Open Graph
    {
      property: 'og:title',
      content: tool ? `${tool.name} – ${tool.tagline}` : 'Tool not found',
    },
    { property: 'og:description', content: tool?.description ?? '' },
    { property: 'og:type', content: 'website' },
  ],
});
</script>
