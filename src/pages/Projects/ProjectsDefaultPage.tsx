import { useEffect } from 'react';
import CharitySection from './CharitySection';
import ImageSection from './ImageSection';
import ProjectsSection from './ProjectsSection';

const ProjectsDefaultPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
        <>
            <ImageSection />
            <div className="w-4/5 mx-auto mt-10 font-lexend">
                <CharitySection />
                <ProjectsSection />
            </div>
        </>
    );
};

export default ProjectsDefaultPage;
