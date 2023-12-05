const ProjectMap = ({ location }) => {
    // TODO: show the part of the world in map, given a location

    console.log(location);

    return (
        <>
            <div className="w-full h-[40vh] my-10">
                <iframe
                    className="w-full h-full"
                    src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30149909.721294157!2d114.90735947307488!3d-22.71303825398144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1sC${location}!2s`}
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    loading="lazy"
                ></iframe>
            </div>
        </>
    );
};

export default ProjectMap;
