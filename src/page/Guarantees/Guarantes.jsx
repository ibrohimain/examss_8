import React from 'react'
import Guarante from '../../components/Guarante/Guarante'
import Map from '../../components/map/Map'
import IconsBar from '../../components/deliverys/IconsBar'
import Attention from '../../components/Guarante/Attention'

const Guarantes = () => {
    return (
        <div className='w-[100%] mx-auto '>
            <Guarante />
            <IconsBar />
            <Attention />
            <Map />
        </div>
    )
}

export default Guarantes
