import resolveImgURL from '../../utlis/resolveImgURL';

const AboutProject = ({ projectData }) => {
    const {
        projectTitle,
        charity,
        location,
        genre,
        qualityImage,
        projectInfo,
    } = projectData;
    const intro = projectInfo
        .replace(/<[^>]+>/g, '')
        .replace(/\s+/g, ' ')
        .trim();
    return (
        <>
            <div className="w-full md:w-2/3 text-theme-color">
                <div className="text-blue-950 text-3xl sm:text-4xl font-semibold w-11/12">
                    {projectTitle}
                </div>
                <div className="grid grid-cols-6 gap-6 mt-10">
                    {qualityImage.map((qualityImg, index) => {
                        return (
                            <img
                                src={resolveImgURL(qualityImg.Goal)}
                                alt={`goals ${index + 1}`}
                            />
                        );
                    })}
                </div>
                <div className="mt-10">
                    <div>
                        <span className="text-blue-950 font-semibold">
                            Charity:{' '}
                        </span>
                        <span className="capitalize">{charity}</span>
                    </div>
                    <div className="mt-4">
                        <span className="text-blue-950 font-semibold">
                            Location:{' '}
                        </span>
                        <span>{location}</span>
                    </div>
                    <div className="mt-4">
                        <span className="text-blue-950 font-semibold">
                            Genre:{' '}
                        </span>
                        <span>{genre}</span>
                    </div>
                    <div className="w-11/12 mt-8">
                        <p dangerouslySetInnerHTML={{ __html: intro }}></p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutProject;
