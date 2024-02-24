import React from "react";


//The ReviewItem module accepts reviews via props and displays them in the return. This component is used as a part of BookReviewList. The properties book and review are displayed.

const ReviewItem = ({review}) => {
    return (
        <div className="review">
            <h3>{review.book}</h3>
            <p>{review.review}</p>
        </div>
    )
}

export default ReviewItem;