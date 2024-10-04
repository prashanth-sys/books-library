import React from "react";
import { useParams, Link} from "react-router-dom";
import "./index.css"

const BookDetails = ({ bookList }) => {
  const { id } = useParams(); // Get the book ID from the URL parameters

  // Find the book details using the ID
  const book = bookList.find((book) => book.id === id); // Compare as strings

  // Handle case where book is not found
  if (!book) {
    return <div>Book not found</div>;
  }

  return (
    <div>
    <div className="detailed-book-list">
      <h2 className="heading">{book.title}</h2>
      <p className="book-author"><strong>Author:</strong> {book.author}</p>
      <p className="book-genre"><strong>Genre:</strong> {book.genre}</p>
      <p className="book-rating"><strong>Rating:</strong> {book.rating}</p>
      <p className="book-description"><strong>Description:</strong> {book.description}</p>
      <p className="book-publication"><strong>Publication Year:</strong> {book.publication_year}</p>
    </div> 
    <Link to="/book" className="link">
    <button className="back-button" type="button">Back</button></Link>
    </div>
  );
};

export default BookDetails;
