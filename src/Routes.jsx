import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Resume from './components/resume/Resume';
import ErrorPage from './components/ui/ErrorPage';
import NotFound from './components/ui/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/resume',
    element: <Resume />,
    errorElement: <ErrorPage />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

export default router;
