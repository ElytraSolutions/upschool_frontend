const AboutProject = ({ projectData }) => {
    const {
        projectTitle,
        charity,
        location,
        genre,
        qualityImage,
        projectInfo,
    } = projectData;

    return (
        <>
            <div className="w-full md:w-2/3">
                <div className="text-blue-950 text-3xl sm:text-4xl font-semibold w-11/12">
                    {projectTitle}
                </div>
                <div className="flex flex-row mt-10 flex-wrap">
                    {qualityImage.map((qualityImg) => {
                        return (
                            <img
                                src={qualityImg}
                                className="w-[45px] sm:w-[81px] m-1"
                            />
                        );
                    })}
                </div>
                <div className="mt-10">
                    <div>
                        <span className="text-blue-950 font-semibold">
                            Charity:{' '}
                        </span>
                        <span>{charity}</span>
                    </div>
                    <div className="mt-4">
                        <span className="text-blue-950 font-semibold">
                            Genre:{' '}
                        </span>
                        <span>{genre}</span>
                    </div>
                    <div className="mt-4">
                        <span className="text-blue-950 font-semibold">
                            Location:{' '}
                        </span>
                        <span>{location}</span>
                    </div>
                    <div className="w-11/12 mt-8">
                        <p>{projectInfo}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutProject;
