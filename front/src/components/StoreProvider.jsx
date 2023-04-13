import React from "react"
import { reducer } from "../tools/reducer.js"
import { initialState, StoreContext } from "../tools/context.js"

const StoreProvider = ({ children }) => {
    const [state, dispatch] = React.useReducer(reducer, initialState);

    return (
        <StoreContext.Provider value={[state, dispatch]}>
            {children}
        </StoreContext.Provider>
    )
}

export default StoreProvider


//crée un contexte de stockage (store) pour les composants enfants
//utilise le hook useReducer pour initialiser un état et un dispatcher en utilisant un reducer
//crée un StoreContext avec l'état et le dispatcher en tant que valeur 
//Cela permet aux composants enfants d'accéder à l'état global de l'application
//et de modifier cet état en envoyant des actions au dispatcher.
