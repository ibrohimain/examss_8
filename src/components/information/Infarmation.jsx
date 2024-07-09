import React, { useState } from 'react';
import { CgArrowTopRight } from 'react-icons/cg';
import { IoMdClose } from 'react-icons/io';
import { TbPlus } from 'react-icons/tb';
import { TbX } from 'react-icons/tb';

const Infarmation = () => {
    const [expandedSection, setExpandedSection] = useState(null);

    const toggleSection = (section) => {
        setExpandedSection(prevState =>
            prevState === section ? null : section
        );
    };

    return (
        <div className=' w-[100%] h-[700px] bg-[#088269] 2xl:flex xl:flex lg:flex md:flex sm:flex items-center mx-auto'>
            <div className='w-[95%] 2xl:w-[1440px] xl:w-[95%] lg:w-[95%] h-[80%] mx-auto 2xl:flex xl:flex xl:flex-row 2xl:flex-row lg:flex-row md:flex-row sm:flex-row lg:flex md:flex sm:flex flex flex-col justify-center items-center '>
                <div className='text-center 2xl:text-start xl:text-start lg:text-start md:text-start sm:text-start 2xl:w-[50%] xl:w-[50%] lg:w-[50%] md:w-[50%] sm:w-[50%] 2xl:h-full xl:h-full lg:h-full md:h-full sm:h-full w-[100%] 2xl:pt-0 xl:pt-0 lg:pt-0 md:pt-0 sm:pt-0 pt-[20px]'>
                    <h2 className='2xl:text-[34px] xl:text-[34px] lg:text-[32px] md:text-[30px] sm:text-[28px] text-[20px] font-medium text-white'>Информация о компании</h2>
                </div>
                <div className='pt-[20px] 2xl:pt-0 xl:pt-0 lg:pt-0 md:pt-0 sm:pt-0 2xl:w-[50%] xl:w-[50%] lg:w-[50%] md:w-[50%] sm:w-[50%]  2xl:h-[93%] xl:h-full lg:h-full md:h-full sm:h-full w-[100%]'>
                    <hr className='w-full' />
                    {renderSection('О компании', expandedSection, toggleSection)}
                    <hr className='w-full' />
                    {renderSection('Подробнее', expandedSection, toggleSection)}
                    <hr className='w-full' />
                    {renderSection('Преимущества сотрудников', expandedSection, toggleSection)}
                    <hr className='w-full' />
                    {renderSection('Достижения компании', expandedSection, toggleSection)}
                    <hr className='w-full' />
                    {renderSection('Карьерный рост', expandedSection, toggleSection)}
                </div>
            </div>
        </div>
    );
};

const renderSection = (title, expandedSection, toggleSection) => {
    const sectionId = title;
    const isExpanded = expandedSection === sectionId;

    return (
        <div key={sectionId} className='w-[100%] ' >
            <div className='2xl:w-[95%] xl:w-[95%] lg:w-[95%] md:w-[95%] sm:w-[95%] w-[100%] h-[80%] mx-auto'>
                <div className='flex justify-between mt-[20px]'>
                    <h2 className='2xl:text-[20px] xl:text-[20px] lg:text-[18px] md:text-[18px] sm:text-[16px] text-[18px] text-white flex items-center gap-2'>
                        {title}
                        {title === 'Подробнее' && <CgArrowTopRight />}
                    </h2>
                    <div
                        className={`w-[35px] h-[35px] border text-white rounded-full font-semibold text-[22px] flex items-center justify-center cursor-pointer transition-transform duration-300 ${isExpanded ? 'rotate-90 [transition:0.3s]  text-black' : ''}`}
                        onClick={() => toggleSection(sectionId)}
                    >
                        {isExpanded ? <IoMdClose /> : <TbPlus />}
                    </div>
                </div>
                <div
                    className={`transition-max-height [transition-property:max-height] duration-300 ease-in-out overflow-hidden mb-[20px] ${isExpanded ? 'max-h-[550px]' : 'max-h-0'}`}
                >
                    <p className={`text-white w-[600px] mt-2 ${isExpanded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300 ease-in-out`}>
                        Но синтетическое тестирование, в своём классическом представлении, допускает внедрение поэтапного и последовательного развития общества. В рамках спецификации современных стандартов, сторонники тоталитаризма в науке будут функционально разнесены.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Infarmation;
