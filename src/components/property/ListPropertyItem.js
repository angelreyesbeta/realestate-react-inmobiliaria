import React from 'react'
import { Link } from 'react-router-dom'

export const ListPropertyItem = ({index,
    alcobas,
    barrio,
    canon,
    ciudad,
    codigoInmueble,
    departamento,
    gestion,
    tipoInmueble,
    banio,
    descripcion,
    image
}) => {
    let cont=0;
    return (
        <>

        
        
            
                <div className="card ms-3" style={{maxWidth:540}}>
                <div className="card-header header">
                    <h5 className="card-h5-codigo">{codigoInmueble}</h5>       
                </div>
                    <div className="row no-gutters">
                        <div className="col-md-12">
                            <img src={`./assets/property/img${index}.jpg`} className="card-img" alt={codigoInmueble}></img>
                        </div>
                        

                    </div>
                    <div className="card-body">
                        <div className="row no-gutters">
                            <div className="col-md-12">
                                <h5 className="card-title card-title-mayuscula">{tipoInmueble} en {gestion}</h5>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6 col-sm-6 card-canon">
                                <p>${canon}</p>
                            </div>
                            <div className="col-6 col-sm-6 card-barrio">
                                <p><span className="span-bold">Bo.</span> {barrio}</p>
                            </div>
                        </div>
                        <div className="row ">
                            <div className="col-6 col-sm-6" align="center">
                                <p><span className="span-bold">{alcobas}</span> Habitaciones</p>
                            </div>
                            <div className="col-6 col-sm-6" align="center">
                                <p><span className="span-bold">{banio}</span> Baños</p>
                            </div>
                        </div>
                        <div className="row ">
                            <div className="col-8 col-sm-12" align="left">
                                <p><span className="span-bold">Contact</span> +57 310 461 9003</p>
                            </div>
                            <div className="col-4 col-sm-12" align="right">
                                
                                <Link className="card-link" to={`./inmueble/${codigoInmueble}`}>
                                    Más...
                                </Link>
                            </div>
                            
                        </div>
                                          
                        

                    </div>
                                          
                </div>
                
           
       
             
        </>
 
    )


   /*  return (
        <>
        <div className="card m-auto mb-3"> 
            <img className="card-img-top img-fluid" src={image} alt={image}></img>
            <div className="card-body">
                <h5 className="card-titless">Codigo {codigoInmueble}</h5>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">
                    <div className="row">
                        <div className="col-12" a>
                            {ciudad}/
                            {gestion}/
                            {tipoInmueble}/
                            {barrio}
                        </div>
                        
                        
                    </div>

                </li>
                <li className="list-group-item" align="center">
                    <div className="row">
                        <div className="col-12" a>
                            Canon mensual
                            <div>

                            <h4>${canon}</h4>
                            </div>
                        </div>
                        
                        
                    </div>

                </li>
                <li className="list-group-item">
                    <div className="row">
                        <div className="col-6" align="center">
                            Hab.
                            <div>

                            <h4>{alcobas}</h4>
                            </div>
                        </div>
                        <div className="col-6" align="center">
                            Baños
                            <div>

                            <h4>{banio}</h4>
                            </div>
                        </div>
                        
                    </div>

                </li>
            </ul>
            <div className="card-body" align="center"> 
                <button className="btn btn-outline-success">Contactar</button>
                <Link to={`./inmueble/${codigoInmueble}`}>
                    Más...
                </Link>
            
            </div>
        </div>
        </>
    ) */
}
