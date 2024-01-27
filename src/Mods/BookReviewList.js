import React from 'react';
import ReviewItem from './ReviewItem';

const BookReviewList = ({reviews}) => {  
    return (
      <div>
        <h2>Review</h2>
        {
            reviews.map((review) => 
                <ReviewItem review={review}/>
            )
        }
      </div>
    );
  };

  export default BookReviewList;