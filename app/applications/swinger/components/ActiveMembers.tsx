"use client"

import { useEffect, useState } from "react"

interface ActiveMembersProps {
  rooms: any
}
export default function ActiveMembers({ rooms }: ActiveMembersProps) {
  const [membersCount, setMembersCount] = useState<number>(0)

  useEffect(() => {
    let count = 0
    rooms.content.map((r: any, i: number) => {
      console.log(r, "ActivemMmbers")

      count = count + r.connections.numberOfElements
      setMembersCount(count)
    })
  }, [])

  return <>{membersCount}</>
}
