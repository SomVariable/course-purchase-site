import React, { ReactNode } from 'react'
import cn from 'classnames'
import styles from './Button.module.css'

interface IButtonProps{
    appearance: "primary" | "secondary";
    children: ReactNode;
}

const Button = ({appearance, children}: IButtonProps) : JSX.Element => {
    return <button className = {cn(styles.button, {
        [styles.primary]: appearance == 'primary',
	    [styles.secondary]: appearance == 'secondary',
    })}>
        {children}
    </button>
}

export default Button