import { useEffect } from 'react';
import ExpandableTable from '../../components/Table/ExpandableTable';
import {
    RGData,
    AboutData,
    PatnershipDontaionData,
    UpdatesCommunicationData,
    HelpData,
    CanvaData,
} from '../../data/FAQdata';

// interface RowData {
//     question: string;
//     answer: React.ReactNode;
// }

function Faq() {
    // const data: RowData[] = [
    //     {
    //         question: 'John Doe',
    //         answer: 'Additional answerrmation about John Doe goes here.',
    //     },
    //     {
    //         question: 'Jane Smith',
    //         answer: 'Additional answerrmation about Jane Smith goes here.',
    //     },
    //     {
    //         question: 'Bob Johnson',
    //         answer: 'Additional answerrmation about Bob Johnson goes here.',
    //     },
    //     {
    //         question: 'Alice Brown',
    //         answer: 'Additional answerrmation about Alice Brown goes here.',
    //     },
    //     {
    //         question: 'Eve White',
    //         answer: 'Additional answerrmation about Eve White goes here.',
    //     },
    // ];
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = 'FAQ | Upschool';
    }, []);
    return (
        <>
            <div className="bg-[#242254c0]">
                <div className="m-auto max-w-6xl ">
                    <div className="flex flex-col items-center gap-6 p-6 text-center text-white">
                        <p className="text-5xl font-bold">FAQ</p>
                        <p className="text-xl font-bold text-[#b7b3fb]">
                            NEED HELP?
                        </p>
                        <span className="leading-8">
                            We get asked many questions about Upschool. Here are
                            some of the answers to those questions. If you need
                            further help, please email us at hello@upschool.co.
                        </span>
                    </div>
                    <div className="grid grid-cols-1 text-white md:grid-cols-2 ">
                        <div className="flex flex-col gap-4 p-4">
                            <div className="border-l-2 border-red-700 py-0 pl-2 text-2xl font-bold">
                                REGISTRATION & ENROLLMENT
                            </div>
                            <div>
                                <ExpandableTable data={RGData} />
                            </div>
                        </div>
                        <div className="flex flex-col gap-4 p-4">
                            <div className="border-l-2 border-red-700 py-0 pl-2 text-2xl font-bold">
                                ABOUT UPSCHOOL
                            </div>
                            <div>
                                <ExpandableTable data={AboutData} />
                            </div>
                        </div>
                        <div className="flex flex-col gap-4 p-4">
                            <div className="border-l-2 border-red-700 py-0 pl-2 text-2xl font-bold">
                                PARTNERSHIPS & DONATIONS
                            </div>
                            <div>
                                <ExpandableTable
                                    data={PatnershipDontaionData}
                                />
                            </div>
                        </div>
                        <div className="flex flex-col gap-4 p-4">
                            <div className="border-l-2 border-red-700 py-0 pl-2 text-2xl font-bold">
                                UPDATES & COMMUNICATIONS
                            </div>
                            <div>
                                <ExpandableTable
                                    data={UpdatesCommunicationData}
                                />
                            </div>
                        </div>
                        <div className="flex flex-col gap-4 p-4">
                            <div className="border-l-2 border-red-700 py-0 pl-2 text-2xl font-bold">
                                HELP
                            </div>
                            <div>
                                <ExpandableTable data={HelpData} />
                            </div>
                        </div>
                        <div className="flex flex-col gap-4 p-4">
                            <div className="border-l-2 border-red-700 py-0 pl-2 text-2xl font-bold">
                                CANVA & THE UPSCHOOL LIBRARY
                            </div>
                            <div>
                                <ExpandableTable data={CanvaData} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Faq;
