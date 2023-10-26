const PageNumber = ({
    currentPage,
    totalPage,
    setCurrentPage,
    ScrollToProjects,
}) => {
    const activePage = ' text-gray-400';

    const handleClick = (page) => {
        setCurrentPage(page);
        ScrollToProjects();
    };

    const numbers = Array.from({ length: totalPage }, (e, i) => {
        const pageClass = i + 1 == currentPage ? activePage : '';
        return (
            <button
                className={'my-6 xss:mx-2 sm:mx-3 lg:mx-6' + pageClass}
                onClick={() => {
                    handleClick(i + 1);
                }}
            >
                {i + 1}
            </button>
        );
    });
    return <>{numbers}</>;
};

export default PageNumber;
