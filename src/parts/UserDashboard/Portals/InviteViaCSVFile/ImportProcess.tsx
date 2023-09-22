const ImportProcess = () => {
    // TODO implement logic to receive status(importing... || Import Complete)
    const status = 'importing...';
    // TODO get totalStudentsINFile by reading/accessing uploaded csv File
    const totalStudentsInFile = 120;
    // TODO get number of impoeted students from the file form backend status
    const importedStudentsFromFile = 20;
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
                        Students Imported : 27
                    </p>
                </div>
            </div>
        </>
    );
};

export default ImportProcess;
