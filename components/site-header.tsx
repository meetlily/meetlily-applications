"use client"

import React, { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { buttonVariants } from "@/registry/new-york/ui/button"

import { SafeUser } from "@/types/form"
import { siteConfig } from "@/config/site"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"
import AvatarNav from "@/app/dashboard/components/AvatarNav"
import { Search } from "@/app/dashboard/components/search"

import TeamSwitcher from "./team-switcher"

interface SiteHeaderProps {
  currentUser?: SafeUser | null
}
export function SiteHeader({ currentUser }: SiteHeaderProps) {
  const [nav, setNav] = useState<any>(siteConfig.mainNav)
  const router = useRouter()
  const pathname = usePathname()
  useEffect(() => {
    if (pathname === "/dashboard") {
      setNav(siteConfig.dashboard)
    }
  }, [pathname])
  return (
    <header className="bg-background sticky top-0 z-40 w-full border-b">
      <div className="fluid px-2 flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav currentUser={currentUser} items={nav} />

        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            {/* <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: "icon",
                  variant: "ghost",
                })}
              >
                <Icons.gitHub className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
            <Link
              href={siteConfig.links.twitter}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: "icon",
                  variant: "ghost",
                })}
              >
                <Icons.twitter className="h-5 w-5 fill-current" />
                <span className="sr-only">Twitter</span>
              </div>
            </Link> */}
            <Search />
            <ThemeToggle />
            <AvatarNav
              currentUser={currentUser}
              width={30}
              height={30}
              image={
                currentUser?.image
                  ? currentUser.image
                  : "/images/placeholder.jpg"
              }
            />
          </nav>
        </div>
      </div>
    </header>
  )
}
