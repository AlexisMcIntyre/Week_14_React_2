import React from 'react';
import book from "./book.jpg"

export default class Book extends React.Component {    

    render () {
        return (
            
            <div className="book">
                <img className="bookpic" src={book}></img>
            </div>      
      
        )
    }
}