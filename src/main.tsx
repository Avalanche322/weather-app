import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { CssBaseline, ThemeProvider} from "@mui/material";
import theme from './theme.ts';
import { Provider } from 'react-redux';
import { store } from './store/store.ts';
import { ErrorBoundary } from 'react-error-boundary';
import BoundaryErrorFallback from './components/shared/BoundaryErrorFallback/index.tsx';

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ErrorBoundary FallbackComponent={BoundaryErrorFallback}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </Provider>
    </ErrorBoundary>
  </StrictMode>
);
