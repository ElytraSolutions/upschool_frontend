import SmallBookCard from './SmallBookCard';
import SmallProjectCard from './SmallProjectCard';

function SelectedSection() {
    return (
        <>
            <div className="justify-center">
                <div className="bg-[#F4F4F4] rounded py-4 px-2 tab:mx-2 mx-0 tab:my-0 my-3 grid gap-3">
                    <div className="text-left text-theme-color font-extrabold text-2xl lg:pl-1 md:pl-2">
                        <h2>Your Selection</h2>
                    </div>
                    <div className="text-left text-theme-color font-bold text-xl lg:pl-1 md:pl-2">
                        <p>Book</p>
                    </div>
                    <div className="flex lg:pl-1 md:pl-2">
                        <SmallBookCard />
                    </div>
                    <div className="text-left text-theme-color font-bold text-xl lg:pl-1 md:pl-2">
                        <p>Project</p>
                    </div>
                    <div className="flex justify-center">
                        <SmallProjectCard />
                    </div>
                    <div className="flex justify-center py-3">
                        <button className="text-theme-color underline underline-offset-4 text-xs xm:text-sm lg:text-base hover:cursor-pointer">
                            Select Another Project
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SelectedSection;
