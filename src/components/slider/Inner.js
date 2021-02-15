import React from 'react'

export const Inner = ({url,activo,titulo_servicio}) => {
    return (
        <> {

       
            activo?
                <div className="carousel-item active">
                    <section class="banner">
                        <img src={url} alt="fondo" class="banner__img"></img>
                        <div class="banner_content">{titulo_servicio}</div>
                    </section>
                </div> 
                :
                <div className="carousel-item">
                    {/* <img className="d-block img-fluid" src={url} alt="First slide"></img>
                    <div className="card-img-overlay" align="center">
                            <h1 className="__base_card-title-2">{titulo_servicio}</h1>
                    </div> */}
                    <section class="banner">
                        <img src={url} alt="fondo" class="banner__img"></img>
                        <div class="banner_content">{titulo_servicio}</div>
                    </section>
                 </div>
                
        }
            


            
        </>
    )
}
