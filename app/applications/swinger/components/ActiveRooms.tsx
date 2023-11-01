"use client"

import { Badge } from "@/registry/new-york/ui/badge"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/registry/new-york/ui/card"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/registry/new-york/ui/hover-card"

import IconComponent from "@/components/icon/IconComponent"

interface ActiveRoomsProps {
  rooms: any
  sessions?: any
}
export default function ActiveRooms({ rooms, sessions }: ActiveRoomsProps) {
  return (
    <>
      <HoverCard>
        <HoverCardTrigger asChild>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Active Rooms
              </CardTitle>
              <IconComponent iconName="room" size={36} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{sessions?.length}</div>
              <p className="text-xs text-muted-foreground">
                +180.1% from last month
              </p>
            </CardContent>
          </Card>
        </HoverCardTrigger>
        <HoverCardContent className="w-[360px] h-[400px] flex flex-col  gap-2 overflow-auto">
          {sessions.map((r: any, i: number) => (
            <div key={i} className="flex flex-row w-full items-center">
              <div className="flex ml-1 w-full space-y-1 max-w-[240px] overflow-hidden">
                <p className="text-sm font-medium leading-none">
                  {r.name || r.customSessionId}
                </p>
              </div>
              <div className="flex w-full justify-end font-medium">
                <Badge variant="outline">{r.connectionCount} online</Badge>
              </div>
            </div>
          ))}
        </HoverCardContent>
      </HoverCard>
    </>
  )
}
