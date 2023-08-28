import { useState, useEffect } from 'react';
const useScreenWidth = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const isLargeScreen = width > 768 ? true : false;
    useEffect(() => {
        function watchWidth() {
            setWidth(window.innerWidth);
        }
        window.addEventListener('resize', watchWidth);
        return () => {
            window.removeEventListener('resize', watchWidth);
        };
    }, []);

    return isLargeScreen;
};
export default useScreenWidth;
