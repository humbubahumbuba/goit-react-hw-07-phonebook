import React from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from '@emotion/react';
import { theme } from './constants/theme';
import { Provider } from 'react-redux';
import { store } from 'redux/store';
import { App } from 'components/App';
import './index.css';

const root = createRoot(document.querySelector('#root'));

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
