import axios from "axios"
import {BASE_URL} from '../tools/constante.js'
import {useState, useEffect, Fragment} from "react"

const AddDate = () => {
    
    const initialValue = {
        date:'',
        title:'',
        nom_lieu:'',
        site_web:'',
        ville:'',
        departement:'',
        pays:'',
        show:'-1'
    }
    
    const [lieuList, setLieuList] = useState([])
    const [lieuSelect, setLieuSelect] = useState("-1")
    const [shows, setShows] = useState([])
    const [date, setDate] = useState(initialValue)
    
    
    useEffect(() => {
        axios.get(`${BASE_URL}/listshows`)
        .then(res => setShows(res.data.result))
    },[])
    
    useEffect(() => {
        axios.get(`${BASE_URL}/getLieu`)
        .then(res => {
            console.log(res)
            setLieuList(res.data.result)
        })
    },[])
    
    
    
    
    console.log({lieuList, lieuSelect, shows, date})
    
    const handleChange = (e) => {
        const {name, value} = e.target
        setDate({...date,[name]:value})
    }
    
    const submit = (e) => {
        e.preventDefault()
        
        if(date.date === "" || date.nom_lieu === "" || date.site_web === "" || date.ville === "" || date.departement === "" || date.pays === ""){
            console.log("Veuillez remplir tous les champs")
        }
        
        const dataCreation = {
          date : date.date.trim(),
          nom_lieu: date.nom_lieu.trim(),
          site_web: date.site_web.trim(),
          ville: date.ville.trim(),
          departement:date.departement.trim(),
          pays:date.pays.trim(),
          show_id:date.show
        }
        
        const dataUtilisation = {
          date : date.date.trim(),
          lieu_id: lieuSelect,
          show_id:date.show
        }
        
        const data = lieuSelect === "-1" ? dataCreation : dataUtilisation
        
        console.log(data)
        
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
                <div>
                    <label>Spectacle</label>
                    <select name="show" title="title" value={date.show} onChange={handleChange}>
                        <option value="-1">--- Choix ---</option>
                        {shows.map((show, i) => {
                            return(
                                <option key={i} value={show.id}>{show.title}</option>
                            )
                        })}
                    </select>
                </div>
                <div>
                    <label>Lieu</label>
                    <select onChange={(e) => setLieuSelect(e.target.value)} value={lieuSelect}>
                        {
                            lieuList.map((e,i) => {
                                return (
                                    <option key={i} value={e.id}>{e.nom_lieu}</option>
                                )
                            })
                        }
                        <option value="-1">Ajouter un nouveau lieu</option>
                    </select>
                </div>
                { (lieuSelect === "-1") &&(
                <Fragment>
                    <div>
                            <input type="text" name="nom_lieu" placeholder="Nom du lieu" onChange={handleChange} value={date.nom_lieu} maxLength="100"/>
                        </div>
                        <div>
                            <input type="text" name="site_web" placeholder="URL du site web" onChange={handleChange} value={date.site_web} maxLength="100"/>
                        </div>
                        <div>
                            <input type="text" name="ville" placeholder="Ville" onChange={handleChange} value={date.ville} maxLength="100"/>
                        </div>
                        <div >
                            <input type="text" name="departement" placeholder="Numéro du département" onChange={handleChange} value={date.departement} maxLength="2"/>
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