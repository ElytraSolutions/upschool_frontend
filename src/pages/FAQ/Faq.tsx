import React from 'react';
import ExpandableTable from '../../components/Table/ExpandableTable';
import {
    RGData,
    AboutData,
    PatnershipDontaionData,
    UpdatesCommunicationData,
    HelpData,
    CanvaData,
} from '../../data/FAQdata';

interface RowData {
    question: string;
    answer: React.ReactNode;
}

function Faq() {
    const data: RowData[] = [
        {
            question: 'John Doe',
            answer: 'Additional answerrmation about John Doe goes here.',
        },
        {
            question: 'Jane Smith',
            answer: 'Additional answerrmation about Jane Smith goes here.',
        },
        {
            question: 'Bob Johnson',
            answer: 'Additional answerrmation about Bob Johnson goes here.',
        },
        {
            question: 'Alice Brown',
            answer: 'Additional answerrmation about Alice Brown goes here.',
        },
        {
            question: 'Eve White',
            answer: 'Additional answerrmation about Eve White goes here.',
        },
    ];
    return (
        <>
            <div className="bg-[#242254c0]">
                <div className="max-w-6xl m-auto ">
                    <div className="flex flex-col gap-6 p-6 text-white items-center text-center">
                        <p className="text-5xl font-bold ]">FAQ</p>
                        <p className="text-[#b7b3fb] text-xl font-bold">
                            NEED HELP?
                        </p>
                        <span className="leading-8">
                            We get asked many questions about Upschool. Here are
                            some of the answers to those questions. If you need
                            further help, please email us at hello@upschool.co.
                        </span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 text-white ">
                        <div className="p-4 flex flex-col gap-4">
                            <div className="border-l-2 border-red-700 pl-2 py-0 font-bold text-2xl">
                                REGISTRATION & ENROLLMENT
                            </div>
                            <div>
                                <ExpandableTable data={RGData} />
                            </div>
                        </div>
                        <div className="p-4 flex flex-col gap-4">
                            <div className="border-l-2 border-red-700 pl-2 py-0 font-bold text-2xl">
                                ABOUT UPSCHOOL
                            </div>
                            <div>
                                <ExpandableTable data={AboutData} />
                            </div>
                        </div>
                        <div className="p-4 flex flex-col gap-4">
                            <div className="border-l-2 border-red-700 pl-2 py-0 font-bold text-2xl">
                                PARTNERSHIPS & DONATIONS
                            </div>
                            <div>
                                <ExpandableTable
                                    data={PatnershipDontaionData}
                                />
                            </div>
                        </div>
                        <div className="p-4 flex flex-col gap-4">
                            <div className="border-l-2 border-red-700 pl-2 py-0 font-bold text-2xl">
                                UPDATES & COMMUNICATIONS
                            </div>
                            <div>
                                <ExpandableTable
                                    data={UpdatesCommunicationData}
                                />
                            </div>
                        </div>
                        <div className="p-4 flex flex-col gap-4">
                            <div className="border-l-2 border-red-700 pl-2 py-0 font-bold text-2xl">
                                HELP
                            </div>
                            <div>
                                <ExpandableTable data={HelpData} />
                            </div>
                        </div>
                        <div className="p-4 flex flex-col gap-4">
                            <div className="border-l-2 border-red-700 pl-2 py-0 font-bold text-2xl">
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
