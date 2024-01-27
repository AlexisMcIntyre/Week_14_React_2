import React from "react";

const ReviewItem = ({review}) => {
    return (
        <div>
            <h2>{review.book}</h2>
            <h2>{review.review}</h2>
        </div>
    )
}

export default ReviewItem;