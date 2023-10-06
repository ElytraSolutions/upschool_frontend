import useScreenWidthAndHeight from '../../hooks/useScreenWidthAndHeight';
import LibraryLargeScreen from './LibraryLargeScreen';
import LibrarySmallScreen from './LibrarySmallScreen';

const DefaultPage = () => {
    const { isTabScreen } = useScreenWidthAndHeight();
    return <>{isTabScreen ? <LibraryLargeScreen /> : <LibrarySmallScreen />}</>;
};
export default DefaultPage;
