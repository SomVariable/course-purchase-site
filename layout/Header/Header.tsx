import React, { DetailedHTMLProps, HTMLAttributes } from 'react'
import styles from 'header.module.css'

export interface SidebarProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> { }

function Header({...props} : SidebarProps) :JSX.Element {
  return (
    <div className = {styles.header} {...props}>Header</div>
  )
}

export default Header