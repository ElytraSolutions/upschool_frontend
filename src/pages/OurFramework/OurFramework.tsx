import flyimg from '/images/flyimage.png';
import Carousel from '../../components/Carousels/Carousel';
import carouselImages from '../../data/FrameworkCarouselData';

export default function OurFramework() {
    return (
        <>
            <div>
                <div
                    className="bg-cover  bg-center"
                    style={{
                        backgroundImage: `url('/images/group-of-school-children-with-teacher-on-field-trip-in-nature.jpg')`,
                    }}
                >
                    <div className="flex flex-col bg-[#181739C0] justify-center items-center p-10">
                        <img src={flyimg} className="max-h-[150px]" alt="" />
                        <span className="text-[#FDCf60] text-[22px] md:text-[36px] font-bold ">
                            Purposeful Learning
                        </span>
                        <span className="text-[#fff] text-[46px] md:text-[92px] font-bold tracking-wide">
                            Framework
                        </span>
                    </div>
                </div>
                <div className="pt-[40px]">
                    <div className="flex flex-col items-center">
                        <span className="text-[38px] md:text-[48px] text-[#242254] font-bold">
                            Introduction
                        </span>
                        <p className="mb-[1rem] text-[18px] leading-9 text-center max-w-4xl text-[#242254] ">
                            Upschool’s ‘Purposeful Learning Framework’ (PLF) is
                            a unique educational philosophy that goes beyond
                            traditional education by emphasising the importance
                            of intention-based learning. The framework is
                            designed to foster purpose-driven education that
                            equips students with the skills, knowledge and
                            values to tackle global challenges and create
                            positive social, environmental and economic impacts.
                        </p>
                    </div>
                    <Carousel images={carouselImages} />
                </div>
            </div>
        </>
    );
}
