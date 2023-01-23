import React from 'react'
import styles from './Card.module.css'
import cn from 'classnames'

export interface ICardProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    color?: 'white' | 'blue'
}

export const Card = ({color = 'white', className, children} : ICardProps) => {
  return (
    <div className = {cn(styles.card, className, {
        [styles.blue]: color == 'blue'
    })}>
        {children}
    </div>
  )
}