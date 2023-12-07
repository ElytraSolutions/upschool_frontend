import { data } from '../../data/NavbarBoxData';

import { NavbarBox as Box } from './NavbarBox';

import axiosInstance from '../../config/Axios';
import { useEffect, useState } from 'react';

function capitalizeWords(inputString) {
    // Remove extra spaces and split the string into an array of words
    const wordsArray = inputString.trim().split(/\s+/);

    // Capitalize the first letter of each word
    const capitalizedWords = wordsArray.map(
        (word) => word.charAt(0).toUpperCase() + word.slice(1),
    );

    // Join the capitalized words back into a string
    const resultString = capitalizedWords.join(' ');

    return resultString;
}

const LargeScreenMenuBar = () => {
    const [charityResponse, setCharityResponse] = useState<any>(null);
    const [charityInfo, setCharityInfo] = useState<any>(null);
    useEffect(() => {
        (async () => {
            const resp = await axiosInstance.get(`/data/charities`);
            console.log('NavBar bata: ', resp.data.data);
            setCharityResponse(resp.data.data);
        })();
    }, []);
    useEffect(() => {
        if (charityResponse) {
            setCharityInfo(() => {
                return [
                    {
                        id: 1,
                        title: 'All Charities',
                        path: '/charities/',
                    },
                    ...charityResponse.map((charity, index) => {
                        return {
                            id: index,
                            title: capitalizeWords(charity.name),
                            path: '/charities/' + charity.slug + '/',
                        };
                    }),
                ];
            });
        }
    }, [charityResponse]);
    useEffect(() => {
        if (charityInfo) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            //@ts-ignore
            data[2].children[0].children = charityInfo;
            console.log('aayeko data: ', data);
            console.log('charity info: ', charityInfo);
        }
    }, [charityInfo]);
    return (
        <div className="flex justify-between gap-2 md:gap-3 lg:gap-4  xl:gap-5 2xl:gap-8 items-center z-10">
            {data.map((inf) => (
                <Box key={inf.id} inf={inf} />
            ))}
            {/* <span className="pr-1 block w-32 max-w-fit">
                <NavLink
                    to={navData.path ? navData.path : '#'}
                    className="text-white text-sm"
                >
                    {navData.title}
                </NavLink>
            </span> */}
        </div>
    );
};

export { LargeScreenMenuBar as ComputerMenu };
