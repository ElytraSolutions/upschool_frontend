import { useState } from 'react';
import UploadFile from './UploadFile';
import FileUploadProcess from './FileUploadProcess';
import ImportProcess from './ImportProcess';
import axiosInstance from '../../../../config/Axios';

const InviteViaCSVFile = () => {
    const [currentData, setCurrentData] = useState<Record<string, any>>({
        file: '',
    });

    const [selectComponenent, setSelectComponent] = useState<number>(0);
    const components = [
        <UploadFile
            InitialValues={currentData}
            submitHandler={async (data, onSubmitProps) => {
                console.log(data);
                setCurrentData((oldValue) => {
                    return { ...oldValue, ...data };
                });
                onSubmitProps.resetForm();
                setSelectComponent(1);
            }}
        />,
        <FileUploadProcess
            values={currentData}
            // TODO implement necessary logic for importing informaiton from uploaded data
            ImportFile={async () => {
                const formData = new FormData();
                formData.append('file', currentData.file);
                const resp = await axiosInstance.post(
                    'data/bulkRegistrations',
                    formData,
                    {
                        headers: {
                            'Content-Type': 'multipart/form-data',
                        },
                    },
                );
                console.log(resp);
                setSelectComponent(2);
            }}
        />,
        <ImportProcess values={currentData} />,
    ];

    return (
        <>
            <div className="flex  w-full flex-col gap-3">
                <p className="w-full text-left text-base font-semibold md:text-lg lg:text-xl">
                    Import from CSV file
                </p>
                {components[selectComponenent]}
            </div>
        </>
    );
};

export default InviteViaCSVFile;
