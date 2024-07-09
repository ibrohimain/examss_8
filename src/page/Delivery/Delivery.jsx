import React from 'react'
import InformationMap from '../../components/deliverys/InformationMap'
import IconsBar from '../../components/deliverys/IconsBar'
import Rules from '../../components/deliverys/Rules'
import Infarmation from '../../components/information/Infarmation'
import Document from '../../components/deliverys/Document'
import Question from '../../components/deliverys/Question'
import { MdChevronRight } from 'react-icons/md'
import { Link } from 'react-router-dom'

const Delivery = () => {
    return (
        <div className=''>
            <div className='2xl:w-[1440px] xl:w-[95%] lg:w-[95%] md:w-[95%] sm:w-[95%] w-[95%] h-[40px] mx-auto'>
                <ul className='w-[100%] h-[100%] flex items-center gap-3'>
                    <li className='text-[gray] cursor-pointer'><Link to='/'>Главная</Link></li>
                    <li className='text-[gray] cursor-pointer'><MdChevronRight /></li>
                    <li className='text-[black] cursor-pointer'>Доставка</li>
                </ul>
            </div>
            <InformationMap />
            <IconsBar />
            <Rules />
            <Infarmation />
            <InformationMap />
            <Document />
            <Question />
        </div>
    )
}

export default Delivery
