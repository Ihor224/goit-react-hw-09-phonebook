import { useDispatch, useSelector } from 'react-redux';
import { itemsOperations, itemsSelectors } from '../../redux/contacts';
import s from './ContactList.module.css';

export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(itemsSelectors.getVisibleContacts);

  const onDeleteContact = id => dispatch(itemsOperations.deleteContact(id));

  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={s.item}>
          <div>
            <p className={s.text}>{name}</p>
            <p className={s.number}>{number}</p>
          </div>
          <button onClick={() => onDeleteContact(id)} className={s.btn}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
