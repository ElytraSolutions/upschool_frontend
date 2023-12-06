import CloudUploadIcon from '@mui/icons-material/CloudUpload';
const CertificateSendFile = ({
    option,
    setCanvaLink,
    canvaLink,
    isUrlValid,
    fileLink,
    setFileLink,
}) => {
    console.log(fileLink);
    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleDragEnter = (e) => {
        e.preventDefault();
    };

    const handleDragLeave = (e) => {
        e.preventDefault();
    };

    const handleDrop = (e) => {
        e.preventDefault();

        const droppedFile = e.dataTransfer.files[0];
        setFileLink(droppedFile);
    };
    return (
        <div className="w-[90%] mx-auto mb-16 ">
            {option === 'link' && (
                <div>
                    <h1 className="text-font-color font-kumbh sm:text-[1.4rem] text-[1.2rem]">
                        Share your Canva Link of your final piece of work (Make
                        sure it meets the guidelines from the course)
                    </h1>
                    <div className="border-b border-theme-color font-nunito text-theme-color sm:text-[1.4rem] text-[1.2rem] mt-4">
                        <input
                            className={`w-full py-2 placeholder-gray-500 outline-none bg-transparent ${
                                isUrlValid(canvaLink)
                                    ? 'border-green-500'
                                    : 'border-red-500'
                            }`}
                            placeholder="Type Your Link Here"
                            type="url"
                            value={canvaLink}
                            onChange={(e) => setCanvaLink(e.target.value)}
                        />
                    </div>
                    {canvaLink && !isUrlValid(canvaLink) && (
                        <p className="text-red-500 text-sm mt-1 font-poppins text-[1.1rem]">
                            Please enter a valid URL.
                        </p>
                    )}
                </div>
            )}
            {option === 'file' && (
                <div>
                    <h1 className="text-font-color font-kumbh text-[1.4rem] ">
                        Attach your final piece of work (Make sure it meets the
                        guidelines from the course)
                    </h1>
                    <div className="w-[90%] mx-auto cursor-pointer border h-[16rem] bg-[#E9E8EE] hover:bg-[#BDBCCB] border-dashed border-theme-color mt-6 flex flex-col items-center justify-center text-theme-color transition-all">
                        {/* <div className="flex items-center justify-center flex-col">
                            <CloudUploadIcon style={{ fontSize: '4rem' }} />
                            <div className="ml-8 w-[15rem] px-2 py-1">
                                <input
                                    type="file"
                                    className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
                                    onChange={(e) =>
                                        e.target.files &&
                                        setFileLink(e.target.files[0])
                                    }
                                />
                            </div>
                        </div> */}
                        <div
                            className="flex items-center justify-center w-full cursor-pointer "
                            onDragOver={handleDragOver}
                            onDragEnter={handleDragEnter}
                            onDragLeave={handleDragLeave}
                            onDrop={handleDrop}
                        >
                            <label
                                htmlFor="dropzone-file"
                                className="flex flex-col items-center justify-center w-full h-64 cursor-pointer "
                            >
                                <div className="flex flex-col items-center justify-center pt-5 pb-6 ">
                                    <CloudUploadIcon
                                        style={{ fontSize: '3rem' }}
                                    />
                                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                        <span className="font-semibold text-theme-color">
                                            {fileLink
                                                ? `File: ${fileLink.name}`
                                                : 'Choose file or drag here'}
                                        </span>
                                    </p>
                                    <p className="text-xs text-gray-700 ">
                                        Size limit: 10MB
                                    </p>
                                </div>
                                <input
                                    id="dropzone-file"
                                    type="file"
                                    className="hidden"
                                    onChange={(e) => {
                                        e.target.files &&
                                            setFileLink(e.target.files[0]);
                                    }}
                                />
                            </label>
                        </div>

                        {/* <p>Choose file or drag here</p> */}
                    </div>
                </div>
            )}
        </div>
    );
};

export default CertificateSendFile;
