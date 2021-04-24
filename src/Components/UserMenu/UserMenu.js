import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import s from './UserMenu.module.css';

export default function UserMenu() {
  const name = useSelector(authSelectors.getUserName);

  const dispatch = useDispatch();
  const onLogout = useCallback(() => {
    dispatch(authOperations.logout());
  }, [dispatch]);

  return (
    <div>
      <span>Welcome, {name}</span>
      <button className={s.btn} type="button" onClick={onLogout}>
        Logout
      </button>
    </div>
  );
}
