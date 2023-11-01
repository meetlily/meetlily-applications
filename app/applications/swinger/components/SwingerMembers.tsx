"use client"

import MemberLists from "./MemberLists"

interface SwingerMembersProps {
  members: any
  sessions: any
}
export default function SwingerMembers({
  members,
  sessions,
}: SwingerMembersProps) {
  return (
    <>
      <MemberLists members={members} />
    </>
  )
}
