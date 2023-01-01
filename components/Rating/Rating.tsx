import React, { KeyboardEvent, useEffect, useRef, useState } from 'react'
import JSXStyle from 'styled-jsx/style';
import StarIcon from '../UI/star/StarIcon';
import styles from './Rating.module.css';
import {IStarIcon} from '../UI/star/StarIcon'
import cn from 'classnames'

interface IRatingProp extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>{
    isEditable?: boolean;
    rating: number;
    setRating?: (rating: number) => void
}


export default function Rating({rating, isEditable, setRating, className, ...props}: IRatingProp) :JSX.Element {
    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(Array(5).fill(<></>))

    useEffect(() => {
        constructRating(rating)
    }, [rating])

    const constructRating = (rating: number) => {
        const newratingArray = ratingArray.map((el, index) => {
            return <span
            onMouseEnter={() => changeDispay(index + 1)}
            onMouseLeave={() => changeDispay(rating)}
            onClick={() => onClick(index + 1)}
            key = {index}
            
        ><StarIcon 
                    isActive = {index + 1 <= rating? true : false}
                    tabIndex = {isEditable? 0 : -1}
                    onKeyDown={(e: KeyboardEvent<SVGElement>) => isEditable && handleSpace(index + 1, e)}
            /></span>
        })

        setRatingArray(newratingArray);
    }

    const handleSpace = (i: number, e: KeyboardEvent<SVGElement>) => {
		if (e.code != 'Space' || !setRating) {
			return;
		}
		setRating(i);
	};

    const changeDispay = (i: number) => {
		if (!isEditable) {
			return;
		}
		constructRating(i);
	};

	const onClick = (i: number) => {    
		if (!isEditable || !setRating) {
			return;
		}
		setRating(i);
	};
	

    return (
        <span className={cn(styles.rating, className)} key = {Math.random()} {...props}>
            {ratingArray}
        </span>
    )
}