import React, { useState } from 'react';
import { CgArrowTopRight } from 'react-icons/cg';
import { IoMdClose } from 'react-icons/io';
import { TbPlus } from 'react-icons/tb';
import { TbX } from 'react-icons/tb'; // Import the X icon
// import './Infarmation.css'; // Import the CSS for animations

const Document = () => {
    const [expandedSection, setExpandedSection] = useState(null);

    const toggleSection = (section) => {
        setExpandedSection(prevState =>
            prevState === section ? null : section
        );
    };

    return (
        <div className='w-[100%] h-[500px] bg-[#D5D1E1] mb-[20px] 2xl:flex xl:flex lg:flex md:flex sm:flex items-center'>
            <div className='w-[95%] h-[90%] mx-auto 2xl:flex xl:flex xl:flex-row 2xl:flex-row lg:flex-row md:flex-row sm:flex-row lg:flex md:flex sm:flex flex flex-col justify-center items-center'>
                <div className='text-center 2xl:text-start xl:text-start lg:text-start md:text-start sm:text-start 2xl:w-[50%] xl:w-[50%] lg:w-[50%] md:w-[50%] sm:w-[50%] 2xl:h-full xl:h-full lg:h-full md:h-full sm:h-full w-[100%] 2xl:pt-0 xl:pt-0 lg:pt-0 md:pt-0 sm:pt-0 pt-[20px]'>
                    <h2 className='2xl:text-[36px] xl:text-[34px] lg:text-[32px] md:text-[30px] sm:text-[28px] text-[24px] font-semibold text-black'>Информация о компании</h2>
                </div>
                <div className='pt-[20px] 2xl:pt-0 xl:pt-0 lg:pt-0 md:pt-0 sm:pt-0 2xl:w-[50%] xl:w-[50%] lg:w-[50%] md:w-[50%] sm:w-[50%]  2xl:h-full xl:h-full lg:h-full md:h-full sm:h-full w-[100%]'>
                    <hr className='w-full' />
                    {renderSection('Юридические лица    ', expandedSection, toggleSection)}
                    <hr className='w-full' />
                    {renderSection('Индивидуальные предприниматели', expandedSection, toggleSection)}
                    <hr className='w-full' />
                    {renderSection('Физические лица', expandedSection, toggleSection)}

                </div>
            </div>
        </div>
    );
};

const renderSection = (title, expandedSection, toggleSection) => {
    const sectionId = title;
    const isExpanded = expandedSection === sectionId;

    return (
        <div key={sectionId} className='w-[100%]' >
            <div className='2xl:w-[95%] xl:w-[95%] lg:w-[95%] md:w-[95%] sm:w-[95%] w-[100%] mx-auto'>
                <div className='flex justify-between mt-[20px]'>
                    <h2 className='text-[20px] text-black flex items-center gap-2'>
                        {title}
                        {title === 'Подробнее' && <CgArrowTopRight />}
                    </h2>
                    <div
                        className={`w-[35px] h-[35px] border text-black rounded-full font-semibold text-[22px] flex items-center justify-center cursor-pointer transition-transform duration-300 ${isExpanded ? 'rotate-90 [transition:0.3s] bg-[#088269] text-white' : ''}`}
                        onClick={() => toggleSection(sectionId)}
                    >
                        {isExpanded ? <IoMdClose /> : <TbPlus />}
                    </div>
                </div>
                <div
                    className={`transition-max-height [transition-property:max-height] duration-300 ease-in-out overflow-hidden mb-[20px] ${isExpanded ? 'max-h-[550px]' : 'max-h-0'}`}
                >
                    <p className={`text-black w-[600px] mt-2 ${isExpanded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300 ease-in-out`}>
                        Но синтетическое тестирование, в своём классическом представлении, допускает внедрение поэтапного и последовательного развития общества. В рамках спецификации современных стандартов, сторонники тоталитаризма в науке будут функционально разнесены.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Document;
