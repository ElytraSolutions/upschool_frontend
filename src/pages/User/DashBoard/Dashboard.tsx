import React, { useEffect, useState } from 'react';
import DashboardContent from './DashboardContent';
import MyCourses from './MyCourses';
import MyBooks from './MyBooks';
import MyDonationsAndPurchases from './MyDonationsAndPurchases';
import { useNavigate } from 'react-router-dom';
import Setting from './Setting';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import { UserDashboardSidebar as Sidebar } from '../../../parts/UserDashboard/UserDashboardSidebar';
import useScreenWidthAndHeight from '../../../hooks/useScreenWidthAndHeight';
import axiosInstance from '../../../config/Axios';

interface DashboardProps {}

type OutletContextType = {
    isDashboardNavbarOpen: boolean;
};

interface Course {
    name: string;
    slug: string;
    thumbnail: string; // Assuming 'thumbnail' is a property in your Course type
    // Add other properties as needed
}

interface EligibleCourse {
    name: string;
    slug: string;
    certificate_url: string;
    img_url: string;
    email_sent: number;
}

const Dashboard: React.FC<DashboardProps> = () => {
    const [courses, setCourses] = useState([]);
    const [eligibleCourses, setEligibleCourses] = useState<EligibleCourse[]>(
        [],
    );
    const navigate = useNavigate();
    const [searchParams, _setSearchParams] = useSearchParams();
    // Using the url
    // const [option, setOption] = useState<string>(
    //     searchParams.get('option') || 'Dashboard',
    // );
    // console.log('option', option);

    useEffect(() => {
        (async () => {
            try {
                const resp = await axiosInstance.get('/data/user/courses');
                setCourses(resp.data.data.completed);
                // console.log(resp.data.data.completed);
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);

    useEffect(() => {
        // console.log('Runned');
        setEligibleCourses([]);
        if (courses) {
            courses.forEach(async (course: Course) => {
                try {
                    const resp = await axiosInstance.post(
                        `/data/courses/${course.slug}/complete`,
                    );
                    // console.log('resp', resp.data.completion.email_sent);
                    setEligibleCourses((prevCourses) => {
                        return [
                            ...prevCourses,
                            {
                                name: course.name,
                                slug: course.slug,
                                certificate_url: resp.data.certificate_url,
                                img_url: course.thumbnail,
                                email_sent: resp.data.completion.email_sent,
                            },
                        ];
                    });
                } catch (error) {
                    setEligibleCourses((prevCourses) => {
                        return [
                            ...prevCourses,
                            {
                                name: course.name,
                                slug: course.slug,
                                certificate_url: `/certificate/${course.slug}`,
                                img_url: course.thumbnail,
                                email_sent: 2,
                            },
                        ];
                    });
                    console.log(error);
                }
            });
        }
    }, [courses]);

    // console.log('searchParams', searchParams);
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = 'Dashboard | Upschool';
    }, []);
    const { isTabScreen } = useScreenWidthAndHeight();

    const { isDashboardNavbarOpen } = useOutletContext<OutletContextType>();
    const [selectedOption, setSelectedOption] = useState<string>(
        searchParams.get('option') || 'Dashboard',
    );

    const handleOptionClick = (option: string) => {
        setSelectedOption(option);
        navigate(`/dashboard?option=${option}`);
    };

    useEffect(() => {
        setSelectedOption(searchParams.get('option') || 'Dashboard');
        // console.log('option', selectedOption);
    }, [searchParams.get('option')]); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className={`flex h-screen w-full pt-[4rem] md:pt-[6rem]`}>
            {/* Sidebar */}
            {isTabScreen ? (
                <Sidebar
                    selectedOption={selectedOption}
                    handleClick={handleOptionClick}
                />
            ) : (
                isDashboardNavbarOpen && (
                    <Sidebar
                        selectedOption={selectedOption}
                        handleClick={handleOptionClick}
                    />
                )
            )}

            {/* Content */}
            <div className=" h-full w-full tab:ml-[20%] tab:w-4/5 bg-[#cecece]/20  lg:ml-[17%] lg:w-[83%]">
                {/* p-2 md:px-4 xlarge:px-6 xxlarge:px-8 h-full w-full */}

                {/* Content specific to the selected option */}
                {selectedOption === 'Dashboard' && (
                    <DashboardContent handleOptionClick={handleOptionClick} />
                )}
                {selectedOption === 'My Courses' && (
                    <MyCourses
                        eligibleCourses={eligibleCourses.slice(
                            0,
                            courses.length,
                        )}
                    />
                )}
                {selectedOption === 'My Books' && <MyBooks />}
                {selectedOption === 'My Donations And Purchase' && (
                    <MyDonationsAndPurchases />
                )}
                {selectedOption === 'Setting' && <Setting />}
            </div>
        </div>
    );
};

export default Dashboard;
