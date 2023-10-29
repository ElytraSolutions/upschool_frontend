const ProjectMap = () => {
    return (
        <>
            <div className="w-full h-[40vh] my-10">
                <iframe
                    className="w-full h-full"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30149909.721294157!2d114.90735947307488!3d-22.71303825398144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2b2bfd076787c5df%3A0x538267a1955b1352!2z4KSF4KS34KWN4KSf4KWN4KSw4KWH4KSy4KS_4KSv4KS-!5e0!3m2!1sne!2snp!4v1698570322598!5m2!1sne!2snp"
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
