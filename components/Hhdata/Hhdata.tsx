import React from 'react'
import { HhData } from '../../interfaces/page.interface'
import { Card } from '../Card/Card'
import DificultIcon from '../UI/dificultRatingIcon/DificultIcon'
import styles from './Hhdata.module.css'

export interface HhdataProps extends HhData {
}


export const Hhdata = ({count, juniorSalary, middleSalary, seniorSalary} : HhdataProps) => {
  return (
    <div className = {styles.hh}>
        <Card className={styles.count}>
				<div className={styles.title}>Всего вакансий</div>
				<div className={styles.countValue}>{count}</div>
			</Card>
			<Card className={styles.salary}>
				<div>
					<div className={styles.title}>Начальный</div>
					<div className={styles.salaryValue}>{juniorSalary}</div>
					<div className={styles.rate}>
						<DificultIcon className={styles.filled} />
						<DificultIcon />
						<DificultIcon />
					</div>
				</div>
				<div>
					<div className={styles.title}>Средний</div>
					<div className={styles.salaryValue}>{middleSalary}</div>
					<div className={styles.rate}>
						<DificultIcon className={styles.filled} />
						<DificultIcon className={styles.filled} />
						<DificultIcon />
					</div>
				</div>
				<div>
					<div className={styles.title}>Профессионал</div>
					<div className={styles.salaryValue}>{seniorSalary}</div>
					<div className={styles.rate}>
						<DificultIcon className={styles.filled} />
						<DificultIcon className={styles.filled} />
						<DificultIcon className={styles.filled} />
					</div>
				</div>
			</Card>
    </div>
  )
}

