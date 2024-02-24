import React, { useState } from 'react';
import Form from './Mods/Form';
import BookReviewList from './Mods/BookReviewList';
import { v4 as uuidv4 } from "uuid";
import Book from './Mods/Book';


function App() {
  const [reviews, setReviews] = useState([]); //here is the UseState hook that accepts the reviews as the current state and updates this stte with the method setReviews
  const [form, setForm] = useState([{book: "", review: "", id: uuidv4() }]); //useState hook is used again to reset the values inside of the form to the initial state of an empty string

  /*Below in the return, the App displays the Book, Form, and BookReviewList components. The Form component has the props form, reviews, setForm, and setReviews passed in fromt he Form component. BookReviewList also has the reviews passed in via props.*/
  return ( 
    <div className="App">
     <h1>Book Reviews</h1>
     <Book />
     <Form form={form} reviews={reviews} setForm={setForm} setReviews={setReviews} />
     <BookReviewList reviews={reviews} />
    </div> 
  );
}

export default App;
