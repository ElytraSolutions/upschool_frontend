import { useRef, useState, useEffect } from 'react';
import { FunctionalIFrameComponent } from '../../components/Course/FuncIFrame';
import { useNavigate } from 'react-router-dom';

const ProjectDescription = ({ data }) => {
    const navigate = useNavigate();

    const divRef = useRef<any>(null);
    const [dynHeight, setDynHeight] = useState(0);
    useEffect(() => {
        const timerId = setTimeout(() => {
            if (divRef.current) {
                const divHeight = divRef.current.clientHeight;
                // console.log('div height:', divHeight);
                setDynHeight(divHeight + 25);
            }
        }, 3000); // Adjust the timeout duration as needed
        return () => clearTimeout(timerId);
    }, [divRef]);

    const { projectDescription, charity, slug } = data;

    const handleViewPrBottomClick = () => {
        navigate(`/charities/${slug}`);
    };

    return (
        <>
            <div className="w-11/12 md:w-4/5 mx-auto">
                <div
                    className={`flex w-full justify-center overflow-y-hidden`}
                    style={{ height: `${dynHeight}px` }}
                >
                    {/*TODO: here the contents of description may come as it is or we may need to modify it -> to ask */}
                    <FunctionalIFrameComponent title={''}>
                        <div
                            ref={divRef}
                            dangerouslySetInnerHTML={{
                                __html: projectDescription
                                    .replace(
                                        /<p/g,
                                        '<div style="display:grid; grid-template-columns: 1fr 1fr; height:auto; align-items:center; gap: 50px; text-align:left"',
                                    )
                                    .replace(/<\/p>/g, '</div>'),
                            }}
                            style={{ display: 'grid', gap: '50px' }}
                        ></div>
                    </FunctionalIFrameComponent>
                </div>
                <div className="w-full mt-3">
                    <div className="font-semibold text-3xl text-font-color">
                        More Information
                    </div>
                    <div className="flex justify-center">
                        <button
                            onClick={handleViewPrBottomClick}
                            className="px-5 py-3 bg-theme-color text-gray-100 duration-300 rounded hover:-translate-y-2 mt-10 mb-20"
                        >
                            View All Projects of{' '}
                            <span className="capitalize">{charity}</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProjectDescription;
