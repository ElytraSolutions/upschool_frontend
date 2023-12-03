import { useEffect } from 'react';
import Loader from './Loader/Loader';

export default function Loading() {
    useEffect(() => {
        document.title = 'Loading | Upschool';
    }, []);
    return (
        <div className="md:-mt-24 -mt-16 h-screen flex w-full items-center justify-center">
            <Loader />
        </div>
    );
}
