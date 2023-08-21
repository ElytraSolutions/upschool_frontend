import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./components/layout/Layout"
import Home from "./pages/Homepage/Homepage"
import Service from "./pages/Services/Service"
import About from "./pages/About/About"

const router= createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        index:true,
        element:<Home/>,
      },
      {
        path:"demo",
        element:<Service/>
      }
    ]
  },
  {
    path:"test",
    element:<About/>
  }
])

function App() {
  
 return(
  <RouterProvider router={router}/>
 )
  
}

export default App
