"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

interface TotalRoomsProps {
  rooms: any[]
}
export default function TotalRooms({ rooms }: TotalRoomsProps) {
  return <>{rooms.length}</>
}
