import React from 'react'


export const ImagenFondo = ({url,text}) => {
 
    return (
      <>

        {/* <div className="carousel mb-5">

            <img className="img-fluid" src={url} alt={url}></img>
            <div  className="card-img-overlay" align="center">
                <h1 className="__base_card-title-2">{text}<br/>
                </h1>
            </div>
            
        </div> */}
        <section class="banner">
            <img src={url} alt="fondo" class="banner__img"></img>
            <div class="banner_content">{text}</div>
          </section>
          
    
        
       
      </>
        
    )
  

 


}
