import React from "react";
import "./nav.css";

function Header() {
  return (
    <div className="navBar bg-dark">
      <div className="logo">
        <h3>
          Cus<span>TexT</span>
        </h3>
      </div>
      <div className="links">
        <a>💙</a>
      </div>
    </div>
  );
}

export default Header;
