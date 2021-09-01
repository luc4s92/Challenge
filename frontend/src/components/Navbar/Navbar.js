import React, {  useState } from 'react'

import './Navbar.css'

//class Navbar extends Component {
   
//}

function Navbar({brand}){
    const [showlinks, setShowLinks] = useState(false)    
    
        return (
            <nav className="NavbarItems">
                <h1 className="navbar-logo">{brand} <i className="fas fa-wallet"></i></h1>
                <div className="menu">
                    <ul className="nav-links" id={showlinks ? "hidden" : ""} >
                        
                        <li><a href="/#">Home</a></li>
                        <li><a href="/#">Feedback</a></li>
                        <li><a href="/#">About Us</a></li>
                        <li><a href="/#">Contact</a></li>
                        
                    </ul>
                    <button onClick={()=> setShowLinks(!showlinks)} className="menu-mobile">
                    <i className={showlinks ? "fas fa-times" : "fas fa-bars"}></i>
                    </button>
                </div>
            </nav>
        )
    
}



export default  Navbar ;