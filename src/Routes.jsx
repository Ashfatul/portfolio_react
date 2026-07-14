import { createBrowserRouter, Navigate } from 'react-router-dom';
import App from './App';
import AppFullStack from './AppFullStack';
import Resume from './components/resume/Resume';
import ResumeFullStack from './components/resume/ResumeFullStack';
import ErrorPage from './components/ui/ErrorPage';
import NotFound from './components/ui/NotFound';
import ProfileSelection from './components/ui/ProfileSelection';

const router = createBrowserRouter([
  {
    path: '/',
    element: <ProfileSelection />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/frontend',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/fullstack',
    element: <AppFullStack />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/frontend/resume',
    element: <Resume />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/fullstack/resume',
    element: <ResumeFullStack />,
    errorElement: <ErrorPage />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

export default router;
