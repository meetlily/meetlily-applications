import * as React from "react"
import Link from "next/link"
import ButtonWithIcon from "@/registry/new-york/example/button-with-icon"
import SheetDemo from "@/registry/new-york/example/sheet-demo"
import { Dialog } from "@radix-ui/react-dialog"

import { SafeUser } from "@/types/form"
import { NavItem } from "@/types/nav"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"

import { DrawerContent, DrawerTrigger } from "./drawer"
import LeftSheet from "./drawers/left-sheet"
import AppIcons from "./icon/AppIcons"
import IconComponent from "./icon/IconComponent"
import TeamSwitcher from "./team-switcher"
import { Button } from "./ui/button"
import { Sheet } from "./ui/sheet"

interface MainNavProps {
  items?: NavItem[]
  currentUser?: SafeUser | null
}

export function MainNav({ items, currentUser }: MainNavProps) {
  return (
    <div className="flex gap-4 md:gap-4">
      <LeftSheet />

      {currentUser && <TeamSwitcher currentUser={currentUser} />}
      {!currentUser && (
        <Link href="/" className="flex items-center space-x-2">
          <Icons.logo className="h-6 w-6" />
          <span className="inline-block font-bold">{siteConfig.name}</span>
        </Link>
      )}

      {items?.length ? (
        <nav className="flex gap-6">
          {items?.map(
            (item, index) =>
              item.href && (
                <Link
                  key={index}
                  href={item.href}
                  className={cn(
                    "flex items-center text-sm font-medium text-muted-foreground",
                    item.disabled && "cursor-not-allowed opacity-80"
                  )}
                >
                  {item.title}
                </Link>
              )
          )}
        </nav>
      ) : null}
    </div>
  )
}
