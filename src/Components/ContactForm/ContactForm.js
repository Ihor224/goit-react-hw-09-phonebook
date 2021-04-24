import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { itemsOperations } from '../../redux/contacts';
import s from './ContactForm.module.css';

export default function ContactForm() {
  const dispatch = useDispatch();
  const [contactName, setContactName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = useCallback(event => {
    const { name, value } = event.target;
    switch (name) {
      case 'contactName':
        setContactName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        console.warn(`Тип ${name} не обрабатывается!`);
    }
  }, []);

  const handleSubmit = useCallback(
    event => {
      event.preventDefault();

      dispatch(itemsOperations.addContact(contactName, number));
      setContactName('');
      setNumber('');
    },
    [contactName, dispatch, number],
  );

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <label>
        Name
        <input
          type="text"
          name="contactName"
          value={contactName}
          onChange={handleChange}
          autoComplete="off"
        />
      </label>

      <label>
        Number
        <input
          type="number"
          name="number"
          value={number}
          onChange={handleChange}
          autoComplete="off"
        />
      </label>

      <button
        type="submit"
        disabled={!contactName || !number}
        className={s.btn}
      >
        Add contact
      </button>
    </form>
  );
}
