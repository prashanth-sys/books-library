import { Component } from "react"; 
import { Link } from "react-router-dom";
import "./index.css"; 

class Books extends Component {
    state = {
        searchItem:""
    }

    onChangeSearchBook = event => {
        this.setState({searchItem:event.target.value})
    }

    render() {
    const { bookList } = this.props;
    const {searchItem} = this.state 
    const filteredBookList = bookList.filter(eachItem => 
        eachItem.title.toLowerCase().includes(searchItem.toLowerCase())
    ); 


    return (
      <div className="book-bg-container">
        <div className="input-container">
            <input type="search" className="input" placeholder="Search" value={searchItem} onChange={this.onChangeSearchBook} /> 
            <button type="button" className="add-button">Add Book</button>
        </div>
        <h1 className="books-heading">Here, Your Collection</h1>
        <ul className="list-of-books">
          {filteredBookList.map(eachBook => (
            <Link to={`/book/${eachBook.id}`} key={eachBook.id} className="list-button">
              <li className="book-list">
                <h1 className="title">Title: {eachBook.title}</h1>
                <p className="rating">Rating: {eachBook.rating}</p>
                <p className="author">Author: {eachBook.author}</p>
              </li>
            </Link>
          ))}
        </ul>

        <Link to="/" className="link">
         <button className="book-back-button" type="button">Back</button></Link>
      </div>
    );
  }
}

export default Books;
