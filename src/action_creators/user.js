import Store from '../store';

export const setUserInfo = (userInfo) => Store.dispatch({type: "SET_USER_INFO", payload: userInfo});
export const setOrgInfo = (orgInfo) => Store.dispatch({type: "SET_ORG_INFO", payload: orgInfo});
export const addList = (userLists) => Store.dispatch({type: "ADD_LIST", payload: userLists});

export const saveErrorToState = (orgInfo) => Store.dispatch({type: "SAVE_ERROR", payload: orgInfo})