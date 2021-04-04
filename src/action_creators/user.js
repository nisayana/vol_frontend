import Store from '../store';

export const setUser = (userInfo) => Store.dispatch({type: "SET_USER", payload: userInfo});