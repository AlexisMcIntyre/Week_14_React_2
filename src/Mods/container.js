import React from 'react';
import Book from './Book';
import Form from './Form';
import BookList from './BookReviewList';

let e = React.createElement;

export default class Container extends React.Component {
    render () {
        return e('div', {class:'container'},
            e(Book, {}, null),
            e(Form, {}, null),
            e(BookList, {}, null)
        );
    }
}