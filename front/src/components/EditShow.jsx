import {useParams} from "react-router-dom"
import axios from "axios"
import {BASE_URL} from "../tools/constante.js"
import {useState, useEffect, Fragment} from "react"

const EditShow = () => {
    const {id} = useParams()
    
    const [show, setShow] = useState(null)
    const [categories, setCategories] = useState([])
    
    useEffect(() => {
        axios.post(`${BASE_URL}/getShowById`,{id})
            .then(res => setShow(res.data.result[0]))
            .catch(err => console.log(err))
    },[id])
    
    useEffect(() => {
        axios.get(`${BASE_URL}/getCategories`)
        .then(res => setCategories(res.data.result))
    },[])
    
    
    const handleChange = (e) => {
        const {name, value} = e.target
        setShow({...show, [name]:value})
    } 
    
    const submit = (e) => {
        e.preventDefault()
        axios.post(`${BASE_URL}/editShowById`,{...show})
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }
    
    return (
        <Fragment>
            { show && (
                <Fragment>
                <p>Modifier les données du spectacle</p>
                <form onSubmit={submit}>
                <label>Nom du spectacle</label>
                    <input type='text' name='title' onChange={handleChange} value={show.title} />
                <div>
                    <label>Catégorie</label>
                    <select name="categorie" onChange={handleChange} value={show.name}>
                        {categories.map((categorie, i) => {
                        return(
                            <option key={i} value={categorie.id}>{categorie.name}</option>
                    )})}
                    </select>
                </div>
                <div>
                <label>Année de création</label>
                    <input type='text' name='year_creation' onChange={handleChange} value={show.year_creation} />
                </div>
                <div>
                <label>Description</label>
                    <input type='text' name='content' onChange={handleChange} value={show.content} />
                </div>
                <div>
                <label>Vidéo (URL YouTube embed)</label>
                    <input type='text' name='url_video' placeholder='url YouTube embed' onChange={handleChange} value={show.url_video} />
                </div>
                    {/* <select onChange={null} value={null}>
                        <option value='6'>Admin</option>
                        <option value='5'>user</option>
                    </select>*/}
                <div>
                    <input type='submit' value='Valider les modifications' />
                </div>
                </form>
                </Fragment>
            )}
        </Fragment>
    )
}

export default EditShow