import ProjectDescription from './ProjectDescription';
import ProjectImage from './ProjectImage';
import ProjectInfo from './ProjectInfo';
import ProjectMap from './ProjectMap';
import { ProjectPage } from '../../data/ProjectPage';
import { useEffect } from 'react';

const ProjectsPage = () => {
    const {
        projectTitle,
        charity,
        location,
        genre,
        qualityImage,
        charityLogo,
        projectInfo,
        projectDescription,
    } = ProjectPage;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <div className="font-lexend bg-gray-100 font-light text-lg">
                <ProjectImage />
                <ProjectInfo
                    data={{
                        projectTitle,
                        charity,
                        location,
                        genre,
                        qualityImage,
                        charityLogo,
                        projectInfo,
                    }}
                />
                <ProjectMap />
                <ProjectDescription data={{ projectDescription, charity }} />
            </div>
        </>
    );
};

export default ProjectsPage;
