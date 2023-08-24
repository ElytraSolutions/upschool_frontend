import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./components/layout/Layout"
import Home from "./pages/Homepage/Homepage"
import Service from "./pages/Services/Service"
import About from "./pages/About/About"
import Registration from "./pages/Register/Registration"
import OurFramework from "./pages/OurFramework/OurFramework"

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
