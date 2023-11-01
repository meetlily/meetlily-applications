"use client"

import { Badge } from "@/registry/new-york/ui/badge"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/registry/new-york/ui/hover-card"

interface HoverRoomProps {
  room: any
  triggerEl?: React.ReactElement
  handleGroupConnect?: (room: any) => void
}

export default function HoverRoom({
  room,
  triggerEl,
  handleGroupConnect,
}: HoverRoomProps) {
  return (
    <HoverCard>
      <HoverCardTrigger onClick={handleGroupConnect} asChild>
        {triggerEl}
      </HoverCardTrigger>
      <HoverCardContent className="w-full">
        <div className="flex flex-col">
          <div className="2xl capitalize">
            {room.name || room.customSessionId}
          </div>
          <p className="my-2 text-neutral-400 text-xs capitalize">
            <Badge>{room.type}</Badge>{" "}
            <Badge>{room.connectionCount} online</Badge>
          </p>

          {/* <div className="flex flex-col">
            {JSON.stringify(room.connections)}
          </div> */}
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}
