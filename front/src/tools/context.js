import React from "react"
const StoreContext = React.createContext([]);

const initialState = {
    count : 0,
    data : [],
    user:{
        isAdmin : false,
        isLogged: false
    }
}

export {StoreContext, initialState}