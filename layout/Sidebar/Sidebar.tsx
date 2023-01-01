import React, { DetailedHTMLProps, HTMLAttributes } from 'react'
import styles from './Sidebar.module.css'

export interface SidebarProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> { }

function Sidebar({...props} : SidebarProps) : JSX.Element {
  return (
    <div className = {styles.sidebar} {...props}>Sidebar</div>
  )
}

export default Sidebar