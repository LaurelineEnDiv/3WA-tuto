import { pool, asyncQuery } from "../config/database.js";

export default (req, res) => {
  const data = req.body.data;

  const updateOrder = async (objet) => {
    const updateQuery = "UPDATE team SET `order` = ? WHERE id = ?";

    try {
      const result = await asyncQuery(updateQuery, [objet.order, objet.id]);
      return result;
    } catch (error) {
      throw error;
    }
  };

  const updateTeamOrder = async (data) => {
    const connection = await asyncQuery("START TRANSACTION");

    try {
      for (const objet of data) {
        await updateOrder(objet);
      }

      await asyncQuery("COMMIT");
    } catch (error) {
      await asyncQuery("ROLLBACK");
      throw error;
    }
  };

  // Utilisation de la fonction pour mettre à jour l'ordre de l'équipe
  updateTeamOrder(data)
    .then(() => res.json("Mise à jour réussie"))
    .catch((error) => {
      res.json({ message: "Mise à jour non faite" });
      console.error("Erreur lors de la mise à jour :", error);
    });
};
