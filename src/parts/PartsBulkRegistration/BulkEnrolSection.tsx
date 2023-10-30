function BulkEnrolSection() {
    return (
        <>
            <div className="grid lg:grid-cols-2 text-theme-color gap-5">
                <div className="p-2">
                    <div className="grid gap-y-9">
                        <p className="text-[30px] font-extrabold">
                            Bulk Enrolling your Students and Teachers onto
                            Upschool.co
                        </p>
                        <div>
                            <p className="mb-[16px]">
                                To bulk enrol your school community (students
                                and teachers) onto the Upschool platform, you
                                must provide us with some information.
                            </p>
                            <p>
                                Please click the{' '}
                                <strong>Bulk Enrolment Instructions</strong>{' '}
                                button below and follow the instructions.
                            </p>
                        </div>
                        <div>
                            <div className="flex justify-left rounded bg-theme-color xs:text-[12px] text-[10px] tracking-wide justify-center items-center text-white h-[36px] mb-[16px] max-w-[400px]">
                                <a href="https://drive.google.com/file/d/1ZjYRg8j9Sc7RAJs3jse84ki5pfTzYaTg/view">
                                    BULK ENROLMENT INSTRUCTIONS
                                </a>
                            </div>
                            <div className="flex justify-left rounded bg-theme-color xs:text-[12px] text-[10px] tracking-wide justify-center items-center text-white h-[36px] max-w-[400px]">
                                <a href="https://docs.google.com/spreadsheets/d/1oxbBQS8_XD2bgMKv0hNb27261grBTwvrFPpb73dUjMQ/edit#gid=329238364">
                                    BULK ENROLMENT FORM
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex p-2">
                    <img
                        src="../../images/BulkRegistration/bulkEnrolmentProcess.png"
                        alt="EnrolmentProcess"
                    />
                </div>
            </div>
        </>
    );
}

export default BulkEnrolSection;
