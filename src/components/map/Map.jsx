import React, { useState } from 'react';

const Map = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        question: ''
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        setErrors({
            ...errors,
            [name]: ''
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};
        Object.keys(formData).forEach(key => {
            if (!formData[key]) {
                newErrors[key] = 'This field is required';
            }
        });
        setErrors(newErrors);
        if (Object.keys(newErrors).length === 0) {
            // form submission logic here
            console.log('Form submitted successfully');
        }
    };

    const getInputClasses = (error) => {
        return `outline-none border-b ${error ? 'border-red-500' : 'border-[#D5D1E1]'} mt-[10px] w-[100%] h-[45px] placeholder-${error ? '[color:red]' : '[color:gray]'}`;
    };

    const getTextAreaClasses = (error) => {
        return `outline-none border-b ${error ? 'border-red-500' : 'border-[#D5D1E1]'} mt-[10px] w-[100%] h-[100px] placeholder-${error ? '[color:red]' : '[color:gray]'}`;
    };

    return (
        <div className='w-[100%] 2xl:w-[100%] xl:w-[100%] lg:w-[100%] md:w-[100%] sm:w-[100%] 2xl:h-[670px] xl:h-[650px] lg:h-[650px] md:h-[600px] sm:h-[600px] h-[1400px] mx-auto mb-[100px] mt-[10px]'>
            <div className='w-[95%] 2xl:w-[1440px] h-[100%] 2xl:flex xl:flex lg:flex md:flex sm:flex justify-between mx-auto'>
                <div className='w-[100%] 2xl:w-[49%] xl:w-[49%] lg:w-[49%] md:w-[49%] sm:w-[49%] 2xl:h-[100%] xl:h-[100%] lg:h-[100%] md:h-[100%] sm:h-[100%] h-[49%] rounded-[20px]'>
                    <iframe
                        src="https://yandex.com/map-widget/v1/?um=constructor%3Afc1a1bfc0b44a7640153cd253bff1f0b1968f003019fe4b14427d897680f10b7&amp;source=constructor"
                        width="100%"
                        height="600"
                        frameBorder="0"
                        allowFullScreen
                        className='rounded-[20px] h-[100%]'
                    ></iframe>
                </div>
                <div className='w-[100%] 2xl:w-[49%] xl:w-[49%] lg:w-[49%] md:w-[49%] sm:w-[49%] 2xl:h-[100%] xl:h-[100%] lg:h-[100%] md:h-[100%] sm:h-[100%] h-[49%] bg-[white] flex items-center justify-center rounded-[20px] mt-5 2xl:mt-0 xl:mt-0 lg:mt-0 md:mt-0 sm:mt-0'>
                    <div className='w-[90%] h-[90%]'>
                        <h2 className='text-[32px] mt-[20px]'>Остались вопросы?</h2>
                        <p className='text-[gray] w-[90%] mt-[10px] 2xl:text-[16px] xl:text-[15px] lg:text-[15px] md:text-[12px] sm:text-[12px]'>
                            Задайте их по номеру телефона +7 (495) 000-00-00 или оставьте свои координаты и наш менеджер перезвонит вам через 10 минут
                        </p>
                        <form onSubmit={handleSubmit} className='mt-[20px]'>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className={getInputClasses(errors.name)}
                                placeholder={errors.name ? 'Пожалуйста, введите ваше имя' : 'Ваше имя'}
                            />
                            <input
                                type="text"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className={getInputClasses(errors.phone)}
                                placeholder={errors.phone ? 'Пожалуйста, введите ваш телефон' : 'Ваш телефон'}
                            />
                            <input
                                type="text"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className={getInputClasses(errors.email)}
                                placeholder={errors.email ? 'Пожалуйста, введите ваш email' : 'Ваш email'}
                            />
                            <textarea
                                name="question"
                                value={formData.question}
                                onChange={handleChange}
                                className={getTextAreaClasses(errors.question)}
                                placeholder={errors.question ? 'Пожалуйста, введите ваш вопрос' : 'Ваш вопрос'}
                            />
                            <div className='w-[100%] 2xl:flex xl:flex lg:flex md:flex sm:flex justify-between mt-[30px]'>
                                <button
                                    type='submit'
                                    className='bg-[#088269] w-[140px] 2xl:w-[150px] xl:w-[130px] md:w-[120px] sm:w-[70px] sm:text-[10px] 2xl:h-[45px] 2xl:text-[16px] h-[45px] sm:h-[30px] rounded-[20px] text-white font-semibold'
                                >
                                    Отправить
                                </button>
                                <p className='2xl:w-[450px] xl:w-[400px] md:w-[200px] sm:w-[200px] 2xl:text-[14px] xl:text-[14px] md:text-[10px] sm:text-[10px] text-[12px] w-[90%] mt-[10px] 2xl:mt-0 xl:mt-0 lg:mt-0 md:mt-0 sm:mt-0'>
                                    Нажимая «Отправить», я соглашаюсь c обработкой персональных данных на условиях
                                    <span className='text-[#088269]'>Политики конфиденциальности.</span>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Map;
