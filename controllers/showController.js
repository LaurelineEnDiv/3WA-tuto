import {asyncQuery} from "../config/database.js"
export default async (req, res) => {
    const {id} = req.body
    const sqlShow = `
    SELECT shows.title, shows.content, shows.url_video, shows_categories.name
    FROM shows 
    JOIN shows_categories 
    ON shows_categories.id = shows.category_id 
    WHERE shows.id = ?
    `
    const paramsSQLShow = [id]
    
    try{
        const showList = await asyncQuery(sqlShow,paramsSQLShow)
        res.json({result:showList})
    } catch(err) {
        console.log(err)
        res.sendStatus(500)
    }
    
    // pool.query(sql,paramsSQL,(err, result) =>{
    //     if(err) throw err
    //     res.json({result})
    // })
}

