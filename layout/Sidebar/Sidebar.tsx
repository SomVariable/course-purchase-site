import React, { DetailedHTMLProps, HTMLAttributes } from 'react'
import LogoIcon from '../../components/UI/Logo/Logo'
import Menu from '../Menu/Menu'
import styles from './Sidebar.module.css'
import cn from 'classnames'

export interface SidebarProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> { }

function Sidebar({className, ...props} : SidebarProps) : JSX.Element {
  return (
    <div className = {cn(styles.sidebar, className)} {...props}>
      <LogoIcon />
      <div className="">search</div>
      <Menu />
    </div>
  )
}

export default Sidebar