import React, { useState } from 'react';
import Form from './Mods/Form';
import BookReviewList from './Mods/BookReviewList';
import { v4 as uuidv4 } from "uuid";
import Book from './Mods/Book';


function App() {
  const [reviews, setReviews] = useState([]); //Here the reviews array is created which is made up of Forms. The UseState hook accepts the reviews as the current state and updates this state with the method setReviews.
  const [form, setForm] = useState([{book: "", review: "", id: uuidv4() }]); //The form array is created here which is formatted of a book string, a review string, and an id that is automatically assigned by uuid.

  /*Below in the return, the App displays the Book, Form, and BookReviewList components. The Form and BookReviewList use props.*/

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