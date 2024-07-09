import React from 'react'
import CatalogCarouselData from '../../components/carusels/CatalogCarouselData.jsx'
import HomeFact from '../../components/home_icons_fact/HomeFact'
import NavostiyCompany from '../../components/carusels/NavostiyCompany'
import Upravlenie from '../../components/proizvoditel/Upravlenie.jsx'
import InformationArticles from '../../components/Articless/InformationArticles'

const Proizvoditel = () => {
    return (
        <div>
            <Upravlenie />
            <CatalogCarouselData />
            <HomeFact />
            <NavostiyCompany />
            <InformationArticles />
        </div>
    )
}

export default Proizvoditel
