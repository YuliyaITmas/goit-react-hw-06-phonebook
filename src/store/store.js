import { createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';

import { persistStore } from 'redux-persist';

import persistConfig from './persistConfig';
import persistReducer from 'redux-persist/es/persistReducer';

const enhancer = devToolsEnhancer();

const initialState = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'contacts/addContact':
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    case 'contacts/deleteContact':
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        ),
      };
    case 'contacts/filteredContacts':
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer, enhancer);
const persistor = persistStore(store);

export { store, persistor };
