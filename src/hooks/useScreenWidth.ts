import { useState, useEffect } from 'react';
const useScreenWidth = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const isLargeScreen = width > 768 ? true : false; //For responsive mobile registration and login page
    const isBigScreen = width > 1200 ? true : false; //For Responsive navbar
    useEffect(() => {
        function watchWidth() {
            setWidth(window.innerWidth);
        }
        window.addEventListener('resize', watchWidth);
        return () => {
            window.removeEventListener('resize', watchWidth);
        };
    }, []);

    return { isLargeScreen, isBigScreen };
};
export default useScreenWidth;
