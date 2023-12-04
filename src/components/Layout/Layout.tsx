import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import DashboardNavbar from '../../pages/User/DashBoard/Navbar'; // Import your Dashboard-specific Navbar
import Footer from '../Footer/Footer';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Layout() {
    const [isDashboardNavbarOpen, setIsDashboardNavbarOpen] = useState(false);
    // Get the current location using useLocation from react-router-dom
    const location = useLocation();

    const params = useParams();

    // Check if the current location is the "Dashboard" route
    const isDashboardRoute = location.pathname === '/dashboard';

    return (
        <>
            {/* Conditionally render the appropriate Navbar */}
            {isDashboardRoute ? (
                <DashboardNavbar setIsopen={setIsDashboardNavbarOpen} />
            ) : (
                <Navbar />
            )}

            <Outlet
                context={{ isDashboardNavbarOpen, setIsDashboardNavbarOpen }}
            />
            {/* {isDashboardRoute ? null : <Footer />} */}
            {!isDashboardRoute && !params.chapterSlug && <Footer />}
        </>
    );
}
