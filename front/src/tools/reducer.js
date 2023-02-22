// Le reducer est utilisé pour gérer l'état de l'application en fonction de l'action spécifiée. 
// Dans ce cas, il est utilisé pour gérer l'authentification de l'utilisateur et le rôle de l'administrateur.

const reducer = (state, action) =>{
    switch(action.type){
        case 'LOGIN':
            return {
                ...state,
                user:{
                    isLogged:true,
                    isAdmin:action.payload.admin,
                    ...action.payload
                }
            }

        default:
            return state;
    }
}

export {reducer}

// Deux arguments: l'état actuel de l'application et une action à effectuer. 
// Renvoie un nouvel état qui est une copie de l'état actuel avec des modifications selon l'action effectuée.

//  - Si l'action est "LOGIN", la fonction switch() retourne un nouvel objet qui contient les propriétés de l'état actuel, 
// en étendant l'objet user avec les propriétés spécifiées dans la propriété "payload" de l'objet action. 
// La propriété "isLogged" est définie comme true, tandis que la propriété "isAdmin" est définie comme la valeur 
// de la propriété "admin" dans l'objet "payload". 
// Cela signifie que si l'utilisateur est connecté et qu'il est un administrateur, la propriété "isAdmin" sera true.

// - Si l'action n'est pas "LOGIN", la fonction retourne simplement l'état actuel sans modification.

