import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Comics from '../pages/Comics';
import Characters from '../pages/Characters';
import Creators from '../pages/Creators';
import Events from '../pages/Events';
import Search from '../pages/Search';
import NotFound from '../components/notfound/NotFound';

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
    ],
  },
]);

export default router;
