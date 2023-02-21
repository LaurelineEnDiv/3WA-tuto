import React from "react"
const StoreContext = React.createContext([]);

const initialState = {
    user:{
        isAdmin : false,
        isLogged: false,
        id:null
    }
}

export {StoreContext, initialState}