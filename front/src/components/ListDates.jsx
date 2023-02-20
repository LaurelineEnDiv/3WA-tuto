import axios from "axios";
import {BASE_URL} from "../tools/constante.js"
import {useState, useEffect} from "react";

const ListDates = () => {
    const [dates, setDates] = useState([])
    
    useEffect(() => {
        axios.get(`${BASE_URL}/listdates`)
        .then(res => setDates(res.data.result))
        .then(res => console.log(dates))
    },[])
    
    
    return (
        <div>
        <h1>Agenda</h1>
            {dates.length > 0 && dates.map((date, i) => {
            console.log(date)
                return(
                
                    <div key={i}>
                        <p>{date.date}</p>
                        <p>{date.title}</p>
                        <p>{date.nom_lieu}</p>
                        <p>{date.ville}{date.departement}</p>
                    </div>
                )
            })}
        </div>    
    )
}

export default ListDates