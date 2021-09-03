import React from 'react';
import './App.css';

import { Provider } from 'react-redux';
import { store } from './store/store';
import { Prueba } from './Prueba';

const App = () => {

  


  return (
    <Provider store={store}>
      <Prueba />
    </Provider>
  );
};

export default App;
