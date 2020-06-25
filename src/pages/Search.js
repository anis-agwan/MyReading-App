import React, { Component } from 'react';
import BookShelf from '../components/BookShelf';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchQuery: ''
        }
        this.onQueryChange = this.onQueryChange.bind(this);
    }

    onQueryChange = (term) => {
            this.setState(() => ({
                searchQuery: term.trim()
            }))
        this.props.searchHandler(term.trim());
    }

    organizeBookShelf = (book, shelf) => {
        this.props.updateBookHandler(book, shelf);
    }

    render() {
        const {books, backToHome} =this.props;
        return (
          <div className="search-books">
            <div className="search-books-bar">
              <button className="close-search" onClick={backToHome}>
                Close
              </button>

              <div className="search-books-input-wrapper">
                <input
                  type="text"
                  placeholder="Search for books by title or author"
                  onChange={(event) => this.onQueryChange(event.target.value)}
                />
              </div>
            </div>
            <div className="search-books-results">
              <BookShelf books={books} onClick={this.organizeBookShelf} />
            </div>
          </div>
        );
    }
}

export default Search;