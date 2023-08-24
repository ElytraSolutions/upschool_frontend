import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./components/layout/Layout"
import Home from "./pages/Homepage/Homepage"
import Service from "./pages/Services/Service"
import About from "./pages/About/About"
<<<<<<< HEAD
import Registration from "./pages/Register/Registration"
=======
import Register from "./pages/Register/Register"
import OurFramework from "./pages/OurFramework/OurFramework"
>>>>>>> 123379bd27c220491c6fbebf4b955d1f14a738a2

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "demo",
        element: <Service />
      },
      {
        path: "register",
<<<<<<< HEAD
        element: <Registration />
=======
        element: <Register />
      },
      {
        path:"our-framework",
        element:<OurFramework />
>>>>>>> 123379bd27c220491c6fbebf4b955d1f14a738a2
      }

    ]
  },
  {
    path: "test",
    element: <About />
  }
])

function App() {

  return (
    <RouterProvider router={router} />
  )

}

export default App
