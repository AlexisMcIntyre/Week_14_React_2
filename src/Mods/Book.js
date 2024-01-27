import React from 'react';


let test = ['dune','chichi'];



export default class Book extends React.Component {    

    render () {
        return (
            
            <div className="book">
                <h1>Title:</h1>
                <p>{test[1]}</p>
            </div>      
      
        )
    }
}