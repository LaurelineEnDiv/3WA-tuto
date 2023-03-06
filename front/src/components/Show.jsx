import axios from "axios";
import YoutubePlayer from './YoutubePlayer.jsx'
import {useParams} from "react-router-dom";
import {BASE_URL, BASE_IMG} from '../tools/constante.js';
import {Fragment, useState, useEffect} from "react";

const Show = () => {
    const [show, setShow] = useState(null)
    const {id} = useParams()
    
    
    useEffect(() => {
        axios.post(`${BASE_URL}/show`,{id})
        .then(res => setShow(res.data))
        .catch(err => console.log(err))
    },[id])
    
    return (
        <Fragment>
        {!show && (<p>loading</p>) }
        <div className="container container-center">
            {show && 
                <div>
                    <p>{show.sqlShow[0].title}</p>
                    <p>{show.sqlShow[0].name}</p>
                    {show.sqlShow[0].url_video && <YoutubePlayer url_video={show.sqlShow[0].url_video}/>}
                    <p className="show-description">{show.sqlShow[0].content}</p>
                    {show.sqlPictures.map((e,i) =>{
                    
                        return(
                            <img key={i} src={`${BASE_IMG}/${e.url_pictures}`} />
                        )
                    })}
                </div>
            }
        </div>    
        </Fragment>
    )
}

export default Show
