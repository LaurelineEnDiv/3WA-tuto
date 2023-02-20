import axios from "axios"
import {Fragment} from 'react'
import {BASE_URL, BASE_IMG} from '../tools/constante.js'
import {useState, useEffect, useRef} from "react"
import inputCheck from '../tools/inputLength.js'

const AddShow = () => {
    const initialState = {
        title:'',
        categorie:'',
        year_creation:'',
        content:'',
        url_video:'',
        url_pictures:'',
    }
    const [showData, setShowData] = useState(initialState)
    
    const [categories, setCategories] = useState([])
    const [pictures, setPictures] = useState(null) 
    const [pictureSelected, setPictureSelected] = useState(null) 
    
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
        
        if(!inputCheck(showData.title, 255, 1) || /*!inputCheck(showData.content, 255, 1) 
            ||*/ !inputCheck(showData.year_creation, 4, 4) /*|| !inputCheck(showData.url_video, 255, 1)*/) {
            console.log("Les données saisies ne sont pas valides.")
            return
        }
        
        const dataFile = new FormData();
        const files = [...e.target.url_pictures.files];
        
        console.log(files)

        // ajouter d'autre inputs au formulaire
        dataFile.append('title', showData.title)
        dataFile.append('content', showData.content)
        dataFile.append('year_creation', showData.year_creation)
        dataFile.append('url_video', showData.url_video)
        
        // ajouter tous les fichiers à FormData
        for (let i = 0; i < files.length; i++) {
            dataFile.append('files', files[i], files[i].name)
        }
        
        //met à jour l'état de l'application à l'aide de la méthode setPictures 
        //avec les nouveaux noms de fichiers renvoyés par le serveur (stockés dans res.data.newFilenames):
        
        axios.post(`${BASE_URL}/addshow`, dataFile)
        .then((res)=> {
            setPictures(res.data.newFilenames)
            setShowData(initialState)
        })
        .catch((err) => {
            console.log(err)
        })
       
    }
    
    // récupère l'image sélectionnée (urlPicture) à partir de l'état pictures 
    // en utilisant la variable d'état pictureSelected 
    
    const submitMainPicture = () => {
        const urlPicture = pictures[pictureSelected]
        console.log(urlPicture)
        
        axios.post(`${BASE_URL}/selectedImage`, {url_pictures:urlPicture})
        .then((res)=> {
            console.log(res)
            res.data.response && console.log('succesfully selected');
            setPictures(null)
            setPictureSelected(null)
        })
        .catch((err) => {
            console.log(err)
        })
    }
    
    return(
        <Fragment>
            {!pictures &&(
                <Fragment>
                    <h1>Ajouter un spectacle</h1>
                    <form onSubmit={submit} encType="multipart/form-data">
                        <label>Nom du spectacle</label>
                            <input type='text' placeholder='Titre' name='title' onChange={handleChange} value={showData.title} />
                        <div>
                            <label>Catégorie</label>
                            <select name="categorie" onChange={handleChange} value={showData.name}>
                            {categories.map((categorie, i) => {
                            return(
                            <option key={i} value={categorie.id}>{categorie.name}</option>
                            )})}
                            </select>
                        </div>
                        <div>
                            <label>Année de création</label>
                            <input type='text' placeholder='Année de création' name='year_creation' onChange={handleChange} value={showData.year_creation} />
                         </div> 
                         <div>
                            <label>Description</label>
                            <input type='text' placeholder='Description' name='content' onChange={handleChange} value={showData.content} />
                        </div> 
                        <div>
                            <label>URL de la vidéo de présentation du spectacle (embed sur YouTube, ex : https://www.youtube.com/embed/JZlo) </label>
                            <input type='url' name='url_video' onChange={handleChange} value={showData.url_video} />
                        </div> 
                        <div>
                            <label>Télécharger les photos du spectacle</label>
                            <input type='file' name='url_pictures' multiple />
                        </div>
                        <div>
                        <input type='submit' value='Valider'/>
                        </div>
                    </form>
                </Fragment>
            )}
            
            {/* si la variable pictures est définie et n'est pas null :
            - Map pour afficher la liste des images à partir de la variable pictures.
            - L'indice de l'image dans la liste est stocké dans la variable i.
            - Style sur l'image sélectionnée si l'indice i correspond à la valeur de l'état pictureSelected.
            - Quand on clique sur une image, la fonction setPictureSelected est appelée 
            pour mettre à jour la valeur de l'état pictureSelected avec l'indice de l'image sélectionnée.
            */}
            
            {pictures &&
                <Fragment>
                    <p>Sélectionne la photo d'illustration</p>
                    {pictures.map((e,i) => {
                        return (<img key={i} style={i === pictureSelected ? {border:"1px solid red"} : {}} onClick={() => setPictureSelected(i)} src={`${BASE_IMG}/${e}`}/>)
                    })}
                    <button onClick={submitMainPicture}>Valider</button>
                </Fragment>
            }
            </Fragment>
    )
}

export default AddShow