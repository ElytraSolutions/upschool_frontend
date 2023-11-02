import { useEffect, useRef } from 'react';

const SlidingText = ({ text }) => {
    const textRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '50%',
            threshold: 0.5, // Change this threshold as needed
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    if (textRef.current) {
                        textRef.current.classList.add('slideInRight');
                        observer.unobserve(entry.target);
                    }
                }
            });
        }, options);

        if (textRef.current) {
            observer.observe(textRef.current);
        }

        return () => {
            if (textRef.current) {
                observer.unobserve(textRef.current);
            }
        };
    }, []);
    return (
        <>
            <div className="my-12"></div>
            <div className="mb-12 py-6 overflow-hidden text-center bg-[#FDCF60]">
                <div ref={textRef} className="w-full">
                    <div className="xss:text-xl xs:text-3xl sm:text-6xl font-anton tracking-wider word-spacing w-full slideInRight">
                        {text}
                    </div>
                </div>
            </div>
        </>
    );
};

export default SlidingText;
