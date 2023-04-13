import { useParams } from "react-router-dom"
import axios from "axios"
import { BASE_URL, BASE_IMG } from "../../tools/constante.js"
import { useState, useEffect, Fragment } from "react"

const EditShowPictures = () => {
    
    const {id} = useParams()
    const [picturesList, setPicturesList] = useState([])
    
    const [pictures, setPictures] = useState(null) 
    const [pictureSelected, setPictureSelected] = useState(null) 
    
// Afficher la liste des photos du spectacle
    useEffect(() => {
        axios.post(`${BASE_URL}/getpictures`,{id})
            .then(res => {
            setPicturesList(res.data.result)
            })
            .catch(err => console.log(err))
    },[id])
    
//Supprimer les photos
    const deletePicture = (id) => {
        axios.post(`${BASE_URL}/deletePicture`,{id})
            .then(res => {
            // Mettre à jour la liste des photo en excluant la photo supprimée
            setPicturesList(picturesList.filter(picture => picture.id !== id))
            })
            .catch(err => console.log(err))
        }

// Ajouter de nouvelles photos
    const submit = (e) => {
        e.preventDefault()
        const dataFile = new FormData();
        const files = [...e.target.url_pictures.files];
        
        // ajouter tous les fichiers à FormData
        for (let i = 0; i < files.length; i++) {
            dataFile.append('files', files[i], files[i].name)
        }
        
         axios.post(`${BASE_URL}/addShowPictures`, dataFile)
        .then((res)=> {
            const data = {
                id:res.data.result.insertId,
            }
            setPicturesList([...picturesList, data])
            setPictures(res.data.files)
            
        })
        .catch((err) => {
            console.log(err)
        })
        
    }  
    
//////SELECTION DE L'IMAGE DE MISE EN AVANT///////////
    
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
    
    return(
        
        <div className=" container admin-margin-top">
            <h2>Supprimer des photos</h2>
                <ul>
                  {picturesList.map((picture, i) => {
                    return (
                      <li key={i}>
                        <img className="show-picture full-width" src={`${BASE_IMG}/${picture.url_pictures}`} alt="" /> 
                        <button className="delete" onClick={() => deletePicture(picture.id)}>X</button>
                      </li>
                    )
                  })}
                </ul>
             
             { !pictures &&(
            <Fragment>
            <h2>Ajouter des photos</h2>
                <form onSubmit={submit} encType="multipart/form-data">
                    <input type='file' name='url_pictures' multiple />
                    <input className="button" type='submit' value='Valider'/>
                </form>
            </Fragment>
            )}
            
            {pictures &&
                <Fragment>
                    <p>Modifie la photo d'illustration</p>
                    {pictures.map((e,i) => {
                        return (<img key={i} style={i === pictureSelected ? {border:"1px solid red"} : {}} onClick={() => setPictureSelected(i)} src={`${BASE_IMG}/${e}`}/>)
                    })}
                    <button onClick={submitMainPicture}>Valider</button>
                </Fragment>
            }   
            
        </div>
      
    )     

}

export default EditShowPictures