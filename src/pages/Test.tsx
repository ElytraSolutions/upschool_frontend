import { useCallback, useEffect, useState } from 'react';
import axiosInstance from '../config/Axios';
import useUser from '../hooks/useUser';
import ProjectPopup from '../components/PopupPayment/ProjectPopup';

function Test() {
    const [isPopupVisible, setPopupVisible] = useState(false);
    const [data, setData] = useState(null);
    const { user } = useUser();
    useEffect(() => {
        axiosInstance.get('/data/user').then((resp) => {
            setData(resp.data);
        });
    }, []);
    const openProjectPopup = useCallback(() => {
        setPopupVisible(true);
    }, []);
    const closeProjectPopup = useCallback(() => {
        setPopupVisible(false);
    }, []);
    return (
        <div>
            {JSON.stringify(data)}
            <>
                <div className="flex justify-center w-[150px] bg-red-custom text-white font-bold text-xs xm:text-xl lg:text-2xl">
                    <button onClick={openProjectPopup}>Buy Ebook AU $5</button>
                </div>
                {isPopupVisible && <ProjectPopup onClose={closeProjectPopup} />}
                ;
            </>
            {JSON.stringify(user)}
        </div>
    );
}

export default Test;
