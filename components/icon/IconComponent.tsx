"use client"

import { IconType } from "react-icons"
import { FaBan } from "react-icons/fa6"

import AppIcons from "./AppIcons"

interface IconComponentProps {
  iconName?: string
  size?: number
  class_name?: string
  color?: string
  icon?: IconType | null
}

const IconComponent: React.FC<IconComponentProps> = ({
  iconName,
  size,
  class_name,
  color,
  icon: CustomIcon,
}) => {
  if (!iconName) {
    iconName = "file"
  }

  const Icon = AppIcons[iconName]

  if (!size) {
    size = 18
  }
  if (!class_name) {
    class_name = "block mx-auto"
  }
  return (
    <>
      {Icon && !CustomIcon && (
        <div className={class_name}>
          <Icon size={size} color={color} />
        </div>
      )}
      {CustomIcon && (
        <div className={class_name}>
          <CustomIcon size={size} color={color} />
        </div>
      )}
      {!Icon && (
        <div className={`${class_name} text-neutral-500`}>
          <FaBan size={size} />
        </div>
      )}
    </>
  )
}

export default IconComponent
