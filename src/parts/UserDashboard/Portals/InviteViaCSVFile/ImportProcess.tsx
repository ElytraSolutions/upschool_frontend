import React, { useState, useEffect } from 'react';

type ImportProcessProps = {
    values: Record<string, any>;
};
const ImportProcess: React.FC<ImportProcessProps> = ({ values }) => {
    // TODO implement logic to receive status(importing... || Import Complete)
    const status = 'importing...';
    // TODO get number of imported students from the file form backend status
    const importedStudentsFromFile = 21;
    // get totalStudentsInFile by reading/accessing uploaded csv File
    const [totalStudentsInFile, setTotalStudentsInFile] = useState<number>(0);
    useEffect(() => {
        if (values.file) {
            // Read the CSV file and count records
            const reader = new FileReader();
            // Instruct FileReader to read the file as text
            reader.readAsText(values.file);
            // Event handler for when the file reading is complete
            reader.onload = (e) => {
                const content = e.target?.result as string;
                const lines = content?.split('\n');
                // Check if the last line is empty
                const recordCount =
                    lines[lines.length - 1].trim() === ''
                        ? lines.length - 2 // Subtract 1 for the header row and 1 for last empty line
                        : lines.length - 1; // Subtract 1 for the header row
                setTotalStudentsInFile(recordCount);
            };
        }
    }, [values.file]);

    return (
        <>
            <div className="flex flex-col gap-3">
                {/* displays 'status' and ratio of 'importedStudentsFromFile/totalStudentsInFile' */}
                <div className="flex flex-row justify-between gap-2 text-font-color">
                    <p className="text-sm md:text-base font-light">{status}</p>
                    <p className="text-base md:text-lg">
                        {importedStudentsFromFile}/{totalStudentsInFile}
                    </p>
                </div>
                {/* Display progress for checking uploaded file for importing data from the file */}
                {/*  TODO logic for showing progress while importing data from file */}
                <div className="w-full rounded-lg bg-gray-200 h-3">
                    <div className="w-1/2 h-full rounded-lg bg-theme-color"></div>
                </div>
                {/* TODO implement necessary logic to display response/result obtained after import process has been completed */}
                <div>
                    <p className=" text-green-600 py-4 text-base md:text-lg">
                        Students Imported : 20
                    </p>
                </div>
            </div>
        </>
    );
};

export default ImportProcess;
