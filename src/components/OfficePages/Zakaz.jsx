import React from 'react'

const Zakaz = () => {
    return (
        <div className='2xl:w-[1440px] xl:w-[95%] lg:w-[95%] md:w-[95%] sm:w-[95%] w-[95%] h-auto mx-auto bg-white rounded-[10px] pt-5 pb-10 mt-[10px] mb-[50px]'>
            <div className='w-[95%] h-[100%] mx-auto 2xl:flex xl:flex md:flex lg:flex'>
                <div className='2xl:w-[50%] xl:w-[50%] lg:w-[50%] md:w-[50%] sm:w-[50%] w-[100%] pt-10 h-[100%] flex items-center'>
                    <h2 className='w-[90%] 2xl:text-[36px] xl:text-[32px] lg:text-[28px] md:text-[24px] sm:text-[20px] text-[18px]'>Закажите у нас комплеское оснащение</h2>
                </div>
                <hr className='w-[100%] 2xl:hidden xl:hidden lg:hidden md:hidden sm:hidden block mb-4 mt-[80px]' />
                <div className='2xl:w-[50%] xl:w-[50%] lg:w-[50%] md:w-[50%] sm:w-[50%] w-[100%] h-[100%] flex items-center pb-4 2xl:pb-0 xl:pb-0 md:pb-0 lg:pb-0 sm:pb-0'>
                    <form className='w-[100%] h-[55%]'>
                        <input type="text" className='w-[100%] h-[45px] border-b border-black pl-[10px] outline-none' placeholder='Ваш телефон' />
                        <div className='flex gap-4 mt-[15px]'>
                            <button className='bg-green-500 w-[120px] h-[40px] font-semibold rounded-[20px] text-white'>Заказать</button>
                            <p className='2xl:text-[14px] xl:text-[13px] lg:text-[12px] md:text-[12px] sm:text-[11px] text-[11px] w-[80%]'>Нажимая «Отправить», я соглашаюсь c обработкой персональных данных на условиях <span className='text-[green]'>Политики конфиденциальности.</span></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Zakaz
