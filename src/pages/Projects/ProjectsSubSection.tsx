import ProjectCard from './ProjectCard';

const ProjectsSubSection = ({ projects }) => {
    return (
        <>
            <div className="flex flex-wrap justify-around">
                {projects.map((project) => (
                    <ProjectCard project={project} />
                ))}
            </div>
        </>
    );
};

export default ProjectsSubSection;
