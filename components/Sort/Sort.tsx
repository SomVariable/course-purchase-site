import React from 'react'
import styles from './Sort.module.css'

const enum SortEnum{
    Rating,
	Price
}

export interface ISortProps{
	sort: SortEnum,
	setSort: (sort: SortEnum) => void
}

export const Sort = () => {
  return (
    <div>
        sort
    </div>
  )
}
