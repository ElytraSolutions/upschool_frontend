import projectImage from '../../assets/ProjectsBackground.png';

const ProjectImage = () => {
    return (
        <>
            <div>
                <img
                    src={projectImage}
                    className="w-[100vw] h-[50vh] object-cover overflow-hidden"
                />
            </div>
        </>
    );
};

export default ProjectImage;
