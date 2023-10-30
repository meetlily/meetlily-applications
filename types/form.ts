import { Default, Module, Organization, Role, User } from "@prisma/client"

export type SafeUser = Omit<
  User,
  "createdAt" | "updatedAt" | "emailVerified" | "image"
> & {
  name: string | null
  createdAt: string
  updatedAt: string
  emailVerified?: string | null
  image?: string | null
  Role?: Role[]
  Organization?: Organization[]
  Module?: Module[]
  Default?: any
}
