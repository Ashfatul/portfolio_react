import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Resume from './components/resume/Resume';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/resume',
    element: <Resume />,
  },
  {
    path: '*',
    element: <App />,
  },
]);

export default router;
