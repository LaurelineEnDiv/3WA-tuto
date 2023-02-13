import axios from "axios";
import YoutubePlayer from './YoutubePlayer.jsx'
import {useParams} from "react-router-dom";
import {BASE_URL} from '../tools/constante.js';
import {useState, useEffect} from "react";

const Show = () => {
    const [show, setShow] = useState([])
    const {id} = useParams()
    
    
    useEffect(() => {
        axios.post(`${BASE_URL}/show`,{id})
        .then(res => {
        setShow(res.data.result)
        })
    .catch(err => console.log(err))
    },[id])
    
    
    return (
        <div>
            {show.map((data, i) => {
                return(
                    <div key={i}>
                        <p>{data.title}</p>
                        <p>{data.name}</p>
                        {data.url_video && <YoutubePlayer url_video={data.url_video}/>}
                        <p>{data.content}</p>
                    </div>
                )
            })}
        </div>    
    )
}

export default Show
