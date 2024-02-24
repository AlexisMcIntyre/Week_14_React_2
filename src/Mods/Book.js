import React from 'react';
import book from "./book.jpg"

//The component below displays the book image, which is used in App.js.

export default class Book extends React.Component {    

    render () {
        return (
            
            <div className="book">
                <img className="bookpic" src={book}></img>
            </div>      
      
        )
    }
}