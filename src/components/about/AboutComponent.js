import React, { useContext } from 'react'
import { PageContex } from '../../contex/PageContext'
import { ImagenFondo } from '../ImagenFondo/ImagenFondo'
import { Loading } from '../loading/Loading'
import { Nosotros } from './Nosotros'

export const AboutComponent = () => {
    
    const {page} = useContext(PageContex)
    
    if (page) {

        
        const data=page.filter(page=>page.uid.toLocaleLowerCase().includes('uidnosotros'))
            
         return(
             
             <>
             
             <ImagenFondo
                url={data[0].url}
                text={data[0].texto}
             />
            <Nosotros/>
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
