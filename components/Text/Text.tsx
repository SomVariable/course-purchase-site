import React from 'react'
import cn from 'classnames'
import styles from './Text.module.css';

export const enum textT {
  small = "small",
  medium = "medium",
  big = "big",
}

interface IText extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
  textType?: textT.big | textT.medium | textT.small
}

export default function Text({ textType = textT.small, className, children, ...props }: IText): JSX.Element {
  return (
    <p className={cn(styles.text, className, {
      [styles.small]: textType == "small",
      [styles.medium]: textType == "medium",
      [styles.big]: textType == "big",
    })} {...props}>{children}</p>
  )
}
