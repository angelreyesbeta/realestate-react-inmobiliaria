import React, { useContext } from 'react'
import { PageContex } from '../../contex/PageContext'
import { ImagenFondo } from '../ImagenFondo/ImagenFondo'
import { ImagenFondoPrueba } from '../ImagenFondo/ImagenFondoPrueba'
import { Loading } from '../loading/Loading'
import { Mensaje } from '../mensaje/Mensaje'
import { ListProperty } from './ListProperty'


export const PropertyComponent = () => {
   
    
    const {page} = useContext(PageContex)
 
    if (page) {


        const data=page.filter(page=>page.uid.toLocaleLowerCase().includes('uidinmuebles')) 
         
      
         return(
             <>

            {/* <ImagenFondo
                url={data[0].url}
                text={data[0].texto}
            /> */}
            <ImagenFondoPrueba/>
            <Mensaje/>
             <ListProperty/>
             
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
