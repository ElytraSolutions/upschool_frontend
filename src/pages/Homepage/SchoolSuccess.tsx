function features() {
    return (
        <div className="p-10 text-[#242254]">
            <div className="flex flex-col items-center">
                <p className="text-[38px] md:text-[48px] text-[#242254] font-bold">
                    Bringing the{' '}
                    <span className="text-yellow-500">'Real-World'</span> to
                    Education
                </p>
                <p className="mb-[1rem] text-[18px] leading-9 text-center max-w-4xl text-[#242254] ">
                    Everyone understands the importance of offering children
                    purposeful learning opportunities. At Upschool.co, we take
                    things a step further. Inside our platform are the tools to
                    bring each child’s unique passions to life in the most
                    meaningful and impactful ways.
                </p>
                <p className="text-[38px] md:text-[48px] text-[#b81242] font-bold">
                    School Success Stories
                </p>
                <img
                    src="/images/homepage/bechange.png"
                    className=" w-[80%] md:w-[40%]"
                    alt="Be the change image"
                />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl m-auto py-10">
                <div>
                    <iframe
                        loading="lazy"
                        className="w-full  md:h-[315px]"
                        src="https://www.youtube.com/embed/88qNEuTOLEM?si=AYvashJyL-YFPeo7"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                    <p className="px-6 py-2">
                        The Living School in Lismore, Australia, was hit by
                        unprecedented floods in Feb 2022 as a result of,
                        according to many, our changing climate. Using the
                        resources from Upschool’s “Be the Change” course, and
                        the dedication of their incredible teacher, the children
                        rallied to share an important message with the world.
                        The impact of their actions travelled far and wide.
                    </p>
                </div>
                <div>
                    <iframe
                        loading="lazy"
                        className="w-full  md:h-[315px]"
                        src="https://www.youtube.com/embed/AF0SILATQ6U?si=mTvCceuRhRxJenjF"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                    <p className="px-6 py-2">
                        Transforming Education: The RISSE School’s Journey in
                        India with Upschool.co is a powerful testament to the
                        transformative power of education. The video features
                        interviews with students, teachers, and members of the
                        community who share their experiences and highlight the
                        positive impact Upschool, and our “Be the Change” has
                        had on their lives and the wider community.
                    </p>
                </div>
                <div>
                    <iframe
                        loading="lazy"
                        className="w-full  md:h-[315px]"
                        src="https://www.youtube.com/embed/SGo7DWBFZLU?si=Nl2YT7M_mnDW0ZEc"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                    <p className="px-6 py-2">
                        By a bustling expressway in the middle of India stands a
                        school that swelters in the hot sun. The students, who
                        are presently undertaking Upschool’s online course, “Be
                        the Change”, were inspired to take possession of an
                        unused, barren plot of land and are in the process of
                        transforming it into a flourishing forest to provide
                        shade, improved air and soil quality, and to house local
                        wildlife.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default features;
