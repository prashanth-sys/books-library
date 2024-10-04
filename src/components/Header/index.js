import {Link} from "react-router-dom"
import "./index.css" 

const Header = () => {
    return(
        <div className="bg-header">
                <img src="https://res.cloudinary.com/dlsuy2qn2/image/upload/v1727963044/download_1_o9vsst.png" alt="library" className="logo" />
                <h1 className="library-heading">Your's Library</h1>
            <ul className="list-items">
                <li className="list-1">
                    <Link className="link" to="/">Home</Link>
                </li> 
                <li className="list-2">
                    <Link className="link" to="/book">Books</Link>
                </li> 
                <li className="list-3">
                    <Link className="link" to="/aboutus">About Us</Link>
                </li>
            </ul>
        </div> 
    )
} 

export default Header