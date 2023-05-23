import { useParams } from "react-router-dom"
import axios from "axios"
import { BASE_URL, BASE_IMG } from "../../tools/constante.js"
import { useState, useEffect, Fragment } from "react"
import { NavLink } from 'react-router-dom'

const EditText = () => {
    const { id } = useParams()
    const initialState = {
        titre: '',
        text1: '',
        text2: '',
    }
    const [text, setText] = useState(initialState)

    useEffect(() => {
        axios.post(`${BASE_URL}/getTextById`, { id })
            .then(res => setText(res.data.result[0]))
            .catch(err => console.log(err))
    }, [id])

    const handleChange = (e) => {
        const { name, value } = e.target
        setText({ ...text, [name]: value })
    }

    const submit = (e) => {
        e.preventDefault()
        axios.post(`${BASE_URL}/editTextById`, text)
            .then(res => alert("modification effectuée"))
            .catch((err) => console.log(err))
    }

    return (
        <div className=" container admin-margin-top">
        <Fragment>
            <h2>Modifier le texte</h2>
                <form onSubmit={submit}>
                    <label>Titre</label>
                    <input type='text' name='titre' onChange={handleChange} value={text.titre} />
                    <div>
                        <label>Texte</label>
                        <textarea type='text' name='text1' onChange={handleChange} value={text.text1} />
                    </div>
                    
                        <input className="button" type='submit' value='Valider les modifications' />
                </form>
        </Fragment>
        </div>
    )
}

export default EditText
