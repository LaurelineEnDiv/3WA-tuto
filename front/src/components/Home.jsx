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
        const today = new Date()
        const data = res.data.result
          .filter(date => new Date(date.formattedDate) > today) // filtrer les dates futures
          .sort((a, b) => new Date(a.formattedDate) - new Date(b.formattedDate)) // trier par date croissante
          .slice(0, 3) // récupérer les trois premières dates
        setDates(data)
      })
      .catch(e => console.log(e))
  }, [])
    
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
        
        <h2>Les Spectacles</h2>
        <div className="list-shows">
            {shows.length > 0 && shows.map((show, i) => {
                if (show.image_selected === 1) {
                return(
                    <div className="show-item" key={i}>
                        <img src={`${BASE_IMG}/${show.url_pictures}`} alt={`${show.title}`}/>
                        <h3><NavLink to={`/show/${show.id}`}>{show.title}</NavLink></h3>
                        <p>{show.name} - {show.year_creation}</p>
                    </div>
                )
                }
            })}
        </div>
        </div>
        
        <div className="list-dates">
        <h2>Agenda</h2>
        <p>Les prochaines dates</p>
        {dates.length > 0 && dates.map((date, i) => {
                return(
                    <div className="date-item" key={i}>
                        <p>{date.formattedDate}</p>
                        <p>{date.title}</p>
                        <p><a href={date.site_web} target="_blank">{date.nom_lieu}</a> {date.ville} ({date.departement})</p>
                    </div>
                )
            })}
            <p><NavLink to={`/agenda`}>Voir toutes les dates</NavLink></p>
        </div>
        </div>
        </Fragment>
    )
}

export default Home