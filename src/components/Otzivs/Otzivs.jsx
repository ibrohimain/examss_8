import React, { useState } from 'react';
import { otzivs } from './Otzives'; // Assuming otzivs is imported correctly from Otzives
import { Rating } from '@mui/material';

const Otzivs = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const reviewsPerPage = 6;

    // Calculate total pages
    const totalPages = Math.ceil(otzivs.length / reviewsPerPage);

    // Get current reviews
    const indexOfLastReview = currentPage * reviewsPerPage;
    const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
    const currentReviews = otzivs.slice(indexOfFirstReview, indexOfLastReview);

    // Handle page change
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className='2xl:w-[1440px] xl:w-[95%] lg:w-[95%] md:w-[95%] sm:w-[95%] w-[95%] mx-auto mb-[100px]'>
            <div>
                <h2 className='text-[34px] mt-5 mb-5'>Отзывы</h2>
            </div>
            <div className='grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-4'>
                {currentReviews.map((item, index) => ( // Use parentheses instead of curly braces for implicit return
                    <div key={item.id} className='w-[100%] h-auto pb-10 pt-10 border bg-white flex items-center justify-center rounded-[10px]'>
                        <div className='w-[90%] h-[90%]'>
                            <div className='w-[100%] flex justify-between items-center'>
                                <div style={{ display: 'flex', alignItems: 'center', gap: "1rem" }}>
                                    <div><img src={item.img} alt={item.title_text} /></div> {/* Assuming item.image and item.title_text are properties of each review */}
                                    <div>
                                        <h2 className='text-[16px] font-medium'>{item.name}</h2>
                                        <p className='text-[12px] text-[gray]'>{item.commonname}</p> {/* Assuming item.commonname is the reviewer's name */}
                                        <Rating name="size-large" defaultValue={2} size="large" sx={{ fontSize: "16px" }} />
                                    </div>
                                </div>
                                <div>
                                    <p className='text-[14px]'>{item.year}</p> {/* Assuming item.year is the year of the review */}
                                </div>
                            </div>
                            <div className='mt-5'>
                                <p className='text-[gray] 2xl:text-[16px] xl:text-[15px] lg:text-[14px] md:text-[13px] sm:text-[12px] text-[12px]'>{item.title_text}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className='w-[100%]  flex justify-center mt-4'>
                <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className='w-auto h-[35px] mx-1 bg-gray-200 rounded disabled:opacity-50'
                >
                    Previous
                </button>
                {[...Array(totalPages)].map((_, index) => (
                    <button
                        key={index}
                        onClick={() => handlePageChange(index + 1)}
                        className={`w-[35px] h-[35px] mx-1 rounded ${currentPage === index + 1 ? 'bg-[#088269] text-white' : 'bg-gray-200'}`}
                    >
                        {index + 1}
                    </button>
                ))}
                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className='w-auto h-[35px] mx-1 bg-gray-200 rounded disabled:opacity-50'
                >
                    Next
                </button>
            </div>
        </div >
    );
};

export default Otzivs;
