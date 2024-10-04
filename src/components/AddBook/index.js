import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid'; 

const AddBook = ({ addBook }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [rating, setRating] = useState("");
  const [description, setDescription] = useState("");
  const [publicationYear, setPublicationYear] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      id: uuidv4(), 
      title,
      author,
      genre,
      rating: parseFloat(rating),
      description,
      publication_year: parseInt(publicationYear),
    };
    addBook(newBook);
    // Clear the form fields
    setTitle("");
    setAuthor("");
    setGenre("");
    setRating("");
    setDescription("");
    setPublicationYear("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Book</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Genre"
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Rating (0-5)"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        required
        min="0"
        max="5"
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Publication Year"
        value={publicationYear}
        onChange={(e) => setPublicationYear(e.target.value)}
        required
      />
      <button type="submit">Add Book</button>
    </form>
  );
};

export default AddBook;
