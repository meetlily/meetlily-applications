import { siteConfig } from "@/config/site"

export function SiteFooter() {
  return (
    <footer className="py-4 md:px-8 md:py-0">
      <div className="fluid w-full flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <div className="flex text-center text-sm leading-loose text-muted-foreground md:text-left">
          Copyrights 2023{" | "}
          <a
            href={siteConfig.links.twitter}
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            Meetlily Advertising
          </a>
          . Check us out on{" "}
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            GitHub
          </a>
          .
        </div>
      </div>
    </footer>
  )
}
