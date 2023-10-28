import React from 'react';
import resolveImgURL from '../../../../utlis/resolveImgURL';

type FileUploadProcessProps = {
    values: Record<string, any>;
    ImportFile: () => void;
};
const FileUploadProcess: React.FC<FileUploadProcessProps> = ({
    values,
    ImportFile,
}) => {
    return (
        <>
            <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-4">
                    <div className="flex flex-row items-center justify-between">
                        {/* Display PDF logo and file name */}
                        <div className="flex flex-row gap-2 justify-start items-center  font-light">
                            <span>
                                <img
                                    src={resolveImgURL('/PDF_logo.png')}
                                    alt="PDF"
                                    width="full"
                                    height="full"
                                    loading="lazy"
                                />
                            </span>
                            <span>
                                <p className="truncate w-16 xs:max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl ">
                                    {values.file.name}
                                </p>
                            </span>
                        </div>
                        {/* Display file size */}
                        <div className="border border-theme-color p-1 text-sm xs:text-base">
                            {Math.floor(values.file.size / 1024)} KB
                        </div>
                    </div>
                    {/* Display progress for checking uploaded file for uploading it as the book */}
                    {/*  TODO logic for showing progress while uploading file */}
                    <div className="w-full rounded-lg bg-gray-200 h-3">
                        <div className="w-full h-full rounded-lg bg-theme-color"></div>
                    </div>
                </div>
                <button
                    type="button"
                    className=" bg-theme-color text-white px-8 py-2 w-fit"
                    onClick={ImportFile}
                >
                    Import
                </button>
                <p className=" font-light text-base md:text-lg lg:text-xl text-left w-full">
                    Once the import has completed, your students will receive an
                    email to set up password and other required information
                </p>
            </div>
        </>
    );
};

export default FileUploadProcess;
