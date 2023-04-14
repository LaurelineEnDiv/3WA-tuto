import { Fragment } from 'react'

const YoutubePlayer = ({ url_video }) => {
    let str = url_video
    str.replace("watch?v=", "embed/")
    
    return (
        <Fragment>
        <div className="video-container full-width">
            {url_video && <iframe 
                width="560" 
                height="315"
                src={str} 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
            </iframe>
            }
        </div>
        </Fragment>
    )
}

export default YoutubePlayer