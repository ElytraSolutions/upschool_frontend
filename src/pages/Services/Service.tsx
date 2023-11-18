import { useEffect } from 'react';

export default function Service() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <h1>I am from servies</h1>
        </>
    );
}
