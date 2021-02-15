import React from 'react'
import {NavLink} from "react-router-dom";
import Prismic from 'prismic-javascript'
import { useEffect, useState } from 'react'

import './style.css';
import { NavItem } from '../navbar/NavItem';

const apiEndpoint = 'https://horizonte2020.cdn.prismic.io/api/v2'

const accessToken = '' // This is where you would add your access token for a Private repository
const Client = Prismic.client(apiEndpoint, { accessToken })
const type='menu'

export const Menu = () => {

    const [doc, setDocData] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            const response = await Client.query(
                Prismic.Predicates.at('document.type', type)
            )
        if (response) {

           setDocData(response.results[0])
    
        }else{
            console.log('Error')
        }
    }
    fetchData()
    }, [doc])



    return (  
        <header className="header">  
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div  className="collapse navbar-collapse" id="navbarTogglerDemo01">
                
                    <ul className="navbar-nav m-auto mt-2 mt-lg-0" >
                        
                        <>     
                        <React.Fragment>{
                                doc ? 
                                (
                                    
                                        doc.data.grupomenu.map((elemens,index)=>(
                                            <>
                                                <NavItem
                                                    url={elemens.url_del_hipervinculo[0].text}
                                                    texto={elemens.texto_del_hipervinculo[0].text}  
                                                />  
                            
                                            </>
                                                
                                            ))
                                    
                                ) 
                                : 
                                
                                <li className="nav-item">                   
                                    <NavLink to="/" className="nav-link m-2">No se pudo cargar la data</NavLink>
                                </li>
                        }
                        </React.Fragment>   
                        </>
                    </ul>
                </div>
            </nav>
        </header>
    )
}
