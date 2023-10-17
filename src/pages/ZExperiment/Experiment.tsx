import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './experimet.css';
import { NavLink } from 'react-router-dom';
import useCourses from '../../hooks/useCourses';

// const CourseInfo = [
//     {
//         name: 'build-a-library-and-change-the-world',
//         image: 'https://upschool.co/wp-content/uploads/2023/05/library-2.png',
//     },
//     {
//         name: 'be-the-change',
//         image: 'https://upschool.co/wp-content/uploads/2023/05/be-the-change-1-1.png',
//     },
//     {
//         name: 'write-a-book',
//         image: 'https://upschool.co/wp-content/uploads/2023/05/Write-a-Book-1.png',
//     },
//     {
//         name: 'the-solar-system-and-beyond',
//         image: 'https://upschool.co/wp-content/uploads/2023/05/Solar-System-Homepage-Tile.png',
//     },
//     {
//         name: 'values-for-a-better-tommorrow',
//         image: 'https://upschool.co/wp-content/uploads/2023/05/values-1.png',
//     },
//     {
//         name: 'it-starts-with-you',
//         image: 'https://upschool.co/wp-content/uploads/2023/05/It-Starts-With-You-2.png',
//     },
//     {
//         name: 'the-power-of-one',
//         image: 'https://upschool.co/wp-content/uploads/2023/05/Power-of-One-Homepage-Tile.png',
//     },
// ];

const Experiment = () => {
    const courses = useCourses();
    // console.log(courses);
    return (
        <>
            <div className="relative p-1 md:p-10 pb-8">
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
            {/* <div>
            <iframe src="demo_iframe.htm" style="height:100%;width:100%;" title="Iframe Example"></iframe>
            </div> */}

            {/* <div
                style={{
                    position: 'relative',
                    width: '100%',
                    height: 0,
                    paddingTop: '56.2225%',
                    paddingBottom: 0,
                    boxShadow: '0 2px 8px 0 rgba(63, 69, 81, 0.16)',
                    marginTop: '1.6em',
                    marginBottom: '0.9em',
                    overflow: 'hidden',
                    borderRadius: '8px',
                    willChange: 'transform',
                }}
            >
                <iframe
                    loading="lazy"
                    style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        top: 0,
                        left: 0,
                        border: 'none',
                        padding: 0,
                        margin: 0,
                    }}
                    src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAFxhURkpNw&#x2F;view?embed"
                    // allowfullscreen="allowfullscreen"
                    // allow="fullscreen"
                ></iframe>
            </div> */}
        </>
    );
};

export default Experiment;
