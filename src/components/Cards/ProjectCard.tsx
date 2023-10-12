type CardProps = {
    project: {
        id: number;
        name: string;
        organization: string;
        image: string;
    };
    setFieldValue: any;
    submitForm: any;
};

export const Card = ({ project, setFieldValue, submitForm }: CardProps) => {
    return (
        <>
            <div>
                <div className=" flex flex-col gap-3  justify-between rounded-lg  text-sm  bg-white border border-gray-300 text-theme-color pb-1  w-44 xs:w-48 sm:w-60  tab:w-48  xl:w-52  h-full ">
                    <div className="">
                        <img
                            className="rounded-t-lg w-full h-24"
                            src={project.image}
                            alt="logo"
                            loading="lazy"
                            width="208px"
                            height="180px"
                        />
                        <div className="flex flex-col gap-5 h-full w-full p-1">
                            <p className="text-center p-1 h-full">
                                {project.name}
                            </p>

                            <p className="text-center  p-1 h-full">
                                {project.organization}
                            </p>
                        </div>
                    </div>

                    <div className="px-2 py-1">
                        <button
                            type="submit"
                            className="px-1 py-2  bg-red-upschool text-white text-sm hover:cursor-pointer w-full"
                            onClick={() => {
                                setFieldValue('project', project.name);
                                submitForm();
                            }}
                        >
                            Continue with this project
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};
