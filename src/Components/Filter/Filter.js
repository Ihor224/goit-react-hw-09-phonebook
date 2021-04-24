import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { itemsSelectors, changeFilter } from '../../redux/contacts';
import s from './Filter.module.css';

export default function Filter() {
  const value = useSelector(itemsSelectors.getFilter);

  const dispatch = useDispatch();
  const onChange = event => dispatch(changeFilter(event.currentTarget.value));
  return (
    <label>
      Find contacts by name
      <input
        type="text"
        value={value}
        onChange={onChange}
        className={s.input}
      />
    </label>
  );
}
