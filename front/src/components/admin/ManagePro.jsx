import axios from "axios"
import { BASE_URL } from '../../tools/constante.js'
import { useState, useEffect, Fragment } from "react"

const ManagePro = () => {
    const initialState = {
        diff_pdf: '',
        ft_pdf: '',
    }

    const [showsList, setShowsList] = useState([])
    const [pdfList, setPdfList] = useState([])
    const [showData, setShowData] = useState(initialState)
    const [diffPdf, setDiffPdf] = useState(null)
    const [ftPdf, setFtPdf] = useState(null)
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (showsList.length === 0) {
            axios.get(`${BASE_URL}/manageshows`)
                .then(res => setShowsList(res.data.result))
                .catch(err => console.log(err))
        }
    }, [showsList])
    
    useEffect(() => {
        if (pdfList.length === 0) {
            axios.get(`${BASE_URL}/listpro`)
                .then(res => setPdfList(res.data.result))
                .catch(err => console.log(err))
        }
    }, [pdfList])
    
    const deletePdfDiff = (id) => {
        console.log('id:', id); 
        axios.post(`${BASE_URL}/deleteDiffPdf`, { id })
            .then(res => {
                // Mettre à jour la liste des pdf en excluant le pdf supprimé
                setPdfList(pdfList.filter(pdf => pdf.id !== id))
            })
            .catch(err => console.log(err))
    }
    
    const deletePdfFt = (id) => {
        console.log('id:', id); 
        axios.post(`${BASE_URL}/deleteFTPdf`, { id })
            .then(res => {
                // Mettre à jour la liste des pdf en excluant le pdf supprimé
                setPdfList(pdfList.filter(pdf => pdf.id !== id))
            })
            .catch(err => console.log(err))
    }
    

    ///////ADD PDF////////

    const diffSubmit = (e, id) => {
        e.preventDefault()
        setIsLoading(true); // Activation de l'indicateur de chargement
        const dataFile = new FormData();
        const files = [...e.target.diff_pdf.files];

        // ajouter tous les fichiers à FormData
        for (let i = 0; i < files.length; i++) {
            dataFile.append('files', files[i], files[i].name)
        }

        dataFile.append('show_id', id)

        axios.post(`${BASE_URL}/adddiff`, dataFile)
            .then((res) => {
                setIsLoading(false); // Désactivation de l'indicateur de chargement
                alert("PDF ajouté avec succès")
                setDiffPdf(res.data.files)
                setShowData(initialState)
            })
            .catch((err) => {
                // Erreur lors du téléchargement
                setIsLoading(false); // Désactivation de l'indicateur de chargement
                console.log(err)
            })

    }
    
    const ftSubmit = (e, id) => {
        e.preventDefault()
        setIsLoading(true);
        const dataFile = new FormData();
        const files = [...e.target.ft_pdf.files];

        // ajouter tous les fichiers à FormData
        for (let i = 0; i < files.length; i++) {
            dataFile.append('files', files[i], files[i].name)
        }

        dataFile.append('ft_show_id', id)

        axios.post(`${BASE_URL}/addft`, dataFile)
            .then((res) => {
                setIsLoading(false);
                alert("PDF ajouté avec succès")
                setFtPdf(res.data.files)
                setShowData(initialState)
            })
            .catch((err) => {
                setIsLoading(false);
                console.log(err)
            })

    }

    return (
        <div className=" container admin-margin-top">
            <h2>Liste des pdf</h2>
            <ul>
                  {pdfList.map((pdf, i) => {
                    return (
                      <Fragment key={i}>
                        <h3 className="title-yellow">{pdf.title}</h3>
                                {pdf.diff_pdf && (
                                <p> Dossier de diff actuel : {pdf.diff_pdf}
                                <button className="delete" onClick={() => deletePdfDiff(pdf.id)}>X</button>
                                </p>
                                )}
                                {pdf.ft_pdf && (
                                <p> Fiche technique actuelle : {pdf.ft_pdf}
                                <button className="delete" onClick={() => deletePdfFt(pdf.id)}>X</button>
                                </p>
                                )}
                       
                    </Fragment>
                    )
                  })}
            </ul>
                
                <h2>Ajouter des pdf</h2>
                <ul>
                  {showsList.map((show, i) => {
                    const showHasDiffPdf = !pdfList.some(pdf => pdf.show_id === show.id && pdf.diff_pdf);
                    const showHasFtPdf = !pdfList.some(pdf => pdf.show_id === show.id && pdf.ft_pdf);
                    
                    return (
                      <Fragment key={i}>
                        <h3 className="title-yellow">{show.title}</h3>
                        
                        {isLoading && <div>En cours de chargement...</div>}
                        {showHasDiffPdf && (
                        <Fragment>
                            <form onSubmit={(e) => diffSubmit(e, show.id)} encType="multipart/form-data">
                                <div>
                                <label>Dossier de diffusion</label>
                                <input type='file' name='diff_pdf' multiple />
                                <input className="button" type='submit' value='Ajouter'/>
                                </div>
                            </form>
                        </Fragment>
                        )}
                         
                        {showHasFtPdf && (
                        <Fragment>
                            <form onSubmit={(e) => ftSubmit(e, show.id)} encType="multipart/form-data">
                                <div>
                                <label>Fiche technique</label>
                                <input type='file' name='ft_pdf' multiple />
                                <input className="button" type='submit' value='Ajouter'/>
                                </div>
                            </form>
                        </Fragment>
                        )}
                        
                    </Fragment>
                    )
                  })}
                </ul>
        </div>

    )
}

export default ManagePro