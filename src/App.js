import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Books from "./components/Books";
import AboutUs from "./components/AboutUs";
import Header from "./components/Header";
import BookDetails from "./components/BookDetails";
import "./App.css";

const App = () => {
  const bookList = [
    {
      id: "1",
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      genre: "Classic",
      rating: 4.7,
      description: "A novel set in the Jazz Age that explores themes of wealth, love, and the American Dream.",
      publication_year: 1925,
    },
    {
      id: "2",
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      genre: "Fiction",
      rating: 4.8,
      description: "A timeless novel of a child's moral awakening and a poignant tale of race and justice in the American South.",
      publication_year: 1960,
    },
    {
      id: "3",
      title: "1984",
      author: "George Orwell",
      genre: "Dystopian",
      rating: 4.6,
      description: "A dystopian social science fiction novel and cautionary tale about the dangers of totalitarianism.",
      publication_year: 1949,
    },
    {
      id: "4",
      title: "Pride and Prejudice",
      author: "Jane Austen",
      genre: "Romance",
      rating: 4.9,
      description: "A romantic novel that also serves as a social commentary on the British landed gentry of the early 19th century.",
      publication_year: 1813,
    },
    {
      id: "5",
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      genre: "Fiction",
      rating: 4.3,
      description: "A story about a young boy’s journey through the challenges of adolescence.",
      publication_year: 1951,
    },
    {
      id: "6",
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      genre: "Fantasy",
      rating: 4.8,
      description: "A fantasy novel about the adventures of Bilbo Baggins, a hobbit who embarks on an epic quest.",
      publication_year: 1937,
    },
    {
      id: "7",
      title: "Fahrenheit 451",
      author: "Ray Bradbury",
      genre: "Dystopian",
      rating: 4.5,
      description: "A dystopian novel about a future society where books are banned, and 'firemen' burn any that are found.",
      publication_year: 1953,
    },
    {
      id: "8",
      title: "The Alchemist",
      author: "Paulo Coelho",
      genre: "Adventure",
      rating: 4.6,
      description: "A philosophical story about a shepherd named Santiago who travels to find his personal legend.",
      publication_year: 1988,
    },
    {
      id: "9",
      title: "The Diary of a Young Girl",
      author: "Anne Frank",
      genre: "Biography",
      rating: 4.8,
      description: "The writings of a young Jewish girl hiding from the Nazis during World War II.",
      publication_year: 1947,
    },
    {
      id: "10",
      title: "Moby Dick",
      author: "Herman Melville",
      genre: "Adventure",
      rating: 4.0,
      description: "The narrative of Captain Ahab's obsessive quest to seek revenge on the giant white whale Moby Dick.",
      publication_year: 1851,
    },
  ];
  
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/book">
          <Books bookList={bookList} />
        </Route>
        <Route exact path="/aboutus" component={AboutUs} />
        <Route exact path="/book/:id">
          <BookDetails bookList={bookList} />
        </Route>
      </Switch>
    </>
  );
};

export default App;
