import Store from '../store';

export const setUserInfo = (userInfo) => Store.dispatch({type: "SET_USER_INFO", payload: userInfo});
export const setOrgInfo = (orgInfo) => Store.dispatch({type: "SET_ORG_INFO", payload: orgInfo});
export const addList = (userList) => Store.dispatch({type: "ADD_LIST", payload: userList});

// export const saveErrorToState = (orgInfo) => Store.dispatch({type: "SAVE_ERROR", payload: orgInfo})