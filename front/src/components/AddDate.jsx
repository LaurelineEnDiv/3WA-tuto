import axios from "axios"
import {BASE_URL} from '../tools/constante.js'
import {useState, useEffect, Fragment} from "react"

const AddDate = () => {
    
    const initialValue = {
        date:'',
        title:'',
        nom_lieu:'',
        ville:'',
        code_postal:'',
        pays:'',
        show:""
    }
    
    const [lieu, setLieu] = useState(1)
    const [shows, setShows] = useState([])
    
    useEffect(() => {
        axios.get(`${BASE_URL}/listshows`)
        .then(res => setShows(res.data.result))
    },[])
    
    const [date, setDate] = useState(initialValue)
    
    const handleChange = (e) => {
        const {name, value} = e.target
        setDate({...date,[name]:value})
    }
    
    const submit = (e) => {
        e.preventDefault()
        
        if(date.date === "" || date.nom_lieu === "" || date.ville === "" || date.code_postal === "" || date.pays === ""){
            console.log("Veuillez remplir tous les champs")
        }
        
        const dataCreation = {
          date : date.date.trim(),
          nom_lieu: date.nom_lieu.trim(),
          ville: date.ville.trim(),
          code_postal:date.code_postal.trim(),
          pays:date.pays.trim(),
          show_id:date.show
        }
        
        const dataUtilisation = {
          date : date.date.trim(),
          lieu_id: lieu,
          show_id:date.show
        }
        
        const data = lieu !== "-1" ? dataCreation : dataUtilisation
        
        axios.post(`${BASE_URL}/adddate`,data)
        .then(res => {
            console.log(res)
            alert(res.data.response)
        })
        setDate(initialValue)

    }
   
    return(
        <div>
            <h1>Ajouter une nouvelle date</h1>
            <form onSubmit={submit} method="post">
                <div>
                    <input type="date" name="date" onChange={handleChange} value={date.date} maxLength="100"/>
                </div>
                <label>Spectacle</label>
                <select name="show" title="title" value={date.show} onChange={handleChange}>
                {shows.map((show, i) => {
                    return(
                        <option key={i} value={show.id}>{show.title}</option>
                    )
                })}
                </select>
                
                <select onChange={(e) => setLieu(e.target.value)} value={lieu}>
                    <option value="1">Mon Lieux</option>
                    <option value="-1">Autre</option>
                </select>
                { (lieu === "-1") &&(
                    <Fragment>
                        <div>
                            <input type="text" name="nom_lieu" placeholder="Nom du lieu" onChange={handleChange} value={date.nom_lieu} maxLength="100"/>
                        </div>
                        <div>
                            <input type="text" name="ville" placeholder="Ville" onChange={handleChange} value={date.ville} maxLength="100"/>
                        </div>
                        <div >
                            <input type="text" name="code_postal" placeholder="Code Postal" onChange={handleChange} value={date.code_postal} maxLength="250"/>
                        </div>
                         <div>
                            <input type="text" name="pays" placeholder="Pays" onChange={handleChange} value={date.pays} maxLength="100"/>
                        </div>
                    </Fragment>
                )}
                <button type="submit">VALIDER</button>
            </form>
        </div>
    )
}

export default AddDate