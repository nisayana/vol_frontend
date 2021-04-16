import React, { Component } from 'react';
import {connect, useSelector} from 'react-redux';

const Profile = (props) => {

    const {dash_list_joiners} =  useSelector(globalState => globalState.userReducer.userInfo)

    console.log(dash_list_joiners)

    // const arrOfLists = dash_list_joiners.map(opportList => {
    //     return (<li>{opportList.list.name}</li>)
    // })

    return(
        <div>
            <ul>
                <li>
                    {/* {arrOfLists} */}
                    <h1>PROFILE</h1>
                </li>
            </ul>
        </div>
    )
}

export default Profile;