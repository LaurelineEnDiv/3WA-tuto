import {useParams} from "react-router-dom"
import axios from "axios"
import {BASE_URL, BASE_IMG} from "../../tools/constante.js"
import {useState, useEffect, Fragment} from "react"

const EditShow = () => {
    const {id} = useParams()
    const initialState = {
        title:'',
        categorie:'',
        year_creation:'',
        content:'',
        url_video:'',
        url_pictures:'',
    }
    const [show, setShow] = useState(initialState)
    const [categories, setCategories] = useState([])
    const [pictures, setPictures] = useState(null) 
    const [pictureSelected, setPictureSelected] = useState(null) 
    
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
        const dataFile = new FormData();
        const files = [...e.target.url_pictures.files];
        
    
        // ajouter d'autre inputs au formulaire
        dataFile.append('title', show.title)
        dataFile.append('content', show.content)
        dataFile.append('year_creation', show.year_creation)
        dataFile.append('url_video', show.url_video)
        dataFile.append('id', id)
        dataFile.append('category_id', show.categorie)
        
        // ajouter tous les fichiers à FormData
        for (let i = 0; i < files.length; i++) {
            dataFile.append('files', files[i], files[i].name)
        }
        
        axios.post(`${BASE_URL}/editShowById`, dataFile)
        .then((res)=> {
            setPictures(res.data.files)
            setShow(initialState)
        })
        .catch((err) => {
            console.log(err)
        })
    }  
    
    // ////SELECTION DE L'IMAGE DE MISE EN AVANT///////////
    
    const submitMainPicture = () => {
        const urlPicture = pictures[pictureSelected]
        
        axios.post(`${BASE_URL}/selectedImage`, {url_pictures:urlPicture})
        .then((res)=> {
            res.data.response && console.log('succesfully selected');
            setPictures(null)
            setPictureSelected(null)
        })
        .catch((err) => {
            console.log(err)
        })
    }
    
    return (
        
        <Fragment>
        <div className=" container admin-margin-top">
            { !pictures &&(
                <Fragment>
                <p>Modifier les données du spectacle</p>
                <form onSubmit={submit} encType="multipart/form-data">
                <label>Nom du spectacle</label>
                    <input type='text' name='title' onChange={handleChange} value={show.title} />
                <div>
                    <label>Catégorie</label>
                    <select name="categorie" onChange={handleChange} value={show.name}>
                        <option value={undefined}>Choix d'option</option>
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
                    <label>Ajouter de nouvelles photos</label>
                    <input type='file' name='url_pictures' multiple />
                <div>
                    <input type='submit' disabled={!show.categorie} value='Valider les modifications' />
                </div>
                </form>
                </Fragment>
            )}
        
        {pictures &&
                <Fragment>
                    <p>Modifie la photo d'illustration</p>
                    {pictures.map((e,i) => {
                        return (<img key={i} alt= {`${show.title}`} style={i === pictureSelected ? {border:"1px solid red"} : {}} onClick={() => setPictureSelected(i)} src={`${BASE_IMG}/${e}`}/>)
                    })}
                    <button onClick={submitMainPicture}>Valider</button>
                </Fragment>
        }    
        </div>
        </Fragment>
    )
}

export default EditShow