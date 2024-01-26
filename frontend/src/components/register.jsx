import React, { useState } from 'react';
import { Link } from "react-router-dom";

const Register = ({ onRegister }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleRegEmail(e) {
    setEmail(e.target.value);
  }
  function handleRegPassword(e) {
    setPassword(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
   onRegister({email, password});
  };

  return (
    <div className='authorization'>
      <h2 className='authorization__title'>Регистрация</h2>
      <form className='authorization__form' onSubmit={handleSubmit}>
        <label className='authorization__label'>
          <input className='authorization__input' type="email" value={email} placeholder="Email" required onChange={handleRegEmail} />
          <input className='authorization__input' type="password" value={password} placeholder="Пароль" required onChange={handleRegPassword} />
        </label>
        <button className='authorization__submit' type="submit">Зарегестрироваться</button>
      </form>
      <Link to="/sign-in" className="authorization__link">Уже зарегистрированы? Войти</Link>
    </div>
  );
};

export default Register;
