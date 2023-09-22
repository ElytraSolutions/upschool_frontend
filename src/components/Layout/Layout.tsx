import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import DashboardNavbar from '../../pages/User/DashBoard/Navbar'; // Import your Dashboard-specific Navbar
import Footer from '../Footer/Footer';

export default function Layout() {
    // Get the current location using useLocation from react-router-dom
    const location = useLocation();

    // Check if the current location is the "Dashboard" route
    const isDashboardRoute = location.pathname === '/dashboard';

    return (
        <>
            {/* Conditionally render the appropriate Navbar */}
            {isDashboardRoute ? <DashboardNavbar /> : <Navbar />}

            <Outlet />
            {/* {isDashboardRoute ? null : <Footer />} */}
            {!isDashboardRoute && <Footer />}
        </>
    );
}
