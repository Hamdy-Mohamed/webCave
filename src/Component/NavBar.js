import React, { useState } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  let reloadEvent = () => {
    window.location.reload();
  };

  return (
    <nav className="navbar">
      <button className="contactUs">تواصل معنا</button>
      <div className="mobile-menu">
        <button className="mobile-menu-button" onClick={toggleMobileMenu}>
          &#9776;
        </button>
        <ul className={`nav-list ${mobileMenuOpen ? "active" : ""}`}>
          <li>
            <Link className="Link" to="/">
              الرئيسية
            </Link>
          </li>
          <li>
            <Link className="Link" to="/AboutUs">
              من نحن
            </Link>
          </li>
          <li>
            <Link className="Link" to="#">
              البرمجة والتصميم
            </Link>
          </li>
          <li>
            <Link className="Link" to="#">
              التسويق الالكترونى
            </Link>
          </li>
          <li>
            <Link className="Link" to="#">
              عملائنا
            </Link>
          </li>
          <li>
            <Link className="Link" to="#">
              سابقة الاعمال
            </Link>
          </li>
        </ul>
      </div>
      <img
        onClick={reloadEvent}
        className="logo"
        src="https://webcave.b-cdn.net/wp-content/uploads/2022/05/logo-webcave.png.webp"
        alt="logo"
      />
    </nav>
  );
}

export default NavBar;
