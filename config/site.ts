export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Meetlily Advertising",
  description:
    "Beautifully designed components built with Radix UI and Tailwind CSS.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
  ],
  dashboard: [
    {
      title: "Dashboard",
      href: "/dashboard",
    },
    {
      title: "Applications",
      href: "/applications",
    },
    {
      title: "Modules",
      href: "/modules",
    },
  ],
  links: {
    twitter: "https://twitter.com/meetmylily",
    github: "https://github.com/meetlily",
    docs: "https://docs.meetlily.net",
  },
}
