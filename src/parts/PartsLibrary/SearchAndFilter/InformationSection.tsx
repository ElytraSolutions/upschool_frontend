import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

// TODO Replace this data with data from the backend
const data = [
    {
        title: 'Best Sellers',
        number: 25,
        books: [
            { title: 'The Beach Clean-up', path: '/library' },
            { title: 'The Day People Stopped Polluting', path: '/library' },
            { title: 'The Jauglar and the Tortoise', path: '/library' },
            { title: 'So Much Rubbish!', path: '/library' },
            { title: 'The Beach Clean-up', path: '/library' },
            { title: 'The Day People Stopped Polluting', path: '/library' },
            { title: 'The Jauglar and the Tortoise', path: '/library' },
            { title: 'So Much Rubbish!', path: '/library' },
        ],
    },
    {
        title: 'Featured Books',
        number: 10,
        books: [
            { title: 'Imagine', path: '/library' },
            { title: 'The Somme', path: '/library' },
            { title: 'The Jauglar and the Tortoise', path: '/library' },
            { title: 'So Much Rubbish!', path: '/library' },
            { title: "Don't Play In The Toilet", path: '/library' },
            { title: 'The Day People Stopped Polluting', path: '/library' },
            { title: 'The Jauglar and the Tortoise', path: '/library' },
            { title: 'So Much Rubbish!', path: '/library' },
        ],
    },
    {
        title: 'Book Bundles',
        number: 17,
        books: [
            { title: 'The Beach Clean-up', path: '/library' },
            { title: 'The Day People Stopped Polluting', path: '/library' },
            { title: 'The Jauglar and the Tortoise', path: '/library' },
            { title: 'So Much Rubbish!', path: '/library' },
            { title: 'The Beach Clean-up', path: '/library' },
            { title: 'The Day People Stopped Polluting', path: '/library' },
            { title: 'The Jauglar and the Tortoise', path: '/library' },
            { title: 'So Much Rubbish!', path: '/library' },
        ],
    },
    {
        title: 'Recently Viewed',
        number: 21,
        books: [
            { title: 'Prof and Stan', path: '/library' },
            { title: 'The Day People Stopped Polluting', path: '/library' },
            { title: 'The Jauglar and the Tortoise', path: '/library' },
            { title: 'So Much Rubbish!', path: '/library' },
            { title: 'The Lively Sea', path: '/library' },
            { title: 'The Day People Stopped Polluting', path: '/library' },
            { title: 'The Jauglar and the Tortoise', path: '/library' },
            { title: 'So Much Rubbish!', path: '/library' },
        ],
    },
];
type InformationSectionProps = {
    setSelectSection: (value: string) => void;
};

const InformationSection: React.FC<InformationSectionProps> = ({
    setSelectSection,
}) => {
    // maintains the state to expand sections (Best Sellers, Featured Books, Book Bundles and Recently Viewed) below search bar
    // by clicking on '+' or '-' sign
    const [selectedOption, setSelectedOption] =
        useState<string>('Best Sellers');
    return (
        <>
            <div>
                <ul className=" p-6">
                    {data.map((category, index) => (
                        <li key={index} className="flex flex-col gap-2 pb-3">
                            <div className="flex flex-row  items-center gap-1 font-semibold">
                                <p
                                    className="hover:cursor-pointer text-lg pb-0.5"
                                    onClick={() => {
                                        setSelectedOption(category.title);
                                    }}
                                >
                                    {selectedOption === category.title
                                        ? `-`
                                        : `+`}
                                </p>{' '}
                                <p>{category.title}</p>{' '}
                                <p>{`(${category.number})`}</p>
                            </div>

                            <div
                                className={`${
                                    selectedOption === category.title
                                        ? ''
                                        : 'hidden'
                                } max-h-36 px-8  overflow-auto`}
                            >
                                <p
                                    className="underline underline-offset-4 hover:cursor-pointer text-sm text-theme-color font-semibold lg:text-base py-1 "
                                    onClick={() => {
                                        setSelectSection(category.title);
                                    }}
                                >
                                    View All {`>`}
                                </p>

                                <ul className="h-full">
                                    {category.books.map((book, index) => (
                                        <li
                                            key={index}
                                            className="py-1  font-light text-sm w-fit"
                                        >
                                            <NavLink to={book.path}>
                                                <p className="">{book.title}</p>
                                            </NavLink>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default InformationSection;
