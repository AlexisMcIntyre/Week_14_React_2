import React from "react";

const ReviewItem = ({review}) => {
    return (
        <div className="review">
            <h3>{review.book}</h3>
            <p>{review.review}</p>
        </div>
    )
}

export default ReviewItem;