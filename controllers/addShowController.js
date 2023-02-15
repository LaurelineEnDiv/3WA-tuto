import formidable from 'formidable';
import fs from 'fs';
import path from 'path';
import {asyncQuery} from "../config/database.js";

const allowedExtensions = ['jpeg', 'jpg', 'png', 'gif'];
const imageDirectory = 'public/img';
const MAX_FIELD_SIZE = 20 * 1024 * 1024;

const form = formidable({
  multiples: true,
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

export default (req, res, next) => {
    form.parse(req, async (err, fields, files) => {
      
      console.log({fields, files})
        //form.parse prend en entrée la requête HTTP (req) et appelle une fonction de rappel (callback) en fournissant des erreurs éventuelles (err), 
        //les champs sous forme de objet (fields) et les fichiers téléchargés (files) extraits de la requête HTTP.
        if (err) {
            if (err.code === 'LIMIT_FIELD_SIZE') {
                return res.status(400).json({ error: `Le fichier dépasse la taille maximum autorisée de ${MAX_FIELD_SIZE / 1024 / 1024} Mo.` });
            }
            return res.status(500).json({ error: 'Le fichier ne peut pas être traité.' });
        }
        
        let images = files.files;

        // si on a pas de fichier
        if (!images || (Array.isArray(images) && images.length === 0) || (!Array.isArray(images) && images.size === 0)) {
          return res.status(400).json({ error: 'Aucun fichier n\'a été téléchargé.' });
        }
    
        const newFilenames = [];
    
        if (!Array.isArray(images)) {
          images = [images];
        }
    
        for (const image of images) {
          // si l'extention n'est pas conforme
          if (!checkAcceptedExtensions(image)) {
            return res.status(400).json({ error: 'Type de fichier non valide.' });
          }
    
          const newFilename = `${image.newFilename}`;
          const newPath = path.join(imageDirectory, newFilename);
    
          // on vérifie si le dossier existe
          if (!fs.existsSync(imageDirectory)) {
            return res.status(500).json({ error: `Le dossier ${imageDirectory} n'existe pas.` });
          }

        try {
            await fs.promises.copyFile(image.filepath, newPath);
            
            const sql = "INSERT INTO shows (title, content, year_creation, url_video, image, category_id) VALUES (?,?,?,?,?,1)"
            const {title, content, year_creation, url_video} = fields
            const paramsSql = [title, content, year_creation, url_video, newFilename]
            const result = await asyncQuery(sql,paramsSql)
            
            // console.log(result.insertId)
            
            const sqlPictures = "INSERT INTO pictures (show_id, url_pictures) VALUES (?,?)";
            const {url_pictures} = fields
            const paramsSqlPictures = [result.insertId, url_pictures];
            const resultPictures = await asyncQuery(sqlPictures, paramsSqlPictures);
            
            res.json({result, /*resultPictures*/}) 
            // return res.json({ success: true });
        } catch (e) {
            console.log(e)
            return res.status(500).json({ error: 'Le fichier ne peut pas être enregistré.' });
        }
        
        newFilenames.push(newFilename);
    }

    req.body = fields;
    req.body.files = newFilenames;
    next();
    });
};


