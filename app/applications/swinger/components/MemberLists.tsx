"use client"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/new-york/ui/avatar"

interface MembersListsProps {
  members: any
}
export default function MembersLists({ members }: MembersListsProps) {
  return members?.map((user: any, i: number) => (
    <div className="flex flex-row items-center justify-center w-full gap-4 py-1">
      <Avatar>
        <AvatarImage
          src={user?.json_data?.PICTUREFULL || user?.json_data?.PICTURE}
        />
        <AvatarFallback className="capitalize">
          {user.username[0]}
        </AvatarFallback>
      </Avatar>
      <div className="flex flex-col w-full">
        <h3 className="flex ">{user.username}</h3>
        <p className="flex text-xs text-neutral-500">{`${user.email}`}</p>
      </div>
    </div>
  ))
}
