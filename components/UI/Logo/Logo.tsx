import React from 'react'
import logo from './Logo.png'
import styles from './Logo.module.css'

function LogoIcon() {
  return (
    <picture className = {styles.logo}>
        <source src = {logo.src}/>
        <img src = {logo.src} alt="logo" width = "150px" height="40px"/>
    </picture>
  )
}

export default LogoIcon