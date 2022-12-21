import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import store from './redux/store';
import App from './App';
import Stories from './pages/Stories';
import Events from './pages/Events';
import Comics from './pages/Comics';
import Characters from './pages/Characters';
import Creators from './pages/Creators';
import Series from './pages/Series';
import NotFound from './components/notfound/NotFound';
import reportWebVitals from './reportWebVitals';
import './index.scss';

const container = document.getElementById('root');
const root = createRoot(container);

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: '',
        element: <Comics />,
      },
      {
        path: 'stories',
        element: <Stories />,
      },
      {
        path: 'events',
        element: <Events />,
      },
      {
        path: 'characters',
        element: <Characters />,
      },
      {
        path: 'creators',
        element: <Creators />,
      },
      {
        path: 'series',
        element: <Series />,
      },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
