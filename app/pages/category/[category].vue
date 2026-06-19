<template>
  <div class="min-h-screen bg-gray-50">
    <div class="max-w-5xl mx-auto px-4 py-12">
      <!-- Back -->
      <NuxtLink
        to="/"
        class="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-gray-800 transition-colors mb-10"
      >
        ← All tools
      </NuxtLink>

      <!-- Header -->
      <div class="mb-10 text-center">
        <h1 class="text-4xl font-bold text-gray-900 mb-3 capitalize">
          {{ categoryName }} AI Tools
        </h1>
        <p class="text-gray-500 text-lg">
          Browse {{ tools.length }} AI tools in {{ categoryName }}
        </p>
      </div>

      <!-- Search -->
      <div class="flex flex-col sm:flex-row gap-3 mb-8">
        <input
          v-model="search"
          type="text"
          :placeholder="`Search ${categoryName} tools...`"
          class="flex-1 px-4 py-2.5 rounded-lg border border-gray-200 bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
      </div>

      <!-- Results count -->
      <p class="text-sm text-gray-400 mb-4">{{ filtered.length }} tools</p>

      <!-- Grid -->
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

      <!-- Empty state -->
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

useHead({
  title: `${categoryName.value} AI Tools – AI Tools Directory`,
  meta: [
    {
      name: 'description',
      content: `Browse the best ${categoryName.value} AI tools. Find free and paid options for ${categoryName.value.toLowerCase()}.`,
    },
    {
      property: 'og:title',
      content: `${categoryName.value} AI Tools – AI Tools Directory`,
    },
    {
      property: 'og:description',
      content: `Browse the best ${categoryName.value} AI tools.`,
    },
    { property: 'og:type', content: 'website' },
  ],
});
</script>
