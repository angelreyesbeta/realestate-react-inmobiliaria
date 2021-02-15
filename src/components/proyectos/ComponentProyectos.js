import React, { useContext } from 'react'
import { PageContex } from '../../contex/PageContext'
import { ImagenFondo } from '../ImagenFondo/ImagenFondo'
import { Loading } from '../loading/Loading'
//import { ListaProyect } from './ListaProyect'
import { ListProyectos } from './ListProyectos'

export const ComponentProyectos = () => {

    const {page,proyect} = useContext(PageContex)
    
    if (proyect && page) {
       

        
        const data=page.filter(page=>page.uid.toLocaleLowerCase().includes('uidproyecto'))   
      
      
         return(
             
             <>
             
             <ImagenFondo
                url={data[0].url}
                text={data[0].texto}
            />
             
             {
                proyect.data.progru.map(elemento=>(
                    <>
                        
                        <ListProyectos
                            titulo={elemento.titulo[0].text}
                            image={elemento.image.url}
                            texto={elemento.texto[0].text}
                        />
                        
                    </>
                ))
            }
                
             </>
     
         )
 
         
       } 
       else {
         return(
             <>
             <Loading/>
             </>
         )
       }
 
 
     
}
