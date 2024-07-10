import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Data } from "./data";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function SimpleSlider() {
    const [activeIndex, setActiveIndex] = useState(0);

    const settings = {
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        appendDots: dots => (
            <div>
                <ul className="flex justify-center p-0 m-0 list-none">{dots}</ul>
            </div>
        ),
        customPaging: i => (
            <div className={`w-2 h-2 rounded-full bg-[gray] mx-1 transition-all duration-300 ease-in-out ${activeIndex === i ? "w-[49px] rounded-[10px] bg-[#D5D1E1]" : ""}`} onClick={() => setActiveIndex(i)}></div>
        ),
        beforeChange: (current, next) => setActiveIndex(next),
    };


    const PrevArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: 'hidden' }}
                onClick={onClick}
            />
        );
    };

    return (
        <div className="w-[95%] 2xl:w-[1440px] xl:w-[95%] lg:w-[95%] md:w-[95%] 2xl:h-[450px] xl:h-[400px] md:h-[250px] lg:h-[360px] sm:h-[450px] h-[500px] mx-auto mt-10">
            <Slider {...settings}>
                {Data.map((item, index) => (
                    <div key={index} className="p-4">
                        <div className="ml-[1px] w-[100%] 2xl:h-[100%] xl:h-[100%] lg:h-[100%] sm:h-[100%] md:h-[100%] h-[100%] bg-[#D5D1E1] rounded-[20px]">
                            <div className="2xl:flex xl:flex lg:flex md:flex h-[100%] 2xl:h-[100%] xl:h-[100%] md:h-[100%] lg:h-[100%]">
                                <div className=" h-[45%] w-[100%] p-4 2xl:w-[40%] xl:w-[35%] lg:w-[32%] md:w-[35%] sm:w-[100%] sm:h-[40%] 2xl:block xl:block lg:block md:block sm:flex sm:flex-col sm:items-center ">
                                    <h2 className="text-[20px] text-center 2xl:text-[38px] xl:text-[28px] lg:text-[24px] lg:w-[400px] md:text-[18px] sm:text-[16px] sm:w-[400px] 2xl:ml-[30px] xl:ml-[30px] md:ml-[20px] sm:ml-[10px] font-semibold 2xl:w-[100%] xl:w-[400px] sm:text-center 2xl:text-start xl:text-start lg:text-start md:text-start md:w-[250px]">{item.common_name}</h2>
                                    <p className="text-[gray] w-[100%] text-[14px] text-center 2xl:text-[16px] xl:text-[13px] lg:text-[12px] sm:text-[11px] md:text-[11px] sm:w-[100%] md:w-[100%] 2xl:ml-[30px] xl:ml-[30px] md:ml-[20px] sm:ml-[10px] 2xl:w-[300px] xl:w-[250px] sm:text-center 2xl:text-start xl:text-start lg:text-start md:text-start lg:w-[180px] mx-auto">{item.title_name}</p>
                                    <div className="mt-[30px] 2xl:mt-[80px] xl:mt-[60px] lg:mt-[80px] 2xl:ml-[30px] xl:ml-[30px] md:ml-[20px] sm:ml-[10px] flex">
                                        <button className='h-[40px] w-[49%] text-[11px] 2xl:w-[170px] xl:w-[140px] xl:h-[45px] 2xl:h-[42px] lg:h-[38px] 2xl:text-[16px] lg:text-[12px] md:text-[10px] md:w-[100px] md:h-[30px] lg:w-[120px] sm:w-[100px] sm:text-[10px] sm:h-[30px] border rounded-[20px] text-white font-normal bg-[#088269] mr-2'><Link to='/brendpage'>{item.bg_title}</Link></button>
                                        <button className='h-[40px] w-[49%] text-[11px] 2xl:w-[170px] xl:w-[130px] xl:h-[45px] 2xl:h-[42px] lg:h-[38px] 2xl:text-[16px] lg:text-[12px] md:text-[10px] md:w-[100px] md:h-[30px] lg:w-[100px] sm:w-[100px] sm:text-[10px] sm:h-[30px] border rounded-[20px] text-[#088269] font-medium'><Link to='/catalog'>{item.wh_title}d</Link></button>
                                    </div>
                                </div>
                                <div className=" h-[60%] w-[100%] flex justify-end 2xl:w-[65%] xl:w-[65%] lg:w-[68%] md:w-[65%] sm:w-[100%] sm:h-[268px] xl:h-[100%] 2xl:h-[100%] md:h-[100%] relative">
                                    <img src={item.img} alt="" className="w-[100%] 2xl:w-[100%] xl:w-[100%] lg:w-[100%] md:w-[100%] sm:w-[100%] sm:h-[100%] 2xl:h-[100%] xl:h-[100%] lg:h-[100%] md:h-[100%] h-[260px] object-cover rounded-tr-[20px] rounded-br-[20px] rounded-tl-[20px] rounded-bl-[20px]" />
                                    <div className="flex gap-2 absolute top-[80%] left-[80%]">
                                        <div className="sm:hidden hidden w-[40px] h-[40px] bg-white rounded-[50%] 2xl:flex xl:flex lg:flex md:flex items-center justify-center cursor-pointer"><FaArrowLeft className="" /></div>
                                        <div className="sm:hidden hidden w-[40px] h-[40px] bg-white rounded-[50%] 2xl:flex xl:flex lg:flex md:flex items-center justify-center cursor-pointer"><FaArrowRight className="" /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
                }
            </Slider >
        </div >
    );
}
