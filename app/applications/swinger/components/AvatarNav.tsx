"use client"

import Image from "next/image"

import IconComponent from "@/components/icon/IconComponent"

interface AvatarProps {
  image?: string
  user?: any
  height?: number
  width?: number
}
const AvatarNav: React.FC<AvatarProps> = ({ image, user, height, width }) => {
  if (!image) {
    image = "/images/placeholder.jpg"
  }

  return (
    <>
      <div className="cursor-pointer flex flex-col items-center justify-center">
        {user && image ? (
          <Image
            className="rounded-full text-center mx-auto block hover:bg-white"
            src={image ? image : "/images/placeholder.jpg"}
            alt="Avatar"
            width={width}
            height={height}
          />
        ) : (
          <>
            <IconComponent
              size={34}
              iconName="user"
              class_name="border text-center mx-auto block text-gray-600 hover:bg-white border-gray-600 hover:border-gray-700 rounded-full p-1 transition"
            />
          </>
        )}
      </div>
    </>
  )
}

export default AvatarNav
