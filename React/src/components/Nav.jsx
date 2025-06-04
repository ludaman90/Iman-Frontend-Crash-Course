import {Link} from "react-router-dom"

function Nav(){
return(
    <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/gallery">Gallery</Link>

        <Link to="/Users/ludaman">Ludaman</Link>
        <Link to="/Users/confe">Confe</Link>
        <Link to="/Users/opentu">Opentu</Link>
    </nav>
)
}

export default Nav