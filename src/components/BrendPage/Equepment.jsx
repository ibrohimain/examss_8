import { Slider } from '@mui/material';
import React, { useRef, useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { HiChevronDown } from 'react-icons/hi';
import { IoMdMenu } from 'react-icons/io';
import { IoGridOutline } from 'react-icons/io5';
import { catalogCrData } from '../carusels/catalogCarouselData';
import { useNavigate } from 'react-router-dom';
import { GoHeart } from 'react-icons/go';
import { MdOutlineAlignVerticalBottom } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';
import Sliders from './Slider';


const Equepment = () => {





    const dispatch = useDispatch();
    const [qty, setQty] = useState(1);

    const handleAddToCart = (product) => {
        let totalPrice = qty * product.price;
        const tempProduct = {
            ...product,
            quantity: qty,
            totalPrice,
        };
        dispatch(addToCart(tempProduct));
    };

    const sliderRef = useRef(null);

    const navigate = useNavigate()
    const [filterExpanded, setFilterExpanded] = useState('1');
    const [priceExpanded, setPriceExpanded] = useState(true);
    const [countryExpanded, setCountryExpanded] = useState(true);
    const [conditionExpanded, setConditionExpanded] = useState(true);
    const [purposeExpanded, setPurposeExpanded] = useState(true);
    const [equipmentExpanded, setEquipmentExpanded] = useState(true);
    const [value, setValue] = useState([200, 950]);

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 9;

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    function valuetext(value) {
        return `${value}`;
    }

    const toggleSection = (section) => {
        switch (section) {
            case 'price':
                setPriceExpanded(!priceExpanded);
                break;
            case 'country':
                setCountryExpanded(!countryExpanded);
                break;
            case 'condition':
                setConditionExpanded(!conditionExpanded);
                break;
            case 'purpose':
                setPurposeExpanded(!purposeExpanded);
                break;
            case 'equipment':
                setEquipmentExpanded(!equipmentExpanded);
                break;
            default:
                break;
        }
    };

    const totalPages = Math.ceil(catalogCrData.length / itemsPerPage);

    const handleClick = (page) => {
        setCurrentPage(page);
    };

    const startIndex = (currentPage - 1) * itemsPerPage;
    const selectedItems = catalogCrData.slice(startIndex, startIndex + itemsPerPage);

    return (
        <>
            <div className='2xl:w-[1440px] xl:w-[95%] lg:w-[95%] md:w-[95%] sm:w-[95%] w-[95%] mx-auto'>
                <h2 className='text-[38px]'>Оборудование Draeger</h2>
                <Sliders />
                <div className='w-[100%] 2xl:h-[2000px] xl:h-[2000px] lg:h-[2000px] md:h-[2000px] sm:h-[2000px] h-[3300px] 2xl:flex xl:flex lg:flex  justify-between mt-8'>
                    <div className='2xl:w-[26%] xl:w-[25%] lg:w-[25%] md:w-[100%] sm:w-[100%] w-[100%] 2xl:h-auto'>
                        <div onClick={() => setFilterExpanded('2')} className='p-[15px]  mt-[10px] rounded-[10px] border'>
                            <h2>Страна</h2>
                            <div className={`overflow-hidden duration-300 ${filterExpanded === '2' ? 'h-[1050px]' : "h-0"}`}>
                                <hr className='mt-[10px]' />
                                <div>
                                    <div className='w-[100%] h-[40px] flex justify-between items-center mt-[30px]'>
                                        <p>Цена</p>
                                        <HiChevronDown className='cursor-pointer' onClick={() => toggleSection('price')} />
                                    </div>
                                    <div className={`transition-all duration-300 ${priceExpanded ? 'max-h-[500px]' : 'max-h-0 overflow-hidden'}`}>
                                        <div className='w-[100%] flex justify-between'>
                                            <div className='w-[48%] h-[60px] border-b'>
                                                <p className='text-[gray]'>От:</p>
                                                <h2 className='font-semibold text-[20px] pb-[10px]'>{value[0]}.000</h2>
                                            </div>
                                            <div className='w-[48%] h-[60px] border-b'>
                                                <p className='text-[gray]'>До:</p>
                                                <h2 className='font-semibold text-[20px] pb-[10px]'>{value[1]}.000</h2>
                                            </div>
                                        </div>
                                        <div className='mt-4 w-[90%] mx-auto'>
                                            <Slider
                                                getAriaLabel={() => 'Price range'}
                                                value={value}
                                                onChange={handleChange}
                                                valueLabelDisplay="auto"
                                                getAriaValueText={valuetext}
                                                min={200}
                                                max={950}
                                                style={{ color: "green" }}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div >
                                    <div className='w-[100%] h-[40px] flex justify-between items-center mt-[30px]' >
                                        <p>Страна</p> <HiChevronDown className='cursor-pointer' onClick={() => toggleSection('country')} />
                                    </div>
                                    <div className={`transition-all duration-300 ${countryExpanded ? 'max-h-[500px]' : 'max-h-0 overflow-hidden'}`}>
                                        <form action="" className='w-[100%] h-[45px] border rounded-[10px] flex'>
                                            <input type="text" className='w-[80%] h-[100%] rounded-tl-[10px] rounded-bl-[10px] outline-none pl-[10px]' placeholder='Поиск по стране' />
                                            <div className='w-[20%] h-[100%] rounded-tr-[10px] rounded-br-[10px] bg-white flex items-center justify-center'><CiSearch className='text-[26px] cursor-pointer' /></div>
                                        </form>
                                        <ul>
                                            <li className='w-[100%] flex items-center justify-start mt-[15px] gap-3'><input type="checkbox" /><p>Австралия</p></li>
                                            <li className='w-[100%] flex items-center justify-start mt-[15px] gap-3'><input type="checkbox" /><p>Австрия</p></li>
                                            <li className='w-[100%] flex items-center justify-start mt-[15px] gap-3'><input type="checkbox" /><p>Беларусь</p></li>
                                            <li className='w-[100%] flex items-center justify-start mt-[15px] gap-3'><input type="checkbox" /><p>Бельгия</p></li>
                                            <li className='w-[100%] flex items-center justify-start mt-[15px] gap-3'><input type="checkbox" /><p>Великобритания</p></li>
                                            <li className='w-[100%] flex items-center justify-start mt-[15px] gap-3'><input type="checkbox" /><p>Германия</p></li>
                                            <li className='w-[100%] flex items-center justify-start mt-[15px] gap-3'><input type="checkbox" /><p>Палестина</p></li>
                                            <li className='w-[100%] flex items-center justify-start mt-[15px] gap-3'><input type="checkbox" /><p>Испания</p></li>
                                        </ul>
                                    </div>
                                </div>
                                <div>
                                    <div className='w-[100%] flex justify-between items-center h-[40px] mt-[30px]'>
                                        <p>Состояние</p>
                                        <HiChevronDown className='cursor-pointer' onClick={() => toggleSection('condition')} />
                                    </div>
                                    <div className={`transition-all duration-300 ${conditionExpanded ? 'max-h-[500px]' : 'max-h-0 overflow-hidden'}`}>
                                        <ul>
                                            <li className='w-[100%] flex gap-2 items-center mt-[10px]'><input type="checkbox" /><p>Новый</p></li>
                                            <li className='w-[100%] flex gap-2 items-center mt-[10px]'><input type="checkbox" /><p>Демонстрационный</p></li>
                                        </ul>
                                    </div>
                                </div>
                                <div>
                                    <div className='w-[100%] flex justify-between items-center h-[40px] mt-[30px]'>
                                        <p>Назначение</p>
                                        <HiChevronDown className='cursor-pointer' onClick={() => toggleSection('purpose')} />
                                    </div>
                                    <div className={`transition-all duration-300 ${purposeExpanded ? 'max-h-[500px]' : 'max-h-0 overflow-hidden'}`}>
                                    </div>
                                </div>
                                <div>
                                    <div className='w-[100%] flex justify-between items-center h-[40px] mt-[30px]'>
                                        <p>Комплектация</p>
                                        <HiChevronDown className='cursor-pointer' onClick={() => toggleSection('equipment')} />
                                    </div>
                                    <div className={`transition-all duration-300 ${equipmentExpanded ? 'max-h-[500px]' : 'max-h-0 overflow-hidden'}`}>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='2xl:w-[73%] xl:w-[73%] lg:w-[73%] md:w-[100%] sm:w-[100%] w-[100%] 2xl:h-[100%] xl:h-[100%] lg:h-[100%] md:h-[100%] sm:h-[100%] h-[90%] '>
                        <div className='2xl:w-[95%] mx-auto xl:w-[95%] lg:w-[95%] md:w-[95%] sm:w-[95%] w-[100%] '>
                            <div className='w-[85%] h-[45px]  flex justify-between'>
                                <div className='flex items-center gap-2 '>
                                    <p>По популярности</p>
                                    <HiChevronDown />
                                </div>
                                <div className='flex justify-between w-[40%] h-[100%]'>
                                    <div className='flex items-center gap-2'>
                                        <p>Показать</p>
                                        <span className='flex items-center gap-1'>36 <HiChevronDown /></span>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <IoMdMenu className='text-[24px]' />
                                        <IoGridOutline className='text-[20px]' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='w-[100%] grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-2 gap-2'>
                            {selectedItems.map((item, index) => (
                                <div key={index} className='w-[100%] h-[600px] mt-[10px]'>
                                    <div className="w-[100%] 2xl:h-[580px] xl:h-[580px] lg:h-[550px] md:h-[500px] sm:h-[530px] h-[570px] border rounded-[20px]">
                                        <div className="w-[100%] h-[50%] bg-[white] flex items-center justify-center relative rounded-[20px]">
                                            <div className='absolute flex justify-between w-[95%] mx-auto top-3'>
                                                {/* Add content for this section */}
                                                <button className={` text-[14px] pl-2 pr-2 h-[30px] rounded-[20px] border font-semibold text-[#088269] ${item.title === 'Новинка' ? 'bg-[rgb(8,130,105,0.3)] w-[90px] border-[#088269]' :
                                                    item.title === 'Хит продаж' ? 'bg-[rgb(176,109,202,0.3)] border-[rgb(176,109,202)] text-[rgb(40,16,49)] w-[110px]' :
                                                        item.title === '-30%' ? 'bg-[rgba(242,247,87,0.3)] border-[rgba(242,247,87)] text-[#e6de3f] w-[60px]' : 'bg-[#BDDBC7]'
                                                    }`}>{item.title}
                                                </button>
                                                <div className='flex gap-2'>
                                                    <div className='cursor-pointer'><MdOutlineAlignVerticalBottom className='text-[24px]' /> </div>
                                                    <div className='cursor-pointer'><GoHeart className='text-[26px]' /></div>
                                                </div>
                                            </div>
                                            <img
                                                src={item.img}
                                                alt={`Complex ${index + 1}`}
                                                className="w-[60%] h-[70%] object-cover rounded-tr-[20px] rounded-tl-[20px] cursor-pointer"
                                                onClick={() => navigate(`/product/${item.id}`)}
                                            />
                                        </div>
                                        <div className='w-[90%] mx-auto'>
                                            <h2 className='2xl:text-[16px] xl:text-[16px] lg:text-[15px] md:text-[15px] sm:text-[14px] text-[13px] font-semibold w-[90%] mt-[20px]'>{item.name}</h2>
                                            <p className='text-[gray] text-[14px] w-[160px]'>{item.common_name}</p>
                                            <p className='text-[gray] text-[14px] w-[160px]'>{item.price_title}</p>
                                            <h2 className='text-[22px] font-semibold mt-[30px]'>{item.price}</h2>
                                            <button className='w-[100%] h-[45px] rounded-[20px] border font-semibold text-[#088269] mt-[20px] transition-all [transition:0.3s] hover:bg-[#088269] hover:text-[white]' onClick={() => handleAddToCart(item)}>{item.btn_name}d</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className='flex justify-center mt-4'>
                            {Array.from({ length: totalPages }, (_, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleClick(index + 1)}
                                    className={`mx-1 px-3 py-1 rounded ${currentPage === index + 1 ? 'bg-green-500 text-white' : 'bg-white text-black border'}`}
                                >
                                    {index + 1}
                                </button>
                            ))}
                        </div>
                    </div>
                </div >
            </div>
        </>
    );
};

export default Equepment;
