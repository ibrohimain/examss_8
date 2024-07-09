import React from 'react'
import Palata from '../../components/OfficePages/Palata'
import Zakaz from '../../components/OfficePages/Zakaz'
import Infarmation from '../../components/information/Infarmation'
import Map from '../../components/map/Map'

const OfficePage = () => {
    return (
        <div className='w-[100%] mx-auto'>
            <Palata />
            <Zakaz />
            {/* <Infarmation />
            <Map/> */}
        </div>
    )
}

export default OfficePage
