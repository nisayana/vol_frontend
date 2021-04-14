const initialStateOfUser = {
    userInfo: {},
    // email: "",
    token: "",
    error: "",
    orgInfo: {},
    userLists: []
}

const userReducer = (state=initialStateOfUser, action) => {
    // debugger
    switch(action.type) {
        case "SET_USER_INFO":
            return {
                ...state,
                // id: action.payload.user.id,
                userInfo: action.payload.user,
                // email: action.payload.user.email,
                token: action.payload.token
            }
        case "SET_ORG_INFO":
            console.log(action.payload)
            return {
                    ...state,
                    orgInfo: action.payload.user,
                    token: action.payload.token
                }
        case "ADD_LIST":
            return {
                ...state,
                userLists: action.payload
            }

        case "SAVE_ERROR": 
            return {
                ...state,
                error: action.payload
            }
        default: 
        return state
    }
}

export default userReducer;