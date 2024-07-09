import { Rating } from '@mui/material';
import React from 'react';

const TechnikalXarakter = () => {
    const specs = [
        {
            rating: 4.0,
            speed: '60 или 120 тестов в час',
            wavelength: '557, 620, 656 нм',
            testStrips: 'На 10 или 11 параметров',
            autoCalibration: 'Есть',
            size: '259 x 19',
        },
        {
            rating: 4.0,
            speed: '60 или 120 тестов в час',
            wavelength: '557, 620, 656 нм',
            testStrips: 'На 10 или 11 параметров',
            autoCalibration: 'Есть',
            size: '259 x 19',
        },
        {
            rating: 4.0,
            speed: '60 или 120 тестов в час',
            wavelength: '557, 620, 656 нм',
            testStrips: 'На 10 или 11 параметров',
            autoCalibration: 'Есть',
            size: '259 x 19',
        },
    ];

    return (
        <div className="2xl:w-[95%] lg:w-[95%] xl:w-[95%] md:w-[95%] sm:w-[95%] w-[95%] mx-auto mb-10">
            <table className="w-full table-auto">
                <tbody>
                    <tr className="border-b">
                        <td className="py-2 px-4  2xl:text-[16px] xl:text-[15px] lg:text-[14px] md:text-[13px] sm:text-[12px] text-[12px]">Рейтинг</td>
                        <td className="py-2 px-4"><Rating name="size-large" defaultValue={2} size="large" style={{ fontSize: "16px" }} />{specs[0].rating}</td>
                        <td className="py-2 px-4"><Rating name="size-large" defaultValue={2} size="large" style={{ fontSize: "16px" }} /> {specs[1].rating}</td>
                        <td className="py-2 px-4 hidden 2xl:block xl:block lg:block md:block sm:block "><Rating name="size-large" defaultValue={2} size="large" style={{ fontSize: "16px" }} /> {specs[2].rating}</td>
                    </tr>
                    <tr className="border-b">
                        <td className="py-2 px-4 2xl:text-[16px] xl:text-[15px] lg:text-[14px] md:text-[13px] sm:text-[12px] text-[12px]">Скорость работы</td>
                        <td className="py-2 px-4 text-[12px] font-medium">{specs[0].speed}</td>
                        <td className="py-2 px-4 text-[12px] font-medium">{specs[1].speed}</td>
                        <td className="py-2 px-4 text-[12px] font-medium hidden 2xl:block xl:block lg:block md:block sm:block ">{specs[2].speed}</td>
                    </tr>
                    <tr className="border-b">
                        <td className="py-2 px-4 2xl:text-[16px] xl:text-[15px] lg:text-[14px] md:text-[13px] sm:text-[12px] text-[12px]">Возможный диапазон длины волны</td>
                        <td className="py-2 px-4 text-[12px] font-medium">{specs[0].wavelength}</td>
                        <td className="py-2 px-4 text-[12px] font-medium">{specs[1].wavelength}</td>
                        <td className="py-2 px-4 text-[12px] font-medium hidden 2xl:block xl:block lg:block md:block sm:block ">{specs[2].wavelength}</td>
                    </tr>
                    <tr className="border-b">
                        <td className="py-2 px-4 2xl:text-[16px] xl:text-[15px] lg:text-[14px] md:text-[13px] sm:text-[12px] text-[12px]">Тест-полоски</td>
                        <td className="py-2 px-4 text-[12px] font-medium">{specs[0].testStrips}</td>
                        <td className="py-2 px-4 text-[12px] font-medium">{specs[1].testStrips}</td>
                        <td className="py-2 px-4 text-[12px] font-medium hidden 2xl:block xl:block lg:block md:block sm:block ">{specs[2].testStrips}</td>
                    </tr>
                    <tr className="border-b">
                        <td className="py-2 px-4  2xl:text-[16px] xl:text-[15px] lg:text-[14px] md:text-[13px] sm:text-[12px] text-[12px]">Функция автоматической калибровки</td>
                        <td className="py-2 px-4 text-[12px] font-medium">{specs[0].autoCalibration}</td>
                        <td className="py-2 px-4 text-[12px] font-medium">{specs[1].autoCalibration}</td>
                        <td className="py-2 px-4 text-[12px] font-medium hidden 2xl:block xl:block lg:block md:block sm:block ">{specs[2].autoCalibration}</td>
                    </tr>
                    <tr>
                        <td className="py-2 px-4 2xl:text-[16px] xl:text-[15px] lg:text-[14px] md:text-[13px] sm:text-[12px] text-[12px]">Размер</td>
                        <td className="py-2 px-4 text-[12px] font-medium">{specs[0].size}</td>
                        <td className="py-2 px-4 text-[12px] font-medium">{specs[1].size}</td>
                        <td className="py-2 px-4 text-[12px] font-medium hidden 2xl:block xl:block lg:block md:block sm:block ">{specs[2].size}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default TechnikalXarakter;