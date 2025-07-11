import { Link } from "react-router-dom"
import "../CSS/NavBar.css"

function NavBar(){
    return<nav className="navbar">
        <div className="navbar-brand">
            <Link to = "/">Picture-App</Link>
        </div>
        <div className="navbar-links">
            <Link to = "/" className="nav-Link">Home</Link>
            <Link to = "/favorites" className="nav-Link">Favorites</Link>
        </div>
    </nav>
}
export default NavBar