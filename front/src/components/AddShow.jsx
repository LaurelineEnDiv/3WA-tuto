import axios from "axios"
import {Fragment} from 'react'
import {BASE_URL} from '../tools/constante.js'
import {useState, useEffect} from "react"

const AddShow = () => {
    const [showData, setShowData] = useState({
        title:'',
        // name:'',
        content:'',
        year_creation:'',
        image:'',
        
    })
    
    const [categories, setCategories] = useState([])
    
    useEffect(() => {
        axios.get(`${BASE_URL}/getCategories`)
        .then(res => setCategories(res.data.result))
    },[])
    
    
    const handleChange = (e) => {
        const {name, value} = e.target
        setShowData({...showData,[name]:value})
    }
    
    const submit = (e) => {
        e.preventDefault()
        const formData = new FormData()
        const files = {...e.target.image.files};
        formData.append('files', files[0], files[0].name)
        formData.append('title', showData.title)
        // formData.append('name', showData.name)
        formData.append('content', showData.content)
        formData.append('year_creation', showData.year_creation)
        
        axios.post(`${BASE_URL}/addshow`, formData)
        .then((res)=> {
            console.log(res)
            res.data.response && console.log('succesfully upload');
        })
        .catch((err) => {
            console.log(err)
        })
       
    }
    
    return(
        <Fragment>
        <form onSubmit={submit} encType="multipart/form-data">
            <input type='text' placeholder='title' name='title' onChange={handleChange} value={showData.title} />
            <label>Catégorie</label>
                <select name="name">
                {categories.map((categorie, i) => {
                return(
                  <option key={i} value={categorie.id}>{categorie.name}</option>
                )})}
                </select>
            <input type='text' placeholder='année de création' name='year_creation' onChange={handleChange} value={showData.year_creation} />
            <input type='text' placeholder='content' name='content' onChange={handleChange} value={showData.content} />
            <p>Télécharger l'image de présentation du spectacle</p>
            <input type='file' name='image' />
            <input type='submit' />
        </form>
        </Fragment>
    )
}

export default AddShow