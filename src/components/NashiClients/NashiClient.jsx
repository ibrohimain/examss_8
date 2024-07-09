import React from 'react';
import Marquee from 'react-fast-marquee';
import { clientData } from './ClientData';

const NashiClient = () => {
    return (
        <div className='w-[100%] bg-[#D5D1E1] mx-auto'>
            <div className='w-[100%]  mx-auto h-auto mt-5 mb-5 p-5'>
                <div className='w-[100%] 2xl:w-[100%] mx-auto'>
                    <div className='w-[95%] 2xl:w-[90%] flex flex-wrap justify-between items-center mx-auto'>
                        <h3 className='text-[30px]'>Наши клиенты</h3>
                        <h1 className='2xl:w-[43%] text-[18px] md:text-[34px] lg:text-[38px] xl:text-[42px] 2xl:text-[44px] font-medium mt-2 md:w-auto'>
                            БОЛЕЕ <span className='text-[#088269]'>5000</span> УСПЕШНЫХ ПРОЕКТОВ
                        </h1>
                    </div>
                    <Marquee className='mt-20' pauseOnHover={true} speed={50}>
                        {clientData.map((item, index) => (
                            <div key={index} className='w-[280px] ml-[10px] h-[230px] rounded-[10px] flex-shrink-0'>
                                <div className='w-full h-[60%] border bg-white rounded-t-[10px] flex items-center justify-center'>
                                    <img src={item.img} alt={item.common_name} className='w-[40%] h-[80%]' />
                                </div>
                                <div className='bg-[#F8F7F3] w-full h-[40%] rounded-b-[10px] flex items-center justify-center'>
                                    <p className='w-[90%] mx-auto pt-[20px] text-center'>{item.common_name}</p>
                                </div>
                            </div>
                        ))}
                    </Marquee>
                </div>
            </div>
        </div>
    );
}

export default NashiClient;
