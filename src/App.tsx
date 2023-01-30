import './App.css';
import Login from "./pages/Login";
import Join from "./pages/Join";
import Home from "./pages/Home";

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
