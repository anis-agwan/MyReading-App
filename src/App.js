import React from 'react'
// import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom';

import * as BooksAPI from './BooksAPI';
import Home from './pages/Home';
import Search from './pages/Search';
import './App.css';

class BooksApp extends React.Component {
  state = {
    books: []
    }
    componentDidMount() {
      this.getAllBooks();
    }
  
    getAllBooks = async () => {
      const books = await BooksAPI.getAll();
      this.setState(() => ({ books }));
    }

    updateBookHandler = async (book, shelf) => {
      await BooksAPI.update(book, shelf);
      this.getAllBooks();
    }
  
    searchHandler = async (term) => {
      const books = await BooksAPI.search(term);
      this.setState(() => ({ books }));
    }
  


  render() {
    return (
      <div className="app">
      <Route
        exact
        path="/"
        render={() => (
          <Home
            books={this.state.books}
            updateBookHandler={this.updateBookHandler}
          />
        )}
      />

      <Route
        path="/search"
        render={({ history }) => (
          <Search
            books={this.state.books}
            searchHandler={this.searchHandler}
            updateBookHandler={this.updateBookHandler}
            backToHome={() => {
              this.getAllBooks();
              history.push("/");
            }}
          />
        )}
      />
    </div>
      );
  }
}

export default BooksApp
