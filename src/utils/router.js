import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Comics from '../pages/Comics';
import Characters from '../pages/Characters';
import Creators from '../pages/Creators';
import Events from '../pages/Events';
import Search from '../pages/Search';
import NotFound from '../components/notfound/NotFound';
import Auth from '../pages/auth/Auth';
import Signin from '../pages/auth/Signin';
import Signup from '../pages/auth/Signup';

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
        path: 'characters',
        element: <Characters />,
      },
      {
        path: 'events',
        element: <Events />,
      },
      {
        path: 'creators',
        element: <Creators />,
      },
      {
        path: 'search',
        element: <Search />,
      },
      {
        path: 'auth',
        element: <Auth />,
        children: [
          {
            path: '',
            element: <Signin />,
          },
          {
            path: 'signup',
            element: <Signup />,
          },
        ],
      },
    ],
  },
]);

export default router;
