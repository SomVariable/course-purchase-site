import React from 'react'
import { TopPageAdvantage } from '../../interfaces/page.interface'
import { CheckIcon } from '../UI/CheckIcon/CheckIcon'
import styels from './Advantages.module.css'

export interface IAdvantagesProps{
    advantages: TopPageAdvantage[]
} 

export const Advantages = ({advantages}: IAdvantagesProps) => {
  return (
    <>
        {advantages.map(advantage => (
            <div className = {styels.advanteges} key = {advantage._id}>
                <CheckIcon />
                <div className = {styels.title}>{advantage.title}</div>
                <div className="">
                    <hr className = {styels.vline}/>
                </div>
                <div>{advantage.description}</div>
            </div>
        ))}   
    </>
  )
}
