import React from 'react';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/es/integration/react';

import AppRouter from './routing/AppRouter';
import { store } from './redux/store';
// import { persistor } from './redux/store';

import './App.styles.scss';

const App = () => (
  <HashRouter>
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
      <AppRouter />
      {/* </PersistGate> */}
    </Provider>
  </HashRouter>
);

export default App;
