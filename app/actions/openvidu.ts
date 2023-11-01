import axios from "axios"
import { OpenVidu } from "openvidu-browser"

const SLS_API_KEY = "dTK6LOd93Mpdv1DP3sk4xfEQm7IGtYLD2"

const SLS_API_URL = process.env.SLS_API_URL
const SLS_TURN_URL = process.env.SLS_TURN_URL
const SLS_USERNAME = "OPENVIDUAPP"
// Initialize OpenVidu session
export const OV = new OpenVidu()
export const initSession = OV.initSession()
export async function initilizedSession(options?: any) {
  // const isCompatible = OV.checkSystemRequirements()
  // if (options.live) {
  //   OV.enableProdMode()
  // }

  const session = initSession
  // Listen for the 'streamCreated' event
  session.on("streamCreated", (event: { stream: any }) => {
    console.log("Stream created:", event.stream)
  })

  // Listen for the 'streamDestroyed' event
  session.on("streamDestroyed", (event: { stream: any }) => {
    //console.log("Stream destroyed:", event.stream)
  })

  // Listen for the 'sessionDisconnected' event
  session.on("sessionDisconnected", (event: { reason: any }) => {
    //console.log("Session disconnected:", event.reason)
  })
  session.on("connectionCreated", (event: { connection: any }) => {
    console.log("Connection created:", event.connection)
  })
  return session
}
export async function createSession(sessionId: any): Promise<string> {
  const data = { customSessionId: sessionId }
  try {
    const response = await axios.post(
      `https://viduk.swinglifestyle.com/openvidu/api/sessions`,
      JSON.stringify(data),
      {
        headers: {
          Authorization: `Basic ${Buffer.from(
            `${SLS_USERNAME}:${SLS_API_KEY}`
          ).toString("base64")}`,
        },
      }
    )
    console.log(response, "createSession")
    return response.data
  } catch (error) {
    console.error("Error retrieving sessions:", error)
    return ""
  }
}
export async function createToken(
  sessionId: string,
  data: any
): Promise<string> {
  console.log(sessionId, data)
  try {
    const response = await axios.post(
      `https://viduk.swinglifestyle.com/openvidu/api/sessions/${sessionId}/connection`,
      JSON.stringify(data.clientData),
      {
        headers: {
          Authorization: `Basic ${Buffer.from(
            `${SLS_USERNAME}:${SLS_API_KEY}`
          ).toString("base64")}`,
        },
      }
    )
    console.log(response.data, "createToken")
    return response.data
  } catch (error) {
    console.error("Error retrieving sessions:", error)
    return ""
  }
}
export async function getSession(sessionId: string): Promise<string> {
  try {
    const response = await axios.get(
      `https://viduk.swinglifestyle.com/openvidu/api/sessions/${sessionId}`,
      {
        headers: {
          Authorization: `Basic ${Buffer.from(
            `${SLS_USERNAME}:${SLS_API_KEY}`
          ).toString("base64")}`,
        },
      }
    )
    return response.data
  } catch (error) {
    console.error("Error retrieving sessions:", error)
    return ""
  }
}
export async function getToken(session: any, userData: any) {
  try {
    const response = await axios.post(
      `${process.env.SLS_VIDU_URL}/openvidu/api/sessions/${session.customSessionId}/connection`,
      userData,
      {
        headers: {
          Authorization: `Basic ${Buffer.from(
            `${SLS_USERNAME}:${SLS_API_KEY}`
          ).toString("base64")}`,
        },
      }
    )
    return response.data
  } catch (error) {
    console.error("Error retrieving sessions:", error)
    return ""
  }
}
export async function getViduSessions(): Promise<string> {
  try {
    const response = await axios.get(
      `${process.env.SLS_VIDU_URL}/openvidu/api/sessions`,
      {
        headers: {
          Authorization: `Basic ${Buffer.from(
            `${SLS_USERNAME}:${SLS_API_KEY}`
          ).toString("base64")}`,
        },
      }
    )
    const data = response.data
    return data
  } catch (error) {
    console.error("Error retrieving sessions:", error)
    return ""
  }
}
export async function getSLSSessions(): Promise<string> {
  try {
    const response = await axios.get(
      `${process.env.SLS_VIDU_URL}/openvidu/api/sessions`,
      {
        headers: {
          Authorization: `Basic ${Buffer.from(
            `${SLS_USERNAME}:${SLS_API_KEY}`
          ).toString("base64")}`,
        },
      }
    )
    const data = response.data
    return data
  } catch (error) {
    console.error("Error retrieving sessions:", error)
    return ""
  }
}
export async function getSLSSessionsIDConnections(
  sessionId: string
): Promise<string> {
  try {
    const response = await axios.get(
      `${process.env.SLS_VIDU_URL}/openvidu/api/sessions/${sessionId}/connection`,
      {
        headers: {
          Authorization: `Basic ${Buffer.from(
            `${SLS_USERNAME}:${SLS_API_KEY}`
          ).toString("base64")}`,
        },
      }
    )
    const data = response.data
    return data
  } catch (error) {
    console.error("Error retrieving session connections:", error)
    return ""
  }
}
