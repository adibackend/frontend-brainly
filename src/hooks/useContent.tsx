import { BACKEND_URL } from "@/config"
import { useState, useEffect } from "react"
import axios from "axios"

export const useContent = () => {
    const [content, setContent] = useState([])
    const refresh = () => {
        axios.get(`${BACKEND_URL}api/v1/content`, {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            }
        }).then((r) => {
            setContent(r.data.content)
           
        }).then(() => console.log()).catch((e) => console.log('use content eroor' + e))
    }
    useEffect(() => {
        refresh()
       let interval= setInterval(() => {
            refresh()

        }, 1 * 1000)
        return ()=>{clearInterval(interval)}
    }, [])
    return content

}