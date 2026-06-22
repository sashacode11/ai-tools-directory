<template>
  <div class="min-h-screen bg-gray-50">
    <div class="max-w-5xl mx-auto px-4 py-8">
      <!-- Hero -->
      <div class="mb-4">
        <h1 class="text-2xl font-bold text-gray-900 mb-4">
          Find the best AI tools
        </h1>
        <div class="flex flex-col sm:flex-row gap-3">
          <input
            v-model="search"
            type="text"
            placeholder="Search tools..."
            class="flex-1 px-4 py-2.5 rounded-lg border border-gray-200 bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            @input="onSearchInput"
          />
          <select
            v-model="selectedCategory"
            class="px-4 py-2.5 rounded-lg border border-gray-200 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            @change="onFilterChange"
          >
            <option value="">All categories</option>
            <option v-for="cat in categories" :key="cat" :value="cat">
              {{ cat }}
            </option>
          </select>
          <select
            v-model="selectedPricing"
            class="px-4 py-2.5 rounded-lg border border-gray-200 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            @change="onFilterChange"
          >
            <option value="">All pricing</option>
            <option value="free">Free</option>
            <option value="freemium">Free + Paid</option>
            <option value="paid">Paid only</option>
          </select>
        </div>
      </div>

      <!-- Results count -->
      <p class="text-sm text-gray-400 mb-2">{{ totalCount }} tools</p>

      <!-- Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <NuxtLink
          v-for="tool in tools"
          :key="tool.id"
          :to="`/tools/${tool.slug}`"
          class="bg-white rounded-xl border border-gray-200 p-5 hover:border-indigo-300 hover:shadow-sm transition-all group"
        >
          <div class="flex items-start justify-between gap-2 mb-2">
            <NuxtLink
              :to="`/category/${tool.category.toLowerCase()}`"
              class="text-xs font-medium text-indigo-500 uppercase tracking-widest hover:text-indigo-700"
              @click.stop
            >
              {{ tool.category }}
            </NuxtLink>
            <span
              class="text-xs font-semibold px-2 py-0.5 rounded-full capitalize shrink-0"
              :class="{
                'bg-green-100 text-green-700': tool.pricing === 'free',
                'bg-blue-100 text-blue-700': tool.pricing === 'freemium',
                'bg-amber-100 text-amber-700': tool.pricing === 'paid',
              }"
            >
              {{ tool.pricing === 'freemium' ? 'Free + Paid' : tool.pricing === 'paid' ? 'Paid only' : 'Free' }}
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
      <div v-if="tools.length === 0" class="text-center py-20 text-gray-400">
        No tools match your search.
      </div>

      <!-- Pagination -->
      <div
        v-if="totalPages > 1"
        class="flex items-center justify-center gap-2 mt-12"
      >
        <button
          @click="goToPage(currentPage - 1)"
          :disabled="currentPage === 1"
          class="px-4 py-2 rounded-lg border border-gray-200 bg-white text-gray-600 hover:border-indigo-300 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
        >
          ← Prev
        </button>

        <template v-for="page in visiblePages" :key="page">
          <span v-if="page === '...'" class="px-2 text-gray-400">...</span>
          <button
            v-else
            @click="goToPage(page)"
            :class="[
              'px-4 py-2 rounded-lg border transition-all',
              page === currentPage
                ? 'bg-indigo-600 border-indigo-600 text-white'
                : 'bg-white border-gray-200 text-gray-600 hover:border-indigo-300',
            ]"
          >
            {{ page }}
          </button>
        </template>

        <button
          @click="goToPage(currentPage + 1)"
          :disabled="currentPage === totalPages"
          class="px-4 py-2 rounded-lg border border-gray-200 bg-white text-gray-600 hover:border-indigo-300 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
        >
          Next →
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const supabase = useSupabase();
const PER_PAGE = 30;

const search = ref('');
const selectedCategory = ref('');
const selectedPricing = ref('');
const currentPage = ref(1);
const tools = ref<any[]>([]);
const totalCount = ref(0);
let searchTimeout: ReturnType<typeof setTimeout>;

// Fetch categories separately (just unique values)
const { data: allTools } = await supabase.from('tools').select('category');
const categories = computed(() =>
  [...new Set(allTools?.map((t: any) => t.category) ?? [])].sort(),
);

async function fetchTools() {
  let query = supabase
    .from('tools')
    .select('*', { count: 'exact' })
    .order('name')
    .range(
      (currentPage.value - 1) * PER_PAGE,
      currentPage.value * PER_PAGE - 1,
    );

  if (search.value) {
    query = query.or(
      `name.ilike.%${search.value}%,tagline.ilike.%${search.value}%`,
    );
  }
  if (selectedCategory.value) {
    query = query.eq('category', selectedCategory.value);
  }
  if (selectedPricing.value) {
    query = query.eq('pricing', selectedPricing.value);
  }

  const { data, count } = await query;
  tools.value = data ?? [];
  totalCount.value = count ?? 0;
}

await fetchTools();

const totalPages = computed(() => Math.ceil(totalCount.value / PER_PAGE));

const visiblePages = computed(() => {
  const pages: (number | string)[] = [];
  const total = totalPages.value;
  const current = currentPage.value;

  if (total <= 7) {
    for (let i = 1; i <= total; i++) pages.push(i);
  } else {
    pages.push(1);
    if (current > 3) pages.push('...');
    for (
      let i = Math.max(2, current - 1);
      i <= Math.min(total - 1, current + 1);
      i++
    ) {
      pages.push(i);
    }
    if (current < total - 2) pages.push('...');
    pages.push(total);
  }
  return pages;
});

async function goToPage(page: number) {
  if (page < 1 || page > totalPages.value) return;
  currentPage.value = page;
  await fetchTools();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function onSearchInput() {
  clearTimeout(searchTimeout);
  searchTimeout = setTimeout(() => {
    currentPage.value = 1;
    fetchTools();
  }, 400);
}

async function onFilterChange() {
  currentPage.value = 1;
  await fetchTools();
}

useHead({
  title: 'SharkCraw – Find the Best AI Tools',
  meta: [
    {
      name: 'description',
      content:
        'Browse 500+ AI tools for writing, image, video, code, productivity, and more.',
    },
  ],
});
</script>
