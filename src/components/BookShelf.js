import React, { Component } from 'react'
import Book from './Book'

class BookShelf extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: []
        }
    }
    
    mapBooks = (books) => {
        if (!books || books.length === 0 || books.error) {
            return (
                <div>
                    <h3>Can't find the book, Try with a different query</h3>
                </div>
            )
        }
        return (
          <ol className="books-grid">
            {books.map(book => {
                return (
                  <li key={book.id}>
                    <Book
                      book={book}
                      onClick={this.props.onClick}
                    />
                  </li>
                );
            })}
          </ol>
        );
    } 

    render() {
        const { books } = this.props;
        return <div>{this.mapBooks(books)}</div>;
    }
}

export default BookShelf;