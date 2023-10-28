import { useState, useRef } from 'react';
import { Projects } from '../../data/Projects';
import ProjectsSubSection from './ProjectsSubSection';
import PageNumber from './PageNumber';

const ProjectsSection = () => {
    const [projects, _] = useState(Projects);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPage, __] = useState(Math.ceil(projects.length / 15));

    const projectsContainerRef = useRef<HTMLDivElement | null>(null);

    const ScrollToProjects = () => {
        if (projectsContainerRef.current) {
            projectsContainerRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handlePrev = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
            ScrollToProjects();
        }
    };

    const handleNext = () => {
        if (currentPage < totalPage) {
            setCurrentPage(currentPage + 1);
            ScrollToProjects();
        }
    };

    return (
        <>
            <div ref={projectsContainerRef}>
                <ProjectsSubSection
                    projects={projects.slice(
                        (currentPage - 1) * 15,
                        currentPage * 15,
                    )}
                />
                <div className="flex justify-center">
                    <div className="flex flex-row text-blue-950 font-extrabold">
                        <button
                            onClick={handlePrev}
                            className={`flex items-center mx-2 lg:mx-6 ${
                                currentPage == 1 ? 'text-gray-400' : ''
                            }`}
                        >
                            <span className="text-xs">&lt;&lt;</span>
                            <span>Previous</span>
                        </button>
                        <PageNumber
                            currentPage={currentPage}
                            setCurrentPage={setCurrentPage}
                            totalPage={totalPage}
                            ScrollToProjects={ScrollToProjects}
                        />
                        <button
                            onClick={handleNext}
                            className={`flex items-center mx-2 lg:mx-6 ${
                                currentPage == totalPage ? 'text-gray-400' : ''
                            }`}
                        >
                            <span>Next</span>
                            <span className="text-xs"> &gt;&gt;</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProjectsSection;
