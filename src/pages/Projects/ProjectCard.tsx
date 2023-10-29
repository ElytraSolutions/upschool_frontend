import { useNavigate } from 'react-router-dom';

const ProjectCard = ({ project }) => {
    const { title, charity, country, description, img } = project;
    const navigate = useNavigate();

    const truncate = (string_, length_) => {
        if (string_.length <= length_) return string_;

        const truncatedText = string_.substr(0, length_);
        const lastSpaceIndex = truncatedText.lastIndexOf(' ');

        if (lastSpaceIndex !== -1) {
            return truncatedText.substr(0, lastSpaceIndex) + '...';
        }

        return string_;
    };

    const convertToSlug = (title: string) => {
        const words = title.toLowerCase().split(' ');
        const slugTitle = words.join('-');

        return slugTitle;
    };

    const handleClick = (title) => {
        const slugTitle = convertToSlug(title);
        navigate(`/charity-projects/${slugTitle}`);
    };

    const truncatedTitle = truncate(title, 65);
    const truncatedDescription = truncate(description, 95);

    return (
        <>
            <div className="mt-5 mx-2 xss:w-96 lg:w-64 xl:w-96 flex flex-col justify-between overflow-hidden rounded border border-gray-200">
                <div>
                    <img className="overflow-hidden" src={img} />
                    <div className="flex flex-row ml-3 mt-3 text-xs">
                        <div className="border-r pr-3">{charity}</div>
                        <div className="ml-3">{country}</div>
                    </div>
                    <div className="mx-3 mt-5 font-extrabold text-blue-950">
                        {truncatedTitle}
                    </div>
                </div>
                <div>
                    <div className="mx-3 mt-5 text-sm">
                        {truncatedDescription}
                    </div>
                    <button
                        onClick={() => {
                            handleClick(title);
                        }}
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
