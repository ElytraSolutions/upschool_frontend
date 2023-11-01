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
            <div className="">
                <div className=" flex flex-col gap-3  rounded-lg  text-sm  bg-white border border-gray-300 text-theme-color pb-1 w-full 2xl:max-w-[300px] h-full ">
                    <div className=" flex flex-col gap-2 h-full">
                        <img
                            className="rounded-t-lg w-full h-36 sm:h-24"
                            src={project.image}
                            alt="logo"
                            loading="lazy"
                            width="720"
                            height="405"
                        />
                        <p className="text-center px-2 ">{project.name}</p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <p className="text-center italic font-medium text-base  px-2 ">
                            {project.organization}
                        </p>
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
            </div>
        </>
    );
};
