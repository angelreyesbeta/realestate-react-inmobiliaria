import React from 'react'
import { CargaSlider } from './CargaSlider';
export const Slider = () => {
return (
        <>
        
        <div id="carouselExampleIndicators" className="carousel slide carousel-fade" data-ride="carousel">
            <CargaSlider/>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>

        </>
    )
}



                
               