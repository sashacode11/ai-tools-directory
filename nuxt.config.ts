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
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
      meta: [
        {
          name: 'google-site-verification',
          content: 'vYI6f3GRwq80CxJNYdfyny1PW-eSDsDphqXGVsp-wsw',
        },
        {
          name: 'google-site-verification',
          content: 'Y6wa8EnhUMIfEnp-gEBKaIogxEyMBglxbTAIMTn2xPY',
        },
      ],
      script: [
        {
          async: true,
          src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2075457485171732',
          crossorigin: 'anonymous',
        },
      ],
    },
  },
});
