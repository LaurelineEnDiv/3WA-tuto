import axios from "axios"
import {BASE_URL} from '../../tools/constante.js'
import {useState, useEffect, Fragment} from "react"


const ManageDates = () => {
    
    const initialValue = {
        date:'',
        title:'',
        nom_lieu:'',
        site_web:'',
        ville:'',
        departement:'',
        pays:'',
        show:'-1',
        lieuSelect:undefined
        
    }
    const [dates, setDates] = useState([])
    const [lieuList, setLieuList] = useState([])
    const [lieuSelect, setLieuSelect] = useState(-1)
    const [shows, setShows] = useState([])
    const [date, setDate] = useState(initialValue)
    
    useEffect(() => {
        axios.get(`${BASE_URL}/managedates`)
        .then(res => setDates(res.data.result))
        .catch(e => console.log(e))
    },[])
    
     const deleteDate = (id) => {
        axios.post(`${BASE_URL}/deletedate`,{id})
        .then(res => {
      // Mettre à jour la liste des dates en excluant la date supprimée
      setDates(dates.filter(date => date.id !== id))
    })
    .catch(err => console.log(err))
    }
    
    useEffect(() => {
        axios.get(`${BASE_URL}/selectshow`)
        .then(res => setShows(res.data.result))
    },[])
    
    useEffect(() => {
        axios.get(`${BASE_URL}/getLieu`)
        .then(res => setLieuList(res.data.result))
    },[])
    
    const handleChange = (e) => {
        const {name, value} = e.target
        setDate({...date,[name]:value})
    }
    
    const submit = (e) => {
        e.preventDefault()
        
        if(date.date === "" ){
            alert("Veuillez sélectionner une date")
        }
        
        else if  (date.show === "-1" ){
            alert("Veuillez sélectionner un spectacle")
        }
        
        // else if (date.lieuSelect === "-1" && date.nom_lieu === "") {
        //     alert("Veuillez sélectionner un lieu existant ou créer un nouveau lieu")
        // }
        
        const data = {
          date : date.date,
          nom_lieu: date.nom_lieu.trim(),
          site_web: date.site_web.trim(),
          ville: date.ville.trim(),
          departement:date.departement,
          pays:date.pays.trim(),
          show_id:date.show,
          lieu_id:lieuSelect
        }
        
        if (lieuSelect !== "-1") {
            data.lieu_id = lieuSelect;
        }
        
        axios.post(`${BASE_URL}/adddate`,data)
        .then((res) => {
            alert("Date ajoutée avec succès")
            setDate(initialValue) // Réinitialiser le formulaire
            setLieuSelect(-1)
            const insertData = {
                formattedDate: new Date(date.date).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric"}),
                show_id: data.show_id,
                id: res.data.result.insertId
            }
            setDates([...dates,insertData])
            //{formattedDate: '1 janvier 2000', show_id: 41, id: 19}
        })
        .catch(e => console.log(e))
        
       

    }
     
    return (
        <div>
        <h1>Supprimer une date</h1>
            <ul>
            {dates.length > 0 && dates.map((date, i) => {
                return(
                    <Fragment key={i}>
                        <li>
                            {date.formattedDate}
                            <button onClick={() => deleteDate(date.id)}>X</button>
                        </li>
                    </Fragment>
                )
            })}
            </ul>
        <div>
        <Fragment>
            <h1>Ajouter une nouvelle date</h1>
            <form onSubmit={submit} method="post">
                <div>
                    <label>Date</label>
                    <input type="date" name="date" onChange={handleChange} value={date.date} maxLength="100"/>
                </div>
                <div>
                    <select name="show" title="title" value={date.show} onChange={handleChange}>
                        <option value="-1">--- Spectacle ---</option>
                        {shows.map((show, i) => {
                            return(
                                <option key={i} value={show.id}>{show.title}</option>
                            )
                        })}
                    </select>
                </div>
                <div>
                    <label>Choisir un lieu</label>
                    <select onChange={(e) => setLieuSelect(e.target.value)} value={lieuSelect}>
                        <option value="-1">--- Liste des lieux ---</option>
                        {lieuList.map((e,i) => {
                                return (
                                    <option key={i} value={e.id}>{e.nom_lieu} ({e.ville})</option>
                                )
                            })
                        }
                    </select>
                
                <Fragment>
                    <p>Sinon, ajouter un lieu</p>
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
                <button type="submit">VALIDER</button>
                </div>
            </form>
        </Fragment>
        </div>
        </div>
    )
}

export default ManageDates