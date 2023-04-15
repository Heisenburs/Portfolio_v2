import React from "react";
import { Link } from "react-router-dom";
import Logo from "../components/Logo"
import "../styles/Navbar.css"
import ViewStreamIcon from '@mui/icons-material/ViewStream';
import { useState } from "react";


function NavBar() {
  const [expandNavbar, setExpandNavbar] = useState(false)
  return (
   <div className="navbar" id={expandNavbar ? "open" : "closed"}>
    <div className="toggleButton">
      <button onClick={() => {setExpandNavbar((prev) => !prev)}}>
        <ViewStreamIcon />
      </button>
    
   </div>

   <div className="links">
  
          <Link id="logolink" to="/" ><Logo /></Link>
          <Link to="/about" > .01 </Link>
          <Link to="/works" > .02 </Link>
          <Link to="/contact" > .03 </Link>
    </div>
</div>
  );
}

export default NavBar;

