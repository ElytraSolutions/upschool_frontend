import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Homepage/Homepage';
import Service from './pages/Services/Service';
import About from './pages/About/About';
import Registration from './pages/Register/Registration';
import OurFramework from './pages/OurFramework/OurFramework';
import Contact from './pages/Contact/Contact';
import Acknowledgement from './pages/Acknowledgement/Acknowledgement';
import Testimonials from './pages/Testimonials/Testimonials';
import Courses from './pages/Courses/AllCourses';
import FAQ from './pages/FAQ/Faq';
import CourseDetails from './pages/Courses/CourseDetail';
import Login from './pages/Login/Login';
import Test from './pages/Test';
import ResetPasswordEmail from './pages/Login/ResetPasswordEmail';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: 'demo',
                element: <Service />,
            },
            {
                path: 'register',
                element: <Registration />,
            },
            {
                path: 'login',
                element: <Login />,
            },
            {
                path: 'resetpasswordemail',
                element: <ResetPasswordEmail />,
            },
            {
                path: 'our-framework',
                element: <OurFramework />,
            },
            {
                path: 'about',
                element: <About />,
            },
            {
                path: 'contact',
                element: <Contact />,
            },
            {
                path: 'acknowledgement',
                element: <Acknowledgement />,
            },
            {
                path: 'testimonials',
                element: <Testimonials />,
            },
            {
                path: 'courses',
                element: <Courses />,
            },
            {
                path: 'course/:slug',
                element: <CourseDetails />,
            },
            {
                path: 'faq',
                element: <FAQ />,
            },
        ],
    },
    {
        path: 'test',
        element: <Test />,
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
