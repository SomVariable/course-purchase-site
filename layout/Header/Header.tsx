import React, { DetailedHTMLProps, HTMLAttributes } from 'react'
import styles from './Header.module.css'

export interface SidebarProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> { }

function Header({className, ...props} : SidebarProps) :JSX.Element {
  return (
    <div className = {className} {...props}>
      Header
    </div>
  )
}

export default Header