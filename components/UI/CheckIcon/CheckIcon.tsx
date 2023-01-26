import React from 'react'
import icon from './CheckIcon.png'

export const CheckIcon = ({className}: React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>) => {
  return (
    <img className = {className}src={icon.src} height = "50px" width = "50px"/>
  )
}
