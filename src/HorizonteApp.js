import React, { useEffect, useState } from 'react'
import Prismic from 'prismic-javascript'
import { AppRouter } from './Routers/AppRouter'
import { PageContex } from './contex/PageContext'
import { client } from './helpers/getConnection'
import { GetPropertys } from './components/property/data/GetPropertys'
import { PropertyContex } from './contex/PropertyContext'

export const HorizonteApp = () => {
    
const [doc, setDocData] = useState(null)
const [page, setPage] = useState(null)
const [proyect, setProyect] = useState(null)
const [contact, setContact] = useState(null)
const [slider, setSlider] = useState(null)

const [state, setstate] = useState({
    data:[],
    loading:true
})



useEffect(() => {
    const fetchData = async () => {
        // We are using the function to get a document by its UID
        const {results} = await client.query(
            Prismic.Predicates.at('document.type', 'pages')
        )
        const dataImg = await client.query(
            Prismic.Predicates.at('document.type', 'imagefondo')
        )
        const resultProyects = await client.getByUID('proyectoso', 'uidproyectos')
        const resultContact = await client.getByUID('contacto', 'uidcontacto')
        const resultSlider = await client.getByUID('seccion_carrusel', 'banner-principal')


        if (results) {
        // We use the State hook to save the document
          
        const data=results.map(elements=>{
            return{
                uid:elements.uid,
                secciones:elements.data.secciones
            }
        })

        const dataPage=dataImg.results.map(elements=>{
            return{
                uid:elements.uid,
                url:elements.data.imagenfondo.url,
                texto:elements.data.texto[0].text
            }
        })
       
        return(
            setDocData(data),
            setPage(dataPage),
            setProyect(resultProyects),
            setContact(resultContact),
            setSlider(resultSlider)
        )
        
        
        
        } else {
        // Otherwise show an error message
        console.warn('Page document not found. Make sure it exists in your Prismic repository')
        //toggleNotFound(true)
        }
    }
    fetchData()
    }, [])

    useEffect(() => {
        GetPropertys()
            .then(element=>{
                setstate({
                    data:element,
                    loading:false
                })
            })
    }, [])

    return (
        <>
        <PageContex.Provider value={{
            doc,
            page,
            proyect,
            contact,
            slider,
            setSlider,
            setContact,
            setProyect,
            setPage,
            setDocData
        }}>
            <PropertyContex.Provider value={{
                    state,
                    setstate
            }}>
            

                <AppRouter/>  

          

            
            </PropertyContex.Provider>
            
        </PageContex.Provider>
     </>
    )
}
