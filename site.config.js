const CONFIG = {
  // profile setting (required)
  profile: {
    name: "Libalpm",
    image: "/love.gif", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "Offensive Cyber-Security enthusiast",
    bio: "Security Researcher",
    email: "libalpm@skiff.com",
    linkedin: "N/A",
    github: "libalpm64",
    instagram: "N/A",
  },
  projects: [
    {
      name: `Path Parser`,
      href: "https://github.com/libalpm64/Path-Module-Parser",
    },
    {
      name: `Server API Linker`,
      href: "https://github.com/libalpm64/Server_API_Linker",
    },
  ],
  // blog setting (required)
  blog: {
    title: "Libalpm | Latest Cybersec News.",
    description: "The best site for studying DDoS attacks and how they work.",
    theme: "dark", // ['light', 'dark', 'auto']

  },

  // CONFIG configration (required)
  link: "https://blog.libalpm.dev/",
  since: 2023, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://wallpapercave.com/wp/wp2292683.jpg", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  naverSearchAdvisor: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 21600 * 7, // revalidate time for [slug], index
}

module.exports = { CONFIG }
