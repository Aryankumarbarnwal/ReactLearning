
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css'
import Navbars from './components/Navbars'
import Home from './components/Home'
import Login from './components/Login'
import Contact from './components/Contact'
import About from "./components/About";
import User from "./components/User";

function App() {
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbars/><Home/></>
    },

    {
      path: "/login",
      element: <><Navbars/><Login/></>
    },
    {
      path: "/contact",
      element: <><Navbars/><Contact/></>
    },
    {
      path: "/about",
      element: <><Navbars/><About/></>
    },
    {
      path: "/user/:username",
      element: <><Navbars/><User/></>
    }
  ])
  

  return (
    <>
      <div>hoooo i am doing react now</div>
      <RouterProvider router={router} />
    </>
  )
}

export default App
