import { useEffect, useRef } from 'react';

const SlidingText = ({ text }) => {
    const textRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const textRefCurrent = textRef.current;
        const options = {
            root: null,
            rootMargin: '50%',
            threshold: 0.5,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    if (textRefCurrent) {
                        textRefCurrent.classList.add('slideInRight');
                        observer.unobserve(entry.target);
                    }
                }
            });
        }, options);

        if (textRefCurrent) {
            observer.observe(textRefCurrent);
        }

        return () => {
            if (textRefCurrent) {
                observer.unobserve(textRefCurrent);
            }
        };
    }, []);
    return (
        <>
            <div className="my-16"></div>
            <div className="mb-16 py-6 overflow-hidden text-center bg-[#FDCF60]">
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
