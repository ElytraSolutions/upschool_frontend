import CharityProjectCard from './CharityProjectCard';
import CharityPageImageSection from '../../components/Cards/Charity/CharityPageImageSection';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axiosInstance from '../../config/Axios';
// import { FunctionalIFrameComponent } from '../../components/Course/FuncIFrame';

function CharityPage() {
    const { slug } = useParams();

    const [currentCharity, setCurrentCharity] = useState<any>(null);
    const [isProjects, setProjects] = useState<any>(null);

    // const divRef = useRef<any>(null);
    // const [dynHeight, setDynHeight] = useState(0);
    // useEffect(() => {
    //     const timerId = setTimeout(() => {
    //         if (divRef.current) {
    //             const divHeight = divRef.current.clientHeight;
    //             // console.log('div height:', divHeight);
    //             setDynHeight(divHeight + 25);
    //         }
    //     }, 3000); // Adjust the timeout duration as needed
    //     return () => clearTimeout(timerId);
    // }, [divRef]);

    useEffect(() => {
        document.title = `${currentCharity?.name.toUpperCase()} | Upschool`;
    }, [currentCharity?.name]);
    useEffect(() => {
        window.scrollTo(0, 0);
        (async () => {
            const res = await axiosInstance.get(`/data/charities/${slug}`);
            setCurrentCharity(res.data.data);
        })();
        (async () => {
            const prResp = await axiosInstance.get(
                `/data/charities/${slug}/projects`,
            );
            setProjects(prResp.data.data);
        })();
    }, [slug]);
    if (!currentCharity || !isProjects) return null;
    const links = {
        website: currentCharity?.website || '',
        facebookLink: currentCharity?.facebook || '',
        instagramLink: currentCharity?.instagram || '',
        linkedinLink: currentCharity?.linkedin || '',
    };
    return (
        <>
            <div className="grid gap-y-5 pb-10">
                <CharityPageImageSection
                    name={currentCharity.name}
                    links={links}
                    cover={currentCharity.thumbnail}
                    logo={currentCharity.image}
                />
                <div className="grid gap-y-6 grid-cols-14">
                    <div className="flex p-2 justify-center col-span-full">
                        <div
                            className={`flex w-[1120px] justify-center overflow-y-hidden p-2`}
                            // style={{ height: `${dynHeight}px` }}
                        >
                            {/* <FunctionalIFrameComponent
                                    title={currentCharity.name}
                                > */}
                            <div
                                // ref={divRef}
                                dangerouslySetInnerHTML={{
                                    __html: currentCharity.description,
                                }}
                            ></div>
                            {/* </FunctionalIFrameComponent> */}
                        </div>
                    </div>
                    <div className="col-span-full flex justify-center">
                        <div className="flex justify-start w-[1120px] pl-2">
                            <p className="font-bold text-[28px] font-sans-serif text-theme-color">
                                Projects
                            </p>
                        </div>
                    </div>
                    <div className="col-span-full flex justify-center grid gap-y-5">
                        {isProjects.map((project, index) => (
                            <div className="max-w-[1120px]">
                                <CharityProjectCard
                                    key={index}
                                    content={project}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default CharityPage;
