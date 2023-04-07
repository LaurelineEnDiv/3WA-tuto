import { useParams } from "react-router-dom"
import axios from "axios"
import { BASE_URL, BASE_IMG } from "../../tools/constante.js"
import { useState, useEffect } from "react"


const EditShowPictures = () => {
    const { id } = useParams()
    const initialState = {
        url_pictures:'',
    }
    const [show, setShow] = useState(initialState)
    const [pictures, setPictures] = useState(null)
    const [pictureSelected, setPictureSelected] = useState(null)

    useEffect(() => {
        axios.post(`${BASE_URL}/getShowById`,{id})
            .then(res => setShow(res.data.result[0]))
            .catch(err => console.log(err))
    },[id])
    
    
    // const handleChange = (e) => {
    // const files = [...e.target.files]
    // setPictures(files)
    // }
    
    const handleChange = (e) => {
        const {name, value} = e.target
        setShow({...show, [name]:value})
    } 
    
    const submit = (e) => {
        e.preventDefault()
        const dataFile = new FormData();
        const files = [...e.target.url_pictures.files];
        
        // ajouter tous les fichiers à FormData
    //     for (let i = 0; i < pictures.length; i++) {
    //   dataFile.append("files", pictures[i], pictures[i].name);
    // }
    for (let i = 0; i < files.length; i++) {
            dataFile.append('files', files[i], files[i].name)
        }
        
        // axios.post(`${BASE_URL}/editShowPictures/${id}`, dataFile)
        //     .then((res) => {
        //         setPictures([]);
        //     })
        //     .catch((err) => {
        //      console.log(err)
        //     })
        
        axios.post(`${BASE_URL}/editShowById`, dataFile)
        .then((res)=> {
            setPictures(res.data.files)
            setShow(initialState)
        })
        .catch((err) => {
            console.log(err)
        })
    }
        
        // axios.post(`${BASE_URL}/editShowById`, dataFile)
        // .then((res)=> {
        //     setPictures(res.data.files)
        //     setShow(initialState)
        // })
    
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
        
        <div className="container admin-margin-top">
          <h2>Ajouter des photos au spectacle</h2>
          <form onSubmit={submit} encType="multipart/form-data">
            <label>Ajouter de nouvelles photos</label>
            <input type="file" name="url_pictures" multiple onChange={handleChange} />
            <div>
              <input type="submit" disabled={!pictures.length} value="Valider les ajouts" />
            </div>
          </form>

      
      {pictures.length > 0 && (  
      <div>
          <p>Modifie la photo d'illustration</p>
          {pictures.map((e, i) => {
            return (
              <img
                key={i}
                alt= {`${show.title}`}
                style={i === pictureSelected ? { border: "1px solid red" } : {}}
                onClick={() => setPictureSelected(i)}
                src={`${BASE_IMG}/${e}`}
              />
            );
          })}
          <button onClick={submitMainPicture}>Valider</button>
        </div>
      )}
    </div>
)
}

export default EditShowPictures