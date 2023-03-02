import axios from "axios";
import {NavLink} from "react-router-dom"
import {BASE_URL, BASE_IMG} from "../tools/constante.js"
import {Fragment, useState, useEffect} from "react";

const ListShows = () => {
    const [shows, setShows] = useState([])
    
    useEffect(() => {
        axios.get(`${BASE_URL}/listshows`)
        .then(res => setShows(res.data.result))
        .catch(e => console.log(e))
    },[])
    
    return (
        <Fragment>
        {!shows && (<p>loading</p>) }
        <div>
        <h1>Les Projets</h1>
            {shows.length > 0 && shows.map((show, i) => {
                if (show.image_selected === 1) {
                return(
                    <div key={i}>
                        <a href={`/show/${show.id}`}>
                            <img src={`${BASE_IMG}/${show.url_pictures}`} />
                        </a>
                        <p><NavLink to={`/show/${show.id}`}>{show.title}</NavLink></p>
                        <p>{show.name}</p>
                        <p>{show.year_creation}</p>
                    </div>
                )
            }})}
        </div>  
       </Fragment>
    )
}

export default ListShows