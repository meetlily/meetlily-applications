"use client"

import { useEffect, useState } from "react"

import { getSLSMessagesByRoom } from "@/app/actions/getSLSData"

import SwingerMessage from "./SwingerMessage"

interface SwingersMessagesProps {
  loadMessages?: any
  defaultRoom?: any
}
// Define a function to compare dates
function compareDates(itemA: any, itemB: any) {
  const dateA: any = new Date(itemA.sent_date)
  const dateB: any = new Date(itemB.sent_date)
  return dateA - dateB
}

// Sort the array by date in ascending order

export default function SwingersMessages({
  loadMessages,
  defaultRoom,
}: SwingersMessagesProps) {
  const [messages, setMessages] = useState([])
  const [room, setRoom] = useState<any>()
  useEffect(() => {
    setMessages(loadMessages)
    setRoom(defaultRoom)
    // getSLSMessagesByRoom(defaultRoom.roomId)
    //   .then((res: any) => {
    //     setMessages(res)
    //   })
    //   .catch((err) => {
    //     console.log(err, "messages error")
    //   })
  }, [loadMessages])
  return (
    <>
      <div className="text-lg">{room?.name}</div>
      {messages.length > 0 &&
        messages.map((message: any, i: number) => (
          <div className="flex flex-col justify-start items-center w-full">
            <SwingerMessage key={message.message_id} message={message} />
          </div>
        ))}
    </>
  )
}
