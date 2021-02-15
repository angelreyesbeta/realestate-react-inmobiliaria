import React  from 'react'

export const ImagenFondoPrueba = ({url,text}) => {


    return (
        <> 
          {/* <div className="carousel active">

              <img id="imgF"  className="d-block img-fluid" src={url} alt="img"></img>
              <div  className="card-img-overlay" align="center">
                  <h1 className="card-titles display-1">{text}<br/>
                  </h1>
              </div>
          </div> */}
          <section class="banner">
            <img src='./assets/images/img1.jpg' alt="fondo" class="banner__img"></img>
            <div class="banner_content">Tu mejor eleccion esta aqui. Ven y pide</div>
          </section>
           
        </>
          )
}
