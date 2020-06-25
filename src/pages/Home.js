import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import BookShelf from '../components/BookShelf';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: []
        }
    }

    searchHandler = (books, shelf) => {
        return books.filter((book) => book.shelf === shelf);
    }

    organizeBookShelf = (book, shelf) => {
        this.props.updateBookHandler(book, shelf);
    }

    render() {
        const { books } = this.props;
        console.log(books)
        if (!books || books.length === 0) {
            return null;
        }
        return (
          <div>
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                <div>
                  <div className="bookshelf">
                    <h2 className="bookshelf-title">Currently Reading</h2>
                    <div className="bookshelf-books">
                      <BookShelf
                        books={this.searchHandler(books, "currentlyReading")}
                        onClick={this.organizeBookShelf}
                      />
                    </div>
                  </div>
                  <div className="bookshelf">
                    <h2 className="bookshelf-title">Want to Read</h2>
                    <div className="bookshelf-books">
                      <BookShelf
                        books={this.searchHandler(books, "wantToRead")}
                        onClick={this.organizeBookShelf}
                      />
                    </div>
                  </div>
                  <div className="bookshelf">
                    <h2 className="bookshelf-title">Read</h2>
                    <div className="bookshelf-books">
                      <BookShelf
                        books={this.searchHandler(books, "alreadyread")}
                        onClick={this.organizeBookShelf}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="open-search">
                <Link to="/search">
                  <button>Add a book</button>
                </Link>
              </div>
            </div>
          </div>
        );
    }
}

export default Home;