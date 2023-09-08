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
        <div className=" rounded-lg text-theme-color text-sm lg:text-base flex flex-col gap-1 overflow-hidden bg-slate-200 max-h-72">
            <div className="bg-yellow-600 h-[35%] overflow-hidden flex-1">
                <img
                    src={project.image}
                    alt="logo"
                    className="w-full h-full"
                    loading="lazy"
                />
            </div>
            <div className="inline text-center text-xs p-0.5 my-0.5">
                {project.name}
            </div>
            <div className="block text-center text-xs p-0.5 my-0.5">
                {project.organization}
            </div>
            <button
                className="px-1 py-2 bg-red-upschool text-white text-xs self-center m-2 w-10/12 hover:cursor-pointer"
                onClick={() => {
                    setFieldValue('project', project.name);
                    submitForm();
                }}
            >
                Continue with this project
            </button>
        </div>
    );
};
