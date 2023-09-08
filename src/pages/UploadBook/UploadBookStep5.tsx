interface IStep5Props {
    oldValues: Record<string, any>;
    submitHandler: (values: any, onSubmitProps: any) => Promise<void>;
    backHandler: (values: any) => void;
}
const UploadBookStep5 = ({
    oldValues,
    submitHandler,
    backHandler,
}: IStep5Props) => {
    return (
        <>
            <h1>uplodbookStep5</h1>
        </>
    );
};

export { UploadBookStep5 };
