import { useParams } from "react-router-dom"
import axios from "axios"
import { BASE_URL, BASE_IMG } from "../../tools/constante.js"
import { useState, useEffect } from "react"

const EditShowPictures = () => {
    const {id} = useParams()
    const [picturesList, setPicturesList] = useState([])
    
// Afficher la liste des photos du spectacle
    useEffect(() => {
        axios.get(`${BASE_URL}/getpictures`,{id})
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
    
    
    return(
        
        <div className=" container admin-margin-top">
            <h2>Supprimer des photos</h2>
                <ul>
                  {picturesList.map((picture, i) => {
                    return (
                      <li key={i}>
                        <img src={`${BASE_IMG}/${picture.url_pictures}`} alt="" /> 
                        <button className="delete" onClick={() => deletePicture(picture.id)}>X</button>
                      </li>
                    );
                  })}
                </ul>
        </div>
    )     

}

export default EditShowPictures