import React from 'react'
export const ListProyectos = ({image,titulo,texto}) => {
    return (
        <>

        <div className="container-fluid">

            <div className="row mt-3" >
                <div className="col-lg-6 col-md-6 col-sm-12">
                                
                        {/* <div className="card bg-dark text-white">
                            <img src={image} className="card-img __seguro_img" alt="..."></img>
                            <div  className="card-img-overlay">
                                <h1 className="card-titless display-6">{titulo}<br/>
                                </h1>
                            </div>
                        </div> */}
                    <img src={image} className="img-fluid rounded __proyecto_img mb-3"></img>
                    

                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 ">
                    <h4 className="__base_title">{titulo}</h4>
                    <p>{texto}</p>

                </div>


            </div>
            <div className="row">
                <div className="col-6 ">

                 

                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12" align="">

                    <hr className="__proyecto_hr"/> 

                </div>
            </div>
          
            

               
           

        </div>
        
        
        </>
    )
}
