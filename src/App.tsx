import './App.css';
import Login from "./login";
import Feed from './feed';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App(){
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
      children: [
        {
          path: "/feed",
          element: <Feed />,
        }
      ]
    }
    
  ]);

  return (
    <RouterProvider router={router} />
  )
};
export default App;
