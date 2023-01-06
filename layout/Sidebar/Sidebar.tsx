import React, { DetailedHTMLProps, HTMLAttributes } from 'react'
import Menu from '../Menu/Menu'
import styles from './Sidebar.module.css'

export interface SidebarProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> { }

function Sidebar({className, ...props} : SidebarProps) : JSX.Element {
  return (
    <div className = {className} {...props}>
      <Menu />
    </div>
  )
}

export default Sidebar