"use client"

interface GroupListsProps {
  groups: any
  sessions?: any
  handleConnect: (e: any) => void
}

export default function GroupLists({
  groups,
  sessions,
  handleConnect,
}: GroupListsProps) {
  return groups?.map((g: any, i: number) => (
    <div
      className="cursor-pointer hover:text-cyan-500"
      onClick={() => handleConnect(g)}
    >
      {`(${g.connections.length})${g.name}`}
    </div>
  ))
}
