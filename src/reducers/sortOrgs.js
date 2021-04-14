const initialState = {
    term: ""
}

const sortOrgs = (state=initialState, action) => {
    switch(action.type) {
        case "SORT_ORGS":
            return {
                ...state,
                term: action.payload
            }
        default:
            return state
    }
}

export default sortOrgs;