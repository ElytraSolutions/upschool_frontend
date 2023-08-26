import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./components/layout/Layout"
import Home from "./pages/Homepage/Homepage"
import Service from "./pages/Services/Service"
import About from "./pages/About/About"
import Registration from "./pages/Register/Registration"
import OurFramework from "./pages/OurFramework/OurFramework"
import Contact from "./pages/Contact/contact"
import Acknowledgement from "./pages/Acknowledgement/acknowledgement"
import Testimonials from "./pages/Testimonials/testimonials"
import Courses from "./pages/Courses/AllCourses"
<<<<<<< HEAD
import FAQ from "./pages/FAQ/faq"
import CourseDetails from "./pages/Courses/CourseDetail"
=======
import CourseDetails from "./pages/Courses/CourseDetaul"
>>>>>>> aa37a18 (idk)
import Login from './pages/Login/Login'
import Test from './pages/Test'

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
        path: "login",
        element: <Login />
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
      },
      {
        path:"testimonials",
        element: <Testimonials />
      },
      {
        path: "courses",
        element: <Courses />,
      },
      {
      path: "course/:slug",
      element: <CourseDetails />,
      },
      {
        path:"faq",
        element: <FAQ />
      }

    ]
  },
  {
    path: "test",
    element: <Test />
  }
])

function App() {

  return (
    <RouterProvider router={router} />
  )

}

export default App
