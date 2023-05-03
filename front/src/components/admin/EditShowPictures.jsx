import { useParams } from "react-router-dom"
import axios from "axios"
import { BASE_URL, BASE_IMG } from "../../tools/constante.js"
import { useState, useEffect, Fragment } from "react"

const EditShowPictures = () => {

    const { id } = useParams()
    const [picturesList, setPicturesList] = useState([])
    const [pictures, setPictures] = useState(null)

    // Afficher la liste des photos du spectacle
    useEffect(() => {
        axios.post(`${BASE_URL}/getpictures`, { id })
            .then(res => {
                setPicturesList(res.data.result)
            })
            .catch(err => console.log(err))
    }, [id])

    //Supprimer les photos
    const deletePicture = (id) => {
        axios.post(`${BASE_URL}/deletePicture`, { id })
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
        
        dataFile.append('show_id', id)

        axios.post(`${BASE_URL}/addShowPictures`, dataFile)
            .then((res) => {
                
                setPictures(res.data.files)

            })
            .catch((err) => {
                console.log(err)
            })

    }

    return (

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
            
            <Fragment>
            <h2>Ajouter des photos</h2>
                <form onSubmit={submit} encType="multipart/form-data">
                    <input type='file' name='url_pictures' multiple />
                    <input className="button" type='submit' value='Valider'/>
                </form>
            </Fragment>
            
        </div>

    )

}

export default EditShowPictures