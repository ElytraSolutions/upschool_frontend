import { useState, useEffect, useRef } from 'react';
import { ICourse } from '../../types/ICourse';
import EnrollCard from '../../components/Cards/EnrollCard';
import axiosInstance from '../../config/Axios';
import { NavLink, useParams } from 'react-router-dom';
import Loading from '../../components/Loading';
import useUser from '../../hooks/useUser';
import resolveImgURL from '../../utlis/resolveImgURL';

function CourseDetail() {
    const { user } = useUser();
    const [isHovered, setIsHovered] = useState(false);
    const [course, setCourse] = useState<ICourse | null>(null);
    const { slug } = useParams();
    const containerRef = useRef<HTMLDivElement | null>(null);
    const iframeRef = useRef<HTMLIFrameElement | null>(null);

    useEffect(() => {
        (async () => {
            const res = await axiosInstance.get(`/data/courses/${slug}`);
            setCourse(res.data.data);
        })();
    }, [slug]);

    const setContainerSize = () => {
        const iframe = iframeRef.current;
        const container = containerRef.current;
        if (!iframe || !container) return;
        container.style.height =
            (iframe.contentDocument?.body.scrollHeight || '300') + 'px';
    };

    const handleHover = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    if (course === null) return <Loading />;
    const descriptionURL = new URL(
        `/richContentView/${course.description}`,
        axiosInstance.defaults.baseURL,
    ).toString();
    return (
        <>
            <div className="flex flex-col">
                <div
                    className="bg-cover"
                    style={{
                        backgroundImage: `url(${resolveImgURL(
                            course.thumbnail,
                        )})`,
                    }}
                >
                    <div className="bg-[#242254c0] px-10 py-2">
                        <div className="max-w-6xl m-auto">
                            <div className="flex flex-col md:flex-row">
                                <div className="flex flex-col gap-5 py-10 md:px-10">
                                    <div
                                        className="text-3xl"
                                        style={{ color: course.theme }}
                                    >
                                        {course.tagline}
                                    </div>
                                    <div
                                        className="text-5xl font-bold"
                                        style={{ color: course.theme }}
                                    >
                                        {course.name}
                                    </div>
                                    <div className="sm:text-xl md:text-[20px] text-white">
                                        {course.intro}
                                    </div>
                                    <div style={{ color: course.theme }}>
                                        * {course.starredText}
                                    </div>
                                    {(!user || !user.id) && (
                                        <div className="flex flex-col  flex-start gap-6">
                                            <NavLink
                                                style={{
                                                    backgroundColor: !isHovered
                                                        ? course.theme
                                                        : '#ca7491',
                                                }}
                                                className="px-8 py-2 w-[160px] text-white rounded-sm hover:scale-90 transition-transform duration-300 ease-in-out "
                                                onMouseEnter={handleHover}
                                                onMouseLeave={handleMouseLeave}
                                                to="/register"
                                            >
                                                REGISTER
                                                <i className="fa fa-angle-right ml-2"></i>
                                            </NavLink>

                                            <p className="font-semibold text-white">
                                                Register for a FREE Upschool
                                                account to enrol in this course.
                                            </p>
                                        </div>
                                    )}
                                </div>
                                <EnrollCard data={course} />
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="h-max"
                    ref={containerRef}
                    id="courseContainerId"
                >
                    {course.description && (
                        <iframe
                            src={descriptionURL}
                            className="w-screen h-full"
                            ref={iframeRef}
                            id="courseIframeId"
                            onLoad={setContainerSize}
                            onResize={setContainerSize}
                        />
                    )}
                </div>
            </div>
        </>
    );
}

export default CourseDetail;
