import { createBrowserRouter, Navigate } from 'react-router-dom';
import AppFullStack from './AppFullStack';
import ResumeFullStack from './components/resume/ResumeFullStack';
import ErrorPage from './components/ui/ErrorPage';
import NotFound from './components/ui/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppFullStack />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/resume',
    element: <ResumeFullStack />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/frontend',
    element: <Navigate to="/" replace />,
  },
  {
    path: '/fullstack',
    element: <Navigate to="/" replace />,
  },
  {
    path: '/frontend/resume',
    element: <Navigate to="/resume" replace />,
  },
  {
    path: '/fullstack/resume',
    element: <Navigate to="/resume" replace />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

export default router;
