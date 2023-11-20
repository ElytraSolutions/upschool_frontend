import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './FeaturedCourses.css';
import { NavLink } from 'react-router-dom';
import useCourses from '../../hooks/useCourses';
import resolveImgURL from '../../utlis/resolveImgURL';
import useCourseCategories from '../../hooks/useCourseCategories';
// import { Category } from '@mui/icons-material';
const FeaturedCourses = () => {
    const courses = useCourses();
    const categories = useCourseCategories();
    console.log(categories);

    return (
        <>
            <div className="flex justify-center w-full h-fit py-6">
                <div className="flex flex-col gap-5 w-full lg:w-11/12 h-fit ">
                    <p className="p-2 text-font-color text-2xl sm:text-4xl  lg:text-5xl  font-medium font-lexend">
                        Featured Courses
                    </p>
                    <div className="relative p-1 md:px-4 pb-10  ">
                        <Carousel
                            additionalTransfrom={0}
                            arrows
                            autoPlay
                            autoPlaySpeed={3000}
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
                            // swipeable
                        >
                            {courses.slice(0, 6).map((course, index) => (
                                <div
                                    key={index}
                                    className="relative h-[530px] w-full rounded-lg overflow-hidden select-none "
                                >
                                    <NavLink to={`/course/${course.slug}`}>
                                        <img
                                            // This chnaged from course.image to resolveImgURL(course.image)
                                            src={
                                                course.thumbnail
                                                    ? resolveImgURL(
                                                          course.thumbnail,
                                                      )
                                                    : 'https://images.unsplash.com/photo-1676113415510-3a631c9e1b5a?auto=format&fit=crop&q=80&w=1935&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                            }
                                            height="100%"
                                            width="100%"
                                            alt={course.name}
                                            className="rounded-md xss:h-full absolute top-0 left-0 select-none pointer-events-none"
                                        />
                                        <p className="absolute left-1/2 -translate-x-1/2 text-[1.2rem] text-white font-poppins uppercase bottom-5 tracking-wider w-full">
                                            {
                                                categories.filter(
                                                    (category) =>
                                                        category.id ===
                                                        course.course_category_id,
                                                )[0]?.name
                                            }
                                        </p>
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
