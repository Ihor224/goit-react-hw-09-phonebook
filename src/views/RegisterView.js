import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../redux/auth';
import s from './styles-views.module.css';

export default function RegisterView() {
  const dispatch = useDispatch();
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = useCallback(event => {
    const { name, value } = event.target;
    switch (name) {
      case 'userName':
        setUserName(value);
        break;

      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;

      default:
        console.warn(`Тип ${name} не обрабатывается!`);
    }
  }, []);

  const handleSubmit = useCallback(
    event => {
      event.preventDefault();

      dispatch(authOperations.register);
      setUserName('');
      setEmail('');
      setPassword('');
    },
    [dispatch],
  );

  return (
    <div>
      <h1>Register page</h1>

      <form onSubmit={handleSubmit} autoComplete="off" className={s.form}>
        <label>
          Name
          <input
            type="text"
            name="userName"
            value={userName}
            onChange={handleChange}
          />
        </label>

        <label>
          Email
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>

        <label>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>

        <button
          type="submit"
          className={s.btn}
          disabled={!userName || !email || !password}
        >
          Register
        </button>
      </form>
    </div>
  );
}
