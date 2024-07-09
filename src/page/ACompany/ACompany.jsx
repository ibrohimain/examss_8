import React from 'react'
import HomeFact from '../../components/home_icons_fact/HomeFact'
import BrendCarousel from '../../components/carusels/BrendCarousel'
import Map from '../../components/map/Map'
import NashiClient from '../../components/NashiClients/NashiClient'
import GlobalMedicalTreyd from './GlobalMedicalTreyd'
import FiguresAndFact from './FiguresAndFact'
import Ourpartners from './Ourpartners'
import Doctors from './Doctors'
import Certificate from './Certificate'
import { MdChevronRight } from 'react-icons/md'
import { Link } from 'react-router-dom'

const ACompany = () => {
    return (
        <div className='w-[100%] mx-auto'>
            <div className='2xl:w-[1440px] xl:w-[95%] lg:w-[95%] md:w-[95%] sm:w-[95%] w-[95%] h-[40px] mx-auto'>
                <ul className='flex w-[100%] h-[100%] items-center gap-3'>
                    <li className='text-[gray] cursor-pointer'><Link to='/'>Главная</Link></li>
                    <li className='cursor-pointer'><MdChevronRight /></li>
                    <li className='text-[black] cursor-pointer'>О компании</li>
                </ul>
            </div>
            <GlobalMedicalTreyd />
            <FiguresAndFact />
            <Ourpartners />
            <Doctors />
            <NashiClient />
            <HomeFact />
            <BrendCarousel />
            <Certificate />
            <Map />
        </div>
    )
}

export default ACompany
