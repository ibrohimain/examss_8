import React from 'react'

const Attention = () => {
  return (
    <div className='bg-[#088269] 2xl:w-[1440px] xl:w-[95%] lg:w-[95%] md:w-[95%] sm:w-[95%] w-[95%] h-auto pt-5 pb-5 mt-[20px] mb-[100px] rounded-[10px] mx-auto'>
      <div className='w-[95%] mx-auto 2xl:flex xl:flex lg:flex md:flex sm:flex'>
        <div className='2xl:w-[50%] xl:w-[50%] lg:w-[50%] md:w-[50%] sm:w-[50%] w-[100%] 2xl:h-[100%] xl:h-[100%] lg:h-[100%] md:h-[100%] sm:h-[100%] h-[20%]'>
          <h2 className='text-[38px] text-white'>Внимание!</h2>
        </div>
        <div className='2xl:w-[50%] xl:w-[50%] lg:w-[50%] md:w-[50%] sm:w-[50%] w-[100%] 2xl:h-[100%] xl:h-[100%] lg:h-[100%] md:h-[100%] sm:h-[100%] h-[80%]'>
          <p className='text-white w-[100%] 2xl:text-[15px] xl:text-[14px] lg:text-[13px] md:text-[12px] sm:text-[12px] text-[12px] '>Рассмотрение заявки на замену товара осуществляется в срок до 30 дней со дня её регистрации согласно п. 1 ст. 12 Закона № 59-ФЗ, при условии предоставления документов, перечисленных в договоре.</p>
          <p className='text-white mt-[10px] w-[100%] 2xl:text-[15px] xl:text-[14px] lg:text-[13px] md:text-[12px] sm:text-[12px] text-[12px] '>Оформление гарантийного случая осуществляется согласно Гражданскому кодексу РФ, при условии предоставления документов, перечисленных в договоре  и при наличии заявления с указанием причины возврата, оформленного надлежащим образом.</p>
        </div>
      </div>
    </div>
  )
}

export default Attention
