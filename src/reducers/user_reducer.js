let initialStateOfUser = {
    userInfo: "",
    token: "",
    error: "",
    leadInfo: "",
    myList: []
}

let userReducer = (state=initialStateOfUser, action) => {
    // debugger
    switch(action.type) {
        case "SET_USER":
            return {
                ...state,
                userInfo: action.payload.userInfo,
                token: action.payload.token
            }
        case "SET_LEAD":
            return {
                    ...state,
                    leadInfo: action.payload.leadInfo,
                    token: action.payload.token
                }
        case "ADD_LIST":
            return {
                ...state,
                myList: action.payload
            }
        default: 
        return state
    }
}

export default userReducer;