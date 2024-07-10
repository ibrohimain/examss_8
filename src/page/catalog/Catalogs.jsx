import React from 'react'
import Directions from '../../components/CatalogsComponents/Directions/Directions'
import CompanyCarousel from '../../components/carusels/CompanyCarousel'
import HomeFact from '../../components/home_icons_fact/HomeFact'
import CatalogCarouselData from '../../components/carusels/CatalogCarouselData.jsx'
import BrendCarousel from '../../components/carusels/BrendCarousel'
import NavostiyCompany from '../../components/carusels/NavostiyCompany'
import Infarmation from '../../components/information/Infarmation'
import Map from '../../components/map/Map'
import CatalogLink from '../../components/CatalogsComponents/CatalogLink.jsx'

const Catalogs = () => {
    return (
        <div className=''>
            <CatalogLink />
            <Directions />
            <CompanyCarousel />
            <HomeFact />
            <CatalogCarouselData />
            <BrendCarousel />
            <NavostiyCompany />
            <Infarmation />
            <Map />
        </div>
    )
}

export default Catalogs
