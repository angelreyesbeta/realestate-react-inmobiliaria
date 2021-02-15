import React, { useContext } from 'react'
import { PageContex } from '../../contex/PageContext'
import { ImagenFondo } from '../ImagenFondo/ImagenFondo'
import { Loading } from '../loading/Loading'
import { ListSeguros } from './ListSeguros'

export const SegurosComponent = () => {
    const {page} = useContext(PageContex)

    
     if (page) {

       //const data=doc.filter(doc=>doc.uid.toLocaleLowerCase().includes('uidseguros'))
     const data=page.filter(page=>page.uid.toLocaleLowerCase().includes('uidseguros')) 
         

         return(
             
             <>
             
             <ImagenFondo
                url={data[0].url}
                text={data[0].texto}
            />
             <ListSeguros/>
             
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
