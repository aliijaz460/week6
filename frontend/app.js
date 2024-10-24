import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './src/store'; // Import store and persistor
import UserComponent from './src/components/UserComponent'; // User component

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <UserComponent />
      </PersistGate>
    </Provider>
  );
};

export default App;
