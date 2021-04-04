let initialStateOfOrgReducer = {
    organizations: []
}

let orgReducer = (state = initialStateOfOrgReducer, action) => {
    switch(action.type){
        case "SET_ORGS":
            return {
                ...state,
                organizations: action.payload
            }
        default: 
            return state
    }
}

export default orgReducer;