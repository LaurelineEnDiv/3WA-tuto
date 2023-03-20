import axios from "axios";
import {BASE_URL} from "../tools/constante.js"
import {Fragment, useState, useEffect} from "react";

const Pro = () => {
    const [shows, setShows] = useState([])
    
    useEffect(() => {
        axios.get(`${BASE_URL}/listpro`)
        .then(res => setShows(res.data.result))
    },[])
    
    return (
        <Fragment>
        <section className="pro-background-image">
        {!shows && (<p>loading</p>) }
        <div className="container section-margin-top">
        <h1>Espace Pro</h1>
            {shows.length > 0 && shows.map((show, i) => {
               
                return(
                    <div key={i}>
                        <p>{show.title}</p>
                        <a href={`${BASE_URL}/pdf/${show.pdf}`} target="_blank" download>Dossier de présentation</a>
                    </div>
                )
            })}
        </div>
        </section>
       </Fragment>
    )
}

export default Pro