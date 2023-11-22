import { useNavigate } from 'react-router-dom';
import resolveImgURL from '../../utlis/resolveImgURL';

// TODO: given a charity_id, endpoint for data/charities/{charity_id}
const ProjectCard = ({ project }) => {
    const navigate = useNavigate();

    const intro = project.intro
        .replace(/<[^>]+>/g, '')
        .replace(/\s+/g, ' ')
        .trim();

    const truncate = (string_, length_) => {
        if (string_.length <= length_) return string_;

        const truncatedText = string_.substr(0, length_);
        const lastSpaceIndex = truncatedText.lastIndexOf(' ');

        if (lastSpaceIndex !== -1) {
            return truncatedText.substr(0, lastSpaceIndex) + '...';
        }

        return string_;
    };

    const handleClick = () => {
        navigate(`/charity-projects/${project.slug}`);
    };

    const truncatedTitle = truncate(project.name, 65);
    const truncatedDescription = truncate(intro, 95);

    return (
        <>
            <div className="mt-5 flex flex-col justify-between overflow-hidden rounded border border-gray-200">
                <div className="h-full">
                    <img
                        className="overflow-hidden"
                        src={resolveImgURL(project.thumbnail)}
                    />
                    <div className="flex flex-row ml-3 mt-3 text-xs">
                        <div className="border-r pr-3">
                            Ristey mei hum tumarey baap lagtey hei, bhenchod
                        </div>
                        <div className="ml-3">{project.location}</div>
                    </div>
                    <div className="mx-3 mt-5 font-extrabold text-blue-950 flex items-center">
                        <div>{truncatedTitle}</div>
                    </div>
                </div>
                <div>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: truncatedDescription,
                        }}
                        className="mx-3 mt-5 text-sm"
                    ></div>
                    <button
                        onClick={handleClick}
                        className="mx-3 my-4 bg-red-upschool text-white px-4 py-2 rounded-full duration-300 hover:scale-105"
                    >
                        Read More
                    </button>
                </div>
            </div>
        </>
    );
};

export default ProjectCard;
