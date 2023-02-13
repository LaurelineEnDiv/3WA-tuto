import axios from "axios"
import {Fragment} from 'react'
import {BASE_URL} from '../tools/constante.js'
import {useState, useEffect} from "react"
import inputCheck from '../tools/inputLength.js'

const AddShow = () => {
    const [showData, setShowData] = useState({
        title:'',
        content:'',
        year_creation:'',
        image:'',
        url_video:'',
        url_pictures:''
    })
    
    //////// test
//     const [selectedFiles, setSelectedFiles] = useState([]);
// console.log(selectedFiles)
    
    const [categories, setCategories] = useState([])
    
    useEffect(() => {
        axios.get(`${BASE_URL}/getCategories`)
        .then(res => setCategories(res.data.result))
    },[])
    
    
    // const [shows, setShows] = useState([])
    
    // useEffect(() => {
    //     axios.get(`${BASE_URL}/getShowById`)
    //     .then(res => setShows(res.data.result))
    // },[])
    
    
    const handleChange = (e) => {
        const {name, value} = e.target
        setShowData({...showData,[name]:value})
    }
    
    
    /*///////// TESTE 
    const handleFileChange = (event) => {
        setSelectedFiles(event.target.files);
      };*/
    
    const submit = (e) => {
        e.preventDefault()
        
        if(!inputCheck(showData.title, 255, 1) || !inputCheck(showData.content, 255, 1) 
            || !inputCheck(showData.year_creation, 4, 4) || !inputCheck(showData.url_video, 255, 1)) {
            console.log("Les données saisies ne sont pas valides.")
            return
        }
        
        const formData = new FormData()
        const files = {...e.target.image.files};
        /*for (let i = 0; i < selectedFiles.length; i++) {
          formData.append("files", selectedFiles[i], selectedFiles[i].name);
        }*/
        formData.append('files', files[0], files[0].name)
        formData.append('title', showData.title)
        formData.append('content', showData.content)
        formData.append('year_creation', showData.year_creation)
        formData.append('url_video', showData.url_video)
        
        axios.post(`${BASE_URL}/addshow`, formData)
        .then((res)=> {
            console.log(res)
            res.data.response && console.log('succesfully upload');
        })
        .catch((err) => {
            console.log(err)
        })
       
    }
    
    
    /*///////// TEST
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData();
        for (let i = 0; i < selectedFiles.length; i++) {
          formData.append("files_bis", selectedFiles[i]);
        }
        axios.post("/upload", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
      };*/

    
    return(
        <Fragment>
        {/*<form onSubmit={handleSubmit} encType="multipart/form-data">*/}
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
            <p>URL de la vidéo de présentation du spectacle : </p>
            <input type='url' name='url_video' onChange={handleChange} value={showData.url_video} />
            <p>Télécharger l'image de présentation du spectacle</p>
            <input type='file' name='image' />
            <p>Télécharger les photos spectacle</p>
            <input type='file' name='url_pictures' /*onChange={handleFileChange}*/ multiple />
            <input type='submit' />
        </form>
        </Fragment>
    )
}

export default AddShow