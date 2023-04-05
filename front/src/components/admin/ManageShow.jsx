import axios from "axios"
import {useState, useEffect, Fragment} from "react"
import {NavLink} from 'react-router-dom'
import {BASE_URL, BASE_IMG} from '../../tools/constante.js'
import inputCheck from '../../tools/inputLength.js'


const ManageShow = () => {
    const initialState = {
        title:'',
        categorie:'',
        year_creation:'',
        content:'',
        url_video:'',
        pdf:'',
        url_pictures:'',
    }
    
    const [showsList, setShowsList] = useState([])
    const [showData, setShowData] = useState(initialState)
    
    const [categories, setCategories] = useState([])
    const [pictures, setPictures] = useState(null) 
    const [pictureSelected, setPictureSelected] = useState(null) 
    
    useEffect(() => {
        if(showsList.length === 0){
            axios.get(`${BASE_URL}/manageshows`)
            .then(res => setShowsList(res.data.result))
            .catch(err => console.log(err))
        }
    },[showsList])
    
    const deleteShow = (id) => {
        axios.post(`${BASE_URL}/deleteShow`,{id})
        .then(res => {
          // Mettre à jour la liste des spectacles en excluant le spectacle supprimé
          setShowsList(showsList.filter(show => show.id !== id))
        })
        .catch(err => console.log(err))
    }


///////ADD SHOW////////

    
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
            alert("Les données saisies ne sont pas valides.")
            return
        }
        
        const dataFile = new FormData();
        const files = [...e.target.url_pictures.files];

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
            const data = {
                id:res.data.result.insertId,
                title:showData.title
            }
            setShowsList([...showsList, data])
            setShowData(initialState)
            setPictures(res.data.files)
            
        })
        .catch((err) => {
            console.log(err)
        })
       
    }
    
    // récupère l'image sélectionnée (urlPicture) à partir de l'état pictures 
    // en utilisant la variable d'état pictureSelected 
    
    const submitMainPicture = () => {
        const urlPicture = pictures[pictureSelected]
        
        axios.post(`${BASE_URL}/selectedImage`, {url_pictures:urlPicture})
        .then((res)=> {
            res.data.response && console.log('succesfully selected');
            setPictures(null)
            setPictureSelected(null)
            
            // Mettre à jour la liste des spectacles avec le nouveau spectacle ajouté
            
        })
        .catch((err) => {
            console.log(err)
        })
    }
    
    return(
        <div className=" container admin-margin-top">
            <h1>Gestion des spectacles</h1>
             <h2>Modifier ou supprimer un spectacle</h2>
                <ul>
                  {showsList.map((show, i) => {
                    return (
                      <Fragment key={i}>
                          <li className="li-admin">
                            <NavLink to={`/editshow/${show.id}`}>
                              {show.title}
                            </NavLink>
                            <button className="delete" onClick={() => deleteShow(show.id)}>X</button>
                          </li>
                      </Fragment>
                    )
                  })}
                </ul>
        <div>
        
        <Fragment>
            {!pictures &&(
                <Fragment>
                    <h2>Ajouter un spectacle</h2>
                    <form onSubmit={submit} encType="multipart/form-data">
                        <label>Nom du spectacle</label>
                            <input type='text' name='title' onChange={handleChange} value={showData.title} />
                        <div>
                            <label>Catégorie</label>
                            <select name="categorie" onChange={handleChange} value={showData.name}>
                            <option value={undefined}>Choix d'option</option>
                            {categories.map((categorie, i) => {
                                return(
                                    <option key={i} value={categorie.id}>{categorie.name}</option>
                                )
                            })}
                            </select>
                        </div>
                        <div>
                            <label>Année de création</label>
                            <input type='text' name='year_creation' onChange={handleChange} value={showData.year_creation} />
                         </div> 
                         <div>
                            <label>Description</label>
                            <textarea rows='4' cols='50' type='text' name='content' onChange={handleChange} value={showData.content} />
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
                        <input className="button" type='submit' value='Valider'/>
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
                        return (<img key={i} alt= {`${showData.title}`} style={i === pictureSelected ? {border:"1px solid red"} : 
                        {}} onClick={() => setPictureSelected(i)} src={`${BASE_IMG}/${e}`}/>)
                    })}
                    <button onClick={submitMainPicture}>Valider</button>
                </Fragment>
            }
            
            </Fragment>
            </div>
            </div>
    )
}

export default ManageShow