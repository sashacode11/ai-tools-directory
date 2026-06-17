import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
  pages: true,
  vite: {
    plugins: [tailwindcss()],
  },
  runtimeConfig: {
    public: {
      supabaseUrl: process.env.SUPABASE_URL,
      supabaseKey: process.env.SUPABASE_KEY,
    },
  },
  css: ['~/assets/css/main.css'],
  modules: ['@nuxtjs/sitemap', '@nuxtjs/robots'],
  sitemap: {
    siteUrl: 'https://ai-tools-directory-zeta-red.vercel.app',
    sources: ['/api/__sitemap__/urls'],
  },
  robots: {
    UserAgent: '*',
    Allow: '/',
    Sitemap: 'https://ai-tools-directory-zeta-red.vercel.app/sitemap.xml',
  },
});
