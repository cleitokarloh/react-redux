import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Cart from './components/Cart';
import Catalog from './components/Catalog';

import { store, persistor } from './store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Catalog />
        <Cart />
      </PersistGate>
    </Provider>
  );
};

export default App;
