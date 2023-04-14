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


//contexte de stockage pour les composants enfants pour accéder à l'état global
//de l'application et modifier cet état en envoyant des actions au dispatcher.
//utilise le hook useReducer pour initialiser un état et un dispatcher en utilisant un reducer
//crée un StoreContext avec l'état et le dispatcher en tant que valeur 


