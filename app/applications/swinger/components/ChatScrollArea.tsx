"use client"

import { ScrollArea, ScrollBar } from "@/registry/new-york/ui/scroll-area"

import "./style.css"

interface ChatScrollAreaProps {
  className?: string
  id?: string
  height?: string
  width?: string
  children?: React.ReactNode
  orientation?: "vertical" | "horizontal"
}

export default function ChatScrollArea({
  className,
  id,
  height,
  width,
  children,
  orientation,
}: ChatScrollAreaProps) {
  if (!orientation) {
    orientation = "vertical"
  }
  return (
    <ScrollArea className={`${className} ${height} ${width} whitespace-nowrap`}>
      {children}
      <ScrollBar orientation={orientation} />
    </ScrollArea>
  )
}
