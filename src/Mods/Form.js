import React from 'react';
import { v4 as uuidv4 } from "uuid";

export const Form = ({form, reviews, setForm, setReviews}) => {

    const handleChange = e => {  //e means event
        const {name, value} = e.target;
        setForm({...form, [name]: value }); //the [] are a computed property name that will take the name from the input below and set it equal to the value; same as set Form = form['book'] = typed things
    }

    const handleSubmit = e => {
        e.preventDefault(); //prevents default refresh with submission
        setReviews([...reviews, form]);
        setForm ({book: "", review: "", id: uuidv4() });
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

//need to create a function to keepp track of the state and what is being typed and update the state in real time