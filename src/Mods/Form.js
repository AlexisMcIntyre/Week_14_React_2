import React from 'react';
import { v4 as uuidv4 } from "uuid"; //this assigns IDs to each review for record keeping

export const Form = ({form, reviews, setForm, setReviews}) => {

//handleChange takes the input from the user and uses setForm to spread the form array and add "book" and "review" to the form array.  The computed property name, [name] makes the code cleaner and more reuseable.

    const handleChange = e => {
        const {name, value} = e.target; 
        setForm({...form, [name]: value }); 
    }


//handleSubmit prevents default refreshes, then sets the reviews by spreading the reviews array and adding the form (populated by handleChange). Then the form is reset for a better user experience.
    const handleSubmit = e => {
        e.preventDefault();
        setReviews([...reviews, form]);
        setForm ({book: "", review: "", id: uuidv4() });
    }

//The form below accepts user input for a book and a review via handleChange. When the submit button is clicked, the handleSubmit method is run on the form.

    return (
        <form onSubmit={handleSubmit}>
            <h2>Leave a Review</h2>
            <label htmlFor="book">Book</label>
            <input 
                type="text"
                placeholder="Book Name" 
                id="book"
                name="book"
                value={form.book}
                autoComplete="off"
                onChange={handleChange}
                />
            <label htmlFor="review">Review</label>
            <textarea
                value={form.review}
                placeholder="Write Review Here!" 
                id="review"
                name="review"
                onChange={handleChange}
                />
                <button type="submit">Submit</button>
        </form>
    )
}

export default Form