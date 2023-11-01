"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import axios from "axios"
import * as CryptoJS from "crypto-js"
import moment from "moment"
import { OpenVidu, Publisher, Session, StreamManager } from "openvidu-browser"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/registry/new-york/ui/card"
import { Input } from "@/registry/new-york/ui/input"
import { Tabs, TabsContent } from "@/registry/new-york/ui/tabs"
import IconComponent from "@/components/icon/IconComponent"
import { getSLSMessagesByRoom } from "@/app/actions/getSLSData"
import {
  createSession,
  createToken,
  getSession,
  getViduSessions,
  initilizedSession,
} from "@/app/actions/openvidu"

import ChatScrollArea from "./ChatScrollArea"
import RecentRooms from "./RecentRooms"
import SwingerMembers from "./SwingerMembers"
import SwingersMessages from "./SwingersMessages"

const SLS_API_KEY = `dTK6LOd93Mpdv1DP3sk4xfEQm7IGtYLD2`
const SLS_VIDU_URL = `https://viduk.swinglifestyle.com`
const SLS_API_URL = `${process.env.SLS_API_KEY}`
const SLS_TURN_URL = `${process.env.SLS_API_KEY}`
const SLS_OPENVIDU_USER = `OPENVIDUAPP`
const decrypt = (data: string, secret: string) => {
  const bytes = CryptoJS.AES.decrypt(data, secret)
  const originalText = bytes.toString(CryptoJS.enc.Utf8)

  if (typeof originalText === "string") {
    return JSON.parse(originalText)
  }
  return originalText
}

