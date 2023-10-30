"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

interface ActiveRoomsProps {
  rooms: any
}
export default function ActiveRooms({ rooms }: ActiveRoomsProps) {
  return <>{rooms?.numberOfElements}</>
}
