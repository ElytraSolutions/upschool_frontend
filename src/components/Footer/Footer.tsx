import upschoolLogo from '/images/logo.png';
import footerboy from '/images/footerboy.png';
import footerbackground from '/images/footerbackground.jpg';

function Footer() {
    return (
        <>
            <div
                className=" relative bg-cover  bottom-0"
                style={{
                    backgroundImage: `url('/images/footerbackground.jpg')`,
                }}
            >
                <div className="bg-[#181739F0] flex justify-center">
                    <div className="container max-w-7xl">
                        <div className="flex justify-center">
                            <div className="">
                                <img
                                    src={footerboy}
                                    className="w-[500px] md:w-[250px] pt-10"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="row justify-center">
                            <div className="flex flex-col text-[#fff] items-center">
                                <span className="text-center md:p-6 pt-6 text-2xl  font-bold md:text-5xl tracking-wide">
                                    Change Making Communities
                                </span>
                                <p className="text-[14px] tracking-wide max-w-4xl text-center md:max-w-2xl p-2 leading-6 pb-6 lg:max-w-2xl">
                                    Upschool is an{' '}
                                    <a
                                        className="underline text-[#Aeb2c2]"
                                        href="https://upschool.co/"
                                    >
                                        online learning platform
                                    </a>{' '}
                                    for students and teachers. Underpinning
                                    everything we do at{' '}
                                    <a
                                        className="underline text-[#Aeb2c2]"
                                        href="https://upschool.co/"
                                    >
                                        Upschool
                                    </a>{' '}
                                    is a deep desire to empower students to find
                                    their voice, refine and develop their
                                    message and teach them how to collaborate
                                    with each other so that they can create the
                                    change they want to see in the world.
                                </p>
                                <hr className="px-10 py-3 " />
                                <div className=" flex justify-center w-[50vw] md:w-[30vw] ">
                                    <img
                                        src={footerbackground}
                                        className="w-[300px] "
                                        alt=""
                                    />
                                </div>
                                <p className="font-bold text-xs p-4 tracking-widest">
                                    Acknowledgement of Country
                                </p>
                                <p className="text-[12px] tracking-wide max-w-2xl font-light text-center md:max-w-3xl lg:max-w-4xl p-2 leading-5 pb-6">
                                    Upschool would like to acknowledge that we
                                    live, work, learn and play on the lands of
                                    the Aboriginal and Torres Strait Islander
                                    people’s – who are the oldest continuing
                                    culture in human history and the traditional
                                    owners of the land we now call Australia. We
                                    acknowledge the wisdom and diversity of
                                    these people and seek to learn from and be
                                    inspired by their culture. We are grateful
                                    for the dignity they show us in allowing us
                                    to share this land with them. Our pledge is
                                    to continue to work to bring more awareness
                                    to topics that the elders past, present and
                                    emerging bring our attention to and take
                                    meaningful action to create positive change
                                    here in Australia and the wider world.&nbsp;
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row items-center justify-between p-4">
                            <div className="flex justify-center items-center">
                                <img
                                    src={upschoolLogo}
                                    alt="upSchoolLogo"
                                    className=" h-6 mr-4"
                                />
                            </div>
                            <div className="col-md-6">
                                <div className="mt-2 md:mt-0 flex flex-wrap  justify-center gap-6 ">
                                    <a
                                        href="#"
                                        className="text-white text-[12px] font-light"
                                    >
                                        Navigating the Platform
                                    </a>
                                    <a
                                        href="#"
                                        className="text-white text-[12px] font-light"
                                    >
                                        Disclaimer
                                    </a>
                                    <a
                                        href="#"
                                        className="text-white text-[12px] font-light"
                                    >
                                        Terms of Use
                                    </a>
                                    <a
                                        href="#"
                                        className="text-white text-[12px] font-light"
                                    >
                                        Privacy Policy
                                    </a>
                                    <a
                                        href="#"
                                        className="text-white text-[12px] font-light"
                                    >
                                        Contact Us
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;
