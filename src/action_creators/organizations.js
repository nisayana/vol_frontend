import Store from '../store';

export const setOrgs = (organizations) => Store.dispatch({type: "SET_ORGS", payload: organizations});