export const createViduToken = (sessionId: string, data: any) => {
  let userData = {
    type: "WEBRTC",
    //data: data,
    record: true,
    role: "PUBLISHER",
  }
  return axios
    .post(
      `${SLS_VIDU_URL}/openvidu/api/sessions/${sessionId}/connection`,
      userData,
      {
        headers: {
          Authorization: `Basic ${Buffer.from(
            `${SLS_OPENVIDU_USER}:${SLS_API_KEY}`
          ).toString("base64")}`,
        },
      }
    )
    .then((response) => {
      return response.data.token
    })
    .catch((error) => error)
}
export const getSlSMessages = (sessionId?: string) => {
  let now = moment().add(1, "day").format("YYYY-MM-DD")
  let endpoint = `https://chatv.swinglifestyle.com/messages/?created_at_lt=${now}&_sort=created_at:desc&_limit=100&token=${SLS_API_KEY}`
  if (sessionId) {
    endpoint = `https://chatv.swinglifestyle.com/messages/?roomId=${sessionId}&created_at_lt=${now}&_sort=created_at:desc&_limit=100&token=${SLS_API_KEY}`
  }
  return axios
    .get(endpoint)
    .then((response) => {
      return response.data
    })
    .catch((error) => error)
}
export const createViduSession = (sessionId: string) => {
  return new Promise(async (resolve, reject) => {
    await createSession(sessionId)
      .then((response) => {
        resolve(response)
      })
      .catch((response) => {
        const err = Object.assign({}, response)
        if (err?.response?.status === 409) {
          resolve(sessionId)
        } else {
          console.warn(
            "No connection to OpenVidu Server. This may be a certificate error at " +
              process.env.SLS_VIDU_URL
          )
          // if (
          //   window.confirm(
          //     'No connection to OpenVidu Server. This may be a certificate error at "' +
          //       process.env.REACT_APP_OPENVIDU_SERVER_URL +
          //       '"\\n\\nClick OK to navigate and accept it. ' +
          //       'If no certificate warning is shown, then check that your OpenVidu Server is up and running at "' +
          //       process.env.REACT_APP_OPENVIDU_SERVER_URL +
          //       '"'
          //   )
          // ) {
          //   window.location.assign(
          //     process.env.REACT_APP_OPENVIDU_SERVER_URL + "/accept-certificate"
          //   )
          // }
        }
      })
  })
}
function getRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
const getRandomMember = (members: any) => {
  const n = getRandomNumber(0, members.length)
  return members[n].clientData
}
const getToken = async (sessionId: string, data: any) => {
  let token = await createViduToken(sessionId, data)
  return token
}
const getMessages = async (sessionId?: string) => {
  let msg = await getSlSMessages(sessionId)
  return msg
  // return getSession(sessionId).then((session: any) => {

  //   console.log(token);

  // })
}
const openMyCamera = (OV: any) => {
  OV.getUserMedia({
    audioSource: false,
    videoSource: undefined,
    resolution: "1280x720",
    frameRate: 10,
  }).then((mediaStream: any) => {
    const videoTrack = mediaStream.getVideoTracks()[0]
  })

  // const newPublisher = newOV.initPublisher(
  //   initUserData.myData.clientData.username,
  //   {
  //     audioSource: undefined,
  //     videoSource: videoTrack,
  //     publishAudio: false,
  //     publishVideo: false,
  //     // resolution: '1280x720',
  //     // frameRate: 10,
  //     insertMode: "APPEND",
  //     mirror: true,
  //   }
  // )
  // // 4-c publish
  // newPublisher.once("accessAllowed", () => {
  //   newSession.publish(newPublisher)
  //   setPublisher(newPublisher)
  // })
}
interface DashboardTabContentProps {
  rooms: any[]
  sessions?: any
  membersCount?: number
  chatCount?: number
  members?: any
  defaultGroup?: any
  messages?: any
}
export default function DashboardTabContent({
  rooms,
  sessions,
  membersCount,
  chatCount,
  members,
  defaultGroup,
  messages,
}: DashboardTabContentProps) {
  let randomValue = getRandomNumber(0, defaultGroup.connections.length)
  const [OV, setOV] = useState<OpenVidu>()
  const [session, setSession] = useState<Session>()
  const [loadMessages, setLoadMessages] = useState([])
  const [room, setRoom] = useState<any>({})
  const [initUserData, setInitUserData] = useState({
    mySessionId: defaultGroup.roomId,
    myData: getRandomMember(defaultGroup.connections),
  })
  const [publisher, setPublisher] = useState<Publisher | null>(null)
  const [subscribers, setSubscribers] = useState<Array<StreamManager>>([])

  useEffect(() => {
    if (room && room.roomId) {
      getMessages(room.roomId)
        .then((msg) => {
          setLoadMessages(msg)
        })
        .catch((error) => {
          console.warn(
            "There was an error getting messages:",
            error.code,
            error.message
          )
        })
    }
  }, [])
  const joinSession = (session: any) => {
    let m = getRandomMember(session.connections)
    console.log(m, "selected member")
    setLoadMessages([])
    setRoom(session)
    setInitUserData({
      mySessionId: session.roomId,
      myData: m,
    })
    // 1. openvidu
    const newOV = new OpenVidu()
    // socket
    newOV.enableProdMode()
    // 2. initSesison
    const newSession = newOV.initSession()
    setOV(newOV)
    setSession(newSession)
    // 4. session
    const connection = () => {
      // 4-a token
      getToken(session.roomId!, m).then((token: any) => {
        newSession
          .connect(token, m)
          .then(async () => {
            // 4-b user media
            getMessages(session.roomId)
              .then((msg) => {
                setLoadMessages(msg)
              })
              .catch((error) => {
                console.warn(
                  "There was an error getting messages:",
                  error.code,
                  error.message
                )
              })
          })
          .catch((error) => {
            console.warn(
              "There was an error connecting to the session:",
              error.code,
              error.message
            )
          })
      })
    }
    connection()
  }
  const roomConnect = useCallback(
    (room: any) => {
      joinSession(room)
    },
    [joinSession]
  )

  const handleViduConnect = useCallback((sessiond: any) => {
    const sessionData = sessiond
    let userData = {
      type: "WEBRTC",
      data: sessionData.connections[0].clientData,
      record: true,
      role: "PUBLISHER",
    }
    axios
      .post(
        `${SLS_VIDU_URL}/openvidu/api/sessions/${sessiond.roomId}/connection`,
        userData,
        {
          headers: {
            Authorization: `Basic ${Buffer.from(
              `${SLS_OPENVIDU_USER}:${SLS_API_KEY}`
            ).toString("base64")}`,
          },
        }
      )
      .then((response) => {
        if (response.data.token) {
          // return session?.connect(
          //   response.data.token,
          //   sessionData.connections[0].clientData
          // )
        }
      })
      .then((response) => {
        // session.on("connectionDestroyed", (event: any) => {
        //   console.log(event, "connectionDestroyed")
        // })
        // session.on("connectionCreated", (event: any) => {
        //   console.log(event, "connectionCreated")
        // })
        // session.on("streamCreated", (event: any) => {
        //   console.log(event, "streamCreated")
        // })
      })
      .catch((err) => err)
  }, [])
  return (
    <>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-5 gap-2 bg-gray-900 px-4 pb-4 pt-2 h-full rounded-r-none">
          <div className="flex flex-row items-start justify-start gap-2 h-full">
            <Card
              className="flex flex-col col-span-3 rounded-r-none  w-[300px]"
              color="gray"
            >
              <CardContent className="py-4 ">
                <div className="text-md  mb-2 text-cyan-500">Groups</div>
                <ChatScrollArea id="chat-scroll-area-groups" height="h-[340px]">
                  <RecentRooms
                    rooms={rooms}
                    sessions={sessions}
                    handleConnect={joinSession}
                  />
                </ChatScrollArea>

                <div className="text-md  my-2 text-cyan-500">Members</div>

                <ChatScrollArea
                  id="chat-scroll-area-members"
                  height="h-[280px]"
                >
                  <SwingerMembers members={members} sessions={sessions} />
                </ChatScrollArea>
              </CardContent>
            </Card>
            <div className="relative col-span-7 flex flex-col w-full h-full items-start justify-end gap-y-2">
              <Card
                className="w-full rounded-l-none h-full rounded-b-none"
                color="gray"
              >
                <ChatScrollArea
                  id="chat-scroll-area"
                  height="h-[620px]"
                  width="w-full"
                >
                  <CardContent className="px6 py-2 flex flex-col h-full items-center justify-start">
                    <SwingersMessages
                      loadMessages={loadMessages}
                      defaultRoom={room}
                    />
                  </CardContent>
                </ChatScrollArea>
              </Card>
              <div className="flex text-xs px-1">
                <IconComponent iconName="apps" size={16} />
              </div>
              <Card
                className=" flex w-full rounded-l-none items-end h-[60px]"
                color="gray"
              >
                <CardContent className="px6 py-2 flex w-full absolute bottom-0">
                  <Input
                    id="chat-input"
                    size={20}
                    className="flex w-full rounded-full px-6 py-1 h-10 bg-gray-300 text-gray-900 font-semibold shadow"
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </Card>
        <Card className="col-span-2 p-4 bg-gray-900 rounded-l-none w-full h-full max-w-2xl ">
          <CardHeader className="flex flex-col pt-0 pl-0 pb-2 space-y-0 justify-end text-right">
            <CardTitle>New Members</CardTitle>
          </CardHeader>
          <CardContent className="py-4">
            <ChatScrollArea id="chat-scroll-area-groups" height="h-[340px]">
              {/* <SwingerMembers members={members} sessions={sessions} /> */}
            </ChatScrollArea>
          </CardContent>
        </Card>
      </div>
    </>
  )
}
