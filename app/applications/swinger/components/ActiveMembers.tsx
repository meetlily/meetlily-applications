"use client"

import { useEffect, useState } from "react"

interface ActiveMembersProps {
  rooms: any[]
}
export default function ActiveMembers({ rooms }: ActiveMembersProps) {
  const [membersCount, setMembersCount] = useState<number>(0)

  useEffect(() => {
    let count = 0
    rooms.map((r: any, i: number) => {
      count = count + r.numberOfElements
    })
    setMembersCount(count)
  }, [])

  return <>{membersCount || 0}</>
}
