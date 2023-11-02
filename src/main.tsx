import React from 'react';
import { createRoot } from 'react-dom/client';
import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter } from 'react-router-dom';

import { App, AppErrorBoundary } from '@app/components';

import './theme/index.scss';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <ErrorBoundary
      FallbackComponent={AppErrorBoundary}
      onReset={() => {
        // worst case scenario reload whole app
        window.location.href = '';
      }}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ErrorBoundary>
  </React.StrictMode>
);
