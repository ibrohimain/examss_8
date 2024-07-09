import React, { useRef, useState, useEffect } from 'react';
import Slider from 'react-slick';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { MdOutlineAlignVerticalBottom } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../../redux/cartSlice';
import { useDispatch } from 'react-redux';
import greenHeart from '../../assets/greenheart.png';
import heart from '../../assets/heart.png';
import { addToLike, removeLike } from '../../redux/LikeList';
import { catalogCrData } from '../carusels/catalogCarouselData';

const SpisokCarousel = () => {
    const dispatch = useDispatch();
    const [heartStates, setHeartStates] = useState({});
    console.log();

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
            cart[existingProductIndex].totalPrice = cart[existingProductIndex].quantity + cart[existingProductIndex].price;
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

    const navigate = useNavigate();
    const sliderRef = useRef(null);

    const PrevArrow = ({ className, onClick }) => (
        <button
            className={`${className} absolute top-1/2 left-0 transform -translate-y-1/2 bg-white rounded-full shadow-md z-10`}
            onClick={onClick}
            style={{ display: "none" }}
        >
            <div className='absolute top-[300px] left-[30px] w-[45px] h-[45px] border bg-[white] rounded-[50%] flex items-center justify-center'>
                <FaArrowLeft className="text-[black] text-[18px]" />
            </div>
        </button>
    );

    const NextArrow = ({ className, onClick }) => (
        <button
            className={`${className}`}
            onClick={onClick}
            style={{ display: "none" }}
        >
            <div className='absolute top-[300px] right-[1360px] bg-white rounded-[50%] flex items-center justify-center'>
                <FaArrowRight className="text-[black] text-[18px]" />
            </div>
        </button>
    );

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        responsive: [
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <div className='w-[95%] 2xl:w-[1440px] xl:w-[95%] lg:w-[95%] md:w-[95%]  h-auto mx-auto mb-[40px]'>
            <div className='w-[100%] h-[100%] 2xl:flex xl:flex lg:flex '>
                <div className='w-[100%] 2xl:w-[100%] xl:w-[100%] lg:w-[100%] md:w-[100%] sm:w-[100%] h-[100%] 2xl:h-[100%] xl:h-[10%] lg:h-[100%] md:h-[90%] '>
                    <Slider ref={sliderRef} {...settings} className='mx-auto mt-[50px]'>
                        {catalogCrData.map((item, index) => (
                            <div key={item.id} className='px-1 w-[100%]'>
                                <div className="2xl:w-[100%] xl:w-[100%] lg:w-[100%] md:w-[100%] sm:w-[100%] w-[100%] 2xl:h-[580px] xl:h-[580px] lg:h-[550px] md:h-[500px] sm:h-[530px] h-[570px] border rounded-[20px]">
                                    <div className="w-[100%] h-[50%] bg-[white] flex items-center justify-center relative rounded-[20px]">
                                        <div className='absolute flex justify-between w-[95%] mx-auto top-3'>
                                            <button className={` text-[14px] pl-2 pr-2 h-[30px] rounded-[20px] border font-semibold text-[#088269] ${item.title === 'Новинка' ? 'bg-[rgb(8,130,105,0.3)] w-[90px] border-[#088269]' :
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
                                    <div className='w-[90%] mx-auto'>
                                        <h2 className='2xl:text-[16px] xl:text-[16px] lg:text-[14px] md:text-[14px] sm:text-[13px] text-[12px] font-semibold w-[90%] mt-[20px]'>{item.name}</h2>
                                        <p className='text-[gray] xl:text-[14px] lg:text-[13px] md:text-[13px] sm:text-[12px] text-[12px] w-[160px]'>{item.common_name}</p>
                                        <p className='text-[gray] xl:text-[14px] lg:text-[13px] md:text-[13px] sm:text-[12px] text-[12px] w-[160px]'>{item.price_title}</p>
                                        <h2 className='2xl:text-[22px] xl:text-[20px] lg:text-[18px] md:text-[18px] sm:text-[16px] text-[18px] font-semibold mt-[30px]'>{item.price}</h2>
                                        <button className='w-[100%] h-[45px] rounded-[20px] border font-semibold text-[#088269] mt-[20px] transition-all [transition:0.3s] hover:bg-[#088269] hover:text-[white] 2xl:text-[18px] xl:text-[17px] lg:text-[16px] md:text-[15px] sm:text-[13px] text-[12px]' onClick={() => handleAddToCart(item)}>{item.btn_name}</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                    <div className='w-[100%] h-[100px] flex justify-center items-center px-4'>
                        <div className='w-[100%] h-[55px] 2xl:flex xl:flex lg:flex md:flex items-center flex gap-3 2xl:gap-3 xl:gap-3 lg:gap-3 md:gap-3 sm:gap-3 text-center  justify-center'>
                            <button className='w-[30%] 2xl:w-[30%] xl:w-[30%] lg:w-[30%] md:w-[30%] sm:w-[30%] h-[35px] border rounded-[20px] font-semibold bg-[#088269] border-[#088269] text-white 2xl:mt-0 xl:mt-0 lg:mt-0 md:mt-0 sm:mt-0 mt-0 text-[10px] 2xl:text-[16px] xl:text-[16px] lg:text-[15px] md:text-[14px] sm:text-[13px]' onClick={() => sliderRef.current.slickNext()}>Все товары</button>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
}

export default SpisokCarousel;
