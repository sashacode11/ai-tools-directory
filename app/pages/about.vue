<template>
  <div class="min-h-screen bg-gray-50">
    <div class="max-w-3xl mx-auto px-4 py-12">
      <h1 class="text-3xl font-bold text-gray-900 mb-2">About SharkCraw</h1>
      <p class="text-sm text-gray-400 mb-8">
        The AI tools directory built for everyone
      </p>

      <div
        class="bg-white rounded-xl border border-gray-200 p-8 space-y-6 text-gray-700 leading-relaxed"
      >
        <section>
          <h2 class="text-lg font-semibold text-gray-900 mb-2">
            What is SharkCraw?
          </h2>
          <p>
            SharkCraw is a free directory of 500+ AI tools across 10 categories
            including Writing, Image, Video, Audio, Code, Search, Productivity,
            Marketing, Education, and Business. Our goal is to help people find
            the right AI tool for their needs — fast.
          </p>
        </section>

        <section>
          <h2 class="text-lg font-semibold text-gray-900 mb-2">
            Why we built it
          </h2>
          <p>
            The AI tools landscape is growing fast. New tools launch every week
            and it's hard to keep track of what's available, what's free, and
            what actually works. SharkCraw cuts through the noise with a clean,
            searchable directory that's always up to date.
          </p>
        </section>

        <section>
          <h2 class="text-lg font-semibold text-gray-900 mb-2">
            What we cover
          </h2>
          <ul class="list-disc list-inside space-y-1 text-gray-600">
            <li>Writing — AI writers, copywriters, grammar tools</li>
            <li>Image — AI image generators and editors</li>
            <li>Video — AI video creation and editing tools</li>
            <li>Audio — AI voice, music, and podcast tools</li>
            <li>Code — AI coding assistants and IDEs</li>
            <li>Search — AI-powered search engines</li>
            <li>Productivity — AI calendar, email, and workflow tools</li>
            <li>Marketing — AI ad, SEO, and social media tools</li>
            <li>Education — AI tutoring and learning platforms</li>
            <li>Business — AI CRM, analytics, and finance tools</li>
          </ul>
        </section>

        <section>
          <h2 class="text-lg font-semibold text-gray-900 mb-2">Contact</h2>
          <p>
            Have a question or want to suggest a tool? Reach us at
            <a
              href="mailto:hello@sharkcraw.com"
              class="text-indigo-600 hover:underline"
              >hello@sharkcraw.com</a
            >.
          </p>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'About – SharkCraw',
  meta: [
    {
      name: 'description',
      content:
        'SharkCraw is a free directory of 500+ AI tools across writing, image, video, code, and more.',
    },
  ],
});
</script>
