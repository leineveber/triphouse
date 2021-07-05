import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootReducer from './slices/rootReducer';
import rootPersistedReducer from './slices/rootPersistedReducer';

const middleware = getDefaultMiddleware({
  immutableCheck: true,
  serializableCheck: false,
  thunk: true,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['test'],
};

const persistedReducer = persistReducer(persistConfig, rootPersistedReducer);

export const store = configureStore({
  reducer: {
    // persistedReducer,
    rootReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV !== 'production',
});

export const persistor = persistStore(store);
