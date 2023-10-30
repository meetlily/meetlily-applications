import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { buttonVariants } from "@/registry/new-york/ui/button"
import { signOut } from "next-auth/react"

import { cn } from "@/lib/utils"

import getCurrentUser from "../actions/getCurrentUser"

export const metadata: Metadata = {
  title: "Authentication",
  description: "Authentication forms built using the components.",
}

export default async function AuthenticationPage() {
  return await signOut()
}
