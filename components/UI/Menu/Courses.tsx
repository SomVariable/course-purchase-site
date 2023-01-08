import React from 'react'
import styles from './MenuIcon.module.css'

interface ICoursesIcon extends React.SVGProps<SVGSVGElement>{
    isActive?: boolean;
}

export function CoursesIcon({isActive = false} : ICoursesIcon): JSX.Element {
    return (
        <svg className={`${styles.menuIcon} ${isActive && styles.active}`} width="24" height="22" viewBox="0 0 24 22" fill="#787D85" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 11.892L5.67188 9.35095V11.1868C5.67188 13.1911 8.39236 14.7024 12 14.7024C15.6076 14.7024 18.3281 13.1911 18.3281 11.1868V9.35095L12 11.892Z" />
            <path d="M24 15.4055C24 14.4901 23.4104 13.7169 22.5938 13.4257V6.14159L24 5.56179L12 0.74707L0 5.56179L12 10.3766L21.1875 6.70624V13.4257C20.3708 13.7169 19.7812 14.4901 19.7812 15.4055C19.7812 16.2437 20.2762 16.9631 20.986 17.3031L19.8177 20.8081L21.1511 21.253L21.8906 19.0345L22.6301 21.253L23.9636 20.8081L22.7953 17.3031C23.505 16.9632 24 16.2437 24 15.4055Z"/>
        </svg>
    )
}
