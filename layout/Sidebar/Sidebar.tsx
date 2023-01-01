import React, { DetailedHTMLProps, HTMLAttributes } from 'react'
import styles from './Sidebar.module.css'

export interface SidebarProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> { }

function Sidebar({className, ...props} : SidebarProps) : JSX.Element {
  return (
    <div className = {className} {...props}>Sidebar</div>
  )
}

export default Sidebar