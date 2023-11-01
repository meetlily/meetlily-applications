import { ConnectionTypes } from "./openvidu"

// https://chatv.swinglifestyle.com/rooms/84?type=public&token=dTK6LOd93Mpdv1DP3sk4xfEQm7IGtYLD2
export interface RoomType {
  id: number
  default?: boolean
  session?: any
  name: string //"SLS Virtual Live Social"
  active: boolean
  type: string //"public"
  description: string //
  roomId: string // "487f7b22f68312d2c1bbc93b1aea445b"
  agreement: string //
  reset: boolean
  allowTranscoding: boolean
  recording: boolean
  recordingMode: string //"MANUAL"
  map_sessions: any
  analytics: any
  liveStream: boolean
  shortName: any
  created_at: string //"2023-01-11T23:56:06.259Z"
  updated_at: string //"2023-03-06T16:56:29.443Z"
  forceVideoCodec: string //"VP8" | "MEDIA_SERVER_PREFERRED"
  forcedVideoCodec: string // "MEDIA_SERVER_PREFERRED"
  defaultRecordingProperties?: {
    name: string //"Default Settings"
    hasAudio: boolean
    hasVideo: boolean
    outputMode: string //"COMPOSED"
    recordingLayout: string //"BEST_FIT"
    resolution: string //"1280x720"
    frameRate: number
    shmSize: number
  }
  connections?: ConnectionTypes[] | null
  connect?: ConnectionTypes[] | null
}
export interface Room {
  id: number
  name: string //"Saints and Sinners AC"
  active: boolean
  type: string // "club"
  description: string // "Lifestyle Night Club"
  roomId: string //"saints-and-sinners-ac"
  agreement: any
  reset: boolean
  map_sessions: any
  analytics: any
  liveStream: boolean
  shortName: string //
  created_at: string //"2022-06-03T17:55:49.508Z"
  updated_at: string //"2022-06-03T17:55:49.514Z"
  forceVideoCodec: any
  defaultRecordingProperties: any
  connections: []
}
