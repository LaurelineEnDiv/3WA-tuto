const reducer = (state, action) =>{
    switch(action.type){
        case 'INCREMENTER':
            return {
                ...state,
                count:state.count + 1,
            }

        default:
            return state;
    }
}

export {reducer}