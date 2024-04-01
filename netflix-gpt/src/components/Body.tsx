import { Router, RouterProvider } from 'react-router-dom';
import { appRouter } from '../routes';

const Body = () => {
  
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body