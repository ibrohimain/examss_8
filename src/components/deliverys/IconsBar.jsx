import React from 'react'

export const iconData = [
    {
        id: 1,
        icon: "https://global-mt.ru/local/templates/gmt/img/Subtract.svg",
        text: "Доставка повсей России"
    },
    {
        id: 2,
        icon: "https://global-mt.ru/local/templates/gmt/img/deliveryWeBest.svg",
        text: "Собственный склад с продукцией"
    },
    {
        id: 3,
        icon: "https://global-mt.ru/local/templates/gmt/img/deliveryWeBest1.svg",
        text: "Весь товар сертифицирован"
    },
    {
        id: 4,
        icon: "https://global-mt.ru/local/templates/gmt/img/Group(1).svg",
        text: "Безопасные способы оплаты"
    },
]

const IconsBar = () => {




    return (
        <div className='2xl:w-[1440px] xl:w-[95%] lg:w-[95%] md:w-[95%] sm:w-[95%] w-[95%] h-auto  mx-auto'>
            <div className='w-[100%] 2xl:h-[400px] xl:h-[400px] lg:h-[400px] md:h-[320px] sm:h-[620px] h-auto  mx-auto'>
                <h2 className='2xl:text-[36px] xl:text-[34px] lg:text-[32px] md:text-[30px] sm:text-[28px] text-[22px]'>С нами выгодно и удобно</h2>
                <div className=' grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-2 grid-cols-2 gap-2 mt-[30px]'>
                    {iconData.map((item, index) => (
                        <div className='w-[98%] h-[100%] border rounded-[10px]'>
                            <div className='flex items-center justify-center w-[100%] h-[60%]'>
                                <img src={item.icon} alt="" className='w-[50%] h-[50%]' />
                            </div>
                            <div className='w-[100%] h-[40%] flex items-center justify-center'>
                                <p className='w-[150px] text-center 2xl:text-[16px] xl:text-[15px] lg:text-[14px] md:text-[13px] sm:text-[12px] text-[10px]'>{item.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default IconsBar
