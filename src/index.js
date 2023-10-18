import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from 'redux/store';
import 'modern-normalize/modern-normalize.css';
import './styles/variables.css';
import './styles/fonts.css';
import './index.css';
// import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    {/* <PersistGate loading={null} persistor={persistor}> */}
    <BrowserRouter basename="/car-rental">
      <App />
    </BrowserRouter>
    {/* </PersistGate> */}
  </Provider>
);
