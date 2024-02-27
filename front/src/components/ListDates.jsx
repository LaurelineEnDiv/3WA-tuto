import axios from "axios";
import { BASE_URL } from "../tools/constante.js";
import { useState, useEffect, Fragment } from "react";

const ListDates = () => {
  const [dates, setDates] = useState([]);
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [selectedShow, setSelectedShow] = useState("");
  const [shows, setShows] = useState([]);
  const [datesByMonth, setDatesByMonth] = useState({});

  useEffect(() => {
    axios
      .get(`${BASE_URL}/listdates`)
      .then((res) => {
        // Filtrer les dates en fonction de l'année sélectionnée et du spectacle sélectionné
        const filteredDates = res.data.result.filter(
          (date) =>
            new Date(date.date).getFullYear() === selectedYear &&
            (selectedShow === "" || date.title === selectedShow)
        );

        // Grouper les dates par mois
        const datesByMonth = filteredDates.reduce((acc, date) => {
          const month = new Date(date.date).getMonth();
          if (!acc[month]) {
            acc[month] = [];
          }
          acc[month].push(date);
          return acc;
        }, {});

        // Trier les dates par titre de spectacle pour chaque mois
        const sortedDatesByMonth = Object.entries(datesByMonth).map(
          ([month, dates]) => {
            dates.sort((a, b) => a.title.localeCompare(b.title));
            return [month, dates];
          }
        );

        // Mettre à jour le state avec les dates triées
        const updatedDatesByMonth = Object.fromEntries(sortedDatesByMonth);

        setDatesByMonth(updatedDatesByMonth);
        setDates(filteredDates);

        // Récupérer la liste des spectacles
        const showList = [
          ...new Set(res.data.result.map((date) => date.title)),
        ];
        setShows(showList);
      })
      .catch((e) => console.log(e));
  }, [selectedYear, selectedShow]);

  // Fonction pour changer l'année sélectionnée
  const handleYearChange = (year) => {
    setSelectedYear(year);
  };

  /**
   * Array containing all the years from 2019 to the current year.
   * @type {number[]}
   */
  const allYears = Array.from(
    { length: new Date().getFullYear() - 2019 },
    (_, index) => new Date().getFullYear() - index
  );

  return (
    <Fragment>
      {!dates && <p>loading</p>}
      <div className="background-image dates-background-image container section-margin-top">
        <h1 className="title-white">Agenda</h1>

        <section className="left">
          <p className="filter-selected title-yellow">{selectedYear}</p>
          <div className="year-filter">
            {allYears.map((year) => (
              <button
                className="button"
                onClick={() => handleYearChange(year)}
                key={year}
              >
                {year}
              </button>
            ))}
          </div>

          <div className="show-filter">
            <button
              className={selectedShow === "" ? "button active" : "button"}
              onClick={() => setSelectedShow("")}
            >
              Tous les spectacles
            </button>
            {shows.map((show, index) => (
              <button
                key={index}
                className={selectedShow === show ? "button active" : "button"}
                onClick={() => setSelectedShow(show)}
              >
                {show}
              </button>
            ))}
          </div>
          <p className="filter-selected title-yellow">{selectedShow}</p>

          <section className="column title-white">
            {Object.entries(datesByMonth).map(([month, dates]) => (
              <Fragment key={month}>
                <div className="date-agenda full-width">
                  <h2>
                    {new Date(dates[0].date).toLocaleString("default", {
                      month: "long",
                    })}
                  </h2>
                  {dates
                    .reduce((acc, date) => {
                      const existingShow = acc.find(
                        (show) => show.title === date.title
                      );
                      if (existingShow) {
                        existingShow.dates.push(date);
                      } else {
                        acc.push({ title: date.title, dates: [date] });
                      }
                      return acc;
                    }, [])
                    .map((show) => (
                      <Fragment key={show.title}>
                        {selectedShow === "" && (
                          <h3 className="title-yellow">{show.title}</h3>
                        )}
                        {show.dates.map((date, i) => (
                          <div key={i}>
                            <p>
                              {" > "}
                              {new Date(date.date).toLocaleString("default", {
                                day: "numeric",
                                month: "long",
                              })}
                              :
                              <a href={date.site_web} target="_blank">
                                {date.nom_lieu}
                              </a>
                              - {date.ville}
                              {date.pays === "France"
                                ? `(${date.departement})`
                                : ""}
                              {date.pays !== "France" && (
                                <span> - {date.pays}</span>
                              )}
                            </p>
                          </div>
                        ))}
                      </Fragment>
                    ))}
                </div>
              </Fragment>
            ))}
          </section>
        </section>
      </div>
    </Fragment>
  );
};

export default ListDates;
