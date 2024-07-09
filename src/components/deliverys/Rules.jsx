import React from 'react'

const Rules = () => {
    return (
        <div className='2xl:w-[1440px] xl:w-[95%] lg:w-[95%] md:w-[95%] sm:w-[95%] w-[95%] 2xl:h-[400px] xl:h-[400px] lg:h-[400px] md:h-[400px] sm:h-[450px] h-[600px] mx-auto mt-[10px] 2xl:flex xl:flex lg:flex'>
            <div className='2xl:w-[50%] xl:w-[50%] lg:w-[50%] md:w-[100%] sm:w-[100%] w-[100%] 2xl:h-[100%] xl:h-[100%] lg:h-[100%] md:h-[25%] sm:h-[25%] h-[35%]'>
                <h2 className='2xl:text-[30px] xl:text-[27px] lg:text-[24px] md:text-[21px] sm:text-[18px] text-[18px] font-semibold w-[50%]'>Правила получения товара в пункте выдачи</h2>
                <p className='w-[90%] mt-[20px] 2xl:text-[16px] xl:text-[15px] lg:text-[14px] md:text-[13px] sm:text-[12px] text-[12px]'>Учитывая стремительное развитие мировых медицинских технологий, врачи в Российской Федерации и соседних странах столкнулись с вызовом, требующим обновления приборов.</p>
            </div>
            <div className='2xl:w-[50%] xl:w-[50%] lg:w-[50%] md:w-[100%] sm:w-[100%] w-[100%] 2xl:h-[100%] xl:h-[100%] lg:h-[100%] md:h-[75%] sm:h-[75%] h-[65%]'>
                <ul className='w-[100%] h-[100%]'>
                    <li className='border-t w-[100%] h-[30%]'>
                        <h2 className='2xl:text-[20px] xl:text-[18px] lg:text-[16px] md:text-[14px] sm:text-[14px] text-[14px] mt-[15px]'>Подготовить документы</h2>
                        <p className='text-[gray] w-[90%] 2xl:text-[16px] xl:text-[15px] lg:text-[14px] md:text-[13px] sm:text-[12px] text-[11px]'>Предварительно ознакомиться с условиями выдачи грузов на сайте и подготовьте нужные документы</p>
                    </li>
                    <li className='border-t w-[100%] h-[30%]'>
                        <h2 className='2xl:text-[20px] xl:text-[18px] lg:text-[16px] md:text-[14px] sm:text-[14px] text-[14px] mt-[10px]'>Проверка упаковки</h2>
                        <p className='text-[gray] w-[90%] 2xl:text-[16px] xl:text-[15px] lg:text-[14px] md:text-[13px] sm:text-[12px] text-[11px]'>При получении необходимо внимательно осмотреть упаковку груза на наличие механических повреждений и нарушений целостности упаковки</p>
                    </li>
                    <li className='border-t w-[100%] h-[30%]'>
                        <h2 className='2xl:text-[20px] xl:text-[18px] lg:text-[16px] md:text-[14px] sm:text-[14px] text-[14px] mt-[10px]'>Проверка товара</h2>
                        <p className='text-[gray] w-[90%] 2xl:text-[16px] xl:text-[15px] lg:text-[14px] md:text-[13px] sm:text-[12px] text-[11px]'>Вскрыть каждую упаковку и проверите товар по количеству согласно накладной поставщика и на наличие повреждений товара внутри тары</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Rules
