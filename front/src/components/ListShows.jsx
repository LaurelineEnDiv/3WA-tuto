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
        <section className="section-margin-top">
        {!shows && (<p>loading</p>) }
        <div className="container container-center">
        <h1>Les Projets</h1>
        <div className="list-shows">
            {shows.length > 0 && shows.map((show, i) => {
                if (show.image_selected === 1) {
                return(
                    <div className="show-item" key={i}>
                        <NavLink to={`/show/${show.id}`}><img src={`${BASE_IMG}/${show.url_pictures}`} alt={`${show.title}`} /></NavLink>
                        <div className="item-caption">
                            <h3><NavLink to={`/show/${show.id}`}>{show.title}</NavLink></h3>
                            <p>{show.name} - {show.year_creation}</p>
                        </div>
                    </div>
                )
            }})}
        </div>  
        </div>
        </section>
       </Fragment>
    )
}

export default ListShows