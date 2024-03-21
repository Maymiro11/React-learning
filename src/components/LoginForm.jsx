import React from 'react';
import useId from './UseId'; // Передбачається, що ваш файл з кастомним хуком називається useId.js

const LoginForm = () => {
  const loginId = useId();
  const passwordId = useId();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Отримайте дані форми та передайте їх через колбек-функцію onLogin
    const { login, password } = event.target.elements;
    const userData = {
      login: login.value,
      password: password.value,
    };
    onLogin(userData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor={loginId}>Login</label>
      <input type="text" name="login" id={loginId} />

      <label htmlFor={passwordId}>Password</label>
      <input type="password" name="password" id={passwordId} />

      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
