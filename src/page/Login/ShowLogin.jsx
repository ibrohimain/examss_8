import React, { useState, useEffect } from 'react';
import { HiOutlinePencilAlt } from 'react-icons/hi';

const ShowLogin = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [companyName, setCompanyName] = useState('');
    const [deliveryAddress, setDeliveryAddress] = useState('');
    const [website, setWebsite] = useState('');
    const [email, setEmail] = useState('');
    const [position, setPosition] = useState('');
    const [organizationType, setOrganizationType] = useState('');
    const [inn, setInn] = useState('');

    useEffect(() => {
        // Effect to manage body overflow when editing
        if (isEditing) {
            document.body.style.overflow = 'hidden'; // Disable scrolling
        } else {
            document.body.style.overflow = 'auto'; // Enable scrolling
        }

        // Cleanup function to reset body overflow when component unmounts or editing ends
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isEditing]);

    const handleEditClick = () => {
        setIsEditing(!isEditing); // Toggle modal visibility
    };

    const handleAddClick = () => {
        // Save input values to local storage
        localStorage.setItem('companyName', companyName);
        localStorage.setItem('deliveryAddress', deliveryAddress);
        localStorage.setItem('website', website);
        localStorage.setItem('email', email);
        localStorage.setItem('position', position);
        localStorage.setItem('organizationType', organizationType);
        localStorage.setItem('inn', inn);

        // Close modal
        setIsEditing(false);
    };

    // Load data from local storage on component mount
    useEffect(() => {
        setCompanyName(localStorage.getItem('companyName') || '');
        setDeliveryAddress(localStorage.getItem('deliveryAddress') || '');
        setWebsite(localStorage.getItem('website') || '');
        setEmail(localStorage.getItem('email') || '');
        setPosition(localStorage.getItem('position') || '');
        setOrganizationType(localStorage.getItem('organizationType') || '');
        setInn(localStorage.getItem('inn') || '');
    }, []);

    return (
        <div className='2xl:w-[1440px] xl:w-[95%] lg:w-[95%] md:w-[95%] sm:w-[95%] w-[95%] mx-auto 2xl:flex xl:flex lg:flex '>
            {/* Existing UI components */}
            <div className='2xl:w-[30%] xl:w-[30%] lg:w-[30%] md:w-[100%] sm:w-[100%] w-[100%] h-[100px] 2xl:flex xl:flex lg:flex md:flex sm:flex justify-between items-center mx-auto'>
                <h2 className='text-[20px] font-medium'>Данные о плательщике</h2>
                <button
                    className='mt-3 2xl:mt-0 xl:mt-0 lg:mt-0 md:mt-0 sm:mt-0 2xl:hidden xl:hidden lg:hidden  w-[250px] h-[40px] rounded-[30px] border bg-[#088269] text-white font-medium'
                    onClick={handleEditClick}
                >
                    Добавить плательщика
                </button>
            </div>
            <div className='w-[100%] mx-auto bg-white h-auto pb-5 pt-5 mb-10 rounded-[10px] flex items-center justify-center'>
                <div className='w-[95%] h-[95%]'>
                    <div className='w-[100%] flex justify-between'>
                        <div>
                            <h2>Название компании</h2>
                            <p>ИНН : {inn}</p>
                        </div>
                        <div>
                            <HiOutlinePencilAlt
                                className='cursor-pointer text-[22px] text-[#07745E]'
                                onClick={handleEditClick}
                            />
                        </div>
                    </div>
                    <div className='w-[100%] grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 mt-[50px]'>
                        <div className='w-[100%] mt-10'>
                            <p className='text-[gray]'>Адрес доставки</p>
                            <span>{deliveryAddress}</span>
                        </div>
                        <div className='w-[100%] mt-10'>
                            <p className='text-[gray]'>Ваша должность</p>
                            <span>{position}</span>
                        </div>
                        <div className='w-[100%] mt-10'>
                            <p className='text-[gray]'>Сайт</p>
                            <span>{website}</span>
                        </div>
                        <div className='w-[100%] mt-10'>
                            <p className='text-[gray]'>Тип организации</p>
                            <span>{organizationType}</span>
                        </div>
                        <div className='w-[100%] mt-10'>
                            <p className='text-[gray]'>Email</p>
                            <span>{email}</span>
                        </div>
                    </div>
                </div>
            </div>
            {/* Modal for editing */}
            {isEditing && (
                <div
                    className='fixed top-0 left-0 z-50 w-screen h-screen bg-gray-500 bg-opacity-50 flex items-center justify-center'
                    onClick={handleEditClick}
                >
                    <div
                        className='w-[450px] h-auto z-50 bg-white p-8 rounded-lg'
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h2 className='text-[20px]'>Название компании</h2>
                        <input
                            className='w-[100%] h-[45px] outline-none border-b mt-1'
                            type="text"
                            placeholder="Адрес доставки"
                            value={deliveryAddress}
                            onChange={(e) => setDeliveryAddress(e.target.value)}
                        />
                        <input
                            className='w-[100%] h-[45px] outline-none border-b mt-1'
                            type="text"
                            placeholder="Сайт"
                            value={website}
                            onChange={(e) => setWebsite(e.target.value)}
                        />
                        <input
                            className='w-[100%] h-[45px] outline-none border-b mt-1'
                            type="text"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            className='w-[100%] h-[45px] outline-none border-b mt-1'
                            type="text"
                            placeholder="Ваша должность"
                            value={position}
                            onChange={(e) => setPosition(e.target.value)}
                        />
                        <input
                            className='w-[100%] h-[45px] outline-none border-b mt-1'
                            type="text"
                            placeholder="Тип организации"
                            value={organizationType}
                            onChange={(e) => setOrganizationType(e.target.value)}
                        />
                        <input
                            className='w-[100%] h-[45px] outline-none border-b mt-1'
                            type="text"
                            placeholder="ИНН"
                            value={inn}
                            onChange={(e) => setInn(e.target.value)}
                        />
                        <div className='flex gap-2 mt-[50px] w-[100%]'>
                            <button onClick={handleEditClick} className='bg-red-500 w-[40%] h-[40px] rounded-[30px] text-[16px] text-white top-2 right-2'>
                                Close
                            </button>
                            <button onClick={handleAddClick} className='bg-blue-500 w-[40%] h-[40px] rounded-[30px] text-[16px] text-white top-2 right-2'>
                                Add
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ShowLogin;
