import { Search } from '@mui/icons-material';
import React, { useState, useEffect } from 'react';
import { upravlenie } from './Upravlenie';
import Pagination from './Pagination';

const Upravlenie = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCountries, setSelectedCountries] = useState([]);
    const [cardsPerPage, setCardsPerPage] = useState(12);

    const countries = [
        'Австралия', 'Австрия', 'Беларусь', 'Бельгия',
        'Великобритания', 'Германия', 'Израиль', 'Испания'
    ];

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1280) {
                setCardsPerPage(12);
            } else {
                setCardsPerPage(8);
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Set initial value

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
        setCurrentPage(1);
    };

    const handleCountryChange = (country) => {
        setSelectedCountries((prevSelected) =>
            prevSelected.includes(country)
                ? prevSelected.filter((c) => c !== country)
                : [...prevSelected, country]
        );
        setCurrentPage(1);
    };

    const filteredItems = upravlenie.filter((item) => {
        const matchesSearch = item.country.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCountry = selectedCountries.length === 0 || selectedCountries.includes(item.country);
        return matchesSearch && matchesCountry;
    });

    const totalPages = Math.ceil(filteredItems.length / cardsPerPage);

    const currentCards = filteredItems.slice(
        (currentPage - 1) * cardsPerPage,
        currentPage * cardsPerPage
    );

    const goToPage = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <>
            <div className='w-[100%] h-auto mx-auto mb-[100px]' >
                <div className='2xl:w-[1440px] xl:w-[95%] lg:w-[95%] md:w-[95%] sm:w-[95%] w-[95%]  mx-auto h-auto mt-4 mb-4 2xl:flex xl:flex lg:flex md:flex justify-between'>
                    <div className='2xl:w-[24%] xl:w-[24%] lg:w-24%] md:w-[24%] lg:w-[24%] '>
                        <div className='w-[100%] h-auto  rounded-[10px]'>
                            <div className='w-[100%] mx-auto'>
                                <h2 className='text-[18px] font-semibold mt-3 mb-3'>Страны</h2>
                            </div>
                            <form className='w-[100%] h-[45px] rounded-[30px] bg-white flex justify-between items-center'>
                                <input
                                    type="text"
                                    className='outline-none w-[85%] h-[100%] rounded-[30px] pl-4'
                                    placeholder='Поиск по стране'
                                    value={searchQuery}
                                    onChange={handleSearchChange}
                                />
                                <div className='w-[15%] h-[100%] flex items-center justify-center'>
                                    <Search className='text-[24px] text-[gray]' />
                                </div>
                            </form>
                            <ul className='w-[100%] mb-3'>
                                {countries.map((country) => (
                                    <li key={country} className='w-[100%] flex items-center gap-2 mt-4'>
                                        <input
                                            type="checkbox"
                                            className='w-[20px] h-[20px]'
                                            checked={selectedCountries.includes(country)}
                                            onChange={() => handleCountryChange(country)}
                                        />
                                        {country}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className='w-[100%] flex gap-2 mt-4'>
                            <button
                                className='border-[#D5D1E1] w-[38%] h-[45px] border rounded-[30px]'
                                onClick={() => {
                                    setSelectedCountries([]);
                                    setSearchQuery('');
                                }}
                            >
                                Сбросить
                            </button>
                            <button className='w-[60%] bg-[#088269] h-[45px] rounded-[30px] text-white font-medium'>
                                Показать
                            </button>
                        </div>
                    </div>
                    <div className='2xl:w-[75%] xl:w-[75%] lg:w-[75%] md:w-[75%] sm:w-[100%] w-[100%] h-[1300px] mt-3 2xl:mt-0 xl:mt-0 lg:mt-0 md:mt-0 '>
                        <div className='grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-2 gap-3'>
                            {currentCards.length > 0 ? (
                                currentCards.map((item, index) => (
                                    <div key={index} className='w-[100%] h-[300px] border rounded-[10px]'>
                                        <div className='w-[100%] h-[60%] bg-white flex items-center rounded-tr-[10px] rounded-tl-[10px]'>
                                            <img src={item.img} alt="" className='w-full rounded-tl-[10px] rounded-tr-[10px]' />
                                        </div>
                                        <div className='w-[90%] h-[40%] mx-auto mt-4'>
                                            <p className='w-[70%]'>{item.text}</p>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className='w-full h-[300px] flex items-center justify-center'>
                                    <p>Ошибка 404: Страна не найдена</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className='2xl:w-[1440px] xl:w-[95%] lg:w-[95%] md:w-[95%] sm:w-[95%] w-[95%] mx-auto'>
                    <Pagination totalPages={totalPages} currentPage={currentPage} goToPage={goToPage} />
                </div>
            </div>
        </>
    );
};

export default Upravlenie;
