import './App.css';
import Login from "./login";
import Join from "./join";
import Home from "./home";

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
    },
    {
      path: "/home",
      element: <Home />
    }
  ]);

  return (
    <RouterProvider router={router} />
  )
};
export default App;
