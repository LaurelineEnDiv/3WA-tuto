import axios from "axios";
import {NavLink} from "react-router-dom"
import {BASE_URL, BASE_IMG} from "../tools/constante.js"
import {useState, useEffect} from "react";

const ListShows = () => {
    const [shows, setShows] = useState([])
    
    useEffect(() => {
        axios.get(`${BASE_URL}/listshows`)
        .then(res => setShows(res.data.result))
    },[])
    
    
    return (
        <div>
        <h1>Les Projets</h1>
            {shows.map((show, i) => {
            console.log(show)
                return(
                
                    <div key={i}>
                        <img src={`${BASE_IMG}/${show.image}`} />
                        <p><NavLink to={`/show/${show.id}`}>{show.title}</NavLink></p>
                        <p>{show.name}</p>
                        <p>{show.year_creation}</p>
                        
                    </div>
                )
            })}
        </div>    
    )
}

export default ListShows