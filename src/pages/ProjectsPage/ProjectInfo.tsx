import AboutCharity from './AboutCharity';
import AboutProject from './AboutProject';

const ProjectInfo = ({ data }) => {
    const {
        projectTitle,
        charity,
        location,
        genre,
        qualityImage,
        charityLogo,
        projectInfo,
    } = data;

    console.log(data);

    return (
        <>
            <div className="w-11/12 md:w-4/5 mx-auto mt-10 flex flex-col md:flex-row">
                <AboutProject
                    projectData={{
                        projectTitle,
                        charity,
                        location,
                        genre,
                        qualityImage,
                        projectInfo,
                    }}
                />
                <AboutCharity charityData={{ charityLogo }} />
            </div>
        </>
    );
};

export default ProjectInfo;
