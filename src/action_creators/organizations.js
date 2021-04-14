import Store from '../store';

export const setOrgs = (organizations) => Store.dispatch({type: "SET_ORGS", payload: organizations});
export const sortOrgs = (term) => Store.dispatch({type: "SORT_ORGS", payload: term})