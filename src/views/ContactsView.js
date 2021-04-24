import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactList from '../Components/ContactList';
import ContactForm from '../Components/ContactForm';
import Filter from '../Components/Filter';
import { itemsOperations, itemsSelectors } from '../redux/contacts';

export default function ContactsView() {
  const isLoading = useSelector(itemsSelectors.getLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(itemsOperations.fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />

      {isLoading && <p>...loading</p>}
      <ContactList />
    </div>
  );
}
