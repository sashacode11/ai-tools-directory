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
    siteUrl: 'https://www.sharkcraw.com',
    sources: ['/api/__sitemap__/urls'],
  },
  robots: {
    UserAgent: '*',
    Allow: '/',
    Sitemap: 'https://ai-tools-directory-zeta-red.vercel.app/sitemap.xml',
  },
  app: {
    head: {
      meta: [
        {
          name: 'google-site-verification',
          content: 'vYl6f3GRwq80CxJNYdfyny1PW-eSDsDphqXGVsp-wsw',
        },
      ],
    },
  },
});
