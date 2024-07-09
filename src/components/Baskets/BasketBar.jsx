import React, { useState, useEffect } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { FiMinus } from 'react-icons/fi';
import { IoIosHeartEmpty } from 'react-icons/io';
import { IoCloseOutline } from 'react-icons/io5';
import { MdOutlineAlignVerticalBottom } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeItem, updateQuantity, getCartTotal } from '../../redux/cartSlice';
import { GoHeart } from 'react-icons/go';

const BasketBar = () => {
    const [isOrderModalVisible, setOrderModalVisible] = useState(false);
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart.data);
    const totalAmounts = useSelector((state) => state.cart.totalAmounts);
    const totalItems = useSelector((state) => state.cart.totalItems);

    useEffect(() => {
        const cartData = JSON.parse(localStorage.getItem('cart')) || [];
        cartData.forEach(item => dispatch(addToCart(item)));
    }, [dispatch]);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
        dispatch(getCartTotal());
    }, [cart, dispatch]);

    const handleRemoveItem = (itemId) => {
        dispatch(removeItem({ id: itemId }));
    };

    const increaseQty = (cartProductId, currentQty) => {
        const newQty = currentQty + 1;
        dispatch(updateQuantity({ id: cartProductId, quantity: newQty }));
    };

    const decreaseQty = (cartProductId, currentQty) => {
        const newQty = Math.max(currentQty - 1, 1);
        dispatch(updateQuantity({ id: cartProductId, quantity: newQty }));
    };

    const handleOrderClick = () => {
        setOrderModalVisible(true);
    };

    const handleCloseModal = () => {
        setOrderModalVisible(false);
    };

    return (
        <div className='2xl:w-[1440px] xl:w-[95%] lg:w-[95%] md:w-[95%] sm:w-[95%] w-[95%] mx-auto h-auto mt-[10px] mb-[10px] 2xl:flex xl:flex lg:flex md:flex justify-between'>
            <div className='2xl:w-[74%] xl:w-[74%] lg:w-[74%] md:w-[74%] sm:w-[100%] w-[100%]'>
                {cart.map((item) => (
                    <div key={item.id} className='w-[100%] 2xl:h-[290px] xl:h-[290px] lg:h-[290px] md:h-[290px] sm:h-[220px] h-[200px] border border-[#E5E2EE] rounded-[15px] flex mb-[10px]'>
                        <div className='h-[100%] w-[40%] flex items-center justify-center bg-white relative'>
                            <div className='absolute flex justify-between w-[95%] mx-auto top-3'>
                                <button className={`2xl:text-[14px] xl:text-[14px] lg:text-[13px] md:text-[12px] sm:text-[11px] text-[10px] pl-2 pr-2 2xl:h-[30px] xl:h-[28px] lg:h-[26px] md:h-[24px] sm:h-[22px] h-[20px] rounded-[20px] border font-semibold text-[#088269] ${item.title === 'Новинка' ? 'bg-[rgb(8,130,105,0.3)] w-[90px] border-[#088269]' :
                                    item.title === 'Хит продаж' ? 'text-[8px] bg-[rgb(176,109,202,0.3)] border-[rgb(176,109,202)] text-[rgb(40,16,49)] w-[70px]' :
                                        item.title === '-30%' ? 'bg-[rgba(242,247,87,0.3)] border-[rgba(242,247,87)] text-[#e6de3f] w-[60px]' : 'bg-[#BDDBC7]'
                                    }`}>{item.title}</button>
                                <div className='flex gap-2'>
                                    <div className='cursor-pointer'><MdOutlineAlignVerticalBottom className='2xl:text-[24px] xl:text-[24px] lg:text-[20px] md:text-[18px] sm:text-[16px] text-[14px]' /></div>
                                    <div className='cursor-pointer'><GoHeart className='2xl:text-[26px] xl:text-[24px] lg:text-[20px] md:text-[18px] sm:text-[16px] text-[14px]' /></div>
                                </div>
                            </div>
                            <img src={item.img} alt="img" className='w-[90%] h-[60%]' />
                        </div>
                        <div className='h-[100%] 2xl:w-[70%] xl:w-[70%] lg:w-[70%] md:w-[70%] sm:w-[70%] w-[60%]'>
                            <div className='w-[95%] h-[100%] mx-auto flex justify-between items-center'>
                                <div className='w-[80%] h-[90%] 2xl:flex xl:flex lg:flex md:flex items-center'>
                                    <div className='2xl:h-[100%] xl:h-[100%] lg:h-[100%] md:h-[100%] sm:h-[50%] h-[50%] w-[100%]'>
                                        <h2 className='2xl:text-[20px] xl:text-[18px] lg:text-[16px] md:text-[14px] sm:text-[14px] text-[10px] w-[90%] font-semibold'>{item.name}</h2>
                                        <p className='text-[gray] mt-[15px] 2xl:text-[16px] xl:text-[16px] lg:text-[15px] md:text-[13px] sm:text-[12px] text-[12px]'>Артикул: 213134</p>
                                        <p className='text-[gray] 2xl:text-[16px] xl:text-[16px] lg:text-[15px] md:text-[13px] sm:text-[12px] text-[12px]'>В наличии</p>
                                    </div>
                                    <div className='2xl:h-[100%] xl:h-[100%] lg:h-[100%] md:h-[100%] sm:h-[50%] h-[50%] w-[100%] flex flex-col 2xl:items-center xl:items-center lg:items-center md:items-center sm:items-start items-start'>
                                        <h2 className='2xl:text-[22px] xl:text-[20px] lg:text-[18px] md:text-[18px] sm:text-[16px] text-[14px] font-medium mt-[2px]'>{item.price * item.quantity} руб.</h2>
                                        <div className='2xl:w-[100px] xl:w-[95px] lg:w-[90px] md:w-[90px] sm:w-[90px] w-[80px] 2xl:h-[35px] xl:h-[33px] lg:h-[31px] md:h-[28px] sm:h-[26px] h-[25px] border border-[#088269] rounded-[20px] flex items-center justify-center gap-2 mt-[30px]'>
                                            <div onClick={() => decreaseQty(item.id, item.quantity)} className='cursor-pointer 2xl:text-[16px] xl:text-[15px] lg:text-[14px] sm:text-[13px] text-[12px]'>
                                                <FiMinus />
                                            </div>
                                            <span className='2xl:text-[16px] xl:text-[15px] lg:text-[14px] sm:text-[13px] text-[12px]'>{item.quantity}</span>
                                            <div onClick={() => increaseQty(item.id, item.quantity)} className='cursor-pointer 2xl:text-[16px] xl:text-[15px] lg:text-[14px] sm:text-[13px] text-[12px]'>
                                                <AiOutlinePlus />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='h-[90%] 2xl:w-[20%] lg:w-[20%] xl:w-[20%] md:w-[20%] sm:w-[20%] w-[10%] flex gap-3 justify-end'>
                                    <div className='cursor-pointer'>
                                        <MdOutlineAlignVerticalBottom className='2xl:block xl:block sm:block md:block lg:block hidden 2xl:text-[24px] xl:text-[22px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[20px]' />
                                    </div>
                                    <div className='cursor-pointer'>
                                        <IoIosHeartEmpty className='2xl:block xl:block sm:block md:block lg:block hidden 2xl:text-[26px] xl:text-[22px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[20px]' />
                                    </div>
                                    <div className='cursor-pointer' onClick={() => handleRemoveItem(item.id)}>
                                        <IoCloseOutline className='2xl:text-[30px] xl:text-[22px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[20px]' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className='2xl:w-[25%] xl:w-[25%] lg:w-[25%] md:w-[25%] sm:w-[100%] w-[100%]'>
                <div className='border border-[#E5E2EE] w-[100%] h-[290px] bg-white rounded-[15px] mx-auto flex items-center justify-center'>
                    <div className='w-[95%] h-[95%]'>
                        <div className='w-[100%] h-[50px] flex items-center justify-between'>
                            <p className='font-medium 2xl:text-[16px] xl:text-[15px] lg:text-[14px] md:text-[14px] sm:text-[13px] text-[12px]'>Итого</p>
                            <span className='font-medium 2xl:text-[16px] xl:text-[15px] lg:text-[14px] md:text-[14px] sm:text-[13px] text-[12px]'>{totalAmounts} руб.</span>
                        </div>
                        <hr className='w-[100%] border-[#E5E2EE]' />
                        <ul className='w-[100%] h-[80px]'>
                            <li className='w-[100%] h-[50%] flex items-center justify-between font-medium 2xl:text-[16px] xl:text-[15px] lg:text-[14px] md:text-[14px] sm:text-[13px] text-[12px]'>
                                <p>Товары ({totalItems} шт)</p><span>{totalAmounts} руб.</span>
                            </li>
                            <li className='w-[100%] h-[50%] flex items-center justify-between font-medium 2xl:text-[16px] xl:text-[15px] lg:text-[14px] md:text-[14px] sm:text-[13px] text-[12px]'>
                                <p>Скидка</p><span>0 руб.</span>
                            </li>
                        </ul>
                        <button onClick={handleOrderClick} className='w-[100%] h-[40px] border rounded-[30px] bg-[#088269] mt-[20px] text-white font-semibold 2xl:text-[16px] xl:text-[15px] lg:text-[14px] md:text-[14px] sm:text-[13px] text-[12px]'>
                            Оформить заказ
                        </button>
                        <button className='w-[100%] h-[40px] border rounded-[30px] border-[#D5D1E1] mt-[15px] font-semibold 2xl:text-[16px] xl:text-[15px] lg:text-[14px] md:text-[14px] sm:text-[13px] text-[12px]'>
                            Задать вопрос
                        </button>
                    </div>
                </div>
            </div>
            {isOrderModalVisible && (
                <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
                    <div className='bg-white w-[400px] h-[400px] rounded-[15px] flex flex-col items-center justify-center p-4'>
                        <div>
                            {cart.map((item) => (
                                <div key={item.id}>
                                    <img src={item.img} alt={item.name} />
                                    <p>{item.quantity}</p>
                                </div>
                            ))}
                        </div>
                        <button onClick={handleCloseModal} className='mt-4 px-4 py-2 bg-[#088269] text-white rounded-full'>
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default BasketBar;
