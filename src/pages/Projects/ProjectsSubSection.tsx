import ProjectCard from './ProjectCard';

const ProjectsSubSection = ({ projects }) => {
    return (
        <>
            {/* "flex flex-wrap justify-around" */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 justify-around">
                {projects.map((project) => (
                    <ProjectCard project={project} />
                ))}
            </div>
        </>
    );
};

export default ProjectsSubSection;
