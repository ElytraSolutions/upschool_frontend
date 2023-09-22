import React, { useState } from 'react';
import LinkIcon from '../../../assets/LinkIcon.png';
import EmailIcon from '../../../assets/EmailIcon.png';
import DownloadIcon from '../../../assets/DownloadIcon.png';
import InviteViaLink from './InviteViaLink';
import InviteViaEmail from './InviteViaEmail';
import InviteViaCSVFile from './InviteViaCSVFile';
type AddStudentsPortalProps = {
    onClose: () => void;
};

const AddStudentsPortal: React.FC<AddStudentsPortalProps> = ({ onClose }) => {
    const [selectedOption, setSelectedOption] = useState<string>('Link');
    return (
        <>
            {/* Container */}
            <div className="fixed top-0 z-20 h-full w-full flex flex-col justify-center items-center bg-black/60">
                {/* Layout */}
                <div className="w-[95%] lg:w-11/12 xl:w-3/4 bg-white text-theme-color">
                    {/* Sections  */}
                    <div className="grid grid-cols-3 divide-x divide-theme-color/50">
                        {/* First Section */}
                        <div className="col-span-1 p-5 w-full flex flex-row justify-center items-center">
                            {/* First Section Container */}
                            <div className="w-[95%] lg:w-10/12">
                                {/* First Section Layout */}
                                <div className="flex flex-col gap-2 sm:gap-4 md:gap-6 lg:gap-9">
                                    {/* First two rows */}
                                    <div className="flex flex-col w-full">
                                        <p className="font-semibold text-base lg:text-xl">
                                            Invite Students
                                        </p>
                                        <p className=" font-light text-sm lg:text-base truncate">
                                            Invite students from your class
                                        </p>
                                    </div>
                                    {/* Remainig four rows */}
                                    <div className="flex flex-col gap-4">
                                        <p className="font-semibold text-base lg:text-xl">
                                            Choose an invite option
                                        </p>
                                        {/* Button: Invite via Share Link */}
                                        <button
                                            type="button"
                                            className={`py-2  px-4 flex flex-row justify-start items-center w-full gap-2 border border-theme-color rounded-lg ${
                                                selectedOption === 'Link'
                                                    ? ''
                                                    : 'opacity-50'
                                            }`}
                                            onClick={() => {
                                                setSelectedOption('Link');
                                            }}
                                        >
                                            <img
                                                src={LinkIcon}
                                                width="20px"
                                                alt="Link"
                                                height="20px"
                                            />
                                            <p className=" font-light text-sm lg:text-base truncate text-left">
                                                Invite via Share Link
                                            </p>
                                        </button>
                                        {/* Button: Invite via Email */}
                                        <button
                                            type="button"
                                            className={`py-2  px-4 flex flex-row justify-start items-center w-full gap-2 border border-theme-color rounded-lg ${
                                                selectedOption === 'Email'
                                                    ? ''
                                                    : 'opacity-50'
                                            }`}
                                            onClick={() => {
                                                setSelectedOption('Email');
                                            }}
                                        >
                                            <img
                                                src={EmailIcon}
                                                width="20px"
                                                alt="Email"
                                                height="20px"
                                            />
                                            <p className=" font-light text-sm lg:text-base truncate text-left">
                                                Invite via Email
                                            </p>
                                        </button>
                                        {/* Button: Invite from CSV file */}
                                        <button
                                            type="button"
                                            className={`py-2  px-4 flex flex-row justify-start items-center w-full gap-2 border border-theme-color rounded-lg ${
                                                selectedOption === 'File'
                                                    ? ''
                                                    : 'opacity-50'
                                            }`}
                                            onClick={() => {
                                                setSelectedOption('File');
                                            }}
                                        >
                                            <img
                                                src={DownloadIcon}
                                                width="20px"
                                                alt="File"
                                                height="20px"
                                            />
                                            <p className=" font-light text-sm lg:text-base truncate text-left">
                                                Invite from CSV file
                                            </p>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Second Section */}
                        <div className="col-span-2 p-5  w-full flex flex-row justify-center items-center">
                            <div className="w-[95%] lg:w-10/12">
                                {selectedOption === 'Link' && <InviteViaLink />}
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
                <button
                    type="button"
                    className="bg-theme-color text-white"
                    onClick={onClose}
                >
                    Close
                </button>
            </div>
        </>
    );
};

export default AddStudentsPortal;
