import React from "react";
import "./Header.css";

export const Header = () => {
  return (
    <header className={`header`}>
      <span className="header__logo">ThemeProvider</span>
      <button className="button header__theme-button">Theme</button>
    </header>
  );
};
