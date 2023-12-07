import { useEffect, useState } from 'react';
import projectImage from '../../assets/projectimage.jpg';
import BooksPopUp from './BooksPopUp';
import HelpPopup from './HelpPopup';

const AuthorsRecommendedProject = () => {
    // replace with the project details
    const projectName = 'Invest in Education for Childern living in poverty';
    const projectDescription =
        'Et laborum labore est exercitation magna est do aute nostrud adipisicing. Ullamco nisi cillum ea ut exercitation tempor culpa proident ';
    const projectImg = projectImage;
    const projectProvider = 'Opportunity International Australia';
    // const projectLink = '';
    const generatedAmount = 'AU $20.0';
    const [showAuthorBookPopUp, setShowAuthorBookPopUp] = useState(false);
    const [isHelpPopupOpen, setHelpPopupOpen] = useState(false);

    const openHelpPopup = () => {
        setHelpPopupOpen(true);
    };

    const closeHelpPopup = () => {
        setHelpPopupOpen(false);
    };

    useEffect(() => {
        document.body.style.overflow = isHelpPopupOpen ? 'hidden' : 'unset';
    }, [isHelpPopupOpen]);

    return (
        <>
            <div className="md:mb-10">
                <div className="bg-gray-100 rounded-xl p-4 px-4">
                    <div className="font-bold text-xl border-b pb-2 border-gray-300">
                        <h1>Author's Recommended Project</h1>
                    </div>
                    <div className="mt-2 text-sm">
                        <p>{projectDescription}</p>
                    </div>
                    <br />
                    <img src={projectImg} alt="project image"></img>
                    <br />
                    <div className="font-black text-xl">
                        <a className="hover:cursor-default">{projectName}</a>
                    </div>
                    <div className="mt-2 text-sm">
                        <p>{projectProvider}</p>
                    </div>
                    <br />
                    <div>
                        <button
                            className="text-blue-950 text-sm underline font-semibold"
                            onClick={openHelpPopup}
                        >
                            Learn how you can help
                        </button>
                    </div>
                </div>
                <br />
                <div className="bg-gray-100 rounded-xl p-4 px-4">
                    <div>Total amount this has generated for Charity:</div>
                    <div className="text-pink-700 text-2xl font-bold text-right">
                        {generatedAmount}
                    </div>
                </div>
                <div>
                    <button
                        className="border border-gray-900 w-full h-full py-3 mt-4 rounded-xl font-bold"
                        onClick={() => {
                            setShowAuthorBookPopUp(true);
                        }}
                    >
                        View all books from this author
                    </button>
                </div>
                <BooksPopUp
                    showAuthorBookPopUp={showAuthorBookPopUp}
                    setShowAuthorBookPopUp={setShowAuthorBookPopUp}
                />
            </div>
            {isHelpPopupOpen && <HelpPopup onClose={closeHelpPopup} />}
        </>
    );
};

export default AuthorsRecommendedProject;
