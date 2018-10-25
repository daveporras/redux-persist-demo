import React, { Component } from 'react';
import { store, persistor } from './store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Page from './views/Page';

class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <PersistGate persistor={persistor} >
          <Page />
        </PersistGate>
      </Provider>
      
    );
  }
}

export default App;
