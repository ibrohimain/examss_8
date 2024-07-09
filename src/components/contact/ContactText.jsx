import React, { useEffect, useState } from 'react'
import wk from '../../assets/Vector-min.png'
import telegram from '../../assets/telegram-min.png'
import whatsap from '../../assets/whatsap-min.png'

const ContactText = () => {

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        question: ''
    });

    useEffect(() => {
        const savedData = localStorage.getItem('formData');
        if (savedData) {
            setFormData(JSON.parse(savedData));
        }
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateInputs()) {
            saveToLocalStorage();
            alert('Ma\'lumotlaringiz muvaffaqiyatli saqlandi.');
            setFormData({
                name: '',
                phone: '',
                email: '',
                question: ''
            });
        }
    };

    const validateInputs = () => {
        // Iltimos, kerakli tekshirishlarni qo'shing
        if (formData.name.trim() === '') {
            alert('Iltimos, ismingizni kiriting.');
            return false;
        }
        if (formData.phone.trim() === '') {
            alert('Iltimos, telefon raqamingizni kiriting.');
            return false;
        }
        if (formData.email.trim() === '') {
            alert('Iltimos, email manzilingizni kiriting.');
            return false;
        }
        // Yana kerakli tekshirishlarni qo'shing (masalan, email formati)
        // ...

        return true; // Agar barchasi to'g'ri bo'lsa true qaytaradi
    };

    const saveToLocalStorage = () => {
        localStorage.setItem('formData', JSON.stringify(formData));
    };






    return (
        <>
            <div className='2xl:w-[1440px] xl:w-[95%] lg:w-[95%] md:w-[95%] sm:w-[95%] w-[95%] h-auto  mx-auto'>
                <h2 className='text-[40px] mb-2 mt-2'>Контакты</h2>
                <div className='2xl:flex xl:flex lg:flex justify-between'>
                    <div className='2xl:w-[49.5%] xl:w-[49.5%] lg:w-[49.5%] md:w-[100%] h-[850px] 2xl:h-[650px] xl:h-[650px] lg:h-[670px] md:h-[650px] sm:h-[650px] rounded-[10px] bg-white flex items-center justify-center '>
                        <div className='w-[90%] h-[90%]'>
                            <h2 className='text-[30px]'>ООО Глобал Медикал Трейд</h2>
                            <ul className='w-[100%]'>
                                <li className=' mt-3'>
                                    <p className='text-[gray]'>Юридический адрес:</p>
                                    <span className='font-medium'>Россия, г. Москва, ул. Докукина, 8, стр. 2</span>
                                </li>
                                <li className=' mt-3'>
                                    <p className='text-[gray]'>Фактический адрес:</p>
                                    <span className='font-medium'>Россия, г. Москва, ул. Докукина, 8, стр. 2</span>
                                </li>
                                <li className='w-[100%] mt-3'>
                                    <p className='text-[gray]'>Режим работы:</p>
                                    <span className='font-medium '>Пн-Пт с 09:00-19:00 <br /> Сб-Вс - выходной</span>
                                </li>
                            </ul>
                            <h2 className='font-medium mt-4 text-[18px]'>Звоните. Звонки по России бесплатны: </h2>
                            <ul className='mt-4'>
                                <li className='text-[gray]'>Телефоны:</li>
                                <ul className='2xl:flex xl:flex lg:flex md:flex sm:flex justify-between items-center w-[80%]'>
                                    <li className='cursor-pointer font-semibold mt-2 2xl:mt-0 xl:mt-0 lg:mt-0 md:mt-0 sm:mt-0'>8-800-000-00-00</li>
                                    <li className='cursor-pointer font-semibold mt-2 2xl:mt-0 xl:mt-0 lg:mt-0 md:mt-0 sm:mt-0'>+7-000-000-00-00</li>
                                    <li className='cursor-pointer font-semibold mt-2 2xl:mt-0 xl:mt-0 lg:mt-0 md:mt-0 sm:mt-0'>+7-495-000-00-00</li>
                                </ul>
                            </ul>
                            <ul className='mt-3'>
                                <li><p className='text-[gray]'>Пишите: </p></li>
                                <li className='text-[black] font-medium'>info@mail.ru</li>
                            </ul>
                            <div className='mt-2 w-[100%] h-[190px] flex justify-between'>
                                <div className='w-[50%] h-[100%]'>
                                    <h2 className='text-[20px] font-medium'>Реквизиты: </h2>
                                    <ul className='w-[100%] 2xl:flex xl:flex lg:flex md:flex sm:flex gap-10 mt-[40px]'>
                                        <li>
                                            <p className='text-[gray]'>ИНН</p>
                                            <span className='font-medium'>9717039181</span>
                                        </li>
                                        <li>
                                            <p className='text-[gray]'>ОГРН</p>
                                            <span className='font-medium'>1167746796986</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className='flex flex-col justify-start items-start w-[50%] h-[100%]'>
                                    <h2 className='text-[20px] font-medium'>Мы в соцсетях</h2>
                                    <div className='flex gap-3 mt-[50px]'>
                                        <div><img src={wk} alt="" /></div>
                                        <div><img src={telegram} alt="" /></div>
                                        <div><img src={whatsap} alt="" /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='md:hidden sm:hidden hidden w-[49.5%] h-[800px] 2xl:h-[650px] xl:h-[650px] lg:h-[670px] md:h-[650px] sm:h-[650px] rounded-[10px] bg-white 2xl:flex xl:flex lg:flex items-center justify-center'>
                        <div className='w-[90%] h-[90%]'>
                            <h2 className='text-[30px]'>Бесплатная консультация</h2>
                            <p className='mt-4 w-[70%] text-[gray]'>Оставьте свои координаты и наш менеджер перезвонит вам через 10 минут</p>
                            <form onSubmit={handleSubmit} className='mt-4'>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className='w-[100%] h-[50px] border-b border-[#7A7687] text-[#7A7687] outline-none'
                                    placeholder='Ваше имя'
                                    required
                                />
                                <input
                                    type="text"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className='w-[100%] h-[50px] border-b border-[#7A7687] text-[#7A7687] outline-none'
                                    placeholder='Ваш телефон'
                                    required
                                />
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className='w-[100%] h-[50px] border-b border-[#7A7687] text-[#7A7687] outline-none'
                                    placeholder='Ваш email'
                                    required
                                />
                                <textarea
                                    name="question"
                                    value={formData.question}
                                    onChange={handleChange}
                                    className='w-[100%] h-[170px] border-b border-[#7A7687] text-[#7A7687] outline-none pt-3'
                                    placeholder='Ваш вопрос'
                                />
                                <div className='w-[100%] h-[120px] flex justify-between items-center'>
                                    <div className='w-[20%]'>
                                        <button type="submit" className='w-[120px] h-[45px] rounded-[30px] bg-[#088269] text-white font-medium'>
                                            Отправить
                                        </button>
                                    </div>
                                    <div className='w-[78%] flex justify-end items-center'>
                                        <p className='text-[14px] w-[100%]'>
                                            Нажимая «Отправить», я соглашаюсь c обработкой персональных данных на условиях{' '}
                                            <span className='text-[#088269]'>Политики конфиденциальности.</span>
                                        </p>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactText
