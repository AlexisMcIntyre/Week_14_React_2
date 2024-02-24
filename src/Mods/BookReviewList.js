import React from 'react';
import ReviewItem from './ReviewItem';


//The BookReviewList module diplays reviews, if there are any, using the "map" method. It pulls any reviews from the reviews array and lists them out using "map". Each time it maps a review, it is placed into the ReviewItem component, which creates a list of ReviewItems.

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