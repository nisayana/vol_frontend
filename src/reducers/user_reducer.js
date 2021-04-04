let initialStateOfUser = {
    username: "",
    token: "",
    error: ""
}

let userReducer = (state=initialStateOfUser, action) => {
    // debugger
    switch(action.type) {
        case "SET_USER":
            return {
                ...state,
                username: action.payload.user.username,
                token: action.payload.token
            }
        default: 
        return state
    }
}

export default userReducer;