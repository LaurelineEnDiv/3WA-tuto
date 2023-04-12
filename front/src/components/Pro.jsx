import axios from "axios";
import {BASE_URL} from "../tools/constante.js";
import {Fragment, useState, useEffect} from "react";

const Pro = () => {
    const [shows, setShows] = useState([])
    
    useEffect(() => {
        axios.get(`${BASE_URL}/listpro`)
        .then(res => setShows(res.data.result))
    },[])
    
    return (
        <Fragment>
        {!shows && (<p>loading</p>) }
        <div className="container section-margin-top">
        <h1>Espace Pro</h1>
            <div className="row">
            {shows.length > 0 && shows.map((show, i) => {
                return(
                    <div className="pro-item" key={i}>
                        <h2 className="title-yellow">{show.title}</h2>
                        <a href={`${BASE_URL}/pdf/${show.pdf}`} target="_blank" download><button className="button">Dossier de présentation</button></a>
                    </div>
                )
            })}
            </div>
        </div>
       </Fragment>
    )
}

export default Pro