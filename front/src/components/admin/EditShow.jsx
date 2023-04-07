import {useParams} from "react-router-dom"
import axios from "axios"
import {BASE_URL, BASE_IMG} from "../../tools/constante.js"
import {useState, useEffect, Fragment} from "react"
import {NavLink} from 'react-router-dom'

const EditShow = () => {
    const {id} = useParams()
    const initialState = {
        title:'',
        categorie:'',
        year_creation:'',
        content:'',
        url_video:'',
    }
    const [show, setShow] = useState(initialState)
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
        axios.post(`${BASE_URL}/editShowById`, show)
            .then((res) => {
            setShow(res.data.result[0]);
            })
            .catch((err) => console.log(err));
    }
    
    return (
        <div className=" container admin-margin-top">
                <Fragment>
                <h2>Modifier les informations du spectacle</h2>
                <form onSubmit={submit}>
                <label>Nom du spectacle</label>
                    <input type='text' name='title' onChange={handleChange} value={show.title} />
                <div>
                    <label>Catégorie</label>
                    <select name="categorie" onChange={handleChange} value={show.category_id}>
                        <option value={undefined}>Choix d'option</option>
                        {categories.map((categorie, i) => {
                        return(
                            <option key={i} value={categorie.id}>{categorie.categorie}</option>
                    )})}
                    </select>
                </div>
                <div>
                <label>Année de création</label>
                    <input type='text' name='year_creation' onChange={handleChange} value={show.year_creation} />
                </div>
                <div>
                <label>Description</label>
                    <textarea rows='4' cols='50' type='text' name='content' onChange={handleChange} value={show.content} />
                </div>
                <div>
                <label>Vidéo (URL YouTube embed)</label>
                    <input type='text' name='url_video' placeholder='url YouTube embed' onChange={handleChange} value={show.url_video} />
                </div>
                
                <div>
                    <input className="button" type='submit' value='Valider les modifications' />
                </div>
                
                </form>
                <h2>Modifier les photos du spectacle</h2>
                <p><NavLink to={`/editshowpictures/${show.id}`}>c'est par ici !</NavLink></p>
                
                </Fragment>
        </div>
    )
}

export default EditShow
