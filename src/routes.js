import Home from './components/home/home';
import Marketplace from './components/marketplace/marketplace';
import Login from './components/login/login';
import Pricing from './components/pricing/pricing';
import Products from './components/products/products';
import Settings from './components/settings/settings';
import Terminal from './components/terminal/terminal';
import Signup from './components/signup/signup';
import Dashboard from './components/dashboard/dashboard';
import Team from './components/team/team';

const { createBrowserRouter } = require('react-router-dom');

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },

  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/marketplace',
    element: <Marketplace />,
  },
  {
    path: '/pricing',
    element: <Pricing />,
  },
  {
    path: '/products',
    element: <Products />,
  },
  {
    path: '/settings',
    element: <Settings />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
  {
    path: '/team',
    element: <Team />,
  },
  {
    path: '/terminal',
    element: <Terminal />,
  },
]);

export default router;
