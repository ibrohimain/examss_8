import React, { useState } from 'react';
import m from './m.png';

const Podpisku = () => {
    const [email, setEmail] = useState('');
    const [isChecked, setIsChecked] = useState(false);
    const [emailError, setEmailError] = useState('');
    const [checkboxError, setCheckboxError] = useState('');

    const validateEmail = (email) => {
        // Basic email validation regex
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return re.test(String(email).toLowerCase());
    };

    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);

        if (emailError && validateEmail(value)) {
            setEmailError('');
        }
    };

    const handleCheckboxChange = (e) => {
        const checked = e.target.checked;
        setIsChecked(checked);

        if (checkboxError && checked) {
            setCheckboxError('');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        let valid = true;

        if (!validateEmail(email)) {
            setEmailError('Введите корректный email');
            valid = false;
        }

        if (!isChecked) {
            setCheckboxError('Вы должны согласиться с условиями');
            valid = false;
        }

        if (valid) {
            // Handle form submission (e.g., send data to server)
            console.log('Form submitted:', { email, isChecked });
        }
    };

    return (
        <div className='w-[100%] h-[340px] mx-auto bg-[#D5D1E1] relative'>
            <div className='2xl:w-[1440px] xl:w-[95%] lg:w-[95%] md:w-[95%] sm:w-[95%] w-[95%] h-[100%] flex justify-between mx-auto '>
                <div className='2xl:w-[50%] xl:w-[50%] lg:w-[50%] md:w-[50%] sm:w-[50%] w-0 h-[100%] '>
                    <img src={m} alt="" className='absolute 2xl:w-[35%] xl:w-[40%] lg:w-[40%] md:w-[45%] sm:w-[50%] w-[60%] top-[0%] h-[99%] left-[80px]' />
                </div>
                <div className='2xl:w-[50%] xl:w-[60%] lg:w-[70%] md:w-[80%] sm:w-[90%] w-[100%] h-[100%] flex justify-end z-20'>
                    <div className='w-[95%] mx-auto'>
                        <h2 className='text-[32px] font-semibold mt-[20px]'>Подпишитесь и будьте в курсе!</h2>
                        <p className='text-[gray] text-[22px]'>Акции, скидки, распродажи ждут!</p>
                        <form onSubmit={handleSubmit} className='mt-[20px] w-[100%]'>
                            <div className='w-[100%] h-[45px] rounded-[30px] flex items-center bg-white'>
                                <input
                                    type="text"
                                    className='w-[70%] outline-none h-[100%] rounded-tl-[30px] rounded-bl-[30px] pl-[10px]'
                                    placeholder='Введите email'
                                    value={email}
                                    onChange={handleEmailChange}
                                />
                                <button className='w-[30%] h-[100%] rounded-[30px] bg-[#088269] text-white text-[12px] 2xl:text-[16px] xl:text-[15px] lg:text-[14px] md:text-[14px] sm:text-[13px]'>Подписаться</button>
                            </div>
                            {emailError && <p className='text-red-500 text-[16px]'>{emailError}</p>}
                            <div className='flex gap-2 mt-[20px] '>
                                <input
                                    type="checkbox"
                                    className='w-[20px] outline-none'
                                    checked={isChecked}
                                    onChange={handleCheckboxChange}
                                    required
                                />
                                <p className='text-[16px]'>Я даю согласие на обработку своих персональных данных.</p>
                            </div>
                            {checkboxError && <p className='text-red-500 text-[16px]'>{checkboxError}</p>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Podpisku;
