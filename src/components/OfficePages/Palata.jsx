import React, { useState } from 'react';
import SpisokCarousel from './SpisokCarousel';

const Palata = () => {
    const [selectedTab, setSelectedTab] = useState('standards');

    const renderContent = () => {
        switch (selectedTab) {
            case 'standards':
                return (
                    <div className='w-[95%] h-auto  mx-auto 2xl:flex xl:flex lg:flex md:flex sm:flex items-center justify-between pb-[20px] pt-[20px]'>
                        <ul>
                            <li className='2xl:text-[14px] xl:text-[13px] lg:text-[12px] md:text-[12px] sm:text-[11px] text-[10px] font-medium'>1. Аппарат искусственной вентиляции лёгких</li>
                            <li className='2xl:text-[14px] xl:text-[13px] lg:text-[12px] md:text-[12px] sm:text-[11px] text-[10px] font-medium'>2. Аппарат искусственной вентиляции легких транспортный</li>
                            <li className='2xl:text-[14px] xl:text-[13px] lg:text-[12px] md:text-[12px] sm:text-[11px] text-[10px] font-medium'>3. Дыхательный мешок для ручной искусственной вентиляции легких</li>
                            <li className='2xl:text-[14px] xl:text-[13px] lg:text-[12px] md:text-[12px] sm:text-[11px] text-[10px] font-medium'>4. Монитор пациента на 5 параметров</li>
                            <li className='2xl:text-[14px] xl:text-[13px] lg:text-[12px] md:text-[12px] sm:text-[11px] text-[10px] font-medium'>5. Монитор пациента на 8 параметров</li>
                            <li className='2xl:text-[14px] xl:text-[13px] lg:text-[12px] md:text-[12px] sm:text-[11px] text-[10px] font-medium'>6. Шприцевой насос</li>
                            <li className='2xl:text-[14px] xl:text-[13px] lg:text-[12px] md:text-[12px] sm:text-[11px] text-[10px] font-medium'>7. Инфузионный насос</li>
                            <li className='2xl:text-[14px] xl:text-[13px] lg:text-[12px] md:text-[12px] sm:text-[11px] text-[10px] font-medium'>8. Набор для интубации трахеи</li>
                            <li className='2xl:text-[14px] xl:text-[13px] lg:text-[12px] md:text-[12px] sm:text-[11px] text-[10px] font-medium'>9. Дефибриллятор</li>
                            {/* Repeat for other items */}
                        </ul>
                        <ul className=''>
                            <li className='2xl:text-[14px] xl:text-[13px] lg:text-[12px] md:text-[12px] sm:text-[11px] text-[10px] font-medium'>10. Матрац термостабилизирующий</li>
                            <li className='2xl:text-[14px] xl:text-[13px] lg:text-[12px] md:text-[12px] sm:text-[11px] text-[10px] font-medium'>11. Автоматический анализатор газов крови</li>
                            <li className='2xl:text-[14px] xl:text-[13px] lg:text-[12px] md:text-[12px] sm:text-[11px] text-[10px] font-medium'>12. Электрокардиограф</li>
                            <li className='2xl:text-[14px] xl:text-[13px] lg:text-[12px] md:text-[12px] sm:text-[11px] text-[10px] font-medium'>13. Транспортируемый рентгеновский аппарат</li>
                            <li className='2xl:text-[14px] xl:text-[13px] lg:text-[12px] md:text-[12px] sm:text-[11px] text-[10px] font-medium'>14. Портативный ультразвуковой диагностический аппарат</li>
                            <li className='2xl:text-[14px] xl:text-[13px] lg:text-[12px] md:text-[12px] sm:text-[11px] text-[10px] font-medium'>15. Кровать трёхсекционная с ограждением</li>
                            <li className='2xl:text-[14px] xl:text-[13px] lg:text-[12px] md:text-[12px] sm:text-[11px] text-[10px] font-medium'>16. Кровать-вес</li>
                            <li className='2xl:text-[14px] xl:text-[13px] lg:text-[12px] md:text-[12px] sm:text-[11px] text-[10px] font-medium'>17. Электроэнцефалограф 8-канальный</li>
                            <li className='2xl:text-[14px] xl:text-[13px] lg:text-[12px] md:text-[12px] sm:text-[11px] text-[10px] font-medium'>18. Пневмокомпрессорная профилактика тромбоэмболических осложнений и лимфостаза</li>
                        </ul>
                    </div>
                );
            case 'products':
                return (
                    <div className='w-[95%] h-auto mx-auto pt-[10px] pb-[10px]'>
                        <SpisokCarousel />

                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className='2xl:w-[1440px] xl:w-[95%] lg:w-[95%] md:w-[95%] sm:w-[95%] w-[95%] mx-auto'>
            <h2 className='2xl:text-[36px] xl:text-[32px] lg:text-[28px] md:text-[24px] sm:text-[20px] text-[16px] 2xl:w-[60%] xl:w-[60%] lg:W-[60%] md:w-[75%] sm:w-[75%] w-[80%]'>Комплексное оснащение палаты реанимации и интенсивной терапии</h2>
            <div>
                <div className='w-[100%] h-[350px]'>
                    <img src="https://global-mt.ru/upload/medialibrary/727/2b1ls6med2kk3w81v764ncvin06tpdzp/1672988642_pro_dachnikov_com_p_bolnitsa_interer_foto_14.jpg" alt="" className='w-[100%] h-[100%] rounded-[10px] mt-[20px]' />
                </div>
                <div className='flex 2xl:justify-end xl:justify-end lg:justify-end md:justify-start sm:justify-start justify-start items-center w-[100%]'>
                    <div className='2xl:w-[50%] xl:w-[50%] lg:w-[50%] md:w-[70%] sm:w-[70%] w-[100%]'>
                        <p className='w-[90%] mt-[40px] 2xl:text-[16px] xl:text-[15px] lg:text-[14px] md:text-[13px] sm:text-[12px] text-[11px]'>Учитывая стремительное развитие мировых медицинских технологий, врачи в Российской Федерации и соседних странах столкнулись с вызовом, требующим обновления приборов в различных направлениях, от установок компьютерной томографии до ультразвуковых сканеров и ЛОР комбайнов. Переход на полностью цифровую платформу при диагностике и лечении заболеваний также стал серьёзным испытанием для большинства больниц и частных клиник.</p>
                        <span className='mt-[10px] block 2xl:text-[16px] xl:text-[15px] lg:text-[14px] md:text-[13px] sm:text-[12px] text-[11px]'>Скачать каталог "Стандарты оснащения отделений"</span>
                    </div>
                </div>
                <div className='w-[100%] h-auto rounded-[10px] mt-[20px]'>
                    <div className='w-[100%] h-[20%] '>
                        <ul className='flex items-center gap-5 h-[100%] w-[95%] mx-auto'>
                            <li className={`font-semibold cursor-pointer ${selectedTab === 'standards' ? 'text-blue-500' : ''}`} onClick={() => setSelectedTab('standards')}>Стандарты оснащения</li>
                            <li className={`font-semibold cursor-pointer ${selectedTab === 'products' ? 'text-blue-500' : ''}`} onClick={() => setSelectedTab('products')}>Список товаров</li>
                        </ul>
                    </div>
                    <div className='w-[100%] h-[80%] border bg-white flex justify-between items-center'>
                        {renderContent()}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Palata;
