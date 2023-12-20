import React from 'react';
import ReactDOM from 'react-dom/client';
import { VisibilityProvider } from './providers/VisibilityProvider';
import App from './components/App';
import './index.css';
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <VisibilityProvider>
      <MantineProvider>
        <App />
      </MantineProvider>
    </VisibilityProvider>
  </React.StrictMode>,
);
