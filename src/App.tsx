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
import ResetPassword from './pages/Login/ResetPassword';
import Dashboard from './pages/User/DashBoard/Dashboard';
import Lessons from './pages/Lessons/Lessons';
import Logout from './pages/Logout/Logout';
import UploadBook from './pages/UploadBook/UploadBook';
import BrowseBooks from './pages/Library/OldBrowseBooks';
import BookBundle from './pages/Library/OldBookBundle';
import NewBrowseBooks from './pages/Library/DefaultPage';
import Experiment from './pages/ZExperiment/Experiment';
import Certificate from './pages/Certificate/Certificate';
import BookPage from './pages/BookPage/BookPage';
import ProjectsDefaultPage from './pages/Projects/ProjectsDefaultPage';
import ProjectsPage from './pages/ProjectsPage/ProjectsPage';
import GlobalReach from './pages/GlobalReach/GlobalReach';
import AllCharityPage from './pages/Charity/AllCharityPage';
import CharityPage from './pages/Charity/CharityPage';
import Hubs from './pages/Hubs/Hubs';
import ImpactFilms from './pages/ImpactFilms/ImpactFilms';
import Hub from './pages/Hubs/Hub';
import Team from './pages/Team/Team';
import GlobalGoals from './pages/GlobalGoals/GlobalGoals';
import Challenges from './pages/Challenges/Challenges';
import CanvaPage from './pages/Canva/CanvaPage';

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
                path: 'resetpasswordemail',
                element: <ResetPasswordEmail />,
            },
            {
                path: 'resetpassword',
                element: <ResetPassword />,
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
                path: 'our-team',
                element: <Team />,
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
                path: 'course/:courseSlug/:chapterSlug/:lessonSlug',
                element: <Lessons />,
            },
            {
                path: 'faq',
                element: <FAQ />,
            },
            {
                path: 'dashboard',
                element: <Dashboard />,
            },
            {
                path: 'uploadbook',
                element: <UploadBook />,
            },
            {
                path: 'library',
                element: <NewBrowseBooks />,
            },
            {
                path: 'library/:slug',
                element: <BookPage />,
            },
            {
                path: 'library-test',
                element: <BrowseBooks />,
            },
            {
                path: 'experiment',
                element: <Experiment />,
            },
            {
                path: '/book/values-for-a-better-tomorrow-book-bundle',
                element: <BookBundle />,
            },
            {
                path: 'projects',
                element: <ProjectsDefaultPage />,
            },
            {
                path: 'charity-projects/:slug',
                element: <ProjectsPage />,
            },
            {
                path: '/certificate',
                element: <Certificate />,
            },
            {
                path: '/global-reach',
                element: <GlobalReach />,
            },
            {
                path: 'charities',
                element: <AllCharityPage />,
            },
            {
                path: 'charities/:slug',
                element: <CharityPage />,
            },
            {
                path: '/hubs',
                element: <Hubs />,
            },
            {
                path: '/impact-films',
                element: <ImpactFilms />,
            },
            {
                path: '/hubs/:slug',
                element: <Hub />,
            },
            {
                path: '/sdgs',
                element: <GlobalGoals />,
            },
            {
                path: '/challenges',
                element: <Challenges />,
            },
            {
                path: '/canva/',
                element: <CanvaPage />,
            },
        ],
    },
    {
        path: '/logout',
        element: <Logout />,
    },
    {
        path: '/login',
        element: <Login />,
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
