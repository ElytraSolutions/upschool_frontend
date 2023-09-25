import { useState, useEffect } from 'react';
const useScreenWidth = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const isLargeScreen = width > 768 ? true : false; //For responsive mobile registration and login page
    const isTabScreen = width > 900 ? true : false; //For responsive navbar of user dashboard
    const isBigScreen = width > 1200 ? true : false; //For Responsive navbar
    const isSmallScreen = width < 420 ? true : false; //For responsive dashboard design
    useEffect(() => {
        function watchWidth() {
            setWidth(window.innerWidth);
        }
        window.addEventListener('resize', watchWidth);
        return () => {
            window.removeEventListener('resize', watchWidth);
        };
    }, []);

    return { isLargeScreen, isBigScreen, isTabScreen, isSmallScreen };
};
export default useScreenWidth;
