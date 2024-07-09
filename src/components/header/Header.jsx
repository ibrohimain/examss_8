import React, { useState, useEffect, useRef } from 'react';
import logo from '../../assets/Logo.svg';
import { FaCaretDown, FaPhoneAlt } from 'react-icons/fa';
import { BiSearch } from 'react-icons/bi';
import { CiLocationOn, CiUser } from 'react-icons/ci';
import { GoHeart } from 'react-icons/go';
import { SlBasket } from 'react-icons/sl';
import { MdOutlineAlignVerticalBottom } from 'react-icons/md';
import { RxHamburgerMenu, RxTextAlignLeft } from 'react-icons/rx';
import { LuPhone } from 'react-icons/lu';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isCategoryVisible, setIsCategoryVisible] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const dropdownRef = useRef(null);
    const modalRef = useRef(null);
    const [phone1, setPhone1] = useState('');
    const [phone2, setPhone2] = useState('');
    const [textarea, setTextarea] = useState('');
    const [errors, setErrors] = useState({});

    const handleFocus = (event) => {
        event.target.classList.remove('border-red-500');
        event.target.classList.add('border-green-500');
    };

    const handleBlur = (event) => {
        const { name, value } = event.target;
        if (!value) {
            setErrors((prevErrors) => ({ ...prevErrors, [name]: 'This field is required' }));
            event.target.classList.add('border-red-500');
            event.target.classList.remove('border-green-500');
        } else {
            setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const validationErrors = {};
        if (!phone1) validationErrors.phone1 = 'Phone number is required';
        if (!phone2) validationErrors.phone2 = 'Phone number is required';
        if (!textarea) validationErrors.textarea = 'Textarea is required';
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            console.log({ phone1, phone2, textarea });
        }
    };

    const toggleCategoryVisibility = () => {
        setIsCategoryVisible(!isCategoryVisible);
    };

    const toggleModalVisibility = () => {
        setIsModalVisible(!isModalVisible);
        if (!isModalVisible) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsCategoryVisible(false);
        }
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            setIsModalVisible(false);
            document.body.style.overflow = 'auto';
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.body.style.overflow = 'auto';
        };
    }, []);

    const [isHovered, setIsHovered] = useState(false);
    const [isHovereds, setIsHovereds] = useState(false);

    return (
        <div className='w-[100%] md:w-[100%] 2xl:w-[1440px] xl:w-[100%] lg:w-[100%] sm:w-[100%] h-auto mt-2 2xl:mt-0 md:mt-0 mx-auto'>
            <div className='w-[1440px] h-[40px] mx-auto justify-between sm:w-[95%] hidden md:flex 2xl:flex md:w-[95%] lg:w-[95%] xl:w-[95%] 2xl:w-[1440px]'>
                <ul className='flex items-center md:gap-4 lg:gap-5 xl:gap-6 2xl:gap-6'>
                    <div
                        className="relative"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <li className='text-gray cursor-pointer 2xl:block md:text-[13px] lg:text-[15px] xl:text-[16px] 2xl:text-[16px]'>
                            <Link to='/acompany'>О компании</Link>
                        </li>
                        <div
                            className={`absolute transition-all duration-300 ease-in-out z-10 ${isHovered ? 'h-auto pt-2 pb-2' : 'h-0'
                                } w-[250px]  bg-white mt-2 overflow-hidden  rounded-lg shadow-lg`}
                        >
                            <ul className="p-2">
                                <li className="py-1"><Link to="/vakansia">Вакансии</Link></li>
                                <li className="py-1"><Link to="/otziv">Отзывы</Link></li>
                                <li className="py-1"><Link to="/certificat">Сертификаты</Link></li>
                                <li className="py-1"><Link to="/partnerships">Партнерские программы</Link></li>
                                <li className="py-1"><Link to="/wholesale">Оптовые продажи</Link></li>
                            </ul>
                        </div>
                    </div>
                    <li className='text-[gray] cursor-pointer 2xl:block md:text-[13px] lg:text-[15px] xl:text-[16px] 2xl:text-[16px]'><Link to='/delivery'>Доставка</Link></li>
                    <li className='text-[gray] cursor-pointer 2xl:block md:text-[13px] lg:text-[15px] xl:text-[16px] 2xl:text-[16px]'><Link to='/payment'>Оплата</Link></li>
                    <li className='text-[gray] cursor-pointer 2xl:block md:text-[13px] lg:text-[15px] xl:text-[16px] 2xl:text-[16px]'><Link to='/guarantes'>Гарантии</Link></li>
                    <div
                        className="relative"
                        onMouseEnter={() => setIsHovereds(true)}
                        onMouseLeave={() => setIsHovereds(false)}
                    >
                        <li className='text-gray cursor-pointer 2xl:block md:text-[13px] lg:text-[15px] xl:text-[16px] 2xl:text-[16px]'>
                            <Link to='/acompany'>О компании</Link>
                        </li>
                        <div
                            className={`absolute transition-all duration-300 ease-in-out z-10 ${isHovereds ? 'h-auto pt-2 pb-2' : 'h-0'
                                } w-[250px]  bg-white mt-2 overflow-hidden  rounded-lg shadow-lg`}
                        >
                            <ul className="p-2">
                                <li className="py-1"><Link to="/vacancies">Новости</Link></li>
                                <li className="py-1"><Link to="/reviews">Статьи</Link></li>
                                <li className="py-1"><Link to="/certificates">Видео</Link></li>

                            </ul>
                        </div>
                    </div>
                </ul>
                <ul className='flex items-center md:gap-4 lg:gap-[40px] xl:gap-[50px] 2xl:gap-[60px]'>
                    <li className='text-[gray] cursor-pointer md:text-[13px] lg:text-[15px] xl:text-[16px] 2xl:text-[16px]'>info@mail.ru</li>
                    <li className='text-[gray] cursor-pointer md:text-[13px] lg:text-[15px] xl:text-[16px] 2xl:text-[16px]'>г. Москва, ул. Московская, д. 35</li>
                </ul>
            </div>
            <hr className='w-[100%] hidden 2xl:block md:block' />
            <div className='w-[100%] relative h-[120px] justify-between items-center 2xl:h-[100px] mx-auto md:flex 2xl:flex 2xl:justify-between 2xl:items-center md:w-[95%] md:h-[70px] lg:w-[95%] xl:w-[95%] 2xl:w-[100%] '>
                <div className='md:w-[18%] 2xl:w-[18%] lg:[10%] flex 2xl:justify-start xl:justify-start justify-between w-[95%] mx-auto'>
                    <Link to='/'><img src={logo} alt="" className='md:w-[100px] md:h-[40px] 2xl:w-[100px] 2xl:h-[45px] cursor-pointer' /></Link>
                    <li className='flex items-center gap-6 ' ><LuPhone className='2xl:hidden md:hidden text-[28px] sm:block' onClick={toggleModalVisibility} /><RxHamburgerMenu className='2xl:hidden md:hidden sm:block text-[30px]' /></li>
                </div>
                {isModalVisible && (
                    <div className='w-[100%] top-[1010px]  fixed inset-0 shadow-lg shadow-cyan-500/50 flex items-center justify-center z-50'>
                        <div ref={modalRef} className=' bg-white p-8 rounded-lg 2xl:w-[50%] 2xl:h-[500px] xl:h-[5%] lg:h-[50%] md:h-[50%] sm:h-[75%] lg:w-[650px] md:w-[600px] sm:w-[400px] w-[300px] h-[700px]'>
                            <h2 className='text-lg font-bold mb-4 text-[40px] text-center'>Заказать звонок</h2>
                            <form onSubmit={handleSubmit}>
                                <input
                                    type='text'
                                    name='phone1'
                                    placeholder='Ваш номер телефона'
                                    value={phone1}
                                    onChange={(e) => setPhone1(e.target.value)}
                                    onFocus={handleFocus}
                                    onBlur={handleBlur}
                                    className='outline-none border-b p-2 mt-4 w-full h-[45px] focus:border-[#088269]'
                                />
                                {errors.phone1 && <p className="text-red-500 text-xs mt-1">{errors.phone1}</p>}
                                <input
                                    type='text'
                                    name='phone2'
                                    placeholder='Ваш номер телефона'
                                    value={phone2}
                                    onChange={(e) => setPhone2(e.target.value)}
                                    onFocus={handleFocus}
                                    onBlur={handleBlur}
                                    className='outline-none border-b p-2 mt-4 w-full h-[45px] focus:border-[#088269]'
                                />
                                {errors.phone2 && <p className="text-red-500 text-xs mt-1">{errors.phone2}</p>}
                                <textarea
                                    name='textarea'
                                    placeholder='Ваш номер телефона'
                                    value={textarea}
                                    onChange={(e) => setTextarea(e.target.value)}
                                    onFocus={handleFocus}
                                    onBlur={handleBlur}
                                    className='outline-none border-b p-2 mt-4 w-full h-[100px] focus:border-[#088269]'
                                />
                                {errors.textarea && <p className="text-red-500 text-xs mt-1">{errors.textarea}</p>}
                                <div className='flex justify-between gap-2 mt-[10px]'>
                                    <div>
                                        <input type="checkbox" className='mt-[15px]' />
                                    </div>
                                    <p className='text-[gray] text-[12px] w-[700px] mt-[10px]'>
                                        Нажимая кнопку «ОТПРАВИТЬ», я даю свое согласие на обработку моих персональных данных, в соответствии с Федеральным законом от 27.07.2006 года №152-ФЗ «О персональных данных», на условиях и для целей, определенных в Согласии на обработку персональных данных *
                                    </p>
                                </div>
                                <button type='submit' className='mt-4 bg-[#088269] text-white py-2 px-4 rounded w-[100%] h-[55px] text-[22px]'>
                                    Отправить
                                </button>
                            </form>
                        </div>
                    </div>
                )}

                <div className='2xl:flex 2xl:items-center justify-start gap-[40px] 2xl:w-[65%] md:w-[60%] w-[95%] mx-auto mt-5 md:mt-0 2xl:mt-0'>
                    <div className='relative md:w-[370px] lg:w-[520px] xl:w-[590px] 2xl:w-[600px] md:h-[43px] lg:h-[43px] xl:h-[45px] 2xl:h-[45px] border border-[#D5D1E1] rounded-[30px] bg-[#D5D1E1] flex h-[45px]'>
                        <div className='bg-white rounded-tl-[30px] rounded-bl-[30px]'>
                            <div onClick={toggleCategoryVisibility} className='2xl:w-[160px] h-[100%] cursor-pointer bg-[rgb(232,231,236,0.5)] flex items-center justify-center gap-2 rounded-[30px] md:w-[120px] md:text-[12px] 2xl:text-[16px] text-[12px] w-[120px]'>
                                Все категории <FaCaretDown />
                            </div>
                        </div>
                        <input type="text" name="" id="" className='outline-none pl-[10px] w-[80%] lg:w-[400px] xl:w-[420px] 2xl:w-[430px] rounded-tr-[30px] rounded-br-[30px] md:w-[220px] sm:w-[540px]' placeholder='Поиск' />
                        <div className='flex items-center justify-center w-[45px] cursor-pointer'><BiSearch className='text-[24px] text-[gray]' /></div>
                        {isCategoryVisible && (
                            <div className='absolute z-20 top-[50px] left-0 w-[300px] h-auto bg-white border border-gray-200 shadow-lg' ref={dropdownRef}>
                                <ul className='w-[90%] mx-auto mt-[10px] mb-[10px]'>
                                    <li className='w-[250px] mt-[10px] font-light text-[15px] cursor-pointer' >Анестезиология</li>
                                    <li className='w-[250px] mt-[10px] font-light text-[15px] cursor-pointer' >Гинекологическое оборудование</li>
                                    <li className='w-[250px] mt-[10px] font-light text-[15px] cursor-pointer' >Дерматологическое оборудование</li>
                                    <li className='w-[250px] mt-[10px] font-light text-[15px] cursor-pointer' >Ветеринарное оборудование</li>
                                    <li className='w-[250px] mt-[10px] font-light text-[15px] cursor-pointer' >Лабораторное оборудование</li>
                                    <li className='w-[250px] mt-[10px] font-light text-[15px] cursor-pointer' >ЛОР оборудование</li>
                                    <li className='w-[250px] mt-[10px] font-light text-[15px] cursor-pointer' >Мебель медицинская</li>
                                    <li className='w-[250px] mt-[10px] font-light text-[15px] cursor-pointer' >Оборудование для медицинской метрологии</li>
                                    <li className='w-[250px] mt-[10px] font-light text-[15px] cursor-pointer' >Модели анатомические</li>
                                    <li className='w-[250px] mt-[10px] font-light text-[15px] cursor-pointer' >Мониторы пациента</li>
                                    <li className='w-[250px] mt-[10px] font-light text-[15px] cursor-pointer' >Мебель и оборудование для неонатологии</li>
                                    <li className='w-[250px] mt-[10px] font-light text-[15px] cursor-pointer' >Педиатрическое оборудование</li>
                                    <li className='w-[250px] mt-[10px] font-light text-[15px] cursor-pointer' >Операционные столы</li>
                                    <li className='w-[250px] mt-[10px] font-light text-[15px] cursor-pointer' >Офтальмологическое оборудование</li>
                                </ul>
                            </div>
                        )}
                    </div>
                    <div>
                        <p className='text-[gray] hidden w-[150px] text-[14px] md:hidden 2xl:block'>Пн-Пт с 09:00-19:00 Сб-Вс - выходной</p>
                    </div>
                </div>
                <div className='2xl:w-[20%] md:w-[21%] xl:w-[25%] lg:w-[25%] '>
                    <ul className='flex justify-between xl:gap-2 lg:gap-2 '>
                        <li className='hidden cursor-pointer 2xl:flex md:flex flex-col items-center text-[gray]' ><Link to='/login' className='flex flex-col items-center'><CiUser className='text-[26px] text-[black]' /><p className='md:hidden 2xl:block xl:block lg:block lg:text-[14px]' >Войти</p></Link></li>
                        <li className='hidden cursor-pointer 2xl:flex md:flex flex-col items-center text-[gray]' ><Link to='/like' className='flex flex-col items-center'><GoHeart className='text-[26px] text-[black]' /><p className='md:hidden 2xl:block xl:block lg:block lg:text-[14px]'>Избранное</p></Link></li>
                        <li className='hidden cursor-pointer 2xl:flex md:flex flex-col items-center text-[gray]' ><Link to='/comparision' className='flex flex-col items-center'><MdOutlineAlignVerticalBottom className='text-[26px] text-[black]' /><p className='md:hidden 2xl:block xl:block lg:block lg:text-[14px]'>Сравнить</p></Link></li>
                        <li className='hidden cursor-pointer 2xl:flex md:flex flex-col items-center text-[gray]' ><Link to='/basket' className='flex flex-col items-center'><SlBasket className='text-[26px] text-[black]' /><p className='md:hidden 2xl:block xl:block lg:block lg:text-[14px]'>Корзина</p></Link></li>
                    </ul>
                </div>
            </div>
            <hr className='w-[100%]' />
            <div className='w-[100%] mx-auto h-[70px] justify-between items-center hidden md:flex 2xl:flex md:w-[95%] lg:w-[95%] xl:w-[95%] 2xl:w-[1440px]'>
                <ul className='flex items-center 2xl:gap-6 md:gap-3 h-[100%]'>
                    <Link to='/catalog'><li className='flex items-center gap-1 font-medium md:text-[13px]'><RxTextAlignLeft />Каталог</li></Link>
                    <li className='font-medium md:text-[13px] cursor-pointer'><Link to='/proizvoditel'>Производители</Link></li>
                    <li className='font-medium md:text-[13px] cursor-pointer'><Link to='/officePage'>Кабинеты под ключ</Link></li>
                    <li className='font-medium md:text-[13px] cursor-pointer'><Link to='/uslugi'>Услуги</Link></li>
                    <li className='font-medium md:text-[13px] cursor-pointer'><Link to='/aksia'>Акции</Link></li>
                    <li className='font-medium md:text-[13px] cursor-pointer'>Покупателям</li>
                    <li className='font-medium md:text-[13px] cursor-pointer'><Link to='/contact'>Контакты</Link></li>
                </ul>
                <div className='flex items-center 2xl:gap-3 md:gap-2  '>
                    <p className='font-medium flex items-center md:text-[13px] md:gap-1 2xl:text-[16px] cursor-pointer'>Москва<CiLocationOn className='font-medium' /></p>
                    <button className='w-[190px] h-[45px] rounded-[30px] border border-[#D5D1E1] text-[black] font-medium md:hidden 2xl:block '>+7(495)000-00-00</button>
                    <button className='2xl:w-[190px] lg:w-[160px] md:w-[40px] md:h-[40px] 2xl:h-[45px] rounded-[30px] border border-[#D5D1E1] bg-[#088269] text-[white] font-medium flex items-center justify-center  ' onClick={toggleModalVisibility}><p className='md:hidden 2xl:block xl:block lg:block'>Заказать звонок</p> <FaPhoneAlt className='2xl:hidden xl:hidden lg:hidden md:block' /></button>
                </div>
            </div>
            {isModalVisible && (
                <div className='w-[100%] fixed inset-0 shadow-lg shadow-cyan-500/50 flex items-center justify-center z-50'>
                    <div ref={modalRef} className='bg-white p-8 rounded-lg 2xl:w-[50%] 2xl:h-[500px] xl:h-[50%] lg:h-[500px] md:h-[500px] sm:h-[550px] lg:w-[50%] md:w-[50%] sm:w-[80%] w-[90%] h-[700px] mt-[70px]'>
                        <h2 className='text-lg font-bold mb-4 text-[40px] text-center'>Заказать звонок</h2>
                        <form onSubmit={handleSubmit}>
                            <input
                                type='text'
                                name='phone1'
                                placeholder='Ваш номер телефона'
                                value={phone1}
                                onChange={(e) => setPhone1(e.target.value)}
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                                className='outline-none border-b p-2 mt-4 w-full h-[45px] focus:border-[#088269]'
                            />
                            {errors.phone1 && <p className="text-red-500 text-xs mt-1">{errors.phone1}</p>}
                            <input
                                type='text'
                                name='phone2'
                                placeholder='Ваш номер телефона'
                                value={phone2}
                                onChange={(e) => setPhone2(e.target.value)}
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                                className='outline-none border-b p-2 mt-4 w-full h-[45px] focus:border-[#088269]'
                            />
                            {errors.phone2 && <p className="text-red-500 text-xs mt-1">{errors.phone2}</p>}
                            <textarea
                                name='textarea'
                                placeholder='Ваш номер телефона'
                                value={textarea}
                                onChange={(e) => setTextarea(e.target.value)}
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                                className='outline-none border-b p-2 mt-4 w-full h-[100px] focus:border-[#088269]'
                            />
                            {errors.textarea && <p className="text-red-500 text-xs mt-1">{errors.textarea}</p>}
                            <div className='flex justify-between gap-2 mt-[10px]'>
                                <div>
                                    <input type="checkbox" className='mt-[15px]' />
                                </div>
                                <p className='text-[gray] text-[12px] w-[700px] mt-[10px]'>
                                    Нажимая кнопку «ОТПРАВИТЬ», я даю свое согласие на обработку моих персональных данных, в соответствии с Федеральным законом от 27.07.2006 года №152-ФЗ «О персональных данных», на условиях и для целей, определенных в Согласии на обработку персональных данных *
                                </p>
                            </div>
                            <button type='submit' className='mt-4 bg-[#088269] text-white py-2 px-4 rounded w-[100%] h-[55px] text-[22px]'>
                                Отправить
                            </button>
                        </form>
                    </div>
                </div>
            )}

            <hr className='w-[100%]' />
            {isCategoryVisible && (
                <div className='fixed inset-0 z-10'>

                </div>
            )}
        </div>
    );
};

export default Header;



