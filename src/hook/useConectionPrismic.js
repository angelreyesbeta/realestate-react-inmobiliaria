import Prismic from 'prismic-javascript'
import { useEffect, useState } from 'react'


const apiEndpoint = 'https://horizonte2020.cdn.prismic.io/api/v2'

const accessToken = '' // This is where you would add your access token for a Private repository

const Client = Prismic.client(apiEndpoint, { accessToken })

export const useConectionPrismic = (type) => {

    const [docu, setDocData] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            const response = await Client.query(
                Prismic.Predicates.at('document.type', type)
            )
        if (response) {
            
            setDocData(response.results)

        }else{
            console.log('Error')
        }
    }
    fetchData()
    }, [type])

    return {docu};
        
}
