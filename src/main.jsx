import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import { BrowserRouter } from 'react-router-dom';
// Import BrowserRouter
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider

    // RRBIy8rfk0RLySqr4GEptnGyysGko1Ve
    // domain="dev-s7b1umqw77ppqpul.us.auth0.com"
    domain="ashwinidhenge.us.auth0.com"
    clientId="iSD6i9AfvioBIZalK0EPVWXs75TqA96K"
    authorizationParams={{ redirect_uri: window.location.origin }}
  >
    <BrowserRouter>
      <div className="dark:bg-slate-900 dark:text-white">
        <App />
      </div>
    </BrowserRouter>
  </Auth0Provider>
);
