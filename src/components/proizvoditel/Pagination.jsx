import React from 'react';

const Pagination = ({ totalPages, currentPage, goToPage }) => {
    const handleClick = (page) => {
        goToPage(page);
    };

    const renderPageNumbers = () => {
        const pageNumbers = [];
        const maxPageNumbersToShow = 3;

        if (currentPage <= maxPageNumbersToShow) {
            for (let i = 1; i <= maxPageNumbersToShow + 1; i++) {
                pageNumbers.push(
                    <button
                        key={i}
                        onClick={() => handleClick(i)}
                        className={`mx-1 border rounded w-[30px] h-[30px] ${currentPage === i ? 'bg-green-600 text-white' : ''}`}
                    >
                        {i}
                    </button>
                );
            }
            pageNumbers.push(<span key="ellipsis" className="mx-1 border rounded w-[30px] h-[30px] flex items-center justify-center">...</span>);
            pageNumbers.push(
                <button
                    key={totalPages}
                    onClick={() => handleClick(totalPages)}
                    className={`mx-1 border rounded w-[30px] h-[30px] ${currentPage === totalPages ? 'bg-green-600 text-white' : ''}`}
                >
                    {totalPages}
                </button>
            );
        } else if (currentPage >= totalPages - maxPageNumbersToShow) {
            pageNumbers.push(
                <button
                    key={1}
                    onClick={() => handleClick(1)}
                    className={`mx-1 border rounded w-[30px] h-[30px] ${currentPage === 1 ? 'bg-green-600 text-white' : ''}`}
                >
                    1
                </button>
            );
            pageNumbers.push(<span key="ellipsis" className="mx-1 border rounded w-[30px] h-[30px]">...</span>);
            for (let i = totalPages - maxPageNumbersToShow; i <= totalPages; i++) {
                pageNumbers.push(
                    <button
                        key={i}
                        onClick={() => handleClick(i)}
                        className={`mx-1 border rounded w-[30px] h-[30px] ${currentPage === i ? 'bg-green-600 text-white' : ''}`}
                    >
                        {i}
                    </button>
                );
            }
        } else {
            pageNumbers.push(
                <button
                    key={1}
                    onClick={() => handleClick(1)}
                    className={`mx-1 border rounded w-[30px] h-[30px] ${currentPage === 1 ? 'bg-green-600 text-white' : ''}`}
                >
                    1
                </button>
            );
            pageNumbers.push(<span key="ellipsis-1" className="mx-1 border rounded w-[30px] h-[30px]">...</span>);
            for (let i = currentPage - 1; i <= currentPage + 1; i++) {
                pageNumbers.push(
                    <button
                        key={i}
                        onClick={() => handleClick(i)}
                        className={`mx-1 border rounded w-[30px] h-[30px] ${currentPage === i ? 'bg-green-600 text-white' : ''}`}
                    >
                        {i}
                    </button>
                );
            }
            pageNumbers.push(<span key="ellipsis-2" className="mx-1 border rounded w-[30px] h-[30px]">...</span>);
            pageNumbers.push(
                <button
                    key={totalPages}
                    onClick={() => handleClick(totalPages)}
                    className={`mx-1 border rounded w-[30px] h-[30px] ${currentPage === totalPages ? 'bg-green-600 text-white' : ''}`}
                >
                    {totalPages}
                </button>
            );
        }
        return pageNumbers;
    };

    return (
        <div className="flex justify-center mt-4">
            <button
                onClick={() => handleClick(1)}
                disabled={currentPage === 1}
                className="w-[30px] h-[30px] border rounded mx-1"
            >
                &laquo;
            </button>
            <button
                onClick={() => handleClick(currentPage - 1)}
                disabled={currentPage === 1}
                className="w-[30px] h-[30px] border rounded mx-1"
            >
                &lt;
            </button>
            {renderPageNumbers()}
            <button
                onClick={() => handleClick(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="w-[30px] h-[30px] border rounded mx-1"
            >
                &gt;
            </button>
            <button
                onClick={() => handleClick(totalPages)}
                disabled={currentPage === totalPages}
                className="w-[30px] h-[30px] border rounded mx-1"
            >
                &raquo;
            </button>
        </div>
    );
};

export default Pagination;
