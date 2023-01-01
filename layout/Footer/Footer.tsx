import React from 'react'
import styles from './Footer.module.css'

interface IFooterProp extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
  children?: React.ReactNode;
}

function Footer({className, ...props} : IFooterProp) : JSX.Element {
  return (
    <div className = {className}>Footer</div>
  )
}

export default Footer