import ProjectDescription from './ProjectDescription';
import ProjectImage from './ProjectImage';
import ProjectInfo from './ProjectInfo';
import ProjectMap from './ProjectMap';
import { useEffect, useState } from 'react';
import axiosInstance from '../../config/Axios';
import { useParams } from 'react-router-dom';

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
    if (!prData) return null;
    return (
        <>
            <div className="font-lexend bg-gray-100 font-light text-lg">
                <ProjectImage thumbnail={prData.thumbnail} />
                <ProjectInfo
                    data={{
                        projectTitle: prData.name,
                        charity: prData.charity.name,
                        location: prData.location,
                        genre: prData.genre,
                        qualityImage: prData.sustainability_details,
                        charityLogo: prData.image,
                        charitySlug: prData.charity.slug,
                        projectInfo: prData.intro,
                    }}
                />
                <ProjectMap />
                <ProjectDescription
                    data={{
                        projectDescription: prData.description
                            ? prData.description
                            : '',
                        charity: prData.charity.name,
                        slug: prData.charity.slug,
                    }}
                />
            </div>
        </>
    );
};

export default ProjectsPage;
