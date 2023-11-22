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
    const [charityData, setCharityData] = useState<any>(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        (async () => {
            const res = await axiosInstance.get(`/data/projects/${slug}`);
            console.log('Project data', res.data.data);
            setPrData(res.data.data);
        })();
    }, [slug]);
    // TODO: api get req. for charities using charity id
    useEffect(() => {
        (async () => {
            const res = await axiosInstance.get(`/data/charities`);
            console.log('charity data', res.data.data);
            setCharityData(
                res.data.data.filter(
                    (charity) => charity.id === prData.charity_id,
                )[0],
            );
        })();
    }, [prData]);
    if (!prData || !charityData) return null;
    return (
        <>
            <div className="font-lexend bg-gray-100 font-light text-lg">
                <ProjectImage thumbnail={prData.thumbnail} />
                <ProjectInfo
                    data={{
                        projectTitle: prData.name,
                        charity: charityData.name,
                        location: prData.location,
                        genre: prData.genre,
                        qualityImage: prData.sustainability_details,
                        charityLogo: prData.image,
                        charitySlug: charityData.slug,
                        projectInfo: prData.intro,
                    }}
                />
                <ProjectMap />
                <ProjectDescription
                    data={{
                        projectDescription: prData.description
                            ? prData.description
                            : '',
                        charity: charityData.name,
                        slug: charityData.slug,
                    }}
                />
            </div>
        </>
    );
};

export default ProjectsPage;
