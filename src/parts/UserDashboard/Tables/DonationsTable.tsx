import React from 'react';
import resolveImgURL from '../../../utlis/resolveImgURL';
// TODO fetch 'donations' from backend
const donations = [
    {
        id: 10216,
        name: "St Mary's Primary School in Greensborough are Building a Library in Nagjangud, India (Project #5), through Book purchase",
        organization: 'Upschool Library Projects',
        tips: '5.00',
        upschoolTip: '10.56',
        file: '', // TODO add link to download invoice file
    },
    {
        id: 10296,
        name: 'Support the Supply of Roots & Shoots Resources Boxes for Schools to Improve Educational Quality, Environmental Awareness and to Promote Positive Health Outcomes for Students',
        organization: 'The Jane Goodall Institue Australia',
        tips: '56.00',

        file: '', // TODO add link to download invoice file
    },
    {
        id: 10216,
        name: "St Mary's Primary School in Greensborough are Building a Library in Nagjangud, India (Project #5), through Book purchase",
        organization: 'Upschool Library Projects',
        tips: '5.00',
        upschoolTip: '7.99',
        file: '', // TODO add link to download invoice file
    },
];
export default function DonationsTable() {
    return (
        <>
            <table className="text-sm md:text-base text-theme-color w-fit xl:w-full">
                <thead className="bg-white text-center font-semibold">
                    <tr>
                        <th className="p-1 xs:p-4">Donation ID</th>
                        <th className="p-1 xs:p-4">Project Name</th>
                        <th className="p-1 xs:p-4">Donation Amount</th>
                        <th className="p-1 xs:p-4">Invoice</th>
                    </tr>
                </thead>
                <tbody>
                    {donations.map((donation, index) => (
                        <React.Fragment key={index}>
                            {/* First row */}
                            <tr
                                className={` font-normal w-full ${
                                    index % 2 === 0 ? 'bg-stone-200/50' : ''
                                }`} //Gives same background for pair of corresponding rows
                            >
                                {/* Donation Id */}
                                <td className="p-1 xs:p-4 font-semibold align-top">
                                    <div className="flex justify-center">
                                        <span>#{donation.id}</span>
                                    </div>
                                </td>
                                {/* Project name and its organization */}
                                <td className=" max-w-lg p-1 xs:p-4 flex flex-col gap-1.5 text-left">
                                    <span className="font-light">
                                        {donation.name}
                                    </span>
                                    <span className="font-semibold text-sm">
                                        {donation.organization}
                                    </span>
                                </td>
                                {/* Donation amount */}
                                <td className="p-1 xs:p-4 text-center font-semibold">
                                    AU ${donation.tips}
                                </td>
                                {/* Invoice download */}
                                <td className="p-1 xs:p-4">
                                    <div className="flex flex-row justify-center cursor-pointer">
                                        {/* TODO implement download of invoice */}
                                        <img
                                            src={resolveImgURL(
                                                '/images/DownloadIcon.png',
                                            )}
                                            alt="Download"
                                            width="23"
                                            height="22"
                                        />
                                    </div>
                                </td>
                            </tr>
                            {/* Second row */}
                            {donation.upschoolTip && (
                                <tr
                                    className={` font-normal w-full border-t border-theme-color/20 ${
                                        index % 2 === 0 ? 'bg-stone-200/50' : ''
                                    }`} //Gives same background for pair of corresponding rows
                                >
                                    <td>&nbsp;</td>
                                    {/* Upschool tip */}
                                    <td className=" max-w-lg p-1 xs:p-4 flex flex-col gap-1 text-left font-light">
                                        Upschool Tip
                                    </td>
                                    {/* Upschool tip amount */}
                                    <td className="p-1 xs:p-4 text-center font-semibold">
                                        AU ${donation.upschoolTip}
                                    </td>
                                    <td>&nbsp;</td>
                                </tr>
                            )}
                        </React.Fragment>
                    ))}
                </tbody>
            </table>
        </>
    );
}
