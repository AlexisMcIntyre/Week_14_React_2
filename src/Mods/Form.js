import React from 'react';
import { v4 as uuidv4 } from "uuid"; //this assigns IDs to each review for record keeping

//The main purpose of the form component is to create a function to keep track of the state and update the state in real time (update state with user input). It exports the constants form and reviews with the setForm and setReviews methods associated with them.

export const Form = ({form, reviews, setForm, setReviews}) => {

    const handleSubmit = e => { //e is an event
        e.preventDefault(); //This prevents default refresh with submission
        setReviews([...reviews, form]); //This adds the form input to the reviews that are used in the BookReviewList component. The click of the submit button is connected to the form element so the input taken from the user adds to the reviews upon clicking the submit button.
        setForm ({book: "", review: "", id: uuidv4() }); //This resets the form for a better user experience
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Leave a Review</h2>
            <label htmlFor="book">Book</label>
            <input 
                type="text"
                placeholder="Book Name" 
                id="book"
                name="book"
                value={form.book} //props
                autoComplete="off"
                />
            <label htmlFor="review">Review</label>
            <textarea
                value={form.review} //props
                placeholder="Write Review Here!" 
                id="review"
                name="review"
                />
                <button type="submit">Submit</button>
        </form>
    )
}

export default Form