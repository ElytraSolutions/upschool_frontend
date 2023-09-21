import React from 'react';

type AddStudentsPortalProps = {
    onClose: () => void;
};
const AddStudentsPortal: React.FC<AddStudentsPortalProps> = ({ onClose }) => {
    return (
        <>
            <div className="absolute top-0 z-20 h-full w-full flex flex-row justify-center items-center bg-black/60 gap-2">
                <div className="">
                    <div className="bg-white text-red-upschool p-10">
                        from students portals
                    </div>
                    <button
                        type="button"
                        className="bg-theme-color text-white"
                        onClick={onClose}
                    >
                        Close
                    </button>
                </div>
            </div>
        </>
    );
};

export default AddStudentsPortal;
