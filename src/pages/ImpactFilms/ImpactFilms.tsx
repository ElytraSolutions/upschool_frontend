import { BsMegaphone } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import resolveImgURL from '../../utlis/resolveImgURL';

const ImpactFilms = () => {
    return (
        <div>
            <div className="hero lg:h-[500px]  md:h-[400px] h-[300px] relative flex flex-col align-center items-center overflow-hidden">
                <img
                    src={resolveImgURL(
                        '/images/ImpactFilms/vintage-film-projector-and-film-screening.png',
                    )}
                    className="absolute lg:w-full lg:h-auto md:h-[140%] sm:w-[140%] h-[120%] w-auto overflow-hidden "
                />
                <div className="flex flex-col justify-center absolute items-center h-full w-full bg-[#242254] bg-opacity-60">
                    <img
                        className="md:w-[200px] w-[150px] mb-[1rem]"
                        src={resolveImgURL(
                            '/images/ImpactFilms/Thumbnails-3.png',
                        )}
                    />
                    <h3
                        className="md:text-[2.2rem] text-[1.2rem]  font-lexend font-bold"
                        style={{ color: '#FDCF60' }}
                    >
                        Be Inspired By our
                    </h3>
                    <h1
                        className="md:text-[5rem] text-[2.5rem] font-lexend font-bold mt-[-10px]"
                        style={{ color: 'white' }}
                    >
                        Impact Films
                    </h1>
                </div>
            </div>
            <div className="video-container flex flex-col items-center mt-[50px]">
                <div className="video-title-text xl:w-[1200px] md:w-[700px] mb-[4rem] m-[1rem]">
                    <h1 className="lg:text-[2.5rem] md:text-[2.2rem] text-[1.8rem] font-semibold text-font-color text-center font-lexend">
                        Upschool loves capturing stories of children doing good
                        in the world.
                    </h1>
                    <h2 className="text-center md:text-[1.7rem] text-[1.2rem] text-pink-upschool font-semibold font-lexend">
                        Watch our films. Be inspired. Change the World.
                    </h2>
                </div>
                <div className="videos  grid grid-cols-1 md:grid-cols-3 xl:gap-12 lg:gap-8 md:gap-4 m-[1rem]">
                    <div className="flex flex-col xl:w-[30vw]  lg:w-[30vw] mb-[1rem] max-w-[800px]">
                        <div className="video">
                            <iframe
                                width="100%"
                                className="h-[50vw] md:h-[17vw] max-h-[400px]"
                                // height="280"
                                src="https://www.youtube.com/embed/88qNEuTOLEM?rel=0"
                                title="The Living School Students Create Change"
                                allow="accelerometer; autoplay; clipboard-write;gyroscope; picture-in-picture; web-share"
                                allowFullScreen={true}
                            ></iframe>
                        </div>
                        <div className="desc text-center text-font-color">
                            <p className="leading-7 mt-[10px]">
                                The Living School in Lismore, Australia, was hit
                                by unprecedented floods in Feb 2022 as a result
                                of, according to many, our changing climate.
                                Using the resources from Upschool’s{' '}
                                <Link
                                    className="cursor-pointer underline"
                                    to="/courses/be-the-change/"
                                >
                                    “Be the Change”
                                </Link>
                                course, and the dedication of their incredible
                                teacher, the children rallied to share an
                                important message with the world. The impact of
                                their actions travelled far and wide.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col xl:w-[30vw] lg:w-[30vw] mb-[1rem] max-w-[800px]">
                        <div className="video">
                            <iframe
                                width="100%"
                                className="h-[50vw] md:h-[17vw] max-h-[400px]"
                                // height="280"
                                src="https://www.youtube.com/embed/AF0SILATQ6U?rel=0"
                                title="Education Meets Purpose: A School in Rural India Changes the World with Upschool"
                                allow="accelerometer; autoplay; clipboard-write;gyroscope; picture-in-picture; web-share"
                                allowFullScreen={true}
                            ></iframe>
                        </div>
                        <div className="desc text-center text-font-color">
                            <p className="leading-7 mt-[10px]">
                                Transforming Education: The RISSE School’s
                                Journey in India with Upschool.co is a powerful
                                testament to the transformative power of
                                education. The video features interviews with
                                students, teachers, and members of the community
                                who share their experiences and highlight the
                                positive impact Upschool, and our{' '}
                                <Link
                                    className="cursor-pointer underline"
                                    to="/courses/be-the-change/"
                                >
                                    “Be the Change”
                                </Link>{' '}
                                has had on their lives and the wider community.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col xl:w-[30vw] lg:w-[30vw] mb-[1rem] max-w-[800px]">
                        <div className="video">
                            <iframe
                                width="100%"
                                className=" h-[50vw] md:h-[17vw] max-h-[400px]"
                                // height="280"
                                src="https://www.youtube.com/embed/SGo7DWBFZLU?rel=0"
                                title="Children Plant a Forest for a Better Tomorrow"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write;gyroscope; picture-in-picture; web-share"
                                allowFullScreen={true}
                            ></iframe>
                        </div>
                        <div className="desc text-center text-font-color">
                            <p className="leading-7 mt-[10px]">
                                By a bustling expressway in the middle of India
                                stands a school that swelters in the hot sun.
                                The students, who are presently undertaking
                                Upschool’s online course,{' '}
                                <Link
                                    className="cursor-pointer underline"
                                    to="/courses/be-the-change/"
                                >
                                    “Be the Change”
                                </Link>
                                , were inspired to take possession of an unused,
                                barren plot of land and are in the process of
                                transforming it into a flourishing forest to
                                provide shade, improved air and soil quality,
                                and to house local wildlife.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom bg-theme-color flex flex-col items-center p-[40px]">
                <div className="icon text-white text-[50px]">
                    <BsMegaphone />
                </div>
                <div className="text xl:w-[1200px] md:w-[800px] flex items-center flex-col p-8">
                    <h1 className="md:text-[2.7rem] text-[2rem] text-white font-bold text-center mr-[.5rem] ml-[.5rem]">
                        Upschool loves capturing stories of children doing good
                        in the world.
                    </h1>
                    <h2 className="md:text-[1.2rem] text-[1.1rem] text-white font-regular text-center mt-[10px] mb-[10px]">
                        Have you done something that you are proud of that has
                        made our world a better place?
                    </h2>
                    <h2 className="md:text-[1.2rem] text-[1.1rem] text-white font-bold text-center">
                        Apply to have Upschool Films visit your school or
                        business, tell your story, and inspire students,
                        teachers and parents across the world.{' '}
                    </h2>
                    <Link to="/buy-an-impact-film">
                        <div className="bg-red-upschool px-[2rem] py-[.5rem] text-white rounded-full text-center cursor-pointer mt-[2rem]">
                            Apply Now
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ImpactFilms;
