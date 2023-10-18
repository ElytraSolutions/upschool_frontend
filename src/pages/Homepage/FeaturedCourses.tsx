import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './FeaturedCourses.css';
import { NavLink } from 'react-router-dom';
import useCourses from '../../hooks/useCourses';
const FeaturedCourses = () => {
    const courses = useCourses();
    return (
        <>
            <div className="flex justify-center w-full h-fit py-6">
                <div className="flex flex-col gap-5 w-full lg:w-11/12 h-fit ">
                    <p className="p-2 text-font-color text-xl sm:text-2xl  lg:text-4xl font-bold">
                        Featured Courses
                    </p>
                    <div className="relative p-1 md:px-10 pb-10  ">
                        <Carousel
                            additionalTransfrom={0}
                            arrows
                            autoPlay
                            autoPlaySpeed={2000}
                            centerMode={false}
                            className=""
                            containerClass=""
                            dotListClass="custom-dot-list-style"
                            draggable
                            focusOnSelect={false}
                            infinite
                            itemClass="custom-carousel-item"
                            keyBoardControl
                            minimumTouchDrag={80}
                            pauseOnHover
                            renderArrowsWhenDisabled={false}
                            renderButtonGroupOutside={false}
                            responsive={{
                                superLargeDesktop: {
                                    // the naming can be any, depends on you.
                                    breakpoint: { max: 4000, min: 3000 },
                                    items: 5,
                                },
                                desktop: {
                                    breakpoint: {
                                        max: 3000,
                                        min: 1024,
                                    },
                                    items: 4,
                                },
                                mobile: {
                                    breakpoint: {
                                        max: 464,
                                        min: 0,
                                    },
                                    items: 1,
                                },
                                tablet: {
                                    breakpoint: {
                                        max: 1024,
                                        min: 464,
                                    },
                                    items: 2,
                                },
                            }}
                            rewind={false}
                            rewindWithAnimation={false}
                            rtl={false}
                            shouldResetAutoplay
                            showDots={true}
                            renderDotsOutside={true}
                            sliderClass=""
                            slidesToSlide={1}
                            swipeable
                        >
                            {courses.slice(0, 6).map((course, index) => (
                                <div key={index} className="">
                                    <NavLink to={`/course/${course.slug}`}>
                                        <img
                                            src={course.image}
                                            height="100%"
                                            width="100%"
                                            alt={course.name}
                                            className="rounded-md h-[400px] xss:h-full "
                                        />
                                    </NavLink>
                                </div>
                            ))}
                        </Carousel>
                    </div>
                    <div className="flex justify-center text-white text-sm lg:text-base w-full h-full">
                        <NavLink to="/courses">
                            <div className="flex justify-center items-center gap-2 rounded-md px-10 py-3 w-fit h-full  bg-red-upschool">
                                <p>Explore All Courses</p>
                                <i className="fa fa-arrow-right"></i>
                            </div>
                        </NavLink>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FeaturedCourses;
