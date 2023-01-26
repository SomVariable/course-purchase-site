import React from 'react'
import { TopPageAdvantage } from '../../interfaces/page.interface'
import { CheckIcon } from '../UI/CheckIcon/CheckIcon'
import styles from './Advantages.module.css'
import cn from 'classnames'

export interface IAdvantagesProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    advantages: TopPageAdvantage[]
} 

export const Advantages = ({advantages, className}: IAdvantagesProps) => {
  return (
    <>
        {advantages.map(advantage => (
            <div className = {cn(styles.advanteges, className)} key = {advantage._id}>
                <CheckIcon className = {styles.icon}/>
                <div className = {styles.title}>{advantage.title}</div>
                <hr className={styles.vline} />
                <div className = {styles.description}>{advantage.description}</div>
            </div>
        ))}   
    </>
  )
}
