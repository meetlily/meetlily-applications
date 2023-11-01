"use client"

import { AvatarImage } from "@radix-ui/react-avatar"
import moment from "moment"

import { Avatar, AvatarFallback } from "@/registry/new-york/ui/avatar"
import { Card } from "@/registry/new-york/ui/card"

interface SwingersMessageProps {
  message: any
}
export default function SwingersMessage({ message }: SwingersMessageProps) {
  if (
    message.type === "global" ||
    message.type === "whisper" ||
    message.type === "private"
  ) {
    return (
      <>
        <div
          className={`flex flex-col items-center justify-start w-full gap-4
          ${message.type === "whisper" ? "text-cyan-500" : ""}
          ${message.type === "private" ? "text-red-500" : ""}
          `}
        >
          <div
            className={`flex flex-row items-center w-full gap-2 space-y-4
                        ${
                          message.type === "whisper"
                            ? "justify-end"
                            : "justify-start"
                        }
          `}
          >
            <Avatar>
              <AvatarImage src={message.PICTURE} />
              <AvatarFallback className="capitalize">
                {message.sender[0]}
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col justify-center">
              <div className="flex text-xs label">{message.sender}</div>
              <Card
                color={`
                ${message.type === "whisper" ? "info" : ""}
                ${message.type === "private" ? "danger" : ""}
              `}
                className={`flex flex-col p-4 rounded-lg shadow whitespace-normal max-w-[300px] overflow-auto
                ${message.type === "whisper" ? "bg-cyan-500" : ""}
                ${message.type === "private" ? "bg-red-500" : ""}
                `}
              >
                <span className="flex whitespace-normal max-w-[300px]">
                  {message.title}
                </span>
              </Card>
              <span className="flex text-xs text-neutral-500">
                {moment(message.sent_date).format("LLL")}
              </span>
            </div>
          </div>
        </div>
      </>
    )
  }
}
