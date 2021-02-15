import React from 'react'
//https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png
export const ListContact = ({image,title,mail,celular,numero}) => {
    return (
        <>
        <div className="col-5">
            <div className="row">
                <div className="col-lg-4 col-sm-12" align="center">
                    <img className="img-fluid rounded mx-auto d-block rounded-circle" src={image}  alt="user"></img>
                </div>
                <div className="col-lg-8 col-sm-12">
                    <h4 className="_title">{title}</h4>
                <p><span class="icon-mail"> {mail}</span></p>
                <p><span class="icon-phone">{celular}</span></p>
                </div>
            </div>
            {/* <div className="row">
                <div className="col-12" align="right">
                    <button  className="boton">ENVIAR</button>
                </div>
            </div> */}

        </div>


        {
             
            numero%2===0?
                <hr className="h"/>
            :
                <div className="col-2" align="center">
                    <div className="vl" align="center"></div>
                </div>

        }
        
        

        
        
        
        </>
    )
}
