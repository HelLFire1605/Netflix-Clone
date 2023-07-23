import React, { useEffect, useState } from "react";
import "./Nav.css";
import {  useNavigate } from "react-router-dom";

function Nav() {
  const [show, handleShow] = useState(false);
  const history = useNavigate();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll",window);
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        onClick={() => history('/')}
        className="nav__logo"
        src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
        alt="Netflix -logo"
      />
      <img
        onClick={() => history('/profile') }
        className="nav__avatar"
        src="https://th.bing.com/th/id/OIP.M9sJUTCD2GNY_lmtj4iN4AHaHa?w=168&h=180&c=7&r=0&o=5&pid=1.7"
        alt="login__logo"
      />
    </div>
  );
}

export default Nav;
