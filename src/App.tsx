import React from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from './locales/i18n';
import { Provider } from 'react-redux';
import { persistor, store } from './store/store';
import Layouts from './Layouts';
import { PersistGate } from 'redux-persist/integration/react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const App = () => {
  return (
    <GestureHandlerRootView>
      <I18nextProvider i18n={i18n}>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <Layouts />
          </PersistGate>
        </Provider>
      </I18nextProvider>
    </GestureHandlerRootView>
  );
};

export default App;
