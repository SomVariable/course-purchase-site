import React, { ReactNode } from 'react'
import cn from 'classnames'
import styles from './Button.module.css'
import ArrowIcon, { arrowDir } from '../UI/Arrow/ArrowIcon';



interface IButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
    appearance: "primary" | "secondary";
    children: ReactNode;
    arrowDirection?: arrowDir.right| arrowDir.left | arrowDir.up | arrowDir.down | "none";
}

const Button = ({appearance, arrowDirection = "none", children, className, ...props}: IButtonProps) : JSX.Element => {
    return <button className = {cn(styles.button, className, {
        [styles.primary]: appearance == 'primary',
	    [styles.secondary]: appearance == 'secondary',
    })}
    {...props}
    >
        {children}
        <ArrowIcon arrowDirection = {arrowDirection}/>
    </button>
}

export default Button