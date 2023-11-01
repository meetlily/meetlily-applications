"use client"

import GroupLists from "./GroupLists"

interface RoomsComponentProps {
  rooms: any
  sessions: any
  handleConnect: (e: any) => void
}
export default function RoomsComponent({
  rooms,
  sessions,
  handleConnect,
}: RoomsComponentProps) {
  const handleClickConnect = (e: any) => {
    handleConnect(e)
  }
  return (
    <>
      <GroupLists
        groups={rooms}
        sessions={sessions}
        handleConnect={handleClickConnect}
      />
    </>
  )
}
