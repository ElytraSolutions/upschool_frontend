import { useForm } from 'react-hook-form';
import { useState } from 'react';

type initFormValues = {
    name: string;
    email: string;
    problemDescription: string;
};

function ReportProblem() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
        // getValues,
    } = useForm<initFormValues>({
        defaultValues: {
            name: '',
            email: '',
            problemDescription: '',
        },
        mode: 'onChange',
    });

    const [formData, setFormData] = useState('');
    return (
        <>
            <div className="bg-white flex py-16 items-center justify-center">
                <div className="grid bg-[#e4e4e4] w-[550px] h-fit">
                    <div className="flex bg-theme-color h-[132px] items-center justify-center">
                        <div className="flex-row text-white font-didact">
                            <p className="text-center text-[40px]">
                                Report an Issue
                            </p>
                            <p className="text-center text-[20px]">
                                with the Upschool Library
                            </p>
                        </div>
                    </div>
                    <form
                        onSubmit={handleSubmit((data) => {
                            setFormData(JSON.stringify(data));
                            reset();
                        })}
                    >
                        <div className="grid gap-2 font-didact text-theme-color">
                            <div></div>
                            <div className="grid gap-2 px-[36px] py-[6px]">
                                <div className="grid grid-cols-2">
                                    <label className="text-lg font-semibold">
                                        Your Name
                                        <span className="text-red-custom">
                                            {' '}
                                            *
                                        </span>
                                    </label>
                                    <div className="flex justify-end">
                                        {errors.name && (
                                            <div className='"flex w-[130px] bg-[#FF3200] '>
                                                <p className="text-white text-center">
                                                    undefined
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <input
                                    className={`${
                                        errors.name
                                            ? 'focus:border-[#FF3200]'
                                            : 'focus:border-blue-500'
                                    } rounded-sm border border-gray-300 focus:outline-none px-2`}
                                    {...register('name', {
                                        required: 'Your Name is required',
                                    })}
                                    type="text"
                                />
                            </div>
                            <div className="grid gap-2 px-[36px] py-[6px]">
                                <div className="grid grid-cols-2">
                                    <label className="text-lg font-semibold">
                                        Email
                                        <span className="text-red-custom">
                                            {' '}
                                            *
                                        </span>
                                    </label>
                                    <div className="flex justify-end">
                                        {errors.email && (
                                            <div className='"flex w-[130px] bg-[#FF3200] '>
                                                <p className="text-white text-center">
                                                    undefined
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <input
                                    className={`${
                                        errors.email
                                            ? 'focus:border-[#FF3200]'
                                            : 'focus:border-blue-500'
                                    } rounded-sm border border-gray-300 focus:outline-none px-2`}
                                    placeholder="example@example.com"
                                    {...register('email', {
                                        required: 'Email is required',
                                    })}
                                    type="email"
                                />
                                <label className="text-sm">
                                    example@example.com
                                </label>
                            </div>
                            <div className="grid gap-2 px-[36px] py-[6px]">
                                <label className="text-lg font-semibold">
                                    Tell us about the issue:
                                </label>
                                <textarea
                                    className="h-[110px] rounded-sm border border-gray-300 focus:border-blue-500 focus:outline-none px-2 pt-1"
                                    placeholder="Type here..."
                                    {...register('problemDescription')}
                                />
                            </div>
                            <button
                                disabled={isSubmitting}
                                className="pl-[36px] py-[6px]"
                                type="submit"
                            >
                                <div className="flex p-2 bg-theme-color text-base text-white h-[30px] w-[250px] font-didact items-center justify-center">
                                    Submit
                                </div>
                            </button>
                            <div></div>
                        </div>
                    </form>
                </div>
            </div>
            {console.log(formData)}
        </>
    );
}

export default ReportProblem;
