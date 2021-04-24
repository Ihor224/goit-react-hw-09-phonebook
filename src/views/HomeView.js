import React from 'react';
import s from './styles-views.module.css';

export default function HomeView() {
  return (
    <div className={s.home}>
      <h1>Welcome!</h1>
      <h2>Please register or login</h2>
    </div>
  );
}
