<template>
  <div>
    <header class="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div
        class="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between"
      >
        <NuxtLink to="/" class="flex items-center gap-1.5">
          <img src="/logo.svg" alt="SharkCraw" class="h-10 w-10" />
          <div>
            <div
              class="text-base md:text-xl font-semibold text-gray-900 leading-none mb-0.5"
            >
              SharkCraw
            </div>
            <div
              class="text-xs text-gray-400 tracking-widest uppercase leading-none"
            >
              AI Tools Directory
            </div>
          </div>
        </NuxtLink>
        <!-- Hide nav on mobile, show on md+ -->
        <nav class="hidden md:flex items-center gap-6 text-sm text-gray-500">
          <NuxtLink
            to="/category/writing"
            class="hover:text-indigo-600 transition-colors"
            >Writing</NuxtLink
          >
          <NuxtLink
            to="/category/image"
            class="hover:text-indigo-600 transition-colors"
            >Image</NuxtLink
          >
          <NuxtLink
            to="/category/code"
            class="hover:text-indigo-600 transition-colors"
            >Code</NuxtLink
          >
          <NuxtLink
            to="/category/video"
            class="hover:text-indigo-600 transition-colors"
            >Video</NuxtLink
          >
          <NuxtLink
            to="/category/audio"
            class="hover:text-indigo-600 transition-colors"
            >Audio</NuxtLink
          >
        </nav>
      </div>
    </header>
    <slot />
  </div>
</template>
