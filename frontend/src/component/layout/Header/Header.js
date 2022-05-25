import React from "react";
import { Link } from "react-router-dom"
import { IoMdSearch } from "react-icons/io"
import { CgProfile } from "react-icons/cg"
import { BiLogInCircle } from "react-icons/all"

const Header = () => {
  return (
    <nav>
      <div className="title"><Link to="/">Artoftri</Link></div>
      <ul>
        <div className="items">
          <li><Link className="itemsFont" to="/">HOME</Link></li>
          <li><Link to="/products">PRODUCTS</Link></li>
          <li><Link to="/custom">CUSTOMIZATION</Link></li>
          <li><Link to="/About">ABOUT</Link></li>
        </div>
        <li className="icons">
          <span><Link to="/search"><IoMdSearch size={40} /></Link></span>
          <span><Link to="/account"><CgProfile size={40} /></Link></span>
          <span><Link to="/login"><BiLogInCircle size={40} /></Link></span>
        </li>
      </ul>
    </nav>
  )
};

export default Header;
