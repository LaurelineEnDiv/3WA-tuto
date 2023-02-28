import axios from "axios"
import {BASE_URL, BASE_IMG} from '../tools/constante.js'
import {useState, useEffect, Fragment} from "react"

const ManagePro = () => {
    const initialState = {
        pdf:'',
    }
    
    const [showsList, setShowsList] = useState([])
    const [showData, setShowData] = useState(initialState)
    const [pdf, setPdf] = useState(null) 
    
    
    console.log({showsList, showData, pdf})
    
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
        
        
        console.log(files)

        
        // ajouter tous les fichiers à FormData
        for (let i = 0; i < files.length; i++) {
            dataFile.append('files', files[i], files[i].name)
        }
        
        
        dataFile.append('show_id', id)

        
        axios.post(`${BASE_URL}/addpdf`, dataFile)
        .then((res)=> {
            console.log(res)
            setPdf(res.data.files)
            setShowData(initialState)
        })
        .catch((err) => {
            console.log(err)
        })
       
    }
    
    return(
        <div>
            <h1>Gestion de l'epace pro</h1>
                <ul>
                  {showsList.map((show, i) => {
                    return (
                      <Fragment key={i}>
                          <li>{show.title}</li>
                          <Fragment>
                                <form onSubmit={(e) => submit(e, show.id)} encType="multipart/form-data">
                                    <div>
                                        <label>Ajouter des documents (.pdf)</label>
                                        <input type='file' name='pdf' multiple />
                                    </div>
                                    <div>
                                    <input type='submit' value='Valider'/>
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