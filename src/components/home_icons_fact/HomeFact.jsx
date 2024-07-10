import React from 'react'

const HomeFact = () => {
    return (
        <div className='w-[95%] 2xl:w-[1440px] xl:w-[95%] lg:w-[95%] md:w-[95%] sm:w-[95%] h-[400px] mx-auto mt-[80px] mb-[80px] '>
            <div className='w-[100%] h-[100%]'>
                <div className='w-[100%]'>
                    <h2 className='text-[34px] font-medium'>Почему выбирают нас?</h2>
                </div>
                <div className='2xl:flex xl:flex lg:flex md:flex sm:flex justify-between mt-[40px] grid grid-cols-2 gap-2'>
                    <div className='w-[100%] h-[100%] 2xl:w-[24%] 2xl:h-[250px] xl:w-[24%] xl:h-[200px] lg:w-[24%] lg:h-[190px] md:w-[24%] md:h-[180px] sm:w-[24%] sm:h-[160px] border rounded-[20px] flex flex-col items-center '>
                        <div className='w-[100%] h-[60%] flex items-center justify-center'><img src="https://global-mt.ru/local/templates/gmt/img/Symbol.svg" alt="img" /></div>
                        <p className='text-center w-[150px]'>Быстрая  доставка</p>
                    </div>
                    <div className='w-[100%] h-[100%] 2xl:w-[24%] 2xl:h-[250px] xl:w-[24%] xl:h-[200px] lg:w-[24%] lg:h-[190px] md:w-[24%] md:h-[180px] sm:w-[24%] sm:h-[160px] border rounded-[20px] flex flex-col items-center '>
                        <div className='w-[100%] h-[60%]  flex items-center justify-center'><img src="https://global-mt.ru/local/templates/gmt/img/Symbol(1).svg" alt="img" /></div>
                        <p className='text-center w-[150px]'>Весь товар сертифицирован</p>
                    </div>
                    <div className='w-[100%] h-[100%] 2xl:w-[24%] 2xl:h-[250px] xl:w-[24%] xl:h-[200px] lg:w-[24%] lg:h-[190px] md:w-[24%] md:h-[180px] sm:w-[24%] sm:h-[160px] border rounded-[20px] flex flex-col items-center '>
                        <div className='w-[100%] h-[60%] flex items-center justify-center'><img src="https://global-mt.ru/local/templates/gmt/img/Symbol(1).svg" alt="img" /></div>
                        <p className='text-center w-[150px]'>Гибкая система скидок</p>
                    </div>
                    <div className='w-[100%] h-[100%] 2xl:w-[24%] 2xl:h-[250px] xl:w-[24%] xl:h-[200px] lg:w-[24%] lg:h-[190px] md:w-[24%] md:h-[180px] sm:w-[24%] sm:h-[160px] border rounded-[20px] flex flex-col items-center '>
                        <div className='w-[100%] h-[60%] flex items-center justify-center'><img src="https://global-mt.ru/local/templates/gmt/img/Symbol(3).svg" alt="img" /></div>
                        <p className='text-center w-[150px]'>Лет на рынке</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeFact
