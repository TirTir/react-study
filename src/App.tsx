import './App.css';
import Login from "./login";
import Join from "./join";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App(){
  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/join",
      element: <Join />,
    }
  ]);

  return (
    <RouterProvider router={router} />
  )
};
export default App;
