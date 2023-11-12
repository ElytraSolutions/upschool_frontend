import { Link } from 'react-router-dom';
import useUser from '../../hooks/useUser';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

function CourseTestimonial() {
    const { user } = useUser();
    return (
        <>
            <div className="grid mt-2">
                <div className="flex justify-center w-full my-8">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        id="quote-left"
                        transform="rotate(180)"
                        className="w-[50px] h-[50px]"
                    >
                        <path
                            d="M334.125 256h78.125v62.5c0 34.473-28.027 62.5-62.5 62.5h-7.812a23.382 23.382 0 0 0-23.438 23.438v46.875a23.382 23.382 0 0 0 23.438 23.438h7.812c86.328 0 156.25-69.922 156.25-156.25V84.125c0-25.879-20.996-46.875-46.875-46.875h-125c-25.879 0-46.875 20.996-46.875 46.875v125c0 25.879 20.996 46.875 46.875 46.875zm-281.25 0H131v62.5c0 34.473-28.027 62.5-62.5 62.5h-7.812a23.382 23.382 0 0 0-23.438 23.438v46.875a23.382 23.382 0 0 0 23.438 23.438H68.5c86.328 0 156.25-69.922 156.25-156.25V84.125c0-25.879-20.996-46.875-46.875-46.875h-125C26.996 37.25 6 58.246 6 84.125v125C6 235.004 26.996 256 52.875 256z"
                            fill="#3c74cf"
                        ></path>
                    </svg>
                </div>
                <div className="font-sans grid justify-center text-center">
                    <div className="flex max-w-[1120px] tracking-wide mb-8">
                        <p>
                            “It has been a privilege for our children to be a
                            part of the initial Upschool program focussing on
                            creating a Changemaking Community. Our students have
                            been engaged from the outset, and we have seen a
                            measurable improvement in not only their literacy
                            skills but also in their empathy towards others and
                            their understanding of how to connect to communities
                            both locally and abroad. The resources that are
                            provided are outstanding and have kept our students
                            motivated towards their goals.{' '}
                        </p>
                    </div>
                    <div className="flex max-w-[1120px] tracking-wide text-[21px] font-bold text-[#3c74cf] mb-8">
                        <p>
                            It has transformed the way that we approach teaching
                            within the school, giving our students an authentic
                            purpose and opportunity to make a real world
                            difference.
                        </p>
                    </div>
                    <div className="max-w-[1120px] tracking-wide text-base">
                        <p>
                            As a school we are committed to the work that
                            Upschool is doing and are looking forward to our
                            next work with them.”
                        </p>
                        <strong>
                            Daniel Frew (Principal, Lower Plenty Primary School,
                            Melbourne)
                        </strong>
                    </div>
                </div>
                <div className="flex justify-center w-full my-8">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        id="quote-right"
                        className="w-[50px] h-[50px]"
                    >
                        <path
                            d="M334.125 256h78.125v62.5c0 34.473-28.027 62.5-62.5 62.5h-7.812a23.382 23.382 0 0 0-23.438 23.438v46.875a23.382 23.382 0 0 0 23.438 23.438h7.812c86.328 0 156.25-69.922 156.25-156.25V84.125c0-25.879-20.996-46.875-46.875-46.875h-125c-25.879 0-46.875 20.996-46.875 46.875v125c0 25.879 20.996 46.875 46.875 46.875zm-281.25 0H131v62.5c0 34.473-28.027 62.5-62.5 62.5h-7.812a23.382 23.382 0 0 0-23.438 23.438v46.875a23.382 23.382 0 0 0 23.438 23.438H68.5c86.328 0 156.25-69.922 156.25-156.25V84.125c0-25.879-20.996-46.875-46.875-46.875h-125C26.996 37.25 6 58.246 6 84.125v125C6 235.004 26.996 256 52.875 256z"
                            fill="#3c74cf"
                        ></path>
                    </svg>
                </div>
                {user === null && (
                    <div className="flex my-2 justify-center mb-8">
                        <Link to="/register">
                            <button className="bg-[#3c74cf] rounded-sm font-thin text-[18px] px-11 py-2">
                                REGISTER
                                <span>
                                    <KeyboardArrowRightIcon
                                        style={{ color: '#242254' }}
                                    />
                                </span>
                            </button>
                        </Link>
                    </div>
                )}
            </div>
        </>
    );
}

export default CourseTestimonial;
