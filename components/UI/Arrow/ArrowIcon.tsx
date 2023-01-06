import React from 'react'
import cn from 'classnames'
import arrowIcon from './Arrow.svg'

import styles from './ArrowIcon.module.css'

export const enum arrowDir{
    right = "right",
    left = "left",
    down = "down",  
    up = "up",
}

interface IArrowIcon extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>{
    arrowDirection?: arrowDir.right| arrowDir.left | arrowDir.up | arrowDir.down | "none";
}

export default function ArrowIcon({arrowDirection = 'none'} : IArrowIcon) {
  return (
    <>
        {arrowDirection !== "none" && <span className = {cn(styles.arrow, {
            [styles.down]: arrowDirection == arrowDir.down,
            [styles.left]: arrowDirection == arrowDir.left,
            [styles.right]: arrowDirection == arrowDir.right,
            [styles.up]: arrowDirection == arrowDir.up,
        })}>    
            <img src={arrowIcon.src} alt="arrow" />
        </span>}
    </>
  )
}
