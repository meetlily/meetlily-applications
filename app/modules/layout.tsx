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

export const metadata: Metadata = {
  title: "Applications",
  description: "Check out some app built using the components.",
}

interface ApplicationsLayoutProps {
  children: React.ReactNode
}

export default function ApplicationsLayout({
  children,
}: ApplicationsLayoutProps) {
  return (
    <>
      <div className="container relative">
        <PageHeader className="page-header pb-8">
          <Link
            href="/docs/changelog"
            className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm font-medium"
          >
            🎉 <Separator className="mx-2 h-4" orientation="vertical" />{" "}
            <span className="sm:hidden">Style, a new CLI and more.</span>
            <span className="hidden sm:inline">
              Introducing Style, a new CLI and more.
            </span>
            <ArrowRightIcon className="ml-1 h-4 w-4" />
          </Link>
          <PageHeaderHeading className="hidden md:block">
            Check out some applications.
          </PageHeaderHeading>
          <PageHeaderHeading className="md:hidden">
            Applications
          </PageHeaderHeading>
          <PageHeaderDescription>
            Dashboard, cards, authentication. Some applications built using the
            components. Use this as a guide to build your own.
          </PageHeaderDescription>
          <section className="flex w-full items-center space-x-4 pb-8 pt-4 md:pb-10">
            <Link
              href="/docs"
              className={cn(buttonVariants(), "rounded-[6px]")}
            >
              Get Started
            </Link>
            <Link
              href="/components"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "rounded-[6px]"
              )}
            >
              Components
            </Link>
          </section>
        </PageHeader>
        <section>
          <ApplicationsNav />
          <div className="overflow-hidden rounded-[0.5rem] border bg-background shadow">
            {children}
          </div>
        </section>
      </div>
    </>
  )
}
