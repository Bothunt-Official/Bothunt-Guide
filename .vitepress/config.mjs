import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Bothunt Webhook API",
  description: "Official guide for the Bothunt Webhook API",
  head: [
    ["link", { rel: "canonical", href: "https://bothunt.co" }],

    ['link', { rel: 'icon', href: 'https://bothunt.co/logo.svg' }],

    ["meta", { property: "og:title", content: "Bothunt Webhook API" }],
    ["meta", { property: "og:description", content: "Official guide for the Bothunt Webhook API." }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:url", content: "https://bothunt.co" }],
    ["meta", { property: "og:image", content: "https://bothunt.co/logo.svg" }],

    ["meta", { name: "twitter:card", content: "summary_large_image" }],
    ["meta", { name: "twitter:title", content: "Bothunt Webhook API" }],
    ["meta", { name: "twitter:description", content: "Official guide for the Bothunt Webhook API." }],
    ["meta", { name: "twitter:image", content: "https://bothunt.co/logo.svg" }],
  ],
  cleanUrls: true,
  themeConfig: {
    search: { provider: 'local' },
    logo: "https://bothunt.co/logo.svg",
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: 'https://bothunt.co' }
    ],

    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Setup', link: '/setup' },
          { text: 'Upvotes', link: '/upvotes' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'discord', ariaLabel: 'Discord Server', link: 'https://bothunt.co/server' }
    ]
  }
})
