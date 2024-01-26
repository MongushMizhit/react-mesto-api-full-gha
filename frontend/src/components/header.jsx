import React from 'react';
import headerImage from '../images/header-logo.svg';
import { Link, Routes, Route } from "react-router-dom";

function Header(props) {
  const { loggedIn, isProfileEmail, logOut } = props;

  return (
    <header className="header">
      <img className="header__logo" src={headerImage} alt="Лого" />
      <div className='header__auth'>
      {loggedIn && <p className="header__email">{isProfileEmail}</p>}
        <Routes>
          <Route 
            path="/react-mesto-auth"
            element={
              <Link className='header__link' to="/sign-in">Войти</Link>
            } />
          <Route
            path="/sign-up"
            element={
              <Link className='header__link' to="/sign-in">Войти</Link>
            }/> 
          <Route
            path="/sign-in"
            element={
              <Link className='header__link' to="/sign-up">Регистрация</Link>
            }/> 
        </Routes>
        {loggedIn && (<button className="header__link header__exit" onClick={logOut}>Выйти</button>)}
      </div>
    </header>
  );
}

export default Header;
