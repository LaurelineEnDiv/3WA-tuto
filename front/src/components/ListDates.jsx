import axios from "axios";
import {BASE_URL} from "../tools/constante.js"
import {useState, useEffect} from "react";

const ListDates = () => {
    const [dates, setDates] = useState([])
    const [selectedYear, setSelectedYear] = useState(2023); // année par défaut
    
    useEffect(() => {
        axios.get(`${BASE_URL}/listdates`)
        .then(res =>  {
        // Filtrer les dates en fonction de l'année sélectionnée
        const filteredDates = res.data.result.filter(
          (date) => new Date(date.date).getFullYear() === selectedYear
        );
        
        setDates(filteredDates);
      })
        .catch(e => console.log(e))
    },[selectedYear]) // cette fonction sera appelée à chaque fois que l'année sélectionnée change
    
    // Fonction pour changer l'année sélectionnée
  const handleYearChange = (year) => {
    setSelectedYear(year);
  };
    
    return (
        <section className="section-margin-top">
        <div className="background-black background-image-dates container container-center">
        <h1>Agenda</h1>
            <div className="year-filter">
                <button onClick={() => handleYearChange(2023)}>2023</button>
                <button onClick={() => handleYearChange(2022)}>2022</button>
                <button onClick={() => handleYearChange(2021)}>2021</button>
            </div>
            {dates.length > 0 && dates.map((date, i) => {
                return(
                
                    <div className="list-dates" key={i}>
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
        </section>
    )
}

export default ListDates