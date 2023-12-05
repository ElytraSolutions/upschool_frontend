import DoneIcon from '@mui/icons-material/Done';
const CertificateStep2Choose = ({ setOption, option }) => {
    return (
        <div className="h-full  w-[85%] mx-auto">
            <h1 className="text-font-color font-nunito font-semibold text-[1.4rem]">
                How would You like to Submit Your Work?
            </h1>
            <div className="flex flex-col mx-auto gap-y-4 mt-8">
                <div
                    onClick={() => setOption('canva')}
                    className={`border ${
                        option === 'canva' ? 'border-2' : ''
                    } w-full  border-theme-color px-4 py-3 flex gap-2 rounded-sm text-theme-color bg-[#E9E8EE] cursor-pointer group hover:bg-[#BDBCCB] transition-all justify-between`}
                >
                    <div className="flex gap-2">
                        <div
                            className={`border border-theme-color px-2 text-[0.8rem] h-[1.5rem] flex items-center justify-center rounded-sm ${
                                option === 'canva'
                                    ? 'bg-theme-color text-white'
                                    : 'bg-[#E9E8EE]'
                            } `}
                        >
                            A
                        </div>
                        By Canva Share Link
                    </div>
                    {option && option === 'canva' && (
                        <div>
                            <DoneIcon />
                        </div>
                    )}
                </div>
                <div
                    onClick={() => setOption('file')}
                    className={`border ${
                        option === 'file' ? 'border-2' : ''
                    } w-full  border-theme-color px-4 py-3 flex gap-2 rounded-sm text-theme-color bg-[#E9E8EE] cursor-pointer group hover:bg-[#BDBCCB] transition-all justify-between`}
                >
                    <div className="flex gap-2">
                        <div
                            className={`border border-theme-color px-2 text-[0.8rem] h-[1.5rem] flex items-center justify-center rounded-sm ${
                                option === 'file'
                                    ? 'bg-theme-color text-white'
                                    : 'bg-[#E9E8EE]'
                            } `}
                        >
                            B
                        </div>
                        By Uploading a file
                    </div>
                    {option && option === 'file' && (
                        <div>
                            <DoneIcon />
                        </div>
                    )}
                </div>
                <div className="text-gray-500 font-poppins text-[0.9rem]">
                    Choose One Option
                </div>
            </div>
        </div>
    );
};

export default CertificateStep2Choose;
