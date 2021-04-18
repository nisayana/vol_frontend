import Store from '../store';

export const setOrgs = (organizations) => Store.dispatch({type: "SET_ORGS", payload: organizations});
// export const filterOrgs = (term) => Store.dispatch({type: "FILTER_ORGS", payload: term})
export const addOrg = (organizations) => Store.dispatch({type: "ADD_ORG", payload: organizations});
