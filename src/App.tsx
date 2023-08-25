import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./components/layout/Layout"
import Home from "./pages/Homepage/Homepage"
import Service from "./pages/Services/Service"
import About from "./pages/About/About"
import Registration from "./pages/Register/Registration"
import OurFramework from "./pages/OurFramework/OurFramework"
import Contact from "./pages/Contact/contact"
import Acknowledgement from "./pages/Acknowledgement/acknowledgement"

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
        element: <Registration />
      },
      {
        path: "our-framework",
        element: <OurFramework />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path:"contact",
        element: <Contact />
      },
      {
        path:"acknowledgement",
        element: <Acknowledgement />
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
