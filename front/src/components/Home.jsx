import {Fragment,useState, useEffect} from 'react';
import axios from "axios";
import {BASE_URL, BASE_IMG} from "../tools/constante.js"
import {NavLink} from "react-router-dom"

const Home = () => {
    const [shows, setShows] = useState([])
    const [dates, setDates] = useState([])
    
    useEffect(() => {
        axios.get(`${BASE_URL}/listshows`)
        .then(res => setShows(res.data.result))
        .catch(e => console.log(e))
    },[])
    
    useEffect(() => {
        axios.get(`${BASE_URL}/listdates`)
        .then(res => {
            const data = res.data.result.slice(0, 3)
            setDates(data)
        })
        .catch(e => console.log(e))
    },[])
    
    return(
        <Fragment>
        <div className="container container-center">
        <h1>Les Hommes Sensibles</h1>
        <p>Les Hommes Sensibles est une compagnie de cirque qui mélange acrobatie
        , danse, théâtre d’objet, musique, culture Hip-hop et magie (au sens large... très large).</p>
        <p>Ses artistes ont comme points communs leurs sensibilités.
        Bien que différentes, elles se rejoignent et ensemble deviennent force.</p>
        
        
        <div>
        {!shows && (<p>loading</p>) }
        <div className="list-show">
        <h2>Les Spectacles</h2>
            {shows.length > 0 && shows.map((show, i) => {
                if (show.image_selected === 1) {
                return(
                    <div key={i}>
                        <img src={`${BASE_IMG}/${show.url_pictures}`} alt={`${show.title}`}/>
                        <p><NavLink to={`/show/${show.id}`}>{show.title}</NavLink></p>
                    </div>
                )
                }
            })}
        </div>
        </div>
        
        <div>
        <h2>Agenda</h2>
        {dates.length > 0 && dates.map((date, i) => {
                return(
                
                    <div key={i}>
                        <p>{date.formattedDate}</p>
                        <p>{date.title}</p>
                        <a href={date.site_web} target="_blank">{date.nom_lieu}</a>
                        <p>{date.ville} ({date.departement})</p>
                    </div>
                )
            })}
            <p><NavLink to={`/listdates`}>Voir toutes les dates</NavLink></p>
        </div>
        </div>
        </Fragment>
    )
}

export default Home