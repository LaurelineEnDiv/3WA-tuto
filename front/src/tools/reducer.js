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