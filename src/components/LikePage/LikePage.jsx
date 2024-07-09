import React from 'react';
import { MdOutlineAlignVerticalBottom } from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux';
import greenHeart from '../../assets/greenheart.png';
import { removeLike } from '../../redux/LikeList';
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../../redux/cartSlice';

const LikePage = () => {



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





    const { like } = useSelector(state => state.like);
    const dispatch = useDispatch();

    const handleRemoveLike = (item) => {
        dispatch(removeLike(item));
    };

    const navigate = useNavigate();

    return (
        <>
            <h2 className='text-[48px] font-medium'>Сравнение товаров</h2>
            <div className='2xl:flex xl:flex lg:flex justify-between mt-2 mb-2'>
                <div className='2xl:w-[25%] xl:w-[25%] lg:w-[25%] md:w-[100%] sm:w-[100%] w-[100%]'>
                    <ul className='w-[100%]'>
                        <li className='w-[100%] h-[35px] cursor-pointer text-[gray]'>Анализаторы мочи (3)</li>
                        <li className='w-[100%] h-[35px] cursor-pointer text-[gray]'>Маммографы</li>
                        <li className='w-[100%] h-[35px] cursor-pointer text-[gray]'>Флюорографы</li>
                    </ul>
                </div>
                <div className='2xl:w-[74%] xl:w-[74%] lg:w-[74%] md:w-[100%] sm:w-[100%] w-[100%] h-[auto] grid 3xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-3'>
                    {like.map(item => (
                        <div key={item.id} className='w-[100%] border 2xl:h-[500px] xl:h-[500px] lg:h-[480px] md:h-[480px] sm:h-[500px] h-[400px] rounded-[10px]'>
                            <div className='w-[100%] h-[55%] rounded-tr-[10px] rounded-tl-[10px] cursor-pointer bg-white flex items-center justify-center relative'>
                                <div className='absolute flex justify-between w-[95%] mx-auto top-3'>
                                    <button className={`text-[10px] pl-2 pr-2 h-[30px] rounded-[20px] border font-semibold text-[#088269] ${item.title === 'Новинка' ? 'bg-[rgb(8,130,105,0.3)] w-[90px] border-[#088269]' :
                                        item.title === 'Хит продаж' ? ' bg-[rgb(176,109,202,0.3)] border-[rgb(176,109,202)] text-[rgb(40,16,49)] w-[110px]' :
                                            item.title === '-30%' ? 'bg-[rgba(242,247,87,0.3)] border-[rgba(242,247,87)] text-[#e6de3f] w-[60px]' : 'bg-[#BDDBC7]'
                                        }`}>
                                        {item.title}
                                    </button>
                                    <div className='flex gap-2'>
                                        <div className='cursor-pointer'><MdOutlineAlignVerticalBottom className='text-[24px]' /> </div>
                                        <div
                                            onClick={() => handleRemoveLike(item)}
                                            className='cursor-pointer flex items-center justify-center w-[40px] h-[30px]'>
                                            <img
                                                src={greenHeart}
                                                className='w-[100%] h-[80%]'
                                                alt="Liked"

                                            />
                                        </div>
                                    </div>
                                </div>
                                <img src={item.img} alt={item.name} className='w-[60%] h-[60%] rounded-tl-[10px] rounded-tr-[10px]' onClick={() => navigate(`/product/${item.id}`)} />
                            </div>
                            <div className='w-[90%] h-[45%] mx-auto flex items-center'>
                                <div className='w-[100%] h-auto'>
                                    <h2 className='2xl:text-[18px] xl:text-[17px] lg:text-[16px] md:text-[15px] sm:text-[14px] text-[13px] w-[95%] font-medium'>{item.name}</h2>
                                    <p className='text-[gray] 2xl:text-[14px] xl:text-[14px] lg:text-[13px] md:text-[13px] sm:text-[13px] text-[12px] mt-1'>{item.common_name}</p>
                                    <p className='text-[gray] 2xl:text-[14px] xl:text-[14px] lg:text-[13px] md:text-[13px] sm:text-[13px] text-[12px]'>{item.price_title}</p>
                                    <h2 className='2xl:text-[20px] xl:text-[19px] lg:text-[18px] md:text-[17px] sm:text-[16px] text-[15px] font-semibold mt-3'>{item.price}</h2>
                                    <button className='2xl:text-[16px] xl:text-[15px] lg:text-[14px] md:text-[13px] sm:text-[12px] text-[12px] mt-1 border-[#D5D1E1] w-[100%] h-[45px] text-[#088269] border rounded-[50px]' onClick={() => handleAddToCart(item)} >{item.btn_name}</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default LikePage;
