import React, { useEffect, useState } from 'react'

const ContactMaps = () => {

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
        <div className='2xl:w-[1440px] xl:w-[100%] lg:w-[100%] sm:w-[100%] md:w-[100%] w-[100%] mx-auto mt-[50px] mb-[100px]'>
            <div className='w-[95%] 2xl:w-[100%] xl:w-[95%] md:w-[95%] lg:w-[95%] sm:w-[95%] mx-auto 2xl:h-[700px] xl:h-[700px] lg:h-[730px] md:h-[640px] sm:h-[1000px] h-[1000px] mt-[10px] mb-[10px] '>
                <h2 className='2xl:text-[34px] xl:text-[32px] lg:text-[30px] md:text-[28px] sm:text-[26px] text-[24px]'>Информация о доставке</h2>
                <div className=' md:flex lg:flex justify-between w-[100%] h-[100%]'>
                    <div className='2xl:w-[100%] xl:w-[100%] lg:w-[100%] md:w-[49.5%] sm:w-[100%] w-[100%] xl:h-[100%] lg:h-[100%] h-[40%] sm:h-[40%] md:h-[100%] relative rounded-[20px] mt-[10px]'>
                        <iframe
                            src="https://yandex.com/map-widget/v1/?um=constructor%3Afc1a1bfc0b44a7640153cd253bff1f0b1968f003019fe4b14427d897680f10b7&amp;source=constructor"
                            width="100%"
                            height="600"
                            frameBorder="0"
                            allowFullScreen
                            className='rounded-[20px] w-[100%] h-[100%]'
                        ></iframe>
                        <div className='w-[95%] absolute top-[85%] flex justify-end'>
                            <button className=' w-[150px] h-[40px] rounded-[20px] bg-[#088269] text-white font-semibold'>Пункт выдачи</button>
                        </div>
                    </div>
                    <div className='2xl:hidden xl:hidden lg:hidden md:block sm:block md:w-[49.5%] sm:w-[100%] sm:h-[60%] w-[100%] mt-4 h-[60%] md:h-[100%] justify-end'>
                        <div className='w-[100%] h-[100%] rounded-[10px] bg-white flex items-center justify-center'>
                            <div className='w-[90%] h-[90%]'>
                                <h2 className='text-[30px] w-[100%]'>Бесплатная консультация</h2>
                                <p className='mt-4 w-[70%] text-[gray] text-[14px]'>Оставьте свои координаты и наш менеджер перезвонит вам через 10 минут</p>
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
                                        className='w-[100%] h-[150px] border-b border-[#7A7687] text-[#7A7687] outline-none pt-3'
                                        placeholder='Ваш вопрос'
                                    />
                                    <div className='w-[100%] h-[120px] flex justify-between items-center'>
                                        <div className='w-[20%]'>
                                            <button type="submit" className='w-[90px] h-[35px] rounded-[30px] bg-[#088269] text-white font-medium text-[12px]'>
                                                Отправить
                                            </button>
                                        </div>
                                        <div className='w-[78%] flex justify-end items-center'>
                                            <p className='text-[10px] w-[90%]'>
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
            </div>
        </div>
    )
}

export default ContactMaps
