export interface SessionProps {
  id: string
  object: string
  sessionId: string
  createdAt: number
  recording: boolean
  mediaMode: string
  recordingMode: string // "MANUAL" | "AUTO"
  defaultRecordingProperties: {
    name: string
    hasAudio: boolean
    hasVideo: boolean
    outputMode: string
    recordingLayout: string //"BEST_FIT"
    resolution: string //"1280x720"
    frameRate: number
    shmSize: number
  }
  customSessionId: string
  forcedVideoCodec: string //"MEDIA_SERVER_PREFERRED"
  allowTranscoding: boolean
  connections: SessionsTypes
}
export interface SessionsTypes {
  numberOfElements: number | null
  content: SessionProps[]
}
export interface ConnectionTypes {
  numberOfElements: number | null
  content: ConnectionTypes[]
}
export interface Connection {
  type: string // "WEBRTC"
  data: string //"My Server Data"
  record: boolean
  role: string // "PUBLISHER"
  kurentoOptions: object
}
export interface ConnectionTypes {
  id: string
  object: string
  status: string //"active"
  connectionId: string
  sessionId: string
  createdAt: number
  activeAt: number
  location: string //"unknown"
  ip: string
  platform: string //"Chrome 118.0.0.0 on Windows 10 64-bit"
  token: string //"wss://viduk.swinglifestyle.com?sessionId=487f7b22f68312d2c1bbc93b1aea445b&token=tok_DCYFEtBBQNKzlVwX"
  type: string //"WEBRTC" | "IPCAM"
  record: boolean
  role: string //"PUBLISHER"|"SUBSCRIBER"
  kurentoOptions: any
  customIceServers: any[]
  rtspUri: any
  adaptativeBitrate: any
  onlyPlayWithSubscribers: any
  networkCache: any
  serverData: string //""
  clientData: string //'{"clientData":{"USERNAME":"bsbill623","USERID":60355644,"PICTURE":"https://www.swinglifestyle.com/_CDN/img/peeps/100_male.png","USERGROUPID":"487f7b22f68312d2c1bbc93b1aea445b","ROOMNAME":"SLS Virtual Live Social","publicKey":"d41d8cd98f00b204e9800998ecf8427e","USER_GENDER":"","GENDER1":1,"GENDER2":"","PRIVATE":false,"localSettings":{"camera":{"publishAudio":false,"publishVideo":true,"resolution":"640 x 480","frameRate":30,"insertMode":"APPEND","mirror":false},"general":{"soundNotification":false,"toggleWhisperOption":true,"textSize":"normal","defaultRoom":{"value":"487f7b22f68312d2c1bbc93b1aea445b"}}},"id":50696,"GENDER_DESC":false,"connectionId":"con_XHqgsdjnvt"},"publicKey":"d41d8cd98f00b204e9800998ecf8427e"}'
  publishers: any[] | null //
  subscribers: any[] | null
}
export interface ViduSessionTypes {
  mediaMode?: string //"ROUTED" | "RELAYED"
  recordingMode?: string //"MANUAL" | "ALWAYS"
  customSessionId?: string //"CUSTOM_SESSION_ID"
  forcedVideoCodec?: string // "VP8"
  allowTranscoding?: boolean
  defaultRecordingProperties?: any
  mediaNode?: any
}
