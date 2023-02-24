import axios from "axios"
import {BASE_URL, BASE_IMG} from '../tools/constante.js'
import {useState, useEffect, Fragment} from "react"


const ManageDates = () => {
    const [dates, setDates] = useState([])
    
    useEffect(() => {
        axios.get(`${BASE_URL}/managedates`)
        .then(res => setDates(res.data.result))
        .then(res => console.log(dates))
    },[])
    
     const deleteDate = (id) => {
        axios.post(`${BASE_URL}/deletedate`,{id})
        .then(res => {
      console.log(res)
      // Mettre à jour la liste des dates en excluant la date supprimée
      setDates(dates.filter(date => date.id !== id))
    })
    .catch(err => console.log(err))
    }
    
    
    return (
        <div>
        <h1>Modifier ou supprimer une date</h1>
            <ul>
            {dates.length > 0 && dates.map((date, i) => {
                return(
                    <Fragment>
                    <li key={i}>
                        {date.date}
                    </li>
                    <button onClick={() => deleteDate(date.id)}>X</button>
                    </Fragment>
                )
            })}
            </ul>
        </div>    
    )
}

export default ManageDates