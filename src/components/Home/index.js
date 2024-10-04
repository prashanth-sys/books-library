import { Component } from "react";
import {Link} from "react-router-dom" 
//import Header from "../Header";
import "./index.css";  

class Home extends Component {  
  render() {
    return (
            <div className="bg-container">  
                <div className="home-content-container">
                    <h1 className="main-heading">Welcome to Our Library!</h1> 
                    <p className="library-description">Discover a world of knowledge and adventure at our Library Management System. Our platform is designed to provide an enriching experience for book lovers, students, and researchers alike. Whether you're looking for your next great read or seeking valuable resources for your studies, you’ve come to the right place.</p> 
                    <span className="span">Here, is the small collection of Books Library</span>
                    <div className="button-container">
                      <Link to="/book"><button className="start-button" type="button">Start</button> </Link>
                      <Link to="/book"><button className="explore-button" type="button">Explore</button></Link>
                    </div> 
                </div> 
            </div>
    );
  }
}

export default Home;