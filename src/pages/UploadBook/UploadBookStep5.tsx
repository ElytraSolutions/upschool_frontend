import { useState } from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import { projects } from '../../data/UploadBookProjects'; // TODO Project list needs to fetched from backend
import { Card } from '../../components/Cards/ProjectCard';

const uploadBookSchema = yup.object().shape({
    project: yup.string().required('required'),
});
interface IStep5Props {
    oldValues: Record<string, any>;
    submitHandler: (values: any, onSubmitProps: any) => Promise<void>;
    backHandler: (values: any) => void;
}
function UploadBookStep5({
    oldValues,
    submitHandler,
    backHandler,
}: IStep5Props) {
    const [query, setQuery] = useState<string>('');
    // TODO searchResult should be performed in  backend if there are large numbers of project in the list.
    const searchResult = projects.filter((project) =>
        project.name.toLowerCase().includes(query.toLowerCase()),
    );
    return (
        <>
            <div className="flex flex-col gap-2 my-4  w-[600px] h-[535px] overflow-y-scroll overflow-x-hidden ">
                <div className="flex items-center justify-start py-3">
                    <h1 className="text-font-color text-sm sm:text-base tab:text-xl xl:text-2xl font-medium lg:font-semibold">
                        Select Your Project
                    </h1>
                </div>
                <div className="py-2">
                    <input
                        type="search"
                        className="w-full h-fit lg:py-1.5 px-4  text-sm sm:text-base  font-normal  text-theme-color border rounded-md border-gray-400 focus:outline-none bg-gray-100"
                        placeholder="Search Your Project"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setQuery(e.target.value)
                        }
                    />
                </div>
                <Formik
                    onSubmit={submitHandler}
                    initialValues={oldValues}
                    validationSchema={uploadBookSchema}
                >
                    {({
                        values,
                        // errors,
                        // touched,
                        // handleBlur,
                        // handleChange,
                        handleSubmit,
                        setFieldValue,
                        submitForm,
                    }) => (
                        <>
                            <form onSubmit={handleSubmit}>
                                <div className="grid sm:grid-cols-2 lg:grid-cols-3  gap-4 w-full">
                                    {query
                                        ? searchResult.map((project) => (
                                              <Card
                                                  key={project.id}
                                                  project={project}
                                                  setFieldValue={setFieldValue}
                                                  submitForm={submitForm}
                                              />
                                          ))
                                        : projects.map((project) => (
                                              <Card
                                                  key={project.id}
                                                  project={project}
                                                  setFieldValue={setFieldValue}
                                                  submitForm={submitForm}
                                              />
                                          ))}
                                </div>
                                {/* TODO decide back and next button */}
                                <div className="invisible grid grid-cols-4 gap-4  px-2 mx-2 w-full font-normal text-base py-1">
                                    <button
                                        className="invisible col-start-1 col-span-1 flex flex-1 flex-wrap items-center justify-start gap-x-0.5 m-1 p-1 h-12"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            backHandler(values);
                                        }}
                                    >
                                        <span>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="currentColor"
                                                className="w-4 h-4"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                                                />
                                            </svg>
                                        </span>
                                        <span className="text-xl">
                                            <u>Back</u>
                                        </span>
                                    </button>

                                    <button
                                        className="col-start-4 col-span-1 flex flex-1 flex-wrap items-center justify-center gap-x-0.5 m-1 p-1 bg-theme-color text-white h-12"
                                        type="submit"
                                    >
                                        <span className="text-xl">Next</span>
                                        <span>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="currentColor"
                                                className="w-4 h-4"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                                                />
                                            </svg>
                                        </span>
                                    </button>
                                </div>
                            </form>
                        </>
                    )}
                </Formik>
            </div>
        </>
    );
}
export { UploadBookStep5 };
