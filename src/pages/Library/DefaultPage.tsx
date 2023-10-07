import { useState } from 'react';
import useScreenWidthAndHeight from '../../hooks/useScreenWidthAndHeight';
import LibraryLargeScreen from './LibraryLargeScreen';
import LibrarySmallScreen from './LibrarySmallScreen';

const DefaultPage = () => {
    const { isTabScreen } = useScreenWidthAndHeight();
    // it maintains state for selected section (such as: Best Sellers , Featured Books, Book Bundles and Recently Viewed)
    const [selectSection, setSelectSection] = useState<string>('All Sections');
    return (
        <>
            {isTabScreen ? (
                <LibraryLargeScreen
                    selectSection={selectSection}
                    setSelectSection={setSelectSection}
                />
            ) : (
                <LibrarySmallScreen
                    selectSection={selectSection}
                    setSelectSection={setSelectSection}
                />
            )}
        </>
    );
};
export default DefaultPage;
