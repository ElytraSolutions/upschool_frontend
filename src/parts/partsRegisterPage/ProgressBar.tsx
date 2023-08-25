
export default function ProgressBar() {
    return (
        <div className="grid grid-cols-10 w-full">
            <div className=" col-start-2 col-end-10 flex  flex-col text-white w-full ">
                <span className="text-md">step 2 of 3</span>
                <span className="text-xl">50% to complete</span>
                <div className="bg-white w-full h-6 rounded-s-md rounded-e-xl mt-2">
                    <div className="bg-pink-400 w-1/2 h-6 rounded-s-md rounded-e-md"></div>
                </div>
            </div>
        </div>
    );
}