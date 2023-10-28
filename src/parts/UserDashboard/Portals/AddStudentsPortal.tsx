import React, { useState } from 'react';
import { useHotkeys } from 'react-hotkeys-hook';

import InviteViaLink from './InviteViaLink';
import InviteViaEmail from './InviteViaEmail';
import InviteViaCSVFile from './InviteViaCSVFile/InviteViaCSVFile';
import resolveImgURL from '../../../utlis/resolveImgURL';

type AddStudentsPortalProps = {
    onClose: () => void;
};

const AddStudentsPortal: React.FC<AddStudentsPortalProps> = ({ onClose }) => {
    // closes modal when 'Esc' key is pressed
    useHotkeys('esc', (event) => {
        event.preventDefault();
        onClose();
    });
    const [selectedOption, setSelectedOption] = useState<string>('Link');
    return (
        <>
            {/* Container */}
            <div className="fixed top-0 z-20 h-full w-full flex flex-col justify-center items-center bg-black/60">
                {/* Layout */}
                <div></div>
                <div className="mt-5 tab:mt-7 max-h-[85vh] w-[95%] lg:w-11/12 xl:w-3/4 bg-white text-theme-color rounded-lg xs:rounded-none overflow-auto">
                    {/* Sections  */}
                    <div className="grid grid-cols-3 divide-x divide-theme-color/50">
                        {/* First Section */}
                        <div className="col-span-1 p-1 md:p-2 tab:p-5 w-full flex flex-row justify-center h-full">
                            {/* First Section Container */}
                            <div className="w-[95%] lg:w-10/12 pt-12 pb-6">
                                {/* First Section Layout */}
                                <div className="flex flex-col gap-2 sm:gap-4 md:gap-6 lg:gap-9">
                                    {/* First two rows */}
                                    <div className="flex flex-col w-full">
                                        <p className="font-semibold text-base xs:text-xl lg:text-2xl overflow-hidden">
                                            Invite Students
                                        </p>
                                        <p className="hidden sm:block font-light text-base lg:text-lg ">
                                            Invite students from your class
                                        </p>
                                    </div>
                                    {/* Remainig four rows */}
                                    <div className="flex flex-col gap-4 w-full">
                                        <p className="font-semibold text-sm xs:text-base lg:text-xl">
                                            <span className="hidden sm:inline-block">
                                                Choose an invite option
                                            </span>
                                            <span className="sm:hidden">
                                                Options
                                            </span>
                                        </p>
                                        {/* Button: Invite via Share Link */}
                                        <button
                                            type="button"
                                            className={`flex flex-row justify-start items-center p-1 md:py-2  md:px-4 w-full gap-2 border border-theme-color rounded-lg ${
                                                selectedOption === 'Link'
                                                    ? ''
                                                    : 'opacity-50'
                                            }`}
                                            onClick={() => {
                                                setSelectedOption('Link');
                                            }}
                                        >
                                            <img
                                                className="hidden xs:inline-block"
                                                src={resolveImgURL(
                                                    '/AddStudents/LinkIcon.png',
                                                )}
                                                width="20"
                                                alt="Link"
                                                height="20"
                                            />
                                            <p className=" font-light text-sm lg:text-base  text-left">
                                                <span className="hidden sm:inline-block">
                                                    Invite via Share
                                                </span>
                                                <span> Link</span>
                                            </p>
                                        </button>
                                        {/* Button: Invite via Email */}
                                        <button
                                            type="button"
                                            className={`flex flex-row justify-start items-center p-1 md:py-2  md:px-4 w-full gap-2 border border-theme-color rounded-lg ${
                                                selectedOption === 'Email'
                                                    ? ''
                                                    : 'opacity-50'
                                            }`}
                                            onClick={() => {
                                                setSelectedOption('Email');
                                            }}
                                        >
                                            <img
                                                className="hidden xs:inline-block"
                                                src={resolveImgURL(
                                                    '/AddStudents/EmailIcon.png',
                                                )}
                                                width="20"
                                                alt="Email"
                                                height="20"
                                            />
                                            <p className=" font-light text-sm lg:text-base   text-left">
                                                <span className="hidden sm:inline-block">
                                                    Invite via
                                                </span>
                                                <span> Email</span>
                                            </p>
                                        </button>
                                        {/* Button: Invite from CSV file */}
                                        <button
                                            type="button"
                                            className={`flex flex-row justify-start items-center p-1 md:py-2  md:px-4 w-full gap-2 border border-theme-color rounded-lg ${
                                                selectedOption === 'File'
                                                    ? ''
                                                    : 'opacity-50'
                                            }`}
                                            onClick={() => {
                                                setSelectedOption('File');
                                            }}
                                        >
                                            <img
                                                className="hidden xs:inline-block"
                                                src={resolveImgURL(
                                                    '/AddStudents/DownloadIcon.png',
                                                )}
                                                width="20"
                                                alt="File"
                                                height="20"
                                            />
                                            <p className=" font-light text-sm lg:text-base text-left">
                                                <span className="hidden sm:inline-block">
                                                    Invite from
                                                </span>
                                                <span> CSV file</span>
                                            </p>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Second Section */}
                        <div className="col-span-2 p-1 md:p-2 w-full flex flex-col h-full">
                            <div className="flex flex-row justify-end">
                                <img
                                    src={resolveImgURL('/CrossIcon.png')}
                                    alt="cross mark"
                                    width="29"
                                    height="29"
                                    className="  sm:opacity-50 hover:opacity-100 cursor-pointer"
                                    onClick={onClose}
                                />
                            </div>
                            {/* Second Section Container */}
                            <div className="tab:p-3 w-full flex flex-row justify-center h-full">
                                <div className="w-[95%] lg:w-10/12 pt-4 pb-6">
                                    {selectedOption === 'Link' && (
                                        <InviteViaLink />
                                    )}
                                    {selectedOption === 'Email' && (
                                        <InviteViaEmail />
                                    )}
                                    {selectedOption === 'File' && (
                                        <InviteViaCSVFile />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddStudentsPortal;
