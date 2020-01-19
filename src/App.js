import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import {createAppNavigator} from './Navigator';
import reduxStore from './store';
import Loader from './components/shared/Loader';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const Navigator = createAppNavigator();
    return (
      <Provider store={reduxStore.store}>
        <PersistGate loading={<Loader />} persistor={reduxStore.persistor}>
          <Navigator />
        </PersistGate>
      </Provider>
    );
  }
}
