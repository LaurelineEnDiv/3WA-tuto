import formidable from 'formidable';
import fs from 'fs';
import path from 'path';
import {asyncQuery} from "../config/database.js"

const allowedExtensions = ['jpeg', 'jpg', 'png', 'gif'];
const imageDirectory = 'public/img';
const MAX_FIELD_SIZE = 20 * 1024 * 1024;

const form = formidable({
  multiples: false,
  keepExtensions: true,
  encoding: 'utf-8',
  maxFieldsSize: MAX_FIELD_SIZE,
});


const checkAcceptedExtensions = (file) => {
    const type = file.mimetype.split('/').pop();  
    //divise la chaîne de caractères file.mimetype en un tableau de sous-chaînes en utilisant le séparateur '/'.
    //La méthode .pop() est ensuite utilisée pour extraire le dernier élément du tableau, qui représente le type de fichier (extension).
    //Par exemple, si file.mimetype est 'image/jpeg', type sera égal à 'jpeg' après l'exécution de cette ligne.
    return allowedExtensions.includes(type);
};

//Mise en place d'une fonction asynchrone

const uploadFile = async (req, res) => {

    form.parse(req, async (err, fields, files) => {
        
        //form.parse prend en entrée la requête HTTP (req) et appelle une fonction de rappel (callback) en fournissant des erreurs éventuelles (err), 
        //les champs sous forme de objet (fields) et les fichiers téléchargés (files) extraits de la requête HTTP.
        if (err) {
            if (err.code === 'LIMIT_FIELD_SIZE') {
                return res.status(400).json({ error: `Le fichier dépasse la taille maximum autorisée de ${MAX_FIELD_SIZE / 1024 / 1024} Mo.` });
            }
            return res.status(500).json({ error: 'Le fichier ne peut pas être traité.' });
        }
        
        const file = files.files;
        if (!file || file.size === 0) {
            return res.status(400).json({ error: 'Aucun fichier n\'a été téléchargé.' });
        }

        if (!checkAcceptedExtensions(file)) {
            return res.status(400).json({ error: 'Type de fichier non valide.' });
        }
    
        const newFilename = `${file.newFilename}`;
        const newPath = path.join(imageDirectory, newFilename);

        if (!fs.existsSync(imageDirectory)) {
            return res.status(500).json({ error: `Le dossier ${imageDirectory} n'existe pas.` });
        }
        
        // const {username} = fields
        
        try {
            await fs.promises.copyFile(file.filepath, newPath);
            const sql = "INSERT INTO pictures (show_id, url, pro) VALUES (?,?,0)"
            const params = [1, newFilename]
            await asyncQuery(sql,params)
            return res.json({ success: true });
        } catch (e) {
            return res.status(500).json({ error: 'Le fichier ne peut pas être enregistré.' });
        }
    });
};

export default uploadFile;
