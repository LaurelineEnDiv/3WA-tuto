import { useContext, useEffect } from "react"
import { StoreContext } from "../../tools/context.js"
import axios from "axios"

const Logout = () => {

    const [state, dispatch] = useContext(StoreContext)

    useEffect(() => {
        localStorage.removeItem('jwtToken')
        delete axios.defaults.headers.common['Authorization']
        dispatch({ type: "LOGOUT" })

    }, [])

    return (
        <div className=" container admin-margin-top">
        Vous êtes déconnecté
        </div>
    )
}

export default Logout