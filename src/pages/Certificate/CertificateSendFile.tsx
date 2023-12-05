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
                    <div className="w-[90%] mx-auto cursor-pointer border h-[16rem] bg-[#E9E8EE] hover:bg-[#BDBCCB] border-theme-color mt-6 flex flex-col items-center justify-center text-theme-color transition-all">
                        <CloudUploadIcon style={{ fontSize: '4rem' }} />
                        <div>
                            <input
                                type="file"
                                placeholder="Choose file or drag here"
                                value={fileLink}
                                onChange={(e) => setFileLink(e.target.value)}
                            />
                        </div>
                        {/* <p>Choose file or drag here</p> */}
                    </div>
                </div>
            )}
        </div>
    );
};

export default CertificateSendFile;
