import { useState } from 'react';
import { createPortal } from 'react-dom';

export const FunctionalIFrameComponent = ({ children, title, ...props }) => {
    const [contentRef, setContentRef] = useState<any>(null);
    const mountNode = contentRef?.contentWindow?.document?.body;
    return (
        <iframe
            title={title}
            {...props}
            ref={setContentRef}
            className="flex h-full w-full"
        >
            {mountNode && createPortal(children, mountNode)}
        </iframe>
    );
};
