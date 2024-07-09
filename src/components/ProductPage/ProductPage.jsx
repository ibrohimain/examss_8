import { Rating } from '@mui/material';
import React, { useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { FiChevronLeft, FiMinus } from 'react-icons/fi';
import { IoIosHeartEmpty } from 'react-icons/io';
import { MdChevronRight, MdOutlineAlignVerticalBottom } from 'react-icons/md';
import { useParams, Link } from 'react-router-dom';
import { catalogCrData } from '../carusels/catalogCarouselData';
import CatalogCarouselData from '../carusels/CatalogCarouselData.jsx';
import PopularCategories from '../carusels/PopularCategories';
import BrendCarousel from '../carusels/BrendCarousel';
import CompanyCarousel from '../carusels/CompanyCarousel';
import Opicany from './Opicany';
import greenHeart from './img/greenheart.png'
import { GrCaretNext } from 'react-icons/gr';

const ProductPage = () => {
    const [showCaret, setShowCaret] = useState(false);

    const handleClick = () => {
        setShowCaret(prevState => !prevState);
    };

    const [count, setCount] = useState(0);

    const Increment = () => {
        setCount(count + 1);
    };

    const Decrement = () => {
        if (count > 0) setCount(count - 1);
    };

    const { id } = useParams();
    console.log(id);

    const product = catalogCrData.find((item) => item.id == id);
    if (!product) {
        return <p>Product not found</p>;
    }
    console.log(product);

    return (
        <>
            <div>
                <div className='w-[1440px] mx-auto h-[40px] 2xl:block xl:block lg:block md:block sm:block hidden'>
                    <ul className='w-[100%] h-[100%] flex items-center gap-3 mb-[1]'>
                        <li className='cursor-pointer text-[gray]'><Link >Главнаяn</Link></li>
                        <li className='cursor-pointer text-[gray]'><MdChevronRight /></li>
                        <li className='cursor-pointer text-[gray]'><Link to='/catalog'>Каталог</Link></li>
                        <li className='cursor-pointer text-[gray]'><MdChevronRight /></li>
                        <li className='cursor-pointer text-[gray]'><Link to='/catalog'>Лабораторное оборудование</Link></li>
                        <li className='cursor-pointer text-[gray]'><MdChevronRight /></li>
                        <li className='cursor-pointer text-black'>{product.name}</li>
                    </ul>
                </div>
                <div className='w-[95%] h-[40px] mx-auto 2xl:hidden xl:hidden lg:hidden md:hidden sm:hidden block'>
                    <ul className='flex w-[100%] h-[100%] items-center gap-3' >
                        <li className='cursor-pointer text-[black]'>Главная</li>
                        <li className='cursor-pointer text-[gray]'><FiChevronLeft /></li>
                    </ul>
                </div >
                <div className='w-[100%] h-[auto] mx-auto mt-[20px] mb-[10px]'>
                    <div className='2xl:w-[1440px] xl:w-[95%] lg:w-[95%] md:w-[95%] sm:w-[95%] w-[95%] 2xl:flex xl:flex lg:flex justify-between mx-auto'>
                        <div className='2xl:w-[63%] xl:w-[60%] lg:w-[58%] md:w-[100%] w-[100%] h-[500px] rounded-[10px] bg-white relative'>
                            <div className='absolute w-[100%] h-[50px] rounded-[10px]'>
                                <div className='w-[95%] h-[100%] mx-auto flex items-center justify-between'>
                                    <button className={` text-[14px] pl-2 pr-2 h-[30px] rounded-[20px] border font-semibold text-[#088269] ${product.title === 'Новинка' ? 'bg-[rgb(8,130,105,0.3)] w-[90px] border-[#088269]' :
                                        product.title === 'Хит продаж' ? 'bg-[rgb(176,109,202,0.3)] border-[rgb(176,109,202)] text-[rgb(40,16,49)] w-[110px]' :
                                            product.title === '-30%' ? 'bg-[rgba(242,247,87,0.3)] border-[rgba(242,247,87)] text-[#e6de3f] w-[60px]' : 'bg-[#BDDBC7]'
                                        }`}>{product.title}</button>
                                    <div className='flex gap-2'>
                                        <div className='w-[35px] h-[35px] rounded-[10px] border flex items-center justify-center' >
                                            <MdOutlineAlignVerticalBottom className='text-[22px] cursor-pointer' />
                                        </div>
                                        <div className='w-[35px] cursor-pointer h-[35px] rounded-[10px] border flex items-center justify-center' onClick={handleClick}>
                                            {!showCaret && <IoIosHeartEmpty className='text-[22px] cursor-pointer' />}
                                            {showCaret && <img src={greenHeart} />}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='w-[100%] h-[85%] rounded-tl-[10px] rounded-tr-[10px] flex items-center justify-center'>
                                <img src={product.img} alt="" className='w-[100%] object-contain h-[100%] border cursor-pointer' />
                            </div>
                            <div className='w-[95%] mx-auto h-[15%] flex items-center gap-2'>
                                <div className='w-[60px] h-[60px] border rounded-[10px] cursor-pointer'><img src={product.img} alt="" /></div>
                                <div className='w-[60px] h-[60px] border rounded-[10px] cursor-pointer'><img src={product.img} alt="" /></div>
                                <div className='w-[60px] h-[60px] border rounded-[10px] cursor-pointer'><img src={product.img} alt="" /></div>
                            </div>
                        </div>
                        <div className='2xl:w-[35%] xl:w-[38%] lg:w-[40%] md:w-[100%] w-[95%] mx-auto h-[540px] rounded-[10px] mt-[20px] 2xl:mt-0 xl:mt-0 lg:mt-0'>
                            <h2 className='2xl:text-[26px] xl:text-[24px] lg:text-[23px] md:text-[21px] font-semibold'>{product.name}</h2>
                            <Rating name="size-large" defaultValue={2} size="large" style={{ fontSize: "16px" }} />
                            <p className='text-[gray] 2xl:text-[15px] xl:text-[14px] lg:text-[13px] md:text-[12px] mt-[10px]'>Категория: {product.kategoria}</p>
                            <p className='text-[gray] 2xl:text-[15px] xl:text-[14px] lg:text-[13px] md:text-[12px] mt-[5px]'>Производитель: {product.Manufacturer}</p>
                            <p className='text-[gray] 2xl:text-[15px] xl:text-[14px] lg:text-[13px] md:text-[12px] mt-[5px]'>Артикул: {product.vendorcode}</p>
                            <p className='text-[gray] 2xl:text-[15px] xl:text-[14px] lg:text-[13px] md:text-[12px] mt-[5px]'>В наличии: {product.naliche}</p>
                            <h2 className='2xl:text-[24px] lg:text-[20px] xl:text-[22px] md:text-[20px] font-semibold mt-[10px] mb-[10px]'>{product.price}</h2>
                            <div className='flex gap-2 mt-[20px]'>
                                <div className='w-[100px] h-[40px] rounded-[20px] flex border border-[#088269] items-center justify-center gap-2'>
                                    <div onClick={Decrement}><FiMinus className='cursor-pointer' /></div>
                                    <span>{count}</span>
                                    <div onClick={Increment}><AiOutlinePlus className='font-light cursor-pointer' /></div>
                                </div>
                                <button className='2xl:w-[150px] xl:w-[150px] lg:w-[150px] md:w-[150px] sm:w-[150px] w-[30%] h-[40px] border border-[#088269] rounded-[20px] 2xl:text-[16px] xl:text-[15px] lg:text-[14px] md:text-[13px] text-[12px] p-2 text-[#088269] font-semibold'>Задать вопрос</button>
                                <button className='2xl:w-[170px] xl:w-[150px] lg:w-[150px] md:w-[150px] sm:w-[150px] w-[35%] h-[40px] border border-[#088269] rounded-[20px] 2xl:text-[16px] xl:text-[15px] lg:text-[14px] md:text-[13px] text-[12px] p-2 bg-[#088269] text-white font'>Добавить в корзину</button>
                            </div>
                            <hr className='mt-[30px] mb-[10px]' />
                            <h3 className='font-semibold text-[24px]'>О товаре</h3>
                            <p className='text-black 2xl:text-[14px] xl:text-[13px] lg:text-[13px] md:text-[12px] mt-[20px] w-[95%]'>Но синтетическое тестирование, в своём классическом представлении, допускает внедрение поэтапного и последовательного развития общества. В рамках спецификации современных стандартов, сторонники тоталитаризма в науке будут функционально разнесены.</p>
                        </div>
                    </div>
                </div>
                <Opicany />
                <CatalogCarouselData />
                <CompanyCarousel />
                <PopularCategories />
                <BrendCarousel />
            </div>
        </>
    );
};

export default ProductPage;
