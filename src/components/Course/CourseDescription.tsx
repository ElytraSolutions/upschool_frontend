import { FunctionalIFrameComponent } from './FuncIFrame';

function CourseDescription({ editorData, title, subtitle, theme }) {
    console.log('Editor Data: ', editorData);
    console.log('Title: ', title);
    console.log('Subtitle: ', subtitle);
    return (
        <>
            <div className="grid w-full font-sans text-theme-color">
                <div className="text-[75px] text-center font-semibold">
                    {title}
                </div>
                <div
                    className="text-[23px] text-center font-semibold mb-5"
                    style={{ color: theme }}
                >
                    {subtitle}
                </div>
                <div className="flex w-full h-full justify-center">
                    <FunctionalIFrameComponent>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: editorData,
                            }}
                        ></div>
                    </FunctionalIFrameComponent>
                </div>
            </div>
        </>
    );
}

export default CourseDescription;
