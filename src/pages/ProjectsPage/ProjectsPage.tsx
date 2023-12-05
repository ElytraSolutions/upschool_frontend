import ProjectDescription from './ProjectDescription';
import ProjectImage from './ProjectImage';
import ProjectInfo from './ProjectInfo';
import ProjectMap from './ProjectMap';
import { useEffect, useState } from 'react';
import axiosInstance from '../../config/Axios';
import { useParams } from 'react-router-dom';
import Loading from '../../components/Loading';

const ProjectsPage = () => {
    const { slug } = useParams();
    const [prData, setPrData] = useState<any>(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        (async () => {
            const res = await axiosInstance.get(`/data/projects/${slug}`);
            setPrData(res.data.data);
        })();
    }, [slug]);
    useEffect(() => {
        document.title = prData?.name + ' | Upschool';
    }, [prData?.name]);
    if (!prData) return <Loading />;
    return (
        <>
            <div className="font-lexend bg-gray-100 font-light text-lg">
                <ProjectImage thumbnail={prData.thumbnail} />
                <ProjectInfo
                    data={{
                        projectTitle: prData.name,
                        charity: prData.charity ? prData.charity.name : '',
                        location: prData.location,
                        genre: prData.genre,
                        qualityImage: prData.sustainability_details,
                        charityLogo: prData.image,
                        charitySlug: prData.charity ? prData.charity.slug : '',
                        projectInfo: prData.intro,
                    }}
                />
                <ProjectMap location={prData.location} />
                <ProjectDescription
                    data={{
                        projectDescription: prData.description
                            ? prData.description
                            : '',
                        charity: prData.charity ? prData.charity.name : '',
                        slug: prData.charity ? prData.charity.slug : '',
                    }}
                />
            </div>
        </>
    );
};

export default ProjectsPage;
