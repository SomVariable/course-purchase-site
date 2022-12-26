import React, { ReactNode } from 'react'
import style from './Header.module.css'

export const enum hTags{
  h1 = "h1",
  h2 = "h2", 
  h3 = "h3", 
  h4 = "h4", 
  h5 = "h5", 
  h6 = "h6", 
}

interface IHeaderProps{
    tag: hTags.h1 | hTags.h2 | hTags.h3,
    children: ReactNode
}


function Header({tag, children} : IHeaderProps) : JSX.Element{
  switch(tag){
    case hTags.h1: 
      return <h1 className={style.h1}>{children}</h1>
    case hTags.h2: 
      return <h2 className={style.h1}>{children}</h2>
    case hTags.h3: 
      return <h3 className={style.h1}>{children}</h3>
    default: 
      return <></>
  }
}

export default Header