import { useState, useEffect } from 'react';
const useScreenWidthAndHeight = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerWidth);
    const isLargeScreen = width > 768 ? true : false; //For responsive mobile registration and login page
    const isTabScreen = width > 900 ? true : false; //For responsive navbar of user dashboard
    const isBigScreen = width > 1200 ? true : false; //For Responsive navbar
    const isSmallScreen = width < 420 ? true : false; //For responsive dashboard design
    const isSmallHeight = height < 420 ? true : false; //For responsive select country box design
    const isMobileHeight = height < 540 ? true : false; //For responsive select country box design
    const isTabHeight = height < 640 ? true : false; //For responsive select country box design
    const isLgHeight = height < 768 ? true : false; //For responsive select country box design
    useEffect(() => {
        function watchWidthAndHeight() {
            setWidth(window.innerWidth);
            setHeight(window.innerHeight);
        }
        window.addEventListener('resize', watchWidthAndHeight);
        return () => {
            window.removeEventListener('resize', watchWidthAndHeight);
        };
    }, []);

    return {
        isLargeScreen,
        isBigScreen,
        isTabScreen,
        isSmallScreen,
        isSmallHeight,
        isMobileHeight,
        isTabHeight,
        isLgHeight,
    };
};
export default useScreenWidthAndHeight;
