import React, { useState } from 'react';

const Question = () => {
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
        <div className='w-[100%] 2xl:w-[1440px] xl:w-[100%] lg:w-[100%] md:w-[100%] sm:w-[100%] 2xl:h-[670px] xl:h-[650px] lg:h-[650px] md:h-[600px] sm:h-[600px] h-[1400px] mx-auto mb-[20px]'>
            <div className='w-[95%] h-[100%] 2xl:flex xl:flex lg:flex md:flex sm:flex items-center justify-between mx-auto'>
                <div className='w-[100%] 2xl:w-[49%] xl:w-[49%] lg:w-[49%] md:w-[49%] sm:w-[49%] 2xl:h-[70%] xl:h-[70%] lg:h-[70%] md:h-[70%] sm:h-[70%] h-[49%] rounded-[20px]'>
                    <h2 className='text-[30px]'>Вам нужна консультация?</h2>
                    <p className='mt-[10px]'>Задайте их по номеру телефона <span className='text-[#088269]'>+7 (495) 000-00-00</span> или оставьте свои координаты и наш менеджер перезвонит вам через 10 минут</p>
                </div>
                <div className='w-[100%] 2xl:w-[49%] xl:w-[49%] lg:w-[49%] md:w-[49%] sm:w-[49%] 2xl:h-[70%] xl:h-[70%] lg:h-[70%] md:h-[70%] sm:h-[70%] h-[49%] bg-[white] flex items-center justify-center rounded-[20px]'>
                    <div className='w-[90%] h-[80%]'>
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
                                    className='bg-[#088269] w-[140px] 2xl:w-[130px] xl:w-[130px] md:w-[120px] sm:w-[70px] sm:text-[10px] h-[40px] sm:h-[30px] rounded-[20px] text-white font-semibold'
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

export default Question;
