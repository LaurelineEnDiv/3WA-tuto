import axios from "axios";
import {BASE_URL} from "../tools/constante.js";
import {Fragment, useState, useEffect} from "react";
import mouettes from "../assets/img/mouettes.jpg";

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
            {shows.length > 0 && shows.map((show, i) => {
               
                return(
                    <div key={i}>
                        <h2 className="title-yellow">{show.title}</h2>
                        <a href={`${BASE_URL}/pdf/${show.pdf}`} target="_blank" download><button className="button-white">Dossier de présentation</button></a>
                    </div>
                )
            })}
        </div>
        <img src={mouettes} className="img-mouettes full-width"/>
        
       </Fragment>
    )
}

export default Pro