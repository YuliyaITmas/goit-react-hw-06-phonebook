import React from 'react';
import { FiUserMinus } from 'react-icons/fi';

import { List, Item, Name, Number, Delete } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';

import { deleteContact } from 'redux/contactsSlice';

export const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(state => state.contacts);

  const filter = useSelector(state => state.filter);

  const normalizedFilter = filter.toLowerCase().trim();

  let filteredContacts = [];

  if (normalizedFilter) {
    filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  } else {
    filteredContacts = contacts;
  }

  const handleDelete = contactId => dispatch(deleteContact(contactId));

  return (
    <List>
      {filteredContacts.map(({ name, number, id }) => {
        return (
          <Item key={id}>
            <Name>{name}:</Name>
            <Number>{number}</Number>
            <Delete
              type="button"
              onClick={() => handleDelete(id)}
              aria-label="Delete contact"
            >
              <FiUserMinus size="26" />
            </Delete>
          </Item>
        );
      })}
    </List>
  );
};
