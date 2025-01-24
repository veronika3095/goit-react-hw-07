
/* eslint-disable no-unused-vars */
import React from 'react';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contactsSlice'; 
import Contact from '../Contact/Contact';
import styles from './ContactList.module.css';

const ContactList = () => {
  
  const contacts = useSelector(selectFilteredContacts);

  return (
    <ul className={styles.list}>
      {contacts.map(contact => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};

export default ContactList;