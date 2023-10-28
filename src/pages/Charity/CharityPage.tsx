import CharityCard from '../../components/Cards/Charity/CharityCard';
import { charity } from '../../data/CharityCardData';

const CharityPage = () => {
    return (
        <>
            <div className="grid gap-y-10 pb-10">
                <div className="relative max-h-[400px]">
                    <div className="relative flex">
                        <div className="w-full h-[400px] relative">
                            <img
                                src="./images/Charity/Cover/soTheyCan.jpg"
                                alt="Your Image"
                                className="w-full h-[400px] object-cover"
                            />
                            {/*pseudo-element for the overlay */}
                            <div className="absolute top-0 left-0 w-full h-full bg-theme-color   opacity-60 z-0"></div>
                        </div>
                        <div className="absolute w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-center">
                            <h2 className="md:text-[50px] md:font-bold text-[33px] font-bold font-sans">
                                OUR CHARITY PARNTERS
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center pt-1">
                    <div className="max-w-[1140px] p-2 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-col-1 xm gap-x-6 gap-y-10">
                        {charity.map((charity) => (
                            <CharityCard key={charity.id} charity={charity} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default CharityPage;
