import { Metadata } from "next"
import Link from "next/link"
import { buttonVariants } from "@/registry/new-york/ui/button"
import { Separator } from "@/registry/new-york/ui/separator"
import { ArrowRightIcon } from "@radix-ui/react-icons"

import { cn } from "@/lib/utils"
import { ApplicationsNav } from "@/components/applications-nav"
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header"

import { MainNav } from "./components/main-nav"

export const metadata: Metadata = {
  title: "Swingers",
  description: "Check out some app built using the components.",
}

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <>
      <div className="fluid px-4 relative">
        <section>
          <div className="overflow-hidden rounded-[0.5rem] border bg-background shadow">
            {children}
          </div>
        </section>
      </div>
    </>
  )
}
