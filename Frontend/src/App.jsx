import Navbar from "./Components.jsx/Navbar"
import Footer from "./Components.jsx/Footer"
import Home from "./landing pages/Home"
import About from "./landing pages/About"
import Pricing from "./landing pages/Pricing"
import Products from "./landing pages/Products"
import Signup from "./landing pages/Signup"
import Support from "./landing pages/Support"
import NotFound from "./landing pages/NotFound"
import Login from "./landing pages/Login"
import { createBrowserRouter ,RouterProvider} from "react-router";
import { useEffect } from "react";
import axios from "axios"

const router=createBrowserRouter([
  {
    path:"/",
    element:<>
      <Navbar/>
      <Home/>
      <Footer/>
    </>
  },
  {
    path:"/about",
    element:<>
      <Navbar/>
      <About></About>
      <Footer/>
    </>
  },
  {
    path:"/pricing",
    element:<>
      <Navbar/>
      <Pricing/>
      <Footer/>
    </>
  },
  {
    path:"/products",
    element:<>
      <Navbar/>
      <Products/>
      <Footer/>
    </>
  },
  {
    path:"/support",
    element:<>
      <Navbar/>
      <Support/>
      <Footer/>
    </>
  },
  {
    path:"/signup",
    element:<>
      <Navbar/>
      <Signup/>
      <Footer/>
    </>
  },
  {
    path:"/login",
    element:<>
      <Navbar/>
      <Login/>
      <Footer/>
    </>
  },
  {
    path:"*",
    element:<>
      <Navbar/>
      <NotFound/>
      <Footer/>
    </>
  }
])

function App() {
    useEffect(()=>{
        let check = async ()=>{
            let {data} = await axios.post(
            "http://localhost:8080/",
            {},
            {withCredentials:true}
            )
            let {success} = data;
            if(success){
              window.location.href = "http://localhost:5174/"
            }
        }
        check();
    },
    [])
  return (
    <RouterProvider router={router} />
  )
}

export default App
