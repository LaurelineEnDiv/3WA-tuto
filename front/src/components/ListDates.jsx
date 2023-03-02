import axios from "axios";
import {BASE_URL} from "../tools/constante.js"
import {useState, useEffect} from "react";

const ListDates = () => {
    const [dates, setDates] = useState([])
    
    useEffect(() => {
        axios.get(`${BASE_URL}/listdates`)
        .then(res => setDates(res.data.result))
        .catch(e => console.log(e))
    },[])
    
    
    return (
        <div>
        <h1>Agenda</h1>
            {dates.length > 0 && dates.map((date, i) => {
                return(
                
                    <div key={i}>
                    <div className="date">
                        <p>{date.formattedDate}</p>
                        <p>{date.title}</p>
                        <a href={date.site_web} target="_blank">{date.nom_lieu}</a>
                        <p>{date.ville} ({date.departement})</p>
                    </div>
                    </div>
                )
            })}
        </div>    
    )
}

export default ListDates