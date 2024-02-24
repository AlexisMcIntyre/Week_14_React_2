import React, { useState } from 'react';
import Form from './Mods/Form';
import BookReviewList from './Mods/BookReviewList';
import './App.css';
import { v4 as uuidv4 } from "uuid";
import Book from './Mods/Book';


function App() {
  const [reviews, setReviews] = useState([]);
  const [form, setForm] = useState([{book: "", review: "", id: uuidv4() }]); //setForm is state hook

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
