import React from 'react'

const InformationMap = () => {
    return (
        <div className='2xl:w-[1440px] xl:w-[100%] lg:w-[100%] sm:w-[100%] md:w-[100%] w-[100%] mx-auto'>
            <div className='w-[95%] 2xl:w-[100%] xl:w-[95%] md:w-[95%] lg:w-[95%] sm:w-[95%] mx-auto 2xl:h-[700px] xl:h-[700px] lg:h-[730px] md:h-[500px] sm:h-[500px] h-[780px] mt-[10px] mb-[10px] '>
                <h2 className='2xl:text-[34px] xl:text-[32px] lg:text-[30px] md:text-[28px] sm:text-[26px] text-[24px]'>Информация о доставке</h2>
                <div className='2xl:w-[100%] xl:w-[100%] lg:w-[100%] md:w-[100%] sm:w-[100%] w-[100%] h-[60%] relative rounded-[20px] mt-[10px]'>
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
                <div className='w-[100%] h-[30%] flex justify-end'>
                    <div className='2xl:w-[50%] xl:w-[50%] lg:w-[50%] md:w-[100%] sm:w-[100%] w-[100%]  h-[100%] mt-[10px]'>
                        <p className='w-[95%] 2xl:text-[16px] xl:text-[15px] lg:text-[14px] md:text-[13px] sm:text-[12px] text-[11px]'>Учитывая стремительное развитие мировых медицинских технологий, врачи в Российской Федерации и соседних странах столкнулись с вызовом, требующим обновления приборов в различных направлениях, от установок компьютерной томографии до ультразвуковых сканеров и ЛОР комбайнов. Переход на полностью цифровую платформу при диагностике и лечении заболеваний также стал серьёзным испытанием для большинства больниц и частных клиник. </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InformationMap
