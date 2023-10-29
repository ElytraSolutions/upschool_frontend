const ProjectDescription = ({ data }) => {
    const { projectDescription, charity } = data;
    const text =
        'Sint Lorem incididunt enim et magna veniam labore exercitation ipsum do nulla sit. Magna duis anim ipsum proident nisi dolore aliquip et excepteur excepteur consectetur excepteur in irure. Sint ad velit dolor aliqua laborum ullamco minim laborum veniam est sint duis excepteur et. Magna in eiusmod enim deserunt deserunt eiusmod. Duis consectetur dolore aliquip adipisicing proident culpa ea esse ea deserunt cillum ullamco.';
    return (
        <>
            <div className="w-11/12 md:w-4/5 mx-auto">
                <div>{text}</div>
                <div>
                    {projectDescription.map((e, i) => {
                        const imageOrder = i % 2 == 0 ? 'order-1' : 'order-2';
                        const textOrder =
                            i % 2 == 0 ? 'order-2 md:ml-5' : 'order-1';
                        return (
                            <div className="md:flex flex-row my-10">
                                <div className={`md:w-1/2 ` + imageOrder}>
                                    <img src={e[0]} />
                                </div>
                                <div
                                    className={
                                        `mt-5 md:mt-0 md:w-1/2 flex justify-center items-center ` +
                                        textOrder
                                    }
                                >
                                    <div className="md:w-11/12">{e[1]}</div>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className="w-full mt-3">
                    <div className="font-semibold text-3xl text-font-color">
                        More Information
                    </div>
                    <div className="flex justify-center">
                        <button className="px-5 py-3 bg-theme-color text-gray-100 duration-300 rounded hover:-translate-y-2 mt-10 mb-20">
                            View All Projects of {charity}
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProjectDescription;
