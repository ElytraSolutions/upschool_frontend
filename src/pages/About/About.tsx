import flyimg from '/images/flyimage.png';
import 'font-awesome/css/font-awesome.min.css';
import backgroundVideo from '/videos/background.mp4';
import MultiImageCarousel from '../../components/Carousels/MultiImageCarousel';
import patners from '../../data/OurPatners';

export default function About() {
    return (
        <>
            <div>
                <div className="relative">
                    <video
                        autoPlay
                        muted
                        loop
                        id="video-background"
                        className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 object-cover "
                    >
                        <source
                            src={backgroundVideo}
                            type="video/mp4"
                            className="w-full  "
                        />
                        Your browser does not support the video tag.
                    </video>
                    <div className="relative z-10 flex flex-col bg-[#181739C0] justify-center items-center md:h-[60vh] text-center ">
                        <img
                            src={flyimg}
                            className="max-h-[150px] pt-50"
                            alt=""
                        />
                        <span className="text-[#fff] text-[69px]  font-bold tracking-wide ">
                            About Upschool
                        </span>
                        <span className="text-[#fff] text-[16px] pb-10 ">
                            We're changing the world through purposeful
                            education.
                        </span>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center text-[#242254] m-10 text-center md:max-w-4xl md:mx-auto">
                    <iframe
                        className="w-full aspect-video "
                        src="https://www.youtube.com/embed/qWOHWzGHtsA?si=8TDRUl3xHKira0WH"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen
                    ></iframe>
                    <p className="font-bold text-[22px] md:text-[28px] tracking-tight leading-normal p-4 ">
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
                    <button className="bg-[#b81242] text-[#fff] font-bold px-5 py-2 tracking-widest hover:transform hover:scale-110 transform transition-transform ease-in-out">
                        GET FREE ACCESS <i className="fa fa-arrow-right"></i>{' '}
                    </button>
                    <p className="font-semibold text-[22px] md:text-[28px] tracking-tight leading-normal pt-6">
                        {' '}
                        Our mission...
                    </p>
                    <p className="p-4">
                        …is to provide purposeful education for a better
                        tomorrow.
                    </p>
                    <p className="font-semibold text-[22px] md:text-[28px] tracking-tight leading-normal pt-6">
                        {' '}
                        Our vision...
                    </p>
                    <p className="p-4">
                        …is that everyone will have access to a quality
                        education that inspires them to realise their potential
                        to improve the world.
                    </p>
                    <p className="font-semibold text-[22px] md:text-[28px] tracking-tight leading-normal pt-6">
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
                        className="underline text-[#b81242] decoration-none"
                    >
                        Read more about our framework
                    </a>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-20">
                        <div className="md:text-left">
                            <p className="font-bold text-[22px] md:text-[28px] tracking-tight leading-normal p-4 ">
                                100% Free Education
                            </p>
                            <p className="p-4">
                                Upschool’s ‘Purposeful Learning Framework’ (PLF)
                                is a unique educational philosophy that goes
                                beyond traditional education by emphasising the
                                importance of intention-based learning.
                            </p>
                            <button className="bg-[#b81242] text-[#fff] font-bold mx-5 px-5 py-2 tracking-widest hover:transform hover:scale-110 transform transition-transform ease-in-out">
                                GET FREE ACCESS{' '}
                                <i className="fa fa-arrow-right"></i>{' '}
                            </button>
                        </div>
                        <img src="/images/about/about-us.jpg" alt="" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-20">
                        <img
                            src="/images/about/about-us-images.jpg"
                            alt=""
                            className="order-last md:order-first"
                        />
                        <div className="md:text-left">
                            <p className="font-bold text-[22px] md:text-[28px] tracking-tight leading-normal p-4 ">
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
                            <button className="bg-[#b81242] text-[#fff] font-bold mx-5 px-5 py-2 tracking-widest hover:transform hover:scale-110 transform transition-transform ease-in-out">
                                GET FREE ACCESS{' '}
                                <i className="fa fa-arrow-right"></i>{' '}
                            </button>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-20">
                        <div className="md:text-left">
                            <p className="font-bold text-[22px] md:text-[28px] tracking-tight leading-normal p-4 ">
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
                            <button className="bg-[#b81242] text-[#fff] font-bold mx-5 px-5 py-2 tracking-widest hover:transform hover:scale-110 transform transition-transform ease-in-out">
                                GET FREE ACCESS{' '}
                                <i className="fa fa-arrow-right"></i>{' '}
                            </button>
                        </div>
                        <img src="/images/about/about-us-images-1.jpg" alt="" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-20">
                        <img
                            src="/images/about/about-us-images-3.jpg"
                            alt=""
                            className="order-last md:order-first"
                        />
                        <div className="md:text-left">
                            <p className="font-bold text-[22px] md:text-[28px] tracking-tight leading-normal p-4 ">
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
                            <button className="bg-[#b81242] text-[#fff] font-bold mx-5 px-5 py-2 tracking-widest hover:transform hover:scale-110 transform transition-transform ease-in-out">
                                GET FREE ACCESS{' '}
                                <i className="fa fa-arrow-right"></i>{' '}
                            </button>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-20">
                        <div className="md:text-left">
                            <p className="font-bold text-[22px] md:text-[28px] tracking-tight leading-normal p-4 ">
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
                            <button className="bg-[#b81242] text-[#fff] font-bold mx-5 px-5 py-2 tracking-widest hover:transform hover:scale-110 transform transition-transform ease-in-out">
                                GET FREE ACCESS{' '}
                                <i className="fa fa-arrow-right"></i>{' '}
                            </button>
                        </div>
                        <img src="/images/about/about-us-images-4.jpg" alt="" />
                    </div>
                    <div>
                        <p className="font-bold text-[32px] md:text-[48px] tracking-tight leading-normal pt-24 ">
                            Our Team
                        </p>
                        <img
                            src="/images/about/Team-Photo.png"
                            className="py-6"
                            alt=""
                        />
                        <p className="font-bold text-[22px] md:text-[28px] tracking-tight leading-normal p-4 ">
                            We're Experienced Change Makers!
                        </p>
                        <p>
                            The expertise in our team is vast – and every member
                            of our team is mission driven and passionate about
                            creating global change.
                        </p>
                        <p className="font-semibold text-[22px] md:text-[22px] tracking-tight leading-normal p-4 ">
                            Visit Our Team Page
                        </p>
                        <a
                            href="/our-framework/"
                            className="underline text-[#b81242] decoration-none"
                        >
                            Click here
                        </a>
                    </div>
                </div>
                <div
                    className="bg-cover  bg-center"
                    style={{
                        backgroundImage: `url('/images/about/back.jpg')`,
                    }}
                >
                    <div className="flex flex-col bg-[#181739C0] justify-center items-center p-10 text-center">
                        <span className="text-[#Fff] text-[22px] md:text-[36px] font-bold max-w-xl p-4 ">
                            Students From Over 100 Countries Are Learning With
                            Upschool.
                        </span>
                        <span className="text-[#fff] text-[16px] md:text-[16px] font-light tracking-wide pb-10">
                            Join the movement today!
                        </span>
                        <button className="bg-[#b81242] text-[#fff] font-bold mx-5 px-10 py-3 tracking-widest hover:transform hover:scale-110 transform transition-transform ease-in-out">
                            GET FREE ACCESS{' '}
                            <i className="fa fa-arrow-right"></i>{' '}
                        </button>
                    </div>
                </div>

                <div className="hidden md:block ">
                    <p className="text-[#242254] font-bold text-[24px] md:text-[48px] tracking-tight leading-normal pt-10 text-center p-10 ">
                        Our Partners & Collaborators
                    </p>
                    <MultiImageCarousel images={patners} />
                </div>
            </div>
        </>
    );
}
