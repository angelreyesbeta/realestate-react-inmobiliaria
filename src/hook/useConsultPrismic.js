import { useEffect, useState } from 'react'
import { client } from '../helpers/getConnection'

export const useConsultPrismic = (type,uid) => {
    const [doc, setDocData] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
        const result = await client.getByUID(type, uid)
        if (result) {
            
            setDocData(result)

        }else{
            console.log('Error')
        }
    }
    fetchData()
    }, [type,uid])

    return {doc};
}
