import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

export const FunctionalIFrameComponent = ({ children, title, ...props }) => {
    const [contentRef, setContentRef] = useState<any>(null);

    const mountNode = contentRef?.contentWindow?.document?.body;

    useEffect(() => {
        if (mountNode) {
            const link = document.createElement('link');
            link.href =
                'https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@100;200;300;400;500;600;700;800;900&display=swap';
            link.rel = 'stylesheet';
            mountNode.appendChild(link);

            const link2 = document.createElement('link');
            link2.href =
                'https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,200;0,6..12,300;0,6..12,400;0,6..12,500;0,6..12,600;0,6..12,700;0,6..12,800;0,6..12,900;0,6..12,1000;1,6..12,200;1,6..12,300;1,6..12,400;1,6..12,500;1,6..12,600;1,6..12,700;1,6..12,800;1,6..12,900;1,6..12,1000&display=swap';
            link2.rel = 'stylesheet';
            mountNode.appendChild(link2);
            return () => {
                // Cleanup if needed
                mountNode.removeChild(link);
                mountNode.removeChild(link2);
            };
        }
    }, [mountNode]);
    return (
        <iframe
            title={title}
            {...props}
            ref={setContentRef}
            className="flex h-full w-full"
            style={{ overflow: 'hidden' }}
        >
            {mountNode && createPortal(children, mountNode)}
        </iframe>
    );
};
