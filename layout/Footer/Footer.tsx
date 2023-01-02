import React from 'react'
import styles from './Footer.module.css'
import fn from 'classnames'
import { format } from 'date-fns';
interface IFooterProp extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
  children?: React.ReactNode;
}

function Footer({className, ...props} : IFooterProp) : JSX.Element {
  return (
    <div className = {fn(styles.footer, className)}>
      <div className="">
        OwlTop © 2020 - {format(new Date(), 'yyyy')} Все права защищены
      </div>
      
      <div className={styles.links}>
        <a href="#">Пользовательское соглашение</a>
        <a href="#">Политика конфиденциальности</a>
      </div>
      
    </div>
  )
}

export default Footer