import axios from "axios";
import { BASE_URL } from "../../tools/constante.js";
import { useEffect, useState } from "react";

const UpdateTeamOrder = () => {
  const [teamList, setTeamList] = useState([]);

  const orderByOrder = (arr) => {
    return arr.sort((a, b) => a.order - b.order);
  };

  useEffect(() => {
    if (teamList.length === 0) {
      axios
        .get(`${BASE_URL}/listteam`)
        .then((res) => setTeamList(orderByOrder(res.data.result)))
        .catch((err) => console.log(err));
    }
  }, [teamList]);

  console.log(teamList);

  // la fonction prend l'index d'un element et deplace cet element d'une position vers le haut
  const changeIndexUp = (index) => {
    const copy = [...teamList];
    copy[index].order = index - 1;
    copy[index - 1].order = index;
    const temp = copy[index];
    copy[index] = copy[index - 1];
    copy[index - 1] = temp;
    setTeamList(copy);
  };

  // la fonction prend l'index d'un element et deplace cet element d'une position vers le bas et met a jour order avec la nouvelle position
  const changeIndexDown = (index) => {
    const copy = [...teamList];
    copy[index].order = index + 1;
    copy[index + 1].order = index;
    const temp = copy[index];
    copy[index] = copy[index + 1];
    copy[index + 1] = temp;
    setTeamList(copy);
  };

  const saveOrder = () => {
    axios
      .post(`${BASE_URL}/updateTeamOrder`, { data: teamList })
      .then((res) => alert("modification effectuée"))
      .catch((err) => console.log(err));
  };

  if (teamList.length === 0) return <p>Chargement</p>;

  return (
    <div className="container admin-margin-top">
      <ul>
        {teamList.map(({ nom, prenom }, i) => (
          <li key={i} style={{ border: "1px solid" }}>
            <p>
              {prenom} {nom}
            </p>
            {i !== 0 && <button onClick={() => changeIndexUp(i)}>^</button>}
            {i !== teamList.length - 1 && (
              <button onClick={() => changeIndexDown(i)}>v</button>
            )}
          </li>
        ))}
        <button onClick={saveOrder}>Enregistrer</button>
      </ul>
    </div>
  );
};

export default UpdateTeamOrder;
