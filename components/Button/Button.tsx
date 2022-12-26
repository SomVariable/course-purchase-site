import React, { ReactNode } from 'react'
import cn from 'classnames'
import styles from './Button.module.css'

interface IButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
    appearance: "primary" | "secondary";
    children: ReactNode;
}

const Button = ({appearance, children, className, ...props}: IButtonProps) : JSX.Element => {
    return <button className = {cn(styles.button, className, {
        [styles.primary]: appearance == 'primary',
	    [styles.secondary]: appearance == 'secondary',
    })}
    {...props}
    >
        {children}
    </button>
}

export default Button