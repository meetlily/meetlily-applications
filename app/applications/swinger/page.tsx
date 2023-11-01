import { SessionsTypes } from "@/types/openvidu"
import { RoomType } from "@/types/sls"

import {
  getSLSMembers,
  getSLSMembersCount,
  getSLSMessagesByRoom,
  getSLSMessagesCount,
  getSLSRooms,
} from "../../actions/getSLSData"
import { getViduSessions } from "../../actions/openvidu"
import DashboardTabContent from "./components/DashboardTabContent"

let defaultGroup = { roomId: "487f7b22f68312d2c1bbc93b1aea445b" }

export async function getSwingersSessions(sessions: SessionsTypes) {
  const rooms: RoomType[] | any = await getSLSRooms()
  if (rooms) {
    rooms?.map((room: RoomType, i: number) => {
      rooms[i].default = false
      if (defaultGroup.roomId === room.roomId) {
        rooms[i].default = true
        defaultGroup = {
          ...defaultGroup,
          ...rooms[i],
        }
      }
      const session = sessions.content?.find(
        (obj: any) => obj.customSessionId === room.roomId
      )

      rooms[i].active = false
      rooms[i].session = null
      if (session) {
        rooms[i].active = true
        rooms[i].session = session
      }
    })
  }

  return rooms
}

export default async function SwingersPage() {
  const sessions: any = await getViduSessions()
  const rooms = await getSwingersSessions(sessions)
  const membersCount: any = await getSLSMembersCount()
  const chatCount: any = await getSLSMessagesCount()
  const members: any = await getSLSMembers()
  const messages: any = await getSLSMessagesByRoom(defaultGroup.roomId)
  const props = {
    rooms,
    sessions,
    membersCount,
    chatCount,
    members,
    defaultGroup,
    messages,
  }
  return (
    <>
      <div className="flex-col md:flex">
        <div className="relative h-full">
          <DashboardTabContent {...props} />
        </div>
      </div>
    </>
  )
}
