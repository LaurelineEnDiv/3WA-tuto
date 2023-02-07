import axios from "axios"
import {BASE_URL} from '../tools/constante.js'
import {useState} from "react"

const AddShow = () => {
    const [showData, setShowData] = useState({
        title:'',
        content:'',
        year_creation:'',
        
    })
    
    const handleChange = (e) => {
        const {name, value} = e.target
        setShowData({...showData,[name]:value})
    }
    
    const submit = (e) => {
        e.preventDefault()
        axios.post(`${BASE_URL}/addshow`,{
           title : showData.title,
           content: showData.content,
           year_creation: showData.year_creation,
       })
    }
    
    
    return(
        <form onSubmit={submit}>
            <input type='text' placeholder='title' name='title' onChange={handleChange} value={showData.title} />
            <input type='text' placeholder='année de création' name='year_creation' onChange={handleChange} value={showData.year_creation} />
            <input type='text' placeholder='content' name='content' onChange={handleChange} value={showData.content} />
            <input type='submit' />
        </form>    
    )
}

export default AddShow