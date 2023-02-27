import axios from "axios";
import {BASE_URL} from "../tools/constante.js"
import {useState, useEffect} from "react";

const ListDates = () => {
    const [dates, setDates] = useState([])
    
    useEffect(() => {
        axios.get(`${BASE_URL}/listdates`)
        .then(res => setDates(res.data.result))
    },[])
    
    
    return (
        <div>
        <h1>Agenda</h1>
            {dates.length > 0 && dates.map((date, i) => {
            console.log(date)
                return(
                
                    <div key={i}>
                        <p>{date.formattedDate}</p>
                        <p>{date.title}</p>
                        <a href={date.site_web} target="_blank">{date.nom_lieu}</a>
                        <p>{date.ville} ({date.departement})</p>
                    </div>
                )
            })}
        </div>    
    )
}

export default ListDates