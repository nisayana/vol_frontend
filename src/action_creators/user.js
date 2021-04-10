import store from '../store';
import Store from '../store';

export const setUser = (userInfo) => Store.dispatch({type: "SET_USER", payload: userInfo});
export const setLead = (leadInfo) => Store.dispatch({type: "SET_LEAD", payload: leadInfo});
export const addList = (myList) => Store.dispatch({type: "ADD_LIST", payload: myList});

