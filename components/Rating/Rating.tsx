import React, { useEffect, useState } from 'react'
import JSXStyle from 'styled-jsx/style';
import StarIcon from '../UI/star/StarIcon';

interface IRatingProp extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    isEdtable?: boolean;
    rating: number;
    setRating?: (rating: number) => {}
}


export default function Rating({rating, isEdtable, setRating, className, ...props}: IRatingProp) :JSX.Element {
    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(Array(5).fill(<></>))

    useEffect(() => {
        constructRating(rating)
    }, [rating])

    const constructRating = (rating: number) => {
        const newratingArray = ratingArray.map((el, index) => {
            if(index + 1 <= rating){
                return  <StarIcon isActive = {true}/>
            }
            return <StarIcon isActive = {false}/>
        })

        setRatingArray(newratingArray);
    }
    return (
        <div className={className} {...props}>
           {ratingArray}
        </div>
    )
}
