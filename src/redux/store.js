import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { contactsReducer } from '../redux/contactsSlice';
import { filterReducer } from '../redux/filterSlice';
import { combineReducers } from '@reduxjs/toolkit';
import { getDefaultMiddleware } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
})
const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const middleware = getDefaultMiddleware({
  serializableCheck: false, 
});

export const store = configureStore({
  reducer: persistedReducer,
  middleware
});

export const persistor = persistStore(store);
