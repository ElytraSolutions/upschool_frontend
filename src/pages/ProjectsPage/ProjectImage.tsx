import resolveImgURL from '../../utlis/resolveImgURL';

const ProjectImage = ({ thumbnail }) => {
    return (
        <>
            <div>
                <img
                    src={resolveImgURL(thumbnail)}
                    className="w-[100vw] h-[50vh] object-cover overflow-hidden"
                />
            </div>
        </>
    );
};

export default ProjectImage;
