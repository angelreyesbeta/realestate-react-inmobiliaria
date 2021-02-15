import React, { useContext } from 'react'
import { PageContex } from '../../contex/PageContext';
import { Loading } from '../loading/Loading';
import { Indicators } from './Indicators';
import { Inner } from './Inner';

export const CargaSlider = () => {



    const {slider} = useContext(PageContex)

    return (
        <>            
    <React.Fragment>
        {
            slider ? (
            <>
                <ol className="carousel-indicators">
                    {

                        slider.data.grupo_carousel.map(elemento=>(
                            
                        <Indicators
                            indicators={elemento.indicators_id}
                            activo={elemento.activo}  
                        />
                        ))   
                    }
                </ol>
                <div className="carousel-inner">
                    {
                        slider.data.grupo_carousel.map(elemento=>(
                        
                            <Inner
                                url={elemento.imagen_de_fondo.url}
                                activo={elemento.activo}
                                titulo_servicio={elemento.titulo_servicio[0].text} 
                            />
                        ))
                    }           
                </div>
                    
        </>
        ) : <Loading/>
        }
    </React.Fragment>
        
        </>

        
    )
}
