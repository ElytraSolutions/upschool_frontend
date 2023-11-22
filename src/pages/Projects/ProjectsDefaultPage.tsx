import { useEffect, useState } from 'react';
import CharitySection from './CharitySection';
import ImageSection from './ImageSection';
import ProjectsSection from './ProjectsSection';
import axiosInstance from '../../config/Axios';

const ProjectsDefaultPage = () => {
    //TODO: All projects are not coming through...
    const [charityData, setCharityData] = useState<any>(null);
    const [projectData, setProjectData] = useState<any>(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        (async () => {
            const projectsResponse = await axiosInstance.get(`/data/projects`);
            setProjectData(projectsResponse.data.data);
        })();
        (async () => {
            const charityResponse = await axiosInstance.get(`/data/charities`);
            setCharityData(charityResponse.data.data);
        })();
    }, []);

    if (!charityData || !projectData) return null;

    return (
        <>
            <ImageSection />
            <div className="w-4/5 mx-auto mt-10 font-lexend">
                <CharitySection data={charityData} />
                <ProjectsSection data={projectData} />
            </div>
        </>
    );
};

export default ProjectsDefaultPage;
