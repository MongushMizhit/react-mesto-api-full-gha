import React, { useState } from 'react';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleEmailChange(e) {
    setEmail(e.target.value);
}
function handlePasswordChange(e) {
    setPassword(e.target.value);
}

  const handleSubmit = (e) => {
    e.preventDefault();
    
    onLogin({email, password})
  };

  return (
    <div className='authorization'>
      <h2 className='authorization__title'>Вход</h2>
      <form className='authorization__form' onSubmit={handleSubmit}>
        <label className='authorization__label'>
          <input className='authorization__input' type="email" value={email} placeholder="Email" required onChange={handleEmailChange} />
          <input className='authorization__input' type="password" value={password} placeholder="Пароль" required onChange={handlePasswordChange} />
        </label>
        <button className='authorization__submit' type="submit">Войти</button>
      </form>
    </div>
  );
};

export default Login;
