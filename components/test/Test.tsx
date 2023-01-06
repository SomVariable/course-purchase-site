import React, { useState } from 'react'
import Rating from '../Rating/Rating';

function Test() {
    const [rating, setRating] = useState<number>(3);


  return (
    <div>
        <div style = {{color: "white"}}>
            {rating}
        </div>
        
        <button  onClick={() =>  setRating(rating)}>sdsadasd</button>
        {/* <Rating rating={rating} setRating={() => _setRating} isEditable={true} /> */}
    </div>
  )
}

export default Test