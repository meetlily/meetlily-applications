"use client"

import { useEffect, useState } from "react"
import axios from "axios"
import { OpenVidu } from "openvidu-browser"

const SLS_API_KEY = `${process.env.SLS_API_KEY}`
const SLS_VIDU_URL = `${process.env.SLS_VIDU_URL}`
const SLS_API_URL = `${process.env.SLS_API_KEY}`
const SLS_TURN_URL = `${process.env.SLS_API_KEY}`
const SLS_OPENVIDU_USER = `OPENVIDUAPP`

export function OpenviduCreateConnection(sessionData: any) {
  const [session, setSession] = useState<any>()
  const OV = new OpenVidu()

  useEffect(() => {
    setSession(OV.initSession())
  }, [])
  let userData = {
    type: "WEBRTC",
    data: sessionData.connections.clientData,
    record: true,
    role: "PUBLISHER",
  }
  return axios
    .post(
      `${process.env.SLS_VIDU_URL}/openvidu/api/sessions/${sessionData.customSessionId}/connection`,
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
        return session.connect(
          response.data.token,
          sessionData.connections.content[0].clientData
        )
      }
    })
    .then((response) => {
      console.log(response, "connected")
      return { message: response }
    })
    .catch((err) => err)
}
export async function OpenviduGetSessionById(sessionId: string) {
  const response = await axios.get(
    `${process.env.SLS_VIDU_URL}/openvidu/api/sessions/${sessionId}/connection`,
    {
      headers: {
        Authorization: `Basic ${Buffer.from(
          `${SLS_OPENVIDU_USER}:${SLS_API_KEY}`
        ).toString("base64")}`,
      },
    }
  )
}

interface OpenviduConnectProps {
  sessions: any
}
export default async function OpenviduConnect({
  sessions,
}: OpenviduConnectProps) {
  const connect = await OpenviduCreateConnection(sessions)
  console.log(connect, "connect")
  return <></>
}
