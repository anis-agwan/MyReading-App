import React from 'react'

const Book = ({ book, onClick }) => {
  if (!book) {
    return null;
  }

  const onUpdateShelf = (book, shelf) => {
    onClick(book, shelf);
  };

  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${
              book.imageLinks ? book.imageLinks.thumbnail : null
            })`,
          }}
        ></div>
        <div className="book-shelf-changer">
          <select
            onChange={(event) => onUpdateShelf(book, event.target.value)}
            defaultValue={book.shelf ? book.shelf : "none"}
          >
            <option value="move" disabled>
              Move to...
            </option>
            <option value="none">None</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="alreadyread">Read</option>
          </select>
        </div>
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">
      <ul>Author(s): {book.authors === undefined ? "None" : book.authors.map((author) => <li key={author} >{author}</li>)}</ul>
      </div>
    </div>
  );
};

export default Book;