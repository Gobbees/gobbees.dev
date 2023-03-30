const siteMetadata = {
  title: 'Gobbees',
  author: 'Giovanni Gobbi',
  headerTitle: 'Gobbees',
  description: 'Personal space to share some of my thoughts',
  language: 'en-us',
  theme: 'system',
  siteUrl: 'https://gobbees.vercel.app',
  siteLogo: '/static/images/logo.png',
  image: '/static/images/avatar.webp',
  socialBanner: '/static/images/twitter-card.png',
  email: 'me@gobbees.dev',
  github: 'https://github.com/Gobbees',
  twitter: 'https://twitter.com/Gobbees',
  linkedin: 'https://www.linkedin.com/in/Gobbees',
  locale: 'en-US',
  analytics: {
    // If you want to use an analytics provider you have to add it to the
    // content security policy in the `next.config.js` file.
    // supports plausible, simpleAnalytics, umami or googleAnalytics
    plausibleDataDomain: '', // e.g. tailwind-nextjs-starter-blog.vercel.app
    simpleAnalytics: false, // true or false
    umamiWebsiteId: '', // e.g. 123e4567-e89b-12d3-a456-426614174000
    googleAnalyticsId: '', // e.g. UA-000000-2 or G-XXXXXXX
    posthogAnalyticsId: '', // posthog.init e.g. phc_5yXvArzvRdqtZIsHkEm3Fkkhm3d0bEYUXCaFISzqPSQ
  },
};

module.exports = siteMetadata;
