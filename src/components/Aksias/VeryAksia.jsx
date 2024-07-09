import React, { useState, useEffect } from 'react';
import { MdChevronRight, MdOutlineAlignVerticalBottom } from 'react-icons/md';
import { catalogCrData } from '../carusels/catalogCarouselData';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToLike, removeLike } from '../../redux/LikeList';
import { addToCart } from '../../redux/cartSlice';
import heart from '../../assets/heart.png';
import greenHeart from '../../assets/greenheart.png';

const VeryAksia = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [heartStates, setHeartStates] = useState({});
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const itemsPerPage = 9;

    useEffect(() => {
        const cartData = JSON.parse(localStorage.getItem('cart')) || [];
        cartData.forEach(item => dispatch(addToCart(item)));

        const likeData = JSON.parse(localStorage.getItem('likes')) || {};
        setHeartStates(likeData);
    }, [dispatch]);

    const handleAddToCart = (product) => {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const existingProductIndex = cart.findIndex(item => item.id === product.id);

        if (existingProductIndex !== -1) {
            cart[existingProductIndex].quantity += 1;
            cart[existingProductIndex].totalPrice = cart[existingProductIndex].quantity * cart[existingProductIndex].price;
        } else {
            const tempProduct = {
                ...product,
                quantity: 1,
                totalPrice: product.price,
            };
            cart.push(tempProduct);
        }

        dispatch(addToCart(cart));
        localStorage.setItem('cart', JSON.stringify(cart));
    };

    const toggleHeart = (product) => {
        setHeartStates(prevState => {
            const newHeartStates = { ...prevState, [product.id]: !prevState[product.id] };

            if (newHeartStates[product.id]) {
                dispatch(addToLike(product));
            } else {
                dispatch(removeLike(product.id));
            }

            localStorage.setItem('likes', JSON.stringify(newHeartStates));
            return newHeartStates;
        });
    };

    const filteredData = selectedCategory
        ? catalogCrData.filter(item => item.kategory === selectedCategory && item.title === "-30%")
        : catalogCrData.filter(item => item.title === "-30%");

    const totalPages = Math.ceil(filteredData.length / itemsPerPage);

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    const paginatedData = filteredData
        .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    const handleCategoryChange = (category) => {
        setSelectedCategory(category === 'Группы товаров' ? null : category);
        setCurrentPage(1);
    };

    return (
        <div className='w-[1440px] h-auto mx-auto mt-4 flex flex-col items-center pb-4 pt-4'>
            <div className='w-full flex justify-between'>
                <div className='w-[20%] h-[240px] rounded-[20px] border'>
                    <h2 className='w-[90%] mx-auto text-[18px] mt-2'>Категории</h2>
                    <hr className='w-[90%] mx-auto mt-3 mb-3' />
                    <ul className='w-[90%] mx-auto'>
                        <li className='flex justify-between items-center mt-3 cursor-pointer' onClick={() => handleCategoryChange('Группы товаров')}>Группы товаров<MdChevronRight /></li>
                        <li className='flex justify-between items-center mt-3 cursor-pointer' onClick={() => handleCategoryChange('Мониторы')}>Мониторы<MdChevronRight /></li>
                        <li className='flex justify-between items-center mt-3 cursor-pointer' onClick={() => handleCategoryChange('Лампы')}>Лампы<MdChevronRight /></li>
                        <li className='flex justify-between items-center mt-3 cursor-pointer' onClick={() => handleCategoryChange('Кровати')}>Кровати<MdChevronRight /></li>
                        <li className='flex justify-between items-center mt-3 cursor-pointer' onClick={() => handleCategoryChange('Рентгены')}>Рентгены<MdChevronRight /></li>
                    </ul>
                </div>
                <div className='w-[79%] h-auto grid grid-cols-3 gap-4'>
                    {paginatedData.map((item, index) => (
                        <div key={index} className="2xl:w-[100%] xl:w-[100%] lg:w-[100%] md:w-[100%] sm:w-[100%] w-[100%] 2xl:h-[560px] xl:h-[580px] lg:h-[550px] md:h-[500px] sm:h-[530px] h-[570px] border rounded-[20px]">
                            <div className="w-[100%] h-[55%] bg-[white] flex items-center justify-center relative rounded-[20px]">
                                <div className='absolute flex justify-between w-[95%] mx-auto top-3'>
                                    <button className={`text-[14px] pl-2 pr-2 h-[30px] rounded-[20px] border font-semibold text-[#088269] ${item.title === 'Новинка' ? 'bg-[rgb(8,130,105,0.3)] w-[90px] border-[#088269]' :
                                        item.title === 'Хит продаж' ? 'bg-[rgb(176,109,202,0.3)] border-[rgb(176,109,202)] text-[rgb(40,16,49)] w-[110px]' :
                                            item.title === '-30%' ? 'bg-[rgba(242,247,87,0.3)] border-[rgba(242,247,87)] text-[#e6de3f] w-[60px]' : 'bg-[#BDDBC7]'
                                        }`}>
                                        {item.title}
                                    </button>
                                    <div className='flex gap-2'>
                                        <div className='cursor-pointer'><MdOutlineAlignVerticalBottom className='text-[24px]' /> </div>
                                        <div
                                            onClick={() => toggleHeart(item)}
                                            className='cursor-pointer flex items-center justify-center w-[40px] h-[30px]' >
                                            {heartStates[item.id] ? (
                                                <img src={greenHeart} className='w-[100%] h-[80%]' />
                                            ) : (
                                                <img src={heart} className='w-[70%] h-[80%]' />
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <img
                                    src={item.img}
                                    alt={`Complex ${index + 1}`}
                                    className="w-[60%] h-[70%] object-cover rounded-tr-[20px] rounded-tl-[20px] cursor-pointer"
                                    onClick={() => navigate(`/product/${item.id}`)}
                                />
                            </div>
                            <div className='w-[90%] h-[45%] mx-auto'>
                                <h2 className='2xl:text-[16px] xl:text-[16px] lg:text-[14px] md:text-[14px] sm:text-[13px] text-[12px] font-semibold w-[90%] mt-[20px]'>{item.name}</h2>
                                <p className='text-[gray] xl:text-[14px] lg:text-[13px] md:text-[13px] sm:text-[12px] text-[12px] w-[160px]'>{item.common_name}</p>
                                <p className='text-[gray] xl:text-[14px] lg:text-[13px] md:text-[13px] sm:text-[12px] text-[12px] w-[160px]'>{item.price_title}</p>
                                <h2 className='2xl:text-[22px] xl:text-[20px] lg:text-[18px] md:text-[18px] sm:text-[16px] text-[18px] font-semibold mt-[30px]'>{item.price}</h2>
                                <button className='w-[100%] h-[45px] rounded-[20px] border font-semibold text-[#088269] mt-[20px] transition-all [transition:0.3s] hover:bg-[#088269] hover:text-[white] 2xl:text-[18px] xl:text-[17px] lg:text-[16px] md:text-[15px] sm:text-[13px] text-[12px]' onClick={() => handleAddToCart(item)}>{item.btn_name}</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='flex justify-center mt-4'>
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index}
                        onClick={() => handlePageChange(index + 1)}
                        className={`w-[40px] h-[40px] rounded-[10px] border ${currentPage === index + 1 ? 'bg-[#088269] text-white' : 'bg-white text-[#088269]'} mx-1`}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default VeryAksia;
