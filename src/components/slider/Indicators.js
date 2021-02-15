import React from 'react'

export const Indicators = (indicators,activo) => {
    return (
      
        <>
        {

        activo?
            <li  data-target="#carouselExampleIndicators" data-slide-to={indicators} className="active"></li>
            :
            <li  data-target="#carouselExampleIndicators" data-slide-to={indicators}></li>
        
        }
        </> 
    )
}
