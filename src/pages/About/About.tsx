import 'font-awesome/css/font-awesome.min.css';
import backgroundVideo from '/videos/background.mp4';

import MultiImageCarousel from '../../components/Carousels/MultiImageCarousel';
import patners from '../../data/OurPatners';
import resolveImgURL from '../../utlis/resolveImgURL';

export default function About() {
    return (
        <>
            <div>
                <div className="relative z-[-1]">
                    <video
                        autoPlay
                        muted
                        loop
                        id="video-background"
                        className="absolute left-0 top-0 h-full w-full overflow-hidden  object-cover "
                    >
                        <source
                            src={backgroundVideo}
                            type="video/mp4"
                            className="w-full  "
                        />
                        Your browser does not support the video tag.
                    </video>
                    <div className="relative flex flex-col items-center justify-center bg-[#181739C0] text-center md:h-[60vh] ">
                        <img
                            src={resolveImgURL('/flyimage.png')}
                            className="pt-50 max-h-[150px]"
                            alt=""
                        />
                        <span className="text-[69px] font-bold  tracking-wide text-[#fff] ">
                            About Upschool
                        </span>
                        <span className="pb-10 text-[16px] text-[#fff] ">
                            We're changing the world through purposeful
                            education.
                        </span>
                    </div>
                </div>
                <div className="m-10 flex flex-col items-center justify-center text-center text-[#242254] md:mx-auto md:max-w-4xl">
                    <iframe
                        loading="lazy"
                        className="aspect-video w-full "
                        src="https://www.youtube.com/embed/qWOHWzGHtsA?si=8TDRUl3xHKira0WH"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                    <p className="p-4 text-[22px] font-bold leading-normal tracking-tight md:text-[28px] ">
                        We exist to empower children to make a difference in the
                        world by providing them with the skills, inspiration and
                        support to solve real world problems that have impact.
                    </p>
                    <p className="p-4">
                        Underpinning everything we do at Upschool is a deep
                        desire to empower students to find their voice, refine
                        and develop their message and teach them how to
                        collaborate with each other so that they can create the
                        change they want to see in the world.
                    </p>
                    <button className="bg-[#b81242] px-5 py-2 font-bold tracking-widest text-[#fff] transition-transform ease-in-out hover:scale-110">
                        GET FREE ACCESS <i className="fa fa-arrow-right"></i>{' '}
                    </button>
                    <p className="pt-6 text-[22px] font-semibold leading-normal tracking-tight md:text-[28px]">
                        {' '}
                        Our mission...
                    </p>
                    <p className="p-4">
                        …is to provide purposeful education for a better
                        tomorrow.
                    </p>
                    <p className="pt-6 text-[22px] font-semibold leading-normal tracking-tight md:text-[28px]">
                        {' '}
                        Our vision...
                    </p>
                    <p className="p-4">
                        …is that everyone will have access to a quality
                        education that inspires them to realise their potential
                        to improve the world.
                    </p>
                    <p className="pt-6 text-[22px] font-semibold leading-normal tracking-tight md:text-[28px]">
                        Our framework…
                    </p>
                    <p className="p-4">
                        Upschool’s ‘Purposeful Learning Framework’ (PLF) is a
                        unique educational philosophy that goes beyond
                        traditional education by emphasising the importance of
                        intention-based learning.
                    </p>
                    <a
                        href="/our-framework/"
                        className="decoration-none text-[#b81242] underline"
                    >
                        Read more about our framework
                    </a>

                    <div className="grid grid-cols-1 gap-4 pt-20 md:grid-cols-2">
                        <div className="md:text-left">
                            <p className="p-4 text-[22px] font-bold leading-normal tracking-tight md:text-[28px] ">
                                100% Free Education
                            </p>
                            <p className="p-4">
                                Upschool’s ‘Purposeful Learning Framework’ (PLF)
                                is a unique educational philosophy that goes
                                beyond traditional education by emphasising the
                                importance of intention-based learning.
                            </p>
                            <button className="mx-5 bg-[#b81242] px-5 py-2 font-bold tracking-widest text-[#fff] transition-transform ease-in-out hover:scale-110">
                                GET FREE ACCESS{' '}
                                <i className="fa fa-arrow-right"></i>
                            </button>
                        </div>
                        <img
                            src={resolveImgURL('/about/about-us.jpg')}
                            alt=""
                        />
                    </div>
                    <div className="grid grid-cols-1 gap-4 pt-20 md:grid-cols-2">
                        <img
                            src={resolveImgURL('/about/about-us-images.jpg')}
                            alt=""
                            className="order-last md:order-first"
                        />
                        <div className="md:text-left">
                            <p className="p-4 text-[22px] font-bold leading-normal tracking-tight md:text-[28px] ">
                                We're in the Business of Education With Purpose
                            </p>
                            <p className="p-4">
                                We’re working with schools across the globe to
                                empower children to make a difference. Within
                                our platform, we provide students with the
                                skills, inspiration and support to solve
                                real-world problems that have meaningful and
                                long-term impacts on communities across the
                                world.
                            </p>
                            <button className="mx-5 bg-[#b81242] px-5 py-2 font-bold tracking-widest text-[#fff] transition-transform ease-in-out hover:scale-110">
                                GET FREE ACCESS{' '}
                                <i className="fa fa-arrow-right"></i>{' '}
                            </button>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-4 pt-20 md:grid-cols-2">
                        <div className="md:text-left">
                            <p className="p-4 text-[22px] font-bold leading-normal tracking-tight md:text-[28px] ">
                                We Believe in Student Empowerment
                            </p>
                            <p className="p-4">
                                We believe that true education allows students
                                to find purpose and have an impact on the world
                                around them. When children are empowered to feel
                                that they can make real and meaningful changes
                                in the lives of others, they develop the
                                confidence, resilience and empathy to live their
                                lives in a way that will make the future
                                brighter for everyone involved. The only
                                constant in education is change, and that change
                                starts with you!
                            </p>
                            <button className="mx-5 bg-[#b81242] px-5 py-2 font-bold tracking-widest text-[#fff] transition-transform ease-in-out hover:scale-110">
                                GET FREE ACCESS{' '}
                                <i className="fa fa-arrow-right"></i>{' '}
                            </button>
                        </div>
                        <img
                            src={resolveImgURL('/about/about-us-images-1.jpg')}
                            alt=""
                        />
                    </div>
                    <div className="grid grid-cols-1 gap-4 pt-20 md:grid-cols-2">
                        <img
                            src={resolveImgURL('/about/about-us-images-3.jpg')}
                            alt=""
                            className="order-last md:order-first"
                        />
                        <div className="md:text-left">
                            <p className="p-4 text-[22px] font-bold leading-normal tracking-tight md:text-[28px] ">
                                Sustainable Development Goals Aligned
                            </p>
                            <p className="p-4">
                                The Sustainable Development Goals (SDGs) are a
                                collection of 17 interlinked global goals
                                designed to be a blueprint to achieve a better
                                future for all. They were set up in 2015 by the
                                United Nations General Assembly and are intended
                                to be achieved by the year 2030.
                                <br />
                                Our courses give children the opportunity to
                                work toward solving problems associated with the
                                goals that they are passionate about.
                            </p>
                            <button className="mx-5 bg-[#b81242] px-5 py-2 font-bold tracking-widest text-[#fff] transition-transform ease-in-out hover:scale-110">
                                GET FREE ACCESS{' '}
                                <i className="fa fa-arrow-right"></i>{' '}
                            </button>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-4 pt-20 md:grid-cols-2">
                        <div className="md:text-left">
                            <p className="p-4 text-[22px] font-bold leading-normal tracking-tight md:text-[28px] ">
                                Our Charity Partners
                            </p>
                            <p className="p-4">
                                If we want to change the world, we have to
                                collaborate with organisations that have the
                                knowledge, ability and drive to take the
                                necessary actions. We have collaborated with
                                charities to raise awareness of the issues they
                                are trying to resolve, and to provide a pathway
                                for people to support these organisations.
                                Upschool supports these charities to do the work
                                that they do.
                            </p>
                            <button className="mx-5 bg-[#b81242] px-5 py-2 font-bold tracking-widest text-[#fff] transition-transform ease-in-out hover:scale-110">
                                GET FREE ACCESS{' '}
                                <i className="fa fa-arrow-right"></i>{' '}
                            </button>
                        </div>
                        <img
                            src={resolveImgURL('/about/about-us-images-4.jpg')}
                            alt=""
                        />
                    </div>
                    <div>
                        <p className="pt-24 text-[32px] font-bold leading-normal tracking-tight md:text-[48px] ">
                            Our Team
                        </p>
                        <img
                            src={resolveImgURL('/about/Team-Photo.png')}
                            className="py-6"
                            alt=""
                        />
                        <p className="p-4 text-[22px] font-bold leading-normal tracking-tight md:text-[28px] ">
                            We're Experienced Change Makers!
                        </p>
                        <p>
                            The expertise in our team is vast – and every member
                            of our team is mission driven and passionate about
                            creating global change.
                        </p>
                        <p className="p-4 text-[22px] font-semibold leading-normal tracking-tight md:text-[22px] ">
                            Visit Our Team Page
                        </p>
                        <a
                            href="/our-framework/"
                            className="decoration-none text-[#b81242] underline"
                        >
                            Click here
                        </a>
                    </div>
                </div>
                <div
                    className="bg-cover  bg-center"
                    style={{
                        backgroundImage: `url(${resolveImgURL(
                            `/about/back.jpg`,
                        )})`,
                    }}
                >
                    <div className="flex flex-col items-center justify-center bg-[#181739C0] p-10 text-center">
                        <span className="max-w-xl p-4 text-[22px] font-bold text-[#Fff] md:text-[36px] ">
                            Students From Over 100 Countries Are Learning With
                            Upschool.
                        </span>
                        <span className="pb-10 text-[16px] font-light tracking-wide text-[#fff] md:text-[16px]">
                            Join the movement today!
                        </span>
                        <button className="mx-5 bg-[#b81242] px-10 py-3 font-bold tracking-widest text-[#fff] transition-transform ease-in-out hover:scale-110">
                            GET FREE ACCESS{' '}
                            <i className="fa fa-arrow-right"></i>{' '}
                        </button>
                    </div>
                </div>

                <div className="hidden md:block ">
                    <p className="p-10 text-center text-[24px] font-bold leading-normal tracking-tight text-[#242254] md:text-[48px]">
                        Our Partners & Collaborators
                    </p>
                    <MultiImageCarousel images={patners} />
                </div>
            </div>
        </>
    );
}
