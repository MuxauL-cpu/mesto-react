import React from "react";
import logo from '../images/mesto_logo.svg';

function Header() {
  return(
    <header className="header">
      <img src={logo} className="header__logo" alt="Mesto лого" />
    </header>
  );
}

export default Header;