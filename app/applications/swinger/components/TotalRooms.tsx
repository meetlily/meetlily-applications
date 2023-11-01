"use client"

interface TotalRoomsProps {
  rooms: any[]
}
export default function TotalRooms({ rooms }: TotalRoomsProps) {
  return <>{rooms.length}</>
}
