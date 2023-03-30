import axios from "axios"
import {BASE_URL} from '../../tools/constante.js'
import {useState, useEffect, Fragment} from "react"

const ManagePro = () => {
    const initialState = {
        pdf:'',
    }
    
    const [showsList, setShowsList] = useState([])
    const [showData, setShowData] = useState(initialState)
    const [pdf, setPdf] = useState(null) 
    
    useEffect(() => {
        if(showsList.length === 0){
            axios.get(`${BASE_URL}/manageshows`)
                .then(res => setShowsList(res.data.result))
                .catch(err => console.log(err))
        }
    },[showsList])


///////ADD PDF////////
    
    const submit = (e, id) => {
        e.preventDefault()
        const dataFile = new FormData();
        const files = [...e.target.pdf.files];
        
        // ajouter tous les fichiers à FormData
        for (let i = 0; i < files.length; i++) {
            dataFile.append('files', files[i], files[i].name)
        }
        
        dataFile.append('show_id', id)

        axios.post(`${BASE_URL}/addpdf`, dataFile)
        .then((res)=> {
            alert("PDF ajouté avec succès")
            setPdf(res.data.files) 
            setShowData(initialState)
        })
        .catch((err) => {
            console.log(err)
        })
       
    }
    
    return(
        <div className=" container admin-margin-top">
            <h2>Ajouter un dossier de présentation</h2>
                <ul>
                  {showsList.map((show, i) => {
                    return (
                      <Fragment key={i}>
                          <h3>{show.title}</h3>
                          <Fragment>
                                <form onSubmit={(e) => submit(e, show.id)} encType="multipart/form-data">
                                    <div>
                                        <input type='file' name='pdf' multiple />
                                    </div>
                                    <div>
                                    <input className="button-white" type='submit' value='Ajouter'/>
                                    </div>
                                </form>
                            </Fragment>
                         
                      </Fragment>
                    )
                  })}
                </ul>
        </div>
    
    )
}

export default ManagePro