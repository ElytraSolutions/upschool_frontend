import React, { useState } from 'react';
import AddStudentsPortal from '../Portals/AddStudentsPortal';
import { createPortal } from 'react-dom';

type BoxProps = {
    icon: string;
    text: string;
};
const AddStudentsBox: React.FC<BoxProps> = ({
    icon,
    text,
}): React.JSX.Element => {
    const [showAddStudentsModal, setShowAddStudentsModal] =
        useState<boolean>(false);
    return (
        <>
            {showAddStudentsModal &&
                createPortal(
                    <AddStudentsPortal
                        onClose={() => {
                            setShowAddStudentsModal(false);
                            // enables scrolling when modal is closed
                            document.body.style.overflow = 'unset';
                        }}
                    />,
                    document.body,
                )}
            <div className="border rounded-md border-theme-color hover:cursor-pointer  px-0 md:px-4 w-full xs:w-60 text-theme-color flex flex-row justify-center items-center">
                <div
                    className="flex flex-col justify-center items-center gap-2 py-4 px-1"
                    onClick={() => {
                        setShowAddStudentsModal(true);
                        // disables background scrolling when modal is opened
                        if (typeof window != 'undefined' && window.document) {
                            document.body.style.overflow = 'hidden';
                        }
                    }}
                >
                    <img src={icon} alt="logo " width="49px" height="49px" />
                    <h1 className="text-center text-lg">{text}</h1>
                </div>
            </div>
        </>
    );
};
export default AddStudentsBox;
