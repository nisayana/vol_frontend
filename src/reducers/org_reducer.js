const initialStateOfOrgReducer = {
    organizations: []
}

const orgReducer = (state = initialStateOfOrgReducer, action) => {
    switch(action.type){
        case "SET_ORGS":
            return {
                ...state,
                organizations: action.payload
            }
        case "ADD_ORG":
            return {
                ...state,
                organizations: action.payload
            }
        default: 
            return state
    }
}

export default orgReducer;